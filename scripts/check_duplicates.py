import os

with open('src/config/wedding.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

in_gallery = False
gallery_srcs = []
for line in lines:
    if 'gallery: [' in line:
        in_gallery = True
    elif in_gallery and 'audio: {' in line:
        in_gallery = False
    elif in_gallery and 'src:' in line:
        src = line.split("'")[1]
        gallery_srcs.append(src)

print('Gallery items count:', len(gallery_srcs))
print('Gallery items:', gallery_srcs)

used_images = {
    'bride': 'public/images/couple/bride-kavya.jpg',
    'groom': 'public/images/couple/groom-krishna.jpg',
    'divine': 'public/images/couple/couple-divine-inspiration.jpg',
    'childhood': 'public/images/couple/special-childhood-memory.jpg',
}

timeline_dir = 'public/images/timeline'
for f in os.listdir(timeline_dir):
    if f.endswith('.jpg'):
        used_images[f] = os.path.join(timeline_dir, f)

duplicates = []
for g in gallery_srcs:
    g_path = os.path.join('public', g.lstrip('/'))
    if not os.path.exists(g_path):
        print(f'Missing gallery file: {g_path}')
        continue
    g_bytes = open(g_path, 'rb').read()
    for name, u_path in used_images.items():
        if os.path.exists(u_path):
            u_bytes = open(u_path, 'rb').read()
            if g_bytes == u_bytes:
                print(f'DUPLICATE: Gallery item {g} is identical to {name} ({u_path})!')
                duplicates.append((g, name))

print('Total duplicates found:', len(duplicates))
