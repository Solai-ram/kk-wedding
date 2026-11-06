import os
import math
import subprocess
import numpy as np
from PIL import Image, ImageEnhance, ImageFilter
import imageio_ffmpeg

ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
print(f"Using ffmpeg at: {ffmpeg_exe}")

os.makedirs('public/videos', exist_ok=True)

# Load base hero image
source_path = 'public/images/generated/hero-radha-krishna.jpg'
base_img = Image.open(source_path).convert('RGB')
src_w, src_h = base_img.size

# Video parameters
FPS = 30
DURATION_SEC = 6
TOTAL_FRAMES = FPS * DURATION_SEC

# Set up particle seeds that loop seamlessly
NUM_PARTICLES = 70
np.random.seed(42)
p_x_base = np.random.rand(NUM_PARTICLES)
p_y_base = np.random.rand(NUM_PARTICLES)
p_speed = np.random.rand(NUM_PARTICLES) * 0.4 + 0.6  # upward speed
p_radius = np.random.rand(NUM_PARTICLES) * 2.2 + 0.8
p_drift_freq = np.random.rand(NUM_PARTICLES) * 3 + 1
p_alpha_phase = np.random.rand(NUM_PARTICLES) * math.pi * 2

def generate_video(target_w, target_h, out_filename, is_mobile=False):
    print(f"\n--- Generating {out_filename} ({target_w}x{target_h}) ---")
    
    # Crop / fit base image to aspect ratio
    target_aspect = target_w / target_h
    src_aspect = src_w / src_h

    if target_aspect > src_aspect:
        # Target is wider
        new_w = src_w
        new_h = int(src_w / target_aspect)
        top = (src_h - new_h) // 2
        cropped = base_img.crop((0, top, src_w, top + new_h))
    else:
        # Target is taller (mobile 9:16)
        # Center horizontally on Radha & Krishna (around 50% width)
        new_h = src_h
        new_w = int(src_h * target_aspect)
        left = int(src_w * 0.50 - new_w * 0.50)
        left = max(0, min(src_w - new_w, left))
        cropped = base_img.crop((left, 0, left + new_w, src_h))

    # Resize cropped image to target dimensions + slight margin for zoom
    # 6% margin so we can zoom in and out smoothly
    zoom_margin = 0.06
    render_w = int(target_w * (1.0 + zoom_margin))
    render_h = int(target_h * (1.0 + zoom_margin))
    full_frame = cropped.resize((render_w, render_h), Image.Resampling.LANCZOS)
    full_arr = np.array(full_frame, dtype=np.float32)

    # Precompute moon / halo center in render coords
    # Center is approximately x=render_w*0.50, y=render_h*0.35
    halo_x = render_w * 0.50
    halo_y = render_h * 0.35
    yy, xx = np.mgrid[:render_h, :render_w]
    dist_from_halo = np.sqrt((xx - halo_x)**2 + (yy - halo_y)**2)
    max_radius = min(render_w, render_h) * 0.45
    halo_mask = np.clip(1.0 - (dist_from_halo / max_radius), 0, 1) ** 2
    # Apply warm golden tint matrix to halo
    halo_tint = np.zeros_like(full_arr)
    halo_tint[:, :, 0] = halo_mask * 38.0  # Red
    halo_tint[:, :, 1] = halo_mask * 28.0  # Green
    halo_tint[:, :, 2] = halo_mask * 8.0   # Blue

    # Water shimmer mask (lower 28% of frame)
    water_mask = np.clip((yy - render_h * 0.70) / (render_h * 0.30), 0, 1)[:, :, np.newaxis]

    # Setup ffmpeg process
    cmd = [
        ffmpeg_exe,
        '-y',
        '-f', 'rawvideo',
        '-vcodec', 'rawvideo',
        '-s', f'{target_w}x{target_h}',
        '-pix_fmt', 'rgb24',
        '-r', str(FPS),
        '-i', '-',
        '-c:v', 'libx264',
        '-pix_fmt', 'yuv420p',
        '-preset', 'slow',
        '-crf', '19',
        '-movflags', '+faststart',
        out_filename
    ]
    
    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE)

    for frame_idx in range(TOTAL_FRAMES):
        t = frame_idx / TOTAL_FRAMES  # 0.0 to 1.0 (seamless loop)
        cycle_angle = 2.0 * math.pi * t

        # Smooth breathing zoom (returns exactly to 0 at t=1.0)
        # scale smoothly between 1.0 and 1.05
        zoom_factor = 1.0 + 0.04 * (0.5 - 0.5 * math.cos(cycle_angle))
        
        # Center crop from full_arr based on current zoom
        curr_w = int(target_w * (1.0 + zoom_margin * (1.0 - (zoom_factor - 1.0) / 0.04)))
        curr_h = int(target_h * (1.0 + zoom_margin * (1.0 - (zoom_factor - 1.0) / 0.04)))
        
        start_x = (render_w - target_w) // 2
        start_y = (render_h - target_h) // 2
        
        # Halo pulse
        pulse = 0.5 + 0.5 * math.sin(cycle_angle)
        frame_data = full_arr + halo_tint * (pulse * 0.7 + 0.3)
        
        # Water subtle horizontal shimmer reflection
        wave_shift = math.sin(cycle_angle * 2.0) * 12.0
        frame_data[:, :, 0] += water_mask[:, :, 0] * (math.sin(cycle_angle + 0.5) * 8.0)
        frame_data[:, :, 1] += water_mask[:, :, 0] * (math.sin(cycle_angle) * 6.0)

        # Crop to target resolution
        frame_cropped = frame_data[start_y:start_y + target_h, start_x:start_x + target_w].copy()

        # Add drifting golden stardust particles
        for p in range(NUM_PARTICLES):
            # Particle y moves upward by (p_speed * t), wrapping cleanly from 0 to 1
            py_norm = (p_y_base[p] - p_speed[p] * t) % 1.0
            px_norm = (p_x_base[p] + 0.03 * math.sin(cycle_angle * p_drift_freq[p] + p)) % 1.0
            
            px = int(px_norm * (target_w - 1))
            py = int(py_norm * (target_h - 1))
            
            # Particle brightness oscillates cleanly
            p_alpha = 0.4 + 0.5 * math.sin(cycle_angle * 3.0 + p_alpha_phase[p])
            rad = int(p_radius[p])
            
            # Draw particle with gold/champagne color
            y_min = max(0, py - rad)
            y_max = min(target_h, py + rad + 1)
            x_min = max(0, px - rad)
            x_max = min(target_w, px + rad + 1)
            
            frame_cropped[y_min:y_max, x_min:x_max, 0] = np.clip(frame_cropped[y_min:y_max, x_min:x_max, 0] + 195 * p_alpha, 0, 255)
            frame_cropped[y_min:y_max, x_min:x_max, 1] = np.clip(frame_cropped[y_min:y_max, x_min:x_max, 1] + 165 * p_alpha, 0, 255)
            frame_cropped[y_min:y_max, x_min:x_max, 2] = np.clip(frame_cropped[y_min:y_max, x_min:x_max, 2] + 90 * p_alpha, 0, 255)

        # Write frame bytes
        frame_uint8 = np.clip(frame_cropped, 0, 255).astype(np.uint8)
        proc.stdin.write(frame_uint8.tobytes())

        if (frame_idx + 1) % 30 == 0:
            print(f"Processed frame {frame_idx + 1}/{TOTAL_FRAMES}")

    proc.stdin.close()
    proc.wait()
    print(f"Finished {out_filename} successfully!")

# 1. Desktop video (16:9, 1376x768 matching base resolution)
generate_video(1376, 768, 'public/videos/hero-bg-desktop.mp4', is_mobile=False)

# 2. Mobile video (9:16, 720x1280 crisp portrait)
generate_video(720, 1280, 'public/videos/hero-bg-mobile.mp4', is_mobile=True)

print("\nAll responsive videos successfully created in public/videos/!")
