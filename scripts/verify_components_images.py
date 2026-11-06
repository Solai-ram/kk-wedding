import os, re, glob

print("Scanning all TSX components for image references...")
all_images = []
for tsx in glob.glob("src/**/*.tsx", recursive=True):
    with open(tsx, "r", encoding="utf-8") as f:
        txt = f.read()
    found = re.findall(r"['\"](/images/[^'\"]+)['\"]", txt)
    for p in found:
        all_images.append((p, tsx))

missing = []
for p, tsx in all_images:
    local_p = os.path.normpath("public" + p)
    if not os.path.exists(local_p):
        missing.append((p, tsx))

if missing:
    print("MISSING COMPONENT IMAGES:")
    for p, tsx in missing:
        print(f"  {p} in {tsx}")
else:
    print(f"SUCCESS - All {len(all_images)} component image paths verified and exist on disk!")

