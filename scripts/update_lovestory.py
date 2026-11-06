path = 'src/components/sections/LoveStoryTimeline.tsx'
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
skip_gradient = False

for i, line in enumerate(lines):
    if '{/* Gradient Overlays */}' in line:
        new_lines.append("                          {/* Gradient Overlays (preserves clean white polaroid) */}\n")
        new_lines.append("                          {milestone.id !== 'milestone-childhood' && (\n")
        new_lines.append("                            <div className=\"absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent pointer-events-none\" />\n")
        new_lines.append("                          )}\n")
        skip_gradient = True
    elif skip_gradient and 'bg-gradient-to-t' in line:
        # Already handled above
        continue
    elif 'bottom-2.5 right-2.5 px-2.5 py-0.5' in line:
        new_lines.append("                          <div className={`absolute ${milestone.id === 'milestone-childhood' ? 'top-2.5 right-2.5' : 'bottom-2.5 right-2.5'} px-2.5 py-0.5 rounded-full bg-midnight/90 border border-gold-antique/40 backdrop-blur-md pointer-events-none flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity`}>\n")
    else:
        new_lines.append(line)

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print('Updated LoveStoryTimeline.tsx successfully!')

