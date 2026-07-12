export interface CategoryData {
  id: string;
  route: string;
  bn: { name: string; headline: string; subtitle: string; description: string };
  en: { name: string; headline: string; subtitle: string; description: string };
  heroImage: string;
  images: string[];
  amenities?: { bn: string; en: string }[];
}

export const categories: CategoryData[] = [
  {
    id: 'wedding',
    route: '/wedding',
    bn: {
      name: 'বিয়ের অনুষ্ঠান',
      headline: 'স্বপ্নের বিয়ের অনুষ্ঠান আয়োজন করুন',
      subtitle: 'আপনার বিশেষ দিনটিকে স্মরণীয় করে তুলুন',
      description: 'আমাদের সুসজ্জিত হলটি আপনার বিয়ের অনুষ্ঠানের জন্য আদর্শ। আধুনিক সাজসজ্জা, প্রশস্ত জায়গা এবং সম্পূর্ণ ক্যাটারিং সুবিধা সহ আমরা আপনার স্বপ্নের বিয়ের আয়োজন করে থাকি। আমাদের অভিজ্ঞ টিম প্রতিটি বিবরণে যত্ন নেয় যাতে আপনার বিশেষ দিনটি নিখুঁত হয়।',
    },
    en: {
      name: 'Wedding Ceremony',
      headline: 'Plan Your Dream Wedding',
      subtitle: 'Make your special day truly memorable',
      description: 'Our elegantly decorated hall is perfect for your wedding ceremony. With modern décor, spacious area, and full catering facilities, we organize your dream wedding. Our experienced team takes care of every detail to make your special day flawless.',
    },
    heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80',
    images: [
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80',
      'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&q=80',
      'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&q=80',
      'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&q=80',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&q=80',
    ],
    amenities: [
      { bn: 'শীততাপ নিয়ন্ত্রিত', en: 'Air Conditioned' },
      { bn: 'মাল্টি কমিউনিটি হলের নিজস্ব বাবুর্চী', en: 'In-house Chef' },
      { bn: 'মাল্টি কমিউনিটি হলের নিজস্ব খাবার পরিবেশক', en: 'In-house Catering Staff' },
      { bn: 'ওয়াইফাই সুবিধা', en: 'WiFi Facility' },
      { bn: '২৪ ঘন্টা পানি ও বিদ্যুৎ সুবিধা', en: '24/7 Water & Electricity' },
    ],
  },
  {
    id: 'birthday',
    route: '/birthday',
    bn: {
      name: 'জন্মদিনের অনুষ্ঠান',
      headline: 'জন্মদিন উদযাপন করুন আনন্দে',
      subtitle: 'প্রিয়জনদের সাথে বিশেষ মুহূর্ত উপভোগ করুন',
      description: 'জন্মদিনের পার্টি থেকে শুরু করে বার্ষিকী উদযাপন — আমাদের হলটি যেকোনো উৎসবের জন্য প্রস্তুত। রঙিন সাজসজ্জা, সংগীত ব্যবস্থা এবং কেক কাটিং স্টেজ সহ আমরা আপনার উদযাপনকে অবিস্মরণীয় করে তুলি। শিশু ও প্রাপ্তবয়স্ক উভয়ের জন্যই আদর্শ।',
    },
    en: {
      name: 'Birthday Party',
      headline: 'Celebrate Birthdays with Joy',
      subtitle: 'Enjoy special moments with your loved ones',
      description: 'From birthday parties to anniversary celebrations — our hall is ready for any festivity. With colorful decorations, music arrangements, and a cake-cutting stage, we make your celebration unforgettable. Perfect for both children and adults.',
    },
    heroImage: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&q=80',
    images: [
      'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=600&q=80',
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=80',
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    ],
    amenities: [
      { bn: 'শীততাপ নিয়ন্ত্রিত', en: 'Air Conditioned' },
      { bn: 'মাল্টি কমিউনিটি হলের নিজস্ব বাবুর্চী', en: 'In-house Chef' },
      { bn: 'মাল্টি কমিউনিটি হলের নিজস্ব খাবার পরিবেশক', en: 'In-house Catering Staff' },
      { bn: 'ওয়াইফাই সুবিধা', en: 'WiFi Facility' },
      { bn: '২৪ ঘন্টা পানি ও বিদ্যুৎ সুবিধা', en: '24/7 Water & Electricity' },
    ],
  },
  {
    id: 'workshop',
    route: '/workshop',
    bn: {
      name: 'ওয়ার্কশপ ও সেমিনার',
      headline: 'জ্ঞান ভাগাভাগি ও শেখার মঞ্চ',
      subtitle: 'পেশাদার পরিবেশে ওয়ার্কশপ আয়োজন করুন',
      description: 'আমাদের আধুনিক সেমিনার হলটি প্রজেক্টর, সাউন্ড সিস্টেম এবং আরামদায়ক বসার ব্যবস্থা সহ সজ্জিত। শিক্ষামূলক ওয়ার্কশপ, প্রশিক্ষণ সেশন এবং সেমিনার আয়োজনের জন্য এটি আদর্শ স্থান। ২০০ জন পর্যন্ত অংশগ্রহণকারীর ব্যবস্থা রয়েছে।',
    },
    en: {
      name: 'Workshop & Seminar',
      headline: 'A Platform for Knowledge Sharing',
      subtitle: 'Host workshops in a professional environment',
      description: 'Our modern seminar hall is equipped with projector, sound system, and comfortable seating. It is the ideal venue for educational workshops, training sessions, and seminars. Capacity for up to 200 participants.',
    },
    heroImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80',
    images: [
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80',
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
      'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&q=80',
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    ],
    amenities: [
      { bn: 'শীততাপ নিয়ন্ত্রিত', en: 'Air Conditioned' },
      { bn: 'মাল্টি কমিউনিটি হলের নিজস্ব বাবুর্চী', en: 'In-house Chef' },
      { bn: 'মাল্টি কমিউনিটি হলের নিজস্ব খাবার পরিবেশক', en: 'In-house Catering Staff' },
      { bn: 'মাল্টি কমিউনিটি হলের নিজস্ব ফার্নিচার', en: 'In-house Furniture' },
      { bn: 'ওয়াইফাই সুবিধা', en: 'WiFi Facility' },
      { bn: '২৪ ঘন্টা পানি ও বিদ্যুৎ সুবিধা', en: '24/7 Water & Electricity' },
    ],
  },
  {
    id: 'corporate',
    route: '/corporate',
    bn: {
      name: 'কর্পোরেট ইভেন্ট',
      headline: 'পেশাদার কর্পোরেট ইভেন্ট আয়োজন',
      subtitle: 'আপনার ব্যবসায়িক অনুষ্ঠানের জন্য সেরা স্থান',
      description: 'কর্পোরেট মিটিং, প্রোডাক্ট লঞ্চ, টিম বিল্ডিং ইভেন্ট এবং বার্ষিক সম্মেলনের জন্য আমাদের হলটি পুরোপুরি প্রস্তুত। হাই-স্পিড ওয়াইফাই, উন্নত অডিও-ভিজুয়াল সরঞ্জাম এবং পেশাদার পরিবেশ নিশ্চিত করা হয়।',
    },
    en: {
      name: 'Corporate Event',
      headline: 'Professional Corporate Event Hosting',
      subtitle: 'The best venue for your business events',
      description: 'Our hall is fully prepared for corporate meetings, product launches, team building events, and annual conferences. High-speed WiFi, advanced audio-visual equipment, and a professional atmosphere are guaranteed.',
    },
    heroImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&q=80',
    images: [
      'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=600&q=80',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80',
      'https://images.unsplash.com/photo-1559223607-a43c990c692c?w=600&q=80',
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80',
    ],
    amenities: [
      { bn: 'শীততাপ নিয়ন্ত্রিত', en: 'Air Conditioned' },
      { bn: 'মাল্টি কমিউনিটি হলের নিজস্ব বাবুর্চী', en: 'In-house Chef' },
      { bn: 'মাল্টি কমিউনিটি হলের নিজস্ব খাবার পরিবেশক', en: 'In-house Catering Staff' },
      { bn: 'মাল্টি কমিউনিটি হলের নিজস্ব ফার্নিচার', en: 'In-house Furniture' },
      { bn: 'ওয়াইফাই সুবিধা', en: 'WiFi Facility' },
      { bn: '২৪ ঘন্টা পানি ও বিদ্যুৎ সুবিধা', en: '24/7 Water & Electricity' },
    ],
  },
  {
    id: 'ielts',
    route: '/ielts',
    bn: {
      name: 'IELTS কোর্স এবং স্পোকেন ইংলিশ',
      headline: 'ইংরেজি ভাষা দক্ষতা অর্জন করুন',
      subtitle: 'অভিজ্ঞ প্রশিক্ষকদের সাথে IELTS প্রস্তুতি নিন',
      description: 'আমাদের IELTS প্রস্তুতি কোর্স এবং স্পোকেন ইংলিশ ক্লাস আপনাকে আন্তর্জাতিক পরীক্ষায় সাফল্য অর্জনে সহায়তা করবে। অভিজ্ঞ প্রশিক্ষক, ছোট ব্যাচ সাইজ এবং ইন্টারেক্টিভ শেখার পদ্ধতি আমাদের কোর্সের বৈশিষ্ট্য।',
    },
    en: {
      name: 'IELTS Course & Spoken English',
      headline: 'Master English Language Skills',
      subtitle: 'Prepare for IELTS with experienced instructors',
      description: 'Our IELTS preparation course and spoken English classes will help you succeed in international exams. Experienced instructors, small batch sizes, and interactive learning methods are the hallmarks of our courses.',
    },
    heroImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=80',
    images: [
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
      'https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&q=80',
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80',
      'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&q=80',
      'https://images.unsplash.com/photo-1546410531-bb4caa6b3241?w=600&q=80',
    ],
  },
  {
    id: 'computer-training',
    route: '/computer-training',
    bn: {
      name: 'কম্পিউটার প্রশিক্ষণ',
      headline: 'আধুনিক কম্পিউটার প্রশিক্ষণ',
      subtitle: 'ডিজিটাল দক্ষতা গড়ে তুলুন',
      description: 'আমাদের কম্পিউটার প্রশিক্ষণ কেন্দ্রে মাইক্রোসফট অফিস, গ্রাফিক ডিজাইন, ওয়েব ডেভেলপমেন্ট এবং ডাটা এন্ট্রি কোর্স পরিচালিত হয়। আধুনিক কম্পিউটার ল্যাব এবং দক্ষ প্রশিক্ষকদের তত্ত্বাবধানে হাতে-কলমে প্রশিক্ষণ প্রদান করা হয়।',
    },
    en: {
      name: 'Computer Training',
      headline: 'Modern Computer Training',
      subtitle: 'Build your digital skills',
      description: 'Our computer training center offers courses in Microsoft Office, graphic design, web development, and data entry. Hands-on training is provided in a modern computer lab under the supervision of skilled instructors.',
    },
    heroImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
      'https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=600&q=80',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80',
    ],
  },
];
