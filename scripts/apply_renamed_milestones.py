import os
import shutil
from PIL import Image

mapping = [
    ('The Beginning as Friends.jpeg', 'the-beginning-as-friends.jpg', 'milestone-2019'),
    ('From Friends to Best Friends.jpeg', 'from-friends-to-best-friends.jpg', 'milestone-aug-2023'),
    ('The Marriage Proposal.jpeg', 'the-marriage-proposal.jpg', 'milestone-mar-08-2026'),
    ('She Said Yes!.jpeg', 'she-said-yes.jpg', 'milestone-mar-09-2026'),
    ('The Bride-Seeing Ceremony.jpeg', 'the-bride-seeing-ceremony.jpg', 'milestone-apr-05-2026'),
    ('First Outing Together.jpeg', 'first-outing-together.jpg', 'milestone-jun-28-2026'),
    ('Midnight Birthday Surprise.jpeg', 'midnight-birthday-surprise.jpg', 'milestone-jul-23-2026'),
    ('First Shopping Adventure.jpeg', 'first-shopping-adventure.jpg', 'milestone-aug-08-2026'),
    ('The Grand Engagement.jpeg', 'the-grand-engagement.jpg', 'milestone-aug-23-2026'),
    ('Kavya\'s MSc Graduation.jpeg', 'kavyas-msc-graduation.jpg', 'milestone-sep-19-2026'),
    ('First Movie Date.jpeg', 'first-movie-date.jpg', 'milestone-sep-20-2026'),
    ('The Royal Wedding Day.jpeg', 'the-royal-wedding-day.jpg', 'milestone-nov-13-2026'),
]

os.makedirs('public/images/timeline', exist_ok=True)

# 1. Copy user renamed files to public/images/timeline
for src_name, dst_name, _ in mapping:
    src_path = os.path.join('images', src_name)
    dst_path = os.path.join('public/images/timeline', dst_name)
    im = Image.open(src_path)
    # Save as high quality jpg
    im.save(dst_path, 'JPEG', quality=95)
    print(f'Copied {src_name} ({im.size}) -> {dst_path}')

# 2. Update wedding.ts storyMilestones image paths
wedding_file = 'src/config/wedding.ts'
with open(wedding_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Update each milestone image path
replacements = {
    "image: '/images/couple/couple-01.jpg',": "image: '/images/timeline/the-beginning-as-friends.jpg',",
    "image: '/images/couple/couple-02.jpg',": "image: '/images/timeline/from-friends-to-best-friends.jpg',",
    "image: '/images/couple/couple-03.jpg',": "image: '/images/timeline/the-marriage-proposal.jpg',",
    "image: '/images/couple/couple-04.jpg',": "image: '/images/timeline/she-said-yes.jpg',",
    "image: '/images/couple/couple-05.jpg',": "image: '/images/timeline/the-bride-seeing-ceremony.jpg',",
    "image: '/images/couple/couple-06.jpg',": "image: '/images/timeline/first-outing-together.jpg',",
    "image: '/images/couple/couple-07.jpg',": "image: '/images/timeline/midnight-birthday-surprise.jpg',",
    "image: '/images/couple/couple-08.jpg',": "image: '/images/timeline/first-shopping-adventure.jpg',",
    "image: '/images/couple/couple-19.jpg',": "image: '/images/timeline/the-grand-engagement.jpg',",
    "image: '/images/couple/couple-17.jpg',": "image: '/images/timeline/kavyas-msc-graduation.jpg',",
    "image: '/images/couple/couple-11.jpg',": "image: '/images/timeline/first-movie-date.jpg',",
    "image: '/images/couple/couple-21.jpg',": "image: '/images/timeline/the-royal-wedding-day.jpg',",
}

for old_str, new_str in replacements.items():
    if old_str in content:
        content = content.replace(old_str, new_str)
        print(f'Replaced {old_str} -> {new_str}')
    else:
        print(f'WARNING: {old_str} not found in wedding.ts')

with open(wedding_file, 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated wedding.ts storyMilestones successfully!')

