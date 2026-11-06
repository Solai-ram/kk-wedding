export interface LoveStoryMilestone {
  id: string;
  year?: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  tag?: string;
}

export interface WeddingEvent {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  day: string;
  time: string;
  venueName: string;
  venueAddress: string;
  mapQuery: string;
  iconName: 'rings' | 'calendar' | 'music' | 'heart' | 'sparkles' | 'flower';
  description: string;
  dressCode?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  aspect?: 'portrait' | 'landscape' | 'square';
}

export interface WeddingConfig {
  couple: {
    groom: {
      firstName: string;
      fullName: string;
      title: string;
      qualification?: string;
      bio: string;
      image: string;
      parents: string;
    };
    bride: {
      firstName: string;
      fullName: string;
      title: string;
      qualification?: string;
      bio: string;
      image: string;
      parents: string;
    };
    monogram: string;
    tagline: string;
    heroSubtitle: string;
    evolution?: string[];
    motto?: string[];
    reflection?: string;
  };
  weddingDetails: {
    ceremonyDate: string; // ISO format for calendar
    displayDate: string;
    displayDatesRange: string;
    displayDay: string;
    muhurthamTime: string;
    venue: {
      name: string;
      hall: string;
      street: string;
      city: string;
      state: string;
      pincode: string;
      fullAddress: string;
      googleMapsUrl: string;
      embedMapUrl?: string;
    };
    reception: {
      date: string;
      displayDay: string;
      time: string;
      venue: string;
    };
  };
  narratives: {
    openingQuote: string;
    divineInspirationHeadline: string;
    divineInspirationText: string[];
    invitationGreeting: string;
    invitationBlessing: string;
    finalBlessingHeading: string;
    finalBlessingText: string;
  };
  storyMilestones: LoveStoryMilestone[];
  events: WeddingEvent[];
  gallery: GalleryItem[];
  audio: {
    enabled: boolean;
    title: string;
    artist: string;
    src: string;
  };
}

export const weddingConfig: WeddingConfig = {
  couple: {
    groom: {
      firstName: 'Krishna',
      fullName: 'Krishna',
      title: 'The Groom',
      qualification: 'MBA Graduate • Bank Employee at CUB',
      bio: 'Practical, loving, and someone who cherishes celebrating life to the fullest. An MBA graduate and banker at City Union Bank (CUB) whose calm demeanor and steady support bring peace and comfort to Kavya.',
      image: '/images/couple/groom-krishna.jpg',
      parents: 'With the blessings of Groom\'s Parents & Family',
    },
    bride: {
      firstName: 'Kavya',
      fullName: 'Kavya',
      title: 'The Bride',
      qualification: 'MSc Graduate • School Teacher',
      bio: 'Gentle, emotional, and sensitive with a heart full of grace. An MSc graduate and dedicated school teacher whose warmth, pure smiles, and loving devotion bring boundless happiness to Krishna.',
      image: '/images/couple/bride-kavya.jpg',
      parents: 'With the blessings of Bride\'s Parents & Family',
    },
    monogram: 'K & K',
    tagline: 'From Best Friends to Forever ❤️',
    heroSubtitle: 'A Beautiful Journey of Friendship, Understanding, Patience & Love',
    evolution: [
      'Cousins',
      'Friends',
      'Best Friends',
      'Fiancé & Fiancée',
      'Husband & Wife'
    ],
    motto: [
      'We fight.',
      'We solve.',
      'We stay.'
    ],
    reflection: 'Not a perfect love story, but a beautiful journey of friendship, understanding, patience and choosing each other every single day. ❤️',
  },

  weddingDetails: {
    ceremonyDate: '2026-11-13T10:00:00+05:30',
    displayDate: 'November 13, 2026',
    displayDatesRange: 'November 12 & 13, 2026',
    displayDay: 'Friday',
    muhurthamTime: 'At 10:00 AM (Auspicious Muhurtham)',
    venue: {
      name: 'GMS Mahal',
      hall: 'Grand Mandapam',
      street: 'Thirukalukundram',
      city: 'Thirukalukundram',
      state: 'Tamil Nadu',
      pincode: '603109',
      fullAddress: 'GMS Mahal, Thirukalukundram, Tamil Nadu',
      googleMapsUrl: 'https://maps.google.com/?q=GMS+Mahal+Thirukalukundram',
    },
    reception: {
      date: 'November 12, 2026',
      displayDay: 'Thursday',
      time: 'From 6:00 PM Onwards',
      venue: 'GMS Mahal, Thirukalukundram',
    },
  },

  narratives: {
    openingQuote: 'THE BEGINNING OF FOREVER',
    divineInspirationHeadline: 'A Beautiful Connection — Friendship Turned to Forever',
    divineInspirationText: [
      'In the enchanted moonlit groves of sacred Vrindavan, where the holy Yamuna reflects the starry firmament, love was never an earthly coincidence — it was the eternal melody of the universe.',
      'Radha was Krishna’s devoted soul, and Krishna was Radha’s eternal breath. Their sacred bond required no spoken promises, for their devotion was written in the cosmos.',
      'Drawing inspiration from this timeless grace, Kavya & Krishna step into their sacred matrimonial vows to begin a lifetime of companionship, devotion, and unconditional love.'
    ],
    invitationGreeting: 'WITH THE BLESSINGS OF OUR FAMILIES & ELDERS',
    invitationBlessing: 'Two hearts, one sacred promise, and a lifetime of cherished memories. Your presence and warm blessings will make our special day truly divine.',
    finalBlessingHeading: 'EVERY BEAUTIFUL STORY DESERVES A FOREVER.',
    finalBlessingText: 'With all our love and gratitude, we look forward to celebrating this cherished celebration with you at GMS Mahal, Thirukalukundram.',
  },

  storyMilestones: [
    {
      id: 'milestone-childhood',
      year: 'Childhood Roots',
      title: 'Our Memory — Where Destiny Began',
      subtitle: 'From Innocent Cousins to Soulmates for Life',
      description: 'Long before 2019, before best friendship, and before wedding vows — two innocent young cousins sharing a warm, pure hug. Completely unaware that destiny was already weaving a love story written in the stars.',
      image: '/images/couple/special-childhood-memory.jpg',
      tag: 'Special Memory ❤️',
    },
    {
      id: 'milestone-2019',
      year: '2019',
      title: 'The Beginning as Friends',
      subtitle: 'Where Our Story Quietly Began',
      description: 'Their journey started in 2019 as friends. Simple conversations, casual hellos, and shared smiles that unknowingly sowed the seeds of an eternal bond.',
      image: '/images/timeline/the-beginning-as-friends.jpg',
      tag: 'Friends',
    },
    {
      id: 'milestone-aug-2023',
      year: 'August 2023',
      title: 'From Friends to Best Friends',
      subtitle: 'Sharing Everything With Each Other',
      description: 'By August 2023, they had become inseparable best friends — confiding in each other, sharing every joy, worry, dream, and secret without hesitation.',
      image: '/images/timeline/from-friends-to-best-friends.jpg',
      tag: 'Best Friends',
    },
    {
      id: 'milestone-mar-08-2026',
      year: 'March 8, 2026',
      title: 'The Marriage Proposal',
      subtitle: 'Krishna\'s Family Approached Kavya',
      description: 'Krishna\'s family formally approached Kavya at her home with the marriage proposal, seeking her hand and her family\'s heartfelt blessings.',
      image: '/images/timeline/the-marriage-proposal.jpg',
      tag: 'The Proposal',
    },
    {
      id: 'milestone-mar-09-2026',
      year: 'March 9, 2026',
      title: 'She Said Yes!',
      subtitle: 'A Heartfelt Promise to Forever',
      description: 'With joy in her heart, a glowing smile, and pure trust, Kavya said YES to starting a brand new life together forever.',
      image: '/images/timeline/she-said-yes.jpg',
      tag: 'She Said Yes ❤️',
    },
    {
      id: 'milestone-apr-05-2026',
      year: 'April 5, 2026',
      title: 'The Bride-Seeing Ceremony',
      subtitle: 'Ponnu Paarkum Padalam & Elders\' Blessings',
      description: 'Both families came together in warmth and tradition for the auspicious bride-seeing ceremony, sealing the union with love and sacred blessings.',
      image: '/images/timeline/the-bride-seeing-ceremony.jpg',
      tag: 'Families Meet',
    },
    {
      id: 'milestone-jun-28-2026',
      year: 'June 28, 2026',
      title: 'First Outing Together',
      subtitle: 'Kundrathur Murugan Temple',
      description: 'Their very first outing together to seek divine grace at Kundrathur Murugan Temple — blessing their journey under the watchful guidance of the divine.',
      image: '/images/timeline/first-outing-together.jpg',
      tag: 'Divine Outing',
    },
    {
      id: 'milestone-jul-23-2026',
      year: 'July 23, 2026',
      title: 'Midnight Birthday Surprise',
      subtitle: 'Thirukalukundram to Virudhachalam',
      description: 'Kavya surprised Krishna at midnight on his birthday, traveling all the way from Thirukalukundram to Virudhachalam just to light up his special day with pure love.',
      image: '/images/timeline/midnight-birthday-surprise.jpg',
      tag: 'Midnight Surprise',
    },
    {
      id: 'milestone-aug-08-2026',
      year: 'August 8, 2026',
      title: 'First Shopping Adventure',
      subtitle: 'Choosing Colors & Creating Memories',
      description: 'Hand-in-hand for their very first shopping day, picking traditional attires, exchanging playful laughs, and planning for their big celebrations.',
      image: '/images/timeline/first-shopping-adventure.jpg',
      tag: 'Shopping Together',
    },
    {
      id: 'milestone-aug-23-2026',
      year: 'August 23, 2026',
      title: 'The Grand Engagement',
      subtitle: 'Officially Fiancé & Fiancée',
      description: 'Surrounded by loving family and sacred rituals, rings were exchanged as best friends officially took the sacred pledge as fiancé & fiancée.',
      image: '/images/timeline/the-grand-engagement.jpg',
      tag: 'Nishchayathartham',
    },
    {
      id: 'milestone-sep-19-2026',
      year: 'September 19, 2026',
      title: 'Kavya\'s MSc Graduation',
      subtitle: 'By Her Side in Every Milestone',
      description: 'Kavya celebrated her MSc graduation with pride, and Krishna stood proudly by her side — her biggest cheerleader celebrating her accomplishment.',
      image: '/images/timeline/kavyas-msc-graduation.jpg',
      tag: 'Proud Milestone',
    },
    {
      id: 'milestone-sep-20-2026',
      year: 'September 20, 2026',
      title: 'First Movie Date',
      subtitle: 'Popcorn, Whispers & Laughter',
      description: 'Their first ever movie date together — sharing popcorn, continuous laughter, and cozy moments that became treasured memories.',
      image: '/images/timeline/first-movie-date.jpg',
      tag: 'Movie Outing',
    },
    {
      id: 'milestone-nov-13-2026',
      year: 'November 13, 2026',
      title: 'The Royal Wedding Day',
      subtitle: 'Husband & Wife Forever',
      description: 'The sacred Mangalya Dharanam uniting two best friends as husband and wife for seven lifetimes amidst divine Vedic chants, pure love, and eternal promises.',
      image: '/images/timeline/the-royal-wedding-day.jpg',
      tag: 'The Big Day ❤️',
    },
  ],

  events: [
    {
      id: 'event-reception',
      title: 'The Wedding Reception',
      subtitle: 'Welcome Celebration & Royal Feast',
      date: 'Thursday, November 12, 2026',
      day: 'Thursday Evening',
      time: 'From 6:00 PM Onwards',
      venueName: 'GMS Mahal',
      venueAddress: 'Thirukalukundram, Tamil Nadu',
      mapQuery: 'GMS Mahal Thirukalukundram',
      iconName: 'sparkles',
      description: 'Join us on the eve of our wedding for an enchanting evening of celebratory dinner, soulful music, congratulations, and joyful moments with the couple.',
      dressCode: 'Royal Festive / Elegant Evening Wear',
    },
    {
      id: 'event-marriage',
      title: 'The Marriage Ceremony',
      subtitle: 'Mangalya Dharanam & Sacred Vows',
      date: 'Friday, November 13, 2026',
      day: 'Friday Morning',
      time: 'At 10:00 AM (Muhurtham)',
      venueName: 'GMS Mahal',
      venueAddress: 'Thirukalukundram, Tamil Nadu',
      mapQuery: 'GMS Mahal Thirukalukundram',
      iconName: 'rings',
      description: 'The auspicious moment of sacred wedding vows, holy fire rituals, and tying of the sacred knot amidst Vedic hymns and divine blessings.',
      dressCode: 'Traditional Silk Attire (Pattu / Veshti)',
    },
  ],

  gallery: [
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
  ],

  audio: {
    enabled: true,
    title: 'Divine Vrindavan Flute & Santoor',
    artist: 'Traditional Instrumental',
    src: '/audio/vrindavan-ambient.mp3',
  },
};
