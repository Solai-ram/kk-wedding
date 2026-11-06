with open('src/config/wedding.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update milestone 13 image from couple-divine-inspiration.jpg to couple-21.jpg
assert '/images/couple/couple-divine-inspiration.jpg' in content, "couple-divine-inspiration.jpg not found in wedding.ts"
content = content.replace("image: '/images/couple/couple-divine-inspiration.jpg',", "image: '/images/couple/couple-21.jpg',")

# 2. Replace entire gallery array with the 14 completely unique, non-repeating photos
new_gallery = """  gallery: [
    {
      id: 'gal-festive-smiles',
      src: '/images/couple/couple-26.jpg',
      alt: 'Kavya and Krishna Radiating Joy & Pure Happiness',
      caption: 'Radiating Joy & Pure Happiness Together ❤️',
      aspect: 'portrait',
    },
    {
      id: 'gal-09',
      src: '/images/couple/couple-09.jpg',
      alt: 'Kavya and Krishna Seeking Divine Blessings for Our Forever',
      caption: 'Seeking Divine Blessings for Our Forever',
      aspect: 'landscape',
    },
    {
      id: 'gal-10',
      src: '/images/couple/couple-10.jpg',
      alt: 'Kavya and Krishna Hand in Hand, Ready for Tomorrow',
      caption: 'Hand in Hand, Ready for Tomorrow',
      aspect: 'portrait',
    },
    {
      id: 'gal-12',
      src: '/images/couple/couple-12.jpg',
      alt: 'Kavya and Krishna Cherished Celebrations with Family',
      caption: 'Cherished Celebrations with Family',
      aspect: 'portrait',
    },
    {
      id: 'gal-13',
      src: '/images/couple/couple-13.jpg',
      alt: 'Kavya and Krishna A Promise Written in the Stars',
      caption: 'A Promise Written in the Stars',
      aspect: 'portrait',
    },
    {
      id: 'gal-14',
      src: '/images/couple/couple-14.jpg',
      alt: 'Kavya and Krishna The Warmth of Sacred Togetherness',
      caption: 'The Warmth of Sacred Togetherness',
      aspect: 'portrait',
    },
    {
      id: 'gal-15',
      src: '/images/couple/couple-15.jpg',
      alt: 'Kavya and Krishna Sacred Rituals & Auspicious Blessings',
      caption: 'Sacred Rituals & Auspicious Blessings',
      aspect: 'portrait',
    },
    {
      id: 'gal-16',
      src: '/images/couple/couple-16.jpg',
      alt: 'Kavya and Krishna Spontaneous Adventures & Pure Joy',
      caption: 'Spontaneous Adventures & Pure Joy',
      aspect: 'portrait',
    },
    {
      id: 'gal-18',
      src: '/images/couple/couple-18.jpg',
      alt: 'Kavya and Krishna Unconditional Love in Every Glance',
      caption: 'Unconditional Love in Every Glance',
      aspect: 'portrait',
    },
    {
      id: 'gal-20',
      src: '/images/couple/couple-20.jpg',
      alt: 'Kavya and Krishna Rainy Night Laughter and Little Joys',
      caption: 'Rainy Night Laughter and Little Joys',
      aspect: 'portrait',
    },
    {
      id: 'gal-22',
      src: '/images/couple/couple-22.jpg',
      alt: 'Kavya and Krishna Golden Horizon & Shared Dreams',
      caption: 'Golden Horizon & Shared Dreams',
      aspect: 'landscape',
    },
    {
      id: 'gal-23',
      src: '/images/couple/couple-23.jpg',
      alt: 'Kavya and Krishna A Look That Speaks a Thousand Words',
      caption: 'A Look That Speaks a Thousand Words',
      aspect: 'portrait',
    },
    {
      id: 'gal-24',
      src: '/images/couple/couple-24.jpg',
      alt: 'Kavya and Krishna Pure Devotion & Gentle Hearts',
      caption: 'Pure Devotion & Gentle Hearts',
      aspect: 'portrait',
    },
    {
      id: 'gal-25',
      src: '/images/couple/couple-25.jpg',
      alt: 'Kavya and Krishna Rooftop Smiles & Lifelong Friendship',
      caption: 'Rooftop Smiles & Lifelong Friendship',
      aspect: 'portrait',
    },
  ],"""

import re
gallery_pattern = re.compile(r'  gallery:\s*\[.*?  \],', re.DOTALL)
assert gallery_pattern.search(content), "gallery pattern not found in wedding.ts"
content = gallery_pattern.sub(new_gallery, content)

with open('src/config/wedding.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("wedding.ts updated with zero duplicate images!")

