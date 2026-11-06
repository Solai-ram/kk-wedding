import os
import math
import subprocess
import numpy as np
from PIL import Image, ImageEnhance, ImageFilter
import imageio_ffmpeg

ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
print(f"Using ffmpeg at: {ffmpeg_exe}")

os.makedirs('public/videos', exist_ok=True)
os.makedirs('public/images/generated', exist_ok=True)

# Load base hero architectural palace image
source_path = 'public/images/generated/palace-archway.jpg'
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
p_speed = np.random.rand(NUM_PARTICLES) * 0.4 + 0.6
p_radius = np.random.rand(NUM_PARTICLES) * 2.2 + 0.8
p_drift_freq = np.random.rand(NUM_PARTICLES) * 3 + 1
p_alpha_phase = np.random.rand(NUM_PARTICLES) * math.pi * 2

def generate_video(target_w, target_h, out_filename, is_mobile=False):
    print(f"\n--- Generating {out_filename} ({target_w}x{target_h}) ---")
    
    target_aspect = target_w / target_h
    src_aspect = src_w / src_h

    if target_aspect > src_aspect:
        new_w = src_w
        new_h = int(src_w / target_aspect)
        top = (src_h - new_h) // 2
        cropped = base_img.crop((0, top, src_w, top + new_h))
    else:
        new_h = src_h
        new_w = int(src_h * target_aspect)
        left = int(src_w * 0.50 - new_w * 0.50)
        left = max(0, min(src_w - new_w, left))
        cropped = base_img.crop((left, 0, left + new_w, src_h))

    zoom_margin = 0.06
    render_w = int(target_w * (1.0 + zoom_margin))
    render_h = int(target_h * (1.0 + zoom_margin))
    full_frame = cropped.resize((render_w, render_h), Image.Resampling.LANCZOS)
    
    # Save first frame as poster image for desktop
    if not is_mobile:
        poster_path = 'public/images/generated/hero-palace-poster.jpg'
        full_frame.resize((target_w, target_h), Image.Resampling.LANCZOS).save(poster_path, quality=92)
        print(f"Saved poster image: {poster_path}")

    base_frame_data = np.array(full_frame, dtype=np.float32)

    ffmpeg_cmd = [
        ffmpeg_exe,
        '-y',
        '-f', 'rawvideo',
        '-vcodec', 'rawvideo',
        '-s', f"{target_w}x{target_h}",
        '-pix_fmt', 'rgb24',
        '-r', str(FPS),
        '-i', '-',
        '-c:v', 'libx264',
        '-pix_fmt', 'yuv420p',
        '-preset', 'fast',
        '-crf', '22',
        '-movflags', '+faststart',
        out_filename
    ]

    proc = subprocess.Popen(ffmpeg_cmd, stdin=subprocess.PIPE)

    for frame_idx in range(TOTAL_FRAMES):
        t = frame_idx / TOTAL_FRAMES
        cycle_angle = t * math.pi * 2.0

        # Subtle zoom breathing
        zoom = 1.0 + 0.04 * (0.5 - 0.5 * math.cos(cycle_angle))
        cur_w = int(target_w * zoom)
        cur_h = int(target_h * zoom)

        start_x = max(0, (render_w - cur_w) // 2)
        start_y = max(0, (render_h - cur_h) // 2)

        frame_data = base_frame_data.copy()

        # Ambient gentle brightness oscillation
        brightness = 1.0 + 0.03 * math.sin(cycle_angle)
        frame_data *= brightness

        frame_cropped = frame_data[start_y:start_y + target_h, start_x:start_x + target_w].copy()

        # Add drifting golden stardust particles
        for p in range(NUM_PARTICLES):
            py_norm = (p_y_base[p] - p_speed[p] * t) % 1.0
            px_norm = (p_x_base[p] + 0.03 * math.sin(cycle_angle * p_drift_freq[p] + p)) % 1.0
            
            px = int(px_norm * (target_w - 1))
            py = int(py_norm * (target_h - 1))
            
            p_alpha = 0.4 + 0.5 * math.sin(cycle_angle * 3.0 + p_alpha_phase[p])
            rad = int(p_radius[p])
            
            y_min = max(0, py - rad)
            y_max = min(target_h, py + rad + 1)
            x_min = max(0, px - rad)
            x_max = min(target_w, px + rad + 1)
            
            frame_cropped[y_min:y_max, x_min:x_max, 0] = np.clip(frame_cropped[y_min:y_max, x_min:x_max, 0] + 195 * p_alpha, 0, 255)
            frame_cropped[y_min:y_max, x_min:x_max, 1] = np.clip(frame_cropped[y_min:y_max, x_min:x_max, 1] + 165 * p_alpha, 0, 255)
            frame_cropped[y_min:y_max, x_min:x_max, 2] = np.clip(frame_cropped[y_min:y_max, x_min:x_max, 2] + 90 * p_alpha, 0, 255)

        frame_uint8 = np.clip(frame_cropped, 0, 255).astype(np.uint8)
        proc.stdin.write(frame_uint8.tobytes())

    proc.stdin.close()
    proc.wait()
    print(f"Finished {out_filename} successfully!")

# 1. Desktop video (16:9, 1376x768)
generate_video(1376, 768, 'public/videos/hero-bg-desktop.mp4', is_mobile=False)

# 2. Mobile video (9:16, 720x1280)
generate_video(720, 1280, 'public/videos/hero-bg-mobile.mp4', is_mobile=True)

print("\nAll responsive videos successfully created in public/videos/!")
