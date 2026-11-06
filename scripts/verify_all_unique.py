import os
import re
from PIL import Image
import numpy as np

# Collect all image src from src/
all_srcs = set()
for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith('.tsx') or f.endswith('.ts'):
            p = os.path.join(root, f)
            with open(p, 'r', encoding='utf-8') as file:
                code = file.read()
                matches = re.findall(r"['\"](/images/[^'\"]+\.(?:jpg|jpeg|png))['\"]", code)
                for m in matches:
                    all_srcs.add(m)

print(f'Total unique image paths referenced in src: {len(all_srcs)}')
for s in sorted(list(all_srcs)):
    print(' ', s)

# Verify that all files exist on disk
missing = []
file_hashes = {}
for s in all_srcs:
    disk_path = os.path.join('public', s.lstrip('/'))
    if not os.path.exists(disk_path):
        missing.append(disk_path)
    else:
        # Check image can be opened
        try:
            im = Image.open(disk_path)
            # Compute a visual fingerprint: 16x16 thumbnail grayscale
            thumb = tuple(np.array(im.convert('L').resize((16, 16))).flatten())
            if thumb in file_hashes:
                file_hashes[thumb].append(s)
            else:
                file_hashes[thumb] = [s]
        except Exception as e:
            print(f'Error reading {disk_path}: {e}')

print('Missing files:', missing)

duplicates = [v for v in file_hashes.values() if len(v) > 1]
print(f'Visual duplicates: {len(duplicates)}')
for d in duplicates:
    print('  DUPLICATE SET:', d)

if len(missing) == 0 and len(duplicates) == 0:
    print('PERFECT: All images exist on disk and EVERY image is 100% UNIQUE!')

