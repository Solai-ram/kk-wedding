import re

with open('src/config/wedding.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add milestone-childhood at the beginning of storyMilestones
old_milestone_start = "storyMilestones: ["
new_milestone_start = """storyMilestones: [
    {
      id: 'milestone-childhood',
      year: 'Childhood Roots',
      title: 'Our Memory — Where Destiny Began',
      subtitle: 'From Innocent Cousins to Soulmates for Life',
      description: 'Long before 2019, before best friendship, and before wedding vows — two innocent young cousins sharing a warm, pure hug. Completely unaware that destiny was already weaving a love story written in the stars.',
      image: '/images/couple/special-childhood-memory.jpg',
      tag: 'Special Memory ❤️',
    },"""

if 'milestone-childhood' not in content:
    content = content.replace(old_milestone_start, new_milestone_start, 1)

# 2. Add special memory to gallery as item #1
old_gallery_start = "gallery: ["
new_gallery_start = """gallery: [
    {
      id: 'gal-special-memory',
      src: '/images/couple/special-childhood-memory.jpg',
      alt: 'Kavya and Krishna Our Memory — Childhood Cousins to Husband and Wife',
      caption: 'Our Memory — From Innocent Cousins to Soulmates for Life ❤️',
      aspect: 'portrait',
    },"""

if 'gal-special-memory' not in content:
    content = content.replace(old_gallery_start, new_gallery_start, 1)

with open('src/config/wedding.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated config with special childhood memory photo!")

