import re

with open('src/config/wedding.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update interface
interface_old = """export interface WeddingConfig {
  couple: {
    groom: {
      firstName: string;
      fullName: string;
      title: string;
      bio: string;
      image: string;
      parents: string;
    };
    bride: {
      firstName: string;
      fullName: string;
      title: string;
      bio: string;
      image: string;
      parents: string;
    };
    monogram: string;
    tagline: string;
    heroSubtitle: string;
  };"""

interface_new = """export interface WeddingConfig {
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
  };"""

assert interface_old in content, "interface_old not found!"
content = content.replace(interface_old, interface_new, 1)

# 2. Update weddingConfig.couple
couple_old = """  couple: {
    groom: {
      firstName: 'Krishna',
      fullName: 'Krishna',
      title: 'The Groom',
      bio: 'Guided by patience, devotion, and a heart full of warmth. In Kavya, he found his destined soulmate, his anchor, and his greatest adventure.',
      image: '/images/couple/groom-krishna.jpg',
      parents: 'With the blessings of Groom\\'s Parents & Family',
    },
    bride: {
      firstName: 'Kavya',
      fullName: 'Kavya',
      title: 'The Bride',
      bio: 'Radiant with grace, gentle strength, and timeless joy. In Krishna, she discovered not only her eternal companion but a love written in the stars.',
      image: '/images/couple/bride-kavya.jpg',
      parents: 'With the blessings of Bride\\'s Parents & Family',
    },
    monogram: 'K & K',
    tagline: 'Two Souls. One Eternal Story.',
    heroSubtitle: 'A Love Written in the Stars — Inspired by the Eternal Love of Radha & Krishna',
  },"""

couple_new = """  couple: {
    groom: {
      firstName: 'Krishna',
      fullName: 'Krishna',
      title: 'The Groom',
      qualification: 'MBA Graduate • Bank Employee at CUB',
      bio: 'Practical, loving, and someone who cherishes celebrating life to the fullest. An MBA graduate and banker at City Union Bank (CUB) whose calm demeanor and steady support bring peace and comfort to Kavya.',
      image: '/images/couple/groom-krishna.jpg',
      parents: 'With the blessings of Groom\\'s Parents & Family',
    },
    bride: {
      firstName: 'Kavya',
      fullName: 'Kavya',
      title: 'The Bride',
      qualification: 'MSc Graduate • School Teacher',
      bio: 'Gentle, emotional, and sensitive with a heart full of grace. An MSc graduate and dedicated school teacher whose warmth, pure smiles, and loving devotion bring boundless happiness to Krishna.',
      image: '/images/couple/bride-kavya.jpg',
      parents: 'With the blessings of Bride\\'s Parents & Family',
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
  },"""

assert couple_old in content, "couple_old not found!"
content = content.replace(couple_old, couple_new, 1)

# 3. Update storyMilestones
milestones_pattern = r"storyMilestones:\s*\[[\s\S]*?\n  \],"

milestones_new = """storyMilestones: [
    {
      id: 'milestone-2019',
      year: '2019',
      title: 'The Beginning as Friends',
      subtitle: 'Where Our Story Quietly Began',
      description: 'Their journey started in 2019 as friends. Simple conversations, casual hellos, and shared smiles that unknowingly sowed the seeds of an eternal bond.',
      image: '/images/couple/couple-01.jpg',
      tag: 'Friends',
    },
    {
      id: 'milestone-aug-2023',
      year: 'August 2023',
      title: 'From Friends to Best Friends',
      subtitle: 'Sharing Everything With Each Other',
      description: 'By August 2023, they had become inseparable best friends — confiding in each other, sharing every joy, worry, dream, and secret without hesitation.',
      image: '/images/couple/couple-02.jpg',
      tag: 'Best Friends',
    },
    {
      id: 'milestone-mar-08-2026',
      year: 'March 8, 2026',
      title: 'The Marriage Proposal',
      subtitle: 'Krishna\\'s Family Approached Kavya',
      description: 'Krishna\\'s family formally approached Kavya at her home with the marriage proposal, seeking her hand and her family\\'s heartfelt blessings.',
      image: '/images/couple/couple-03.jpg',
      tag: 'The Proposal',
    },
    {
      id: 'milestone-mar-09-2026',
      year: 'March 9, 2026',
      title: 'She Said Yes!',
      subtitle: 'A Heartfelt Promise to Forever',
      description: 'With joy in her heart, a glowing smile, and pure trust, Kavya said YES to starting a brand new life together forever.',
      image: '/images/couple/couple-04.jpg',
      tag: 'She Said Yes ❤️',
    },
    {
      id: 'milestone-apr-05-2026',
      year: 'April 5, 2026',
      title: 'The Bride-Seeing Ceremony',
      subtitle: 'Ponnu Paarkum Padalam & Elders\\' Blessings',
      description: 'Both families came together in warmth and tradition for the auspicious bride-seeing ceremony, sealing the union with love and sacred blessings.',
      image: '/images/couple/couple-05.jpg',
      tag: 'Families Meet',
    },
    {
      id: 'milestone-jun-28-2026',
      year: 'June 28, 2026',
      title: 'First Outing Together',
      subtitle: 'Kundrathur Murugan Temple',
      description: 'Their very first outing together to seek divine grace at Kundrathur Murugan Temple — blessing their journey under the watchful guidance of the divine.',
      image: '/images/couple/couple-06.jpg',
      tag: 'Divine Outing',
    },
    {
      id: 'milestone-jul-23-2026',
      year: 'July 23, 2026',
      title: 'Midnight Birthday Surprise',
      subtitle: 'Thirukalukundram to Virudhachalam',
      description: 'Kavya surprised Krishna at midnight on his birthday, traveling all the way from Thirukalukundram to Virudhachalam just to light up his special day with pure love.',
      image: '/images/couple/couple-07.jpg',
      tag: 'Midnight Surprise',
    },
    {
      id: 'milestone-aug-08-2026',
      year: 'August 8, 2026',
      title: 'First Shopping Adventure',
      subtitle: 'Choosing Colors & Creating Memories',
      description: 'Hand-in-hand for their very first shopping day, picking traditional attires, exchanging playful laughs, and planning for their big celebrations.',
      image: '/images/couple/couple-08.jpg',
      tag: 'Shopping Together',
    },
    {
      id: 'milestone-aug-23-2026',
      year: 'August 23, 2026',
      title: 'The Grand Engagement',
      subtitle: 'Officially Fiancé & Fiancée',
      description: 'Surrounded by loving family and sacred rituals, rings were exchanged as best friends officially took the sacred pledge as fiancé & fiancée.',
      image: '/images/couple/couple-19.jpg',
      tag: 'Nishchayathartham',
    },
    {
      id: 'milestone-sep-19-2026',
      year: 'September 19, 2026',
      title: 'Kavya\\'s MSc Graduation',
      subtitle: 'By Her Side in Every Milestone',
      description: 'Kavya celebrated her MSc graduation with pride, and Krishna stood proudly by her side — her biggest cheerleader celebrating her accomplishment.',
      image: '/images/couple/couple-17.jpg',
      tag: 'Proud Milestone',
    },
    {
      id: 'milestone-sep-20-2026',
      year: 'September 20, 2026',
      title: 'First Movie Date',
      subtitle: 'Popcorn, Whispers & Laughter',
      description: 'Their first ever movie date together — sharing popcorn, continuous laughter, and cozy moments that became treasured memories.',
      image: '/images/couple/couple-11.jpg',
      tag: 'Movie Outing',
    },
    {
      id: 'milestone-nov-13-2026',
      year: 'November 13, 2026',
      title: 'The Royal Wedding Day',
      subtitle: 'Husband & Wife Forever',
      description: 'The auspicious muhurtham at GMS Mahal, Thirukalukundram. The sacred Mangalya Dharanam uniting two best friends as husband and wife for seven lifetimes.',
      image: '/images/couple/couple-divine-inspiration.jpg',
      tag: 'The Big Day ❤️',
    },
  ],"""

content = re.sub(milestones_pattern, milestones_new, content)

with open('src/config/wedding.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully updated src/config/wedding.ts with authentic details!")

