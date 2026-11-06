import re

new_gallery_code = """  gallery: [
    {
      id: 'gal-02',
      src: '/images/couple/couple-02.jpg',
      alt: 'Kavya and Krishna Sweet Companionship and Laughter',
      caption: 'Sweet Companionship & Laughter',
      aspect: 'portrait',
    },
    {
      id: 'gal-08',
      src: '/images/couple/couple-08.jpg',
      alt: 'Kavya and Krishna Colorful Moments and Playful Smiles',
      caption: 'Colorful Moments & Playful Smiles',
      aspect: 'portrait',
    },
    {
      id: 'gal-09',
      src: '/images/couple/couple-09.jpg',
      alt: 'Kavya and Krishna In Front of Historic Pillars',
      caption: 'Historic Pillars & Shared Smiles',
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
      id: 'gal-14',
      src: '/images/couple/couple-14.jpg',
      alt: 'Kavya and Krishna The Warmth of Sacred Togetherness',
      caption: 'The Warmth of Sacred Togetherness',
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
      id: 'gal-19',
      src: '/images/couple/couple-19.jpg',
      alt: 'Kavya and Krishna Blessed With Traditional Elegance',
      caption: 'Blessed With Traditional Elegance',
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
      id: 'gal-25',
      src: '/images/couple/couple-25.jpg',
      alt: 'Kavya and Krishna Rooftop Smiles & Lifelong Friendship',
      caption: 'Rooftop Smiles & Lifelong Friendship',
      aspect: 'portrait',
    },
  ],"""

wedding_file = 'src/config/wedding.ts'
with open(wedding_file, 'r', encoding='utf-8') as f:
    text = f.read()

# Replace gallery: [ ... ],
pattern = r'  gallery: \[.*?  \],'
match = re.search(pattern, text, re.DOTALL)
if match:
    text = text[:match.start()] + new_gallery_code + text[match.end():]
    with open(wedding_file, 'w', encoding='utf-8') as f:
        f.write(text)
    print('Updated gallery in wedding.ts successfully with 100% unique images!')
else:
    print('Could not find gallery section with regex')

