import os, re

with open('src/config/wedding.ts', 'r', encoding='utf-8') as f:
    code = f.read()

paths = re.findall(r"['\"](/images/[^'\"]+)['\"]", code)
print(f"Checking {len(paths)} referenced images in config...")

missing = []
for p in sorted(set(paths)):
    local_path = os.path.normpath('public' + p)
    if not os.path.exists(local_path):
        missing.append((p, local_path))
    else:
        print(f"  OK: {p}")

if missing:
    print("\nFAIL - Missing images:")
    for m in missing:
        print(f"  {m}")
else:
    print("\nSUCCESS - ALL referenced images exist on disk!")

