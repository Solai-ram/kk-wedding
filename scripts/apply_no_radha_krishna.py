import re

# 1. Update DivineInspiration.tsx
divine_path = 'src/components/sections/DivineInspiration.tsx'
with open(divine_path, 'r', encoding='utf-8') as f:
    divine = f.read()

divine = divine.replace('/images/couple/couple-divine-inspiration.jpg', '/images/couple/couple-26.jpg')
divine = divine.replace('Inspired by <span className="gold-text-gradient font-normal">Radha & Krishna</span>',
                        'Two Souls, <span className="gold-text-gradient font-normal">One Sacred Melody</span>')
divine = divine.replace('THE DIVINE INSPIRATION', 'THE SACRED CONNECTION')
divine = divine.replace('alt="Kavya and Krishna — United in eternal love inspired by Radha and Krishna"',
                        'alt="Kavya and Krishna — Two Souls, One Sacred Melody"')
divine = divine.replace('"Inspired by the eternal devotion of Radha and Krishna, our journey begins with two hearts, one sacred promise, and a lifetime of togetherness."',
                        '"Bound by mutual devotion, patience, and pure friendship, our journey begins with two hearts, one sacred promise, and a lifetime of togetherness."')
divine = divine.replace('Under the moonlit Vrindavan sky where the sacred flute fills the air with peace, love has guided',
                        'Guided by unconditional love, shared understanding, and pure devotion, destiny has united')

with open(divine_path, 'w', encoding='utf-8') as f:
    f.write(divine)
print("Updated DivineInspiration.tsx")

# 2. Update ResponsiveHeroVideo.tsx
hero_path = 'src/components/shared/ResponsiveHeroVideo.tsx'
with open(hero_path, 'r', encoding='utf-8') as f:
    hero = f.read()

hero = hero.replace('/images/generated/hero-radha-krishna.jpg', '/images/generated/hero-palace-poster.jpg')
with open(hero_path, 'w', encoding='utf-8') as f:
    f.write(hero)
print("Updated ResponsiveHeroVideo.tsx")

# 3. Update Navbar.tsx
nav_path = 'src/components/navigation/Navbar.tsx'
with open(nav_path, 'r', encoding='utf-8') as f:
    nav = f.read()

nav = nav.replace("{ label: 'Divine Story', href: '#inspiration', id: 'inspiration' }",
                  "{ label: 'Sacred Bond', href: '#inspiration', id: 'inspiration' }")
with open(nav_path, 'w', encoding='utf-8') as f:
    f.write(nav)
print("Updated Navbar.tsx")

# 4. Update FinalBlessings.tsx
blessings_path = 'src/components/sections/FinalBlessings.tsx'
with open(blessings_path, 'r', encoding='utf-8') as f:
    blessings = f.read()

blessings = blessings.replace('<span>Inspired by the Eternal Love of Radha & Krishna</span>',
                              '<span>Kavya & Krishna — A Sacred Journey of Love & Friendship</span>')
with open(blessings_path, 'w', encoding='utf-8') as f:
    f.write(blessings)
print("Updated FinalBlessings.tsx")

# 5. Update TheCouple.tsx
couple_path = 'src/components/sections/TheCouple.tsx'
with open(couple_path, 'r', encoding='utf-8') as f:
    couple = f.read()

couple = couple.replace('"May our bond mirror the divine grace of Radha & Krishna"',
                        '"Two hearts beat with one harmonious promise forever"')
with open(couple_path, 'w', encoding='utf-8') as f:
    f.write(couple)
print("Updated TheCouple.tsx")

# 6. Update wedding.ts
cfg_path = 'src/config/wedding.ts'
with open(cfg_path, 'r', encoding='utf-8') as f:
    cfg = f.read()

cfg = cfg.replace("divineInspirationHeadline: 'The Celestial Symphony of Radha & Krishna',",
                  "divineInspirationHeadline: 'A Beautiful Connection — Friendship Turned to Forever',")

# In gallery, couple-26 is now in DivineInspiration, so remove couple-26 from gallery to maintain 100% uniqueness
old_gal_item = """    {
      id: 'gal-festive-smiles',
      src: '/images/couple/couple-26.jpg',
      alt: 'Kavya and Krishna Radiating Joy & Pure Happiness',
      caption: 'Radiating Joy & Pure Happiness Together ❤️',
      aspect: 'portrait',
    },
"""
if old_gal_item in cfg:
    cfg = cfg.replace(old_gal_item, "")

with open(cfg_path, 'w', encoding='utf-8') as f:
    f.write(cfg)
print("Updated wedding.ts")

