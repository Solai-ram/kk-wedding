path = 'src/components/sections/TheCouple.tsx'
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    if '<CornerOrnament position="top-left" size={28} className="opacity-70" />' in line:
        new_lines.append('            <CornerOrnament position="top-left" size={28} className="absolute top-3 left-3 opacity-70" />\n')
    elif '<CornerOrnament position="top-right" size={28} className="opacity-70" />' in line:
        new_lines.append('            <CornerOrnament position="top-right" size={28} className="absolute top-3 right-3 opacity-70" />\n')
    elif '<CornerOrnament position="bottom-left" size={28} className="opacity-70" />' in line:
        new_lines.append('            <CornerOrnament position="bottom-left" size={28} className="absolute bottom-3 left-3 opacity-70" />\n')
    elif '<CornerOrnament position="bottom-right" size={28} className="opacity-70" />' in line:
        new_lines.append('            <CornerOrnament position="bottom-right" size={28} className="absolute bottom-3 right-3 opacity-70" />\n')
    else:
        new_lines.append(line)

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print('Updated TheCouple.tsx successfully!')

