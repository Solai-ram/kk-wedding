import os
import re

pattern = re.compile(r"['\"](/images/[^'\"\s>]+)['\"]")

found = {}
for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith(('.tsx', '.ts')):
            p = os.path.join(root, f)
            with open(p, 'r', encoding='utf-8') as fp:
                for line_no, line in enumerate(fp, 1):
                    for m in pattern.findall(line):
                        found.setdefault(m, []).append((p, line_no))

print('=== ALL IMAGE USAGES IN SRC ===')
for img, occurrences in sorted(found.items()):
    status = "DUPLICATE!" if len(occurrences) > 1 else "OK (Unique)"
    print(f"{status:15} | {img:45} | Count: {len(occurrences)}")
    for p, l in occurrences:
        print(f"      -> {p}:{l}")

