// Single source of truth for business/contact details.
// Used by the footer, contact page, WhatsApp button, social links,
// metadata (SEO/OG), JSON-LD, sitemap, and robots — update values here only.
export const siteInfo = {
  name: { bn: "কিং কমিউনিটি হল", en: "King Community Hall" },
  tagline: {
    bn: "আপনার যেকোনো অনুষ্ঠানের জন্য আদর্শ স্থান",
    en: "The ideal venue for all your events",
  },
  description:
    "A welcoming venue for events, celebrations, training, and community programs.",
  // TODO: replace with the real production domain before launch
  url: "https://kingcommunityhall.com",
  // TODO: replace placeholder phone/WhatsApp numbers with real ones
  phone: "+880 1711-742861",
  whatsappUrl: "https://wa.me/8801711-742861",
  email: "kingcommunityhall@gmail.com",
  // TODO: replace placeholder address with the real one
  address: {
    bn: "১২৩, প্রধান সড়ক, উপজেলা সদর, জেলা শহর, বাংলাদেশ",
    en: "123, Main Road, Upazila Sadar, District Town, Bangladesh",
  },
  // TODO: point these at the real social profiles
  social: {
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    instagram: "https://instagram.com",
  },
  // TODO: replace with the real Google Maps embed URL for the hall
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902756509!2d90.39945!3d23.7508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JzAzLjAiTiA5MMKwMjMnNTguMCJF!5e0!3m2!1sen!2sbd!4v1234567890",
  // TODO: replace with a real "how to find us" video
  directionsVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
};

// Icon key for a category fact — mapped to a lucide icon in CategoryDetails.
export type FactId =
  | "capacity"
  | "size"
  | "parking"
  | "stage"
  | "catering"
  | "power"
  | "prayer"
  | "booking"
  | "schedule"
  | "materials"
  | "lab"
  | "certificate";

export interface CategoryFact {
  id: FactId;
  bn: { label: string; value: string };
  en: { label: string; value: string };
}

export interface CategoryData {
  id: string;
  route: string;
  // `description` is the short teaser shown on the home page;
  // `details` is the longer copy shown only on the category page.
  bn: {
    name: string;
    headline: string;
    subtitle: string;
    description: string;
    details: string[];
  };
  en: {
    name: string;
    headline: string;
    subtitle: string;
    description: string;
    details: string[];
  };
  heroImage: string;
  images: string[];
  amenities?: { bn: string; en: string }[];
  facts?: CategoryFact[];
}

// TODO: capacity, hall size, parking counts, course durations, and booking terms
// below are DUMMY values — replace with the real hall specs before launch.
export const categories: CategoryData[] = [
  {
    id: "wedding",
    route: "/wedding",
    bn: {
      name: "বিয়ের অনুষ্ঠান",
      headline: "স্বপ্নের বিয়ের অনুষ্ঠান আয়োজন করুন",
      subtitle: "আপনার বিশেষ দিনটিকে স্মরণীয় করে তুলুন",
      description:
        "আমাদের সুসজ্জিত হলটি আপনার বিয়ের অনুষ্ঠানের জন্য আদর্শ। আধুনিক সাজসজ্জা, প্রশস্ত জায়গা এবং সম্পূর্ণ ক্যাটারিং সুবিধা সহ আমরা আপনার স্বপ্নের বিয়ের আয়োজন করে থাকি। আমাদের অভিজ্ঞ টিম প্রতিটি বিবরণে যত্ন নেয় যাতে আপনার বিশেষ দিনটি নিখুঁত হয়।",
      details: [
        "শত শত বিয়ে, বৌভাত ও এনগেজমেন্ট অনুষ্ঠানের নির্ভরযোগ্য ঠিকানা কিং কমিউনিটি হল। আমাদের শীতাতপ নিয়ন্ত্রিত প্রধান হলে ব্যাংকুয়েট স্টাইলে ৪০০ অতিথির বসার ব্যবস্থা রয়েছে। সুসজ্জিত বিয়ের স্টেজ, কনের জন্য আলাদা রুম এবং একসাথে ১৫০ জনের খাবারের আলাদা ডাইনিং স্পেস থাকায় বড় পরিবার ও দীর্ঘ অতিথি তালিকা নিয়ে চিন্তার কিছু নেই।",
        "ক্যাটারিংয়ের পুরো দায়িত্ব আমাদের নিজস্ব বাবুর্চি ও পরিবেশক টিমের — কাচ্চি বিরিয়ানি, রোস্ট, রেজালা, বোরহানিসহ ঐতিহ্যবাহী বিয়ের মেনু প্রস্তুত করা হয়, আর প্রতিটি মেনু আপনার বাজেট ও রুচি অনুযায়ী সাজিয়ে নেওয়া যায়। সাজসজ্জার জন্য আমাদের স্টেজ ও ফুলের প্যাকেজ বেছে নিতে পারেন, চাইলে নিজস্ব ডেকোরেটরও আনতে পারেন।",
        "ব্যবহারিক সব দিকও নিশ্চিত করা আছে — প্রায় ৬০টি গাড়ির পার্কিং, আলাদা নামাজের কক্ষ, পূর্ণ জেনারেটর ব্যাকআপ এবং ২৪ ঘণ্টা পানি-বিদ্যুৎ। বুকিংয়ের জন্য পছন্দের তারিখ নিয়ে আমাদের অফিসে আসুন — ৫০% অগ্রিম প্রদানে বুকিং নিশ্চিত হয়, আর পরিকল্পনা থেকে অনুষ্ঠানের দিন পর্যন্ত আমাদের ইভেন্ট কো-অর্ডিনেটর আপনার পাশে থাকবেন।",
      ],
    },
    en: {
      name: "Wedding Ceremony",
      headline: "Plan Your Dream Wedding",
      subtitle: "Make your special day truly memorable",
      description:
        "Our elegantly decorated hall is perfect for your wedding ceremony. With modern décor, spacious area, and full catering facilities, we organize your dream wedding. Our experienced team takes care of every detail to make your special day flawless.",
      details: [
        "King Community Hall has been the venue of choice for hundreds of weddings, receptions, and engagement ceremonies. Our air-conditioned main hall seats up to 400 guests banquet-style, with a beautifully decorated wedding stage, a private bridal room, and a separate dining space that serves up to 150 guests at a time — so large families and long guest lists are never a problem.",
        "Catering is handled entirely in-house: our own chef and serving team prepare traditional wedding menus including kacchi biryani, roast, rezala, and borhani, and every menu can be customized to your budget and taste. For décor, choose one of our stage and floral packages or bring your own decorator — both are welcome.",
        "The practical side is covered too: parking for around 60 cars, a separate prayer room, full generator backup, and 24/7 water and electricity. To book, visit our office with your preferred dates — a 50% advance confirms the booking, and our event coordinator stays with you from planning through to the day itself.",
      ],
    },
    heroImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80",
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&q=80",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&q=80",
      "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&q=80",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&q=80",
    ],
    amenities: [
      { bn: "শীততাপ নিয়ন্ত্রিত", en: "Air Conditioned" },
      { bn: "কিং কমিউনিটি হলের নিজস্ব বাবুর্চী", en: "In-house Chef" },
      {
        bn: "কিং কমিউনিটি হলের নিজস্ব খাবার পরিবেশক",
        en: "In-house Catering Staff",
      },
      { bn: "ওয়াইফাই সুবিধা", en: "WiFi Facility" },
      { bn: "২৪ ঘন্টা পানি ও বিদ্যুৎ সুবিধা", en: "24/7 Water & Electricity" },
    ],
    facts: [
      {
        id: "capacity",
        bn: { label: "ধারণক্ষমতা", value: "৪০০ অতিথি (ব্যাংকুয়েট)" },
        en: { label: "Capacity", value: "400 guests (banquet)" },
      },
      {
        id: "size",
        bn: { label: "হলের আয়তন", value: "৬,৫০০ বর্গফুট" },
        en: { label: "Hall Size", value: "6,500 sq ft" },
      },
      {
        id: "parking",
        bn: { label: "পার্কিং", value: "প্রায় ৬০টি গাড়ি" },
        en: { label: "Parking", value: "~60 cars" },
      },
      {
        id: "stage",
        bn: { label: "স্টেজ ও সাজসজ্জা", value: "সুসজ্জিত স্টেজ ও কনের রুম" },
        en: { label: "Stage & Décor", value: "Decorated stage + bridal room" },
      },
      {
        id: "catering",
        bn: { label: "ক্যাটারিং", value: "নিজস্ব, পছন্দমতো মেনু" },
        en: { label: "Catering", value: "In-house, customizable menu" },
      },
      {
        id: "prayer",
        bn: { label: "নামাজের ব্যবস্থা", value: "আলাদা নামাজের কক্ষ" },
        en: { label: "Prayer Space", value: "Separate prayer room" },
      },
      {
        id: "power",
        bn: { label: "বিদ্যুৎ ব্যবস্থা", value: "পূর্ণ জেনারেটর ব্যাকআপ" },
        en: { label: "Power Backup", value: "Full generator backup" },
      },
      {
        id: "booking",
        bn: { label: "বুকিং", value: "৫০% অগ্রিমে নিশ্চিত" },
        en: { label: "Booking", value: "50% advance to confirm" },
      },
    ],
  },
  {
    id: "birthday",
    route: "/birthday",
    bn: {
      name: "জন্মদিনের অনুষ্ঠান",
      headline: "জন্মদিন উদযাপন করুন আনন্দে",
      subtitle: "প্রিয়জনদের সাথে বিশেষ মুহূর্ত উপভোগ করুন",
      description:
        "জন্মদিনের পার্টি থেকে শুরু করে বার্ষিকী উদযাপন — আমাদের হলটি যেকোনো উৎসবের জন্য প্রস্তুত। রঙিন সাজসজ্জা, সংগীত ব্যবস্থা এবং কেক কাটিং স্টেজ সহ আমরা আপনার উদযাপনকে অবিস্মরণীয় করে তুলি। শিশু ও প্রাপ্তবয়স্ক উভয়ের জন্যই আদর্শ।",
      details: [
        "শিশুর প্রথম জন্মদিন থেকে শুরু করে বিবাহবার্ষিকী — ছোট-বড় সব উদযাপনের জন্য আমাদের হল প্রস্তুত। শীতাতপ নিয়ন্ত্রিত এই হলে ১৫০ জন অতিথি স্বাচ্ছন্দ্যে বসতে পারেন। রয়েছে কেক কাটার স্টেজ, গান-বাজনা ও খেলার জন্য মানসম্মত সাউন্ড সিস্টেম এবং থিম অনুযায়ী সাজসজ্জার সুযোগ — কার্টুন চরিত্র, বেলুন আর্চ কিংবা ফুলের এলিগ্যান্ট ডেকোরেশন।",
        "খরচ সাশ্রয়ী রাখতে সকাল বা সন্ধ্যার অর্ধদিবস স্লটে বুকিং দেওয়া যায়। শিশুদের পার্টির স্ন্যাক্স বক্স ও ফিঙ্গার ফুড থেকে শুরু করে বড় আয়োজনের সম্পূর্ণ ডিনার মেনু — সবই আমাদের নিজস্ব ক্যাটারিং টিম প্রস্তুত করে। চাইলে বিশ্বস্ত স্থানীয় বেকারি থেকে জন্মদিনের কেকের ব্যবস্থাও করে দিই।",
        "পার্কিং, জেনারেটর ব্যাকআপ এবং ২৪ ঘণ্টা পানি-বিদ্যুৎ সুবিধা তো থাকছেই। সাপ্তাহিক ছুটির দিনগুলোর তারিখ দ্রুত বুক হয়ে যায় — অন্তত এক সপ্তাহ আগে বুকিং দেওয়ার পরামর্শ দিই; অল্প কিছু অগ্রিম দিলেই আপনার স্লট নিশ্চিত থাকবে।",
      ],
    },
    en: {
      name: "Birthday Party",
      headline: "Celebrate Birthdays with Joy",
      subtitle: "Enjoy special moments with your loved ones",
      description:
        "From birthday parties to anniversary celebrations — our hall is ready for any festivity. With colorful decorations, music arrangements, and a cake-cutting stage, we make your celebration unforgettable. Perfect for both children and adults.",
      details: [
        "From a child's first birthday to a golden wedding anniversary, our hall adapts to celebrations of every size. The air-conditioned space comfortably hosts up to 150 guests, with a cake-cutting stage, a quality sound system for music and games, and room for themed décor — cartoon characters, balloon arches, or elegant florals, whatever the occasion calls for.",
        "You can book a flexible half-day slot (morning or evening), which keeps costs sensible for smaller family events. Our in-house catering covers everything from snack boxes and finger food for kids' parties to full dinner menus for larger gatherings, and we can arrange the birthday cake through trusted local bakers.",
        "Parking, generator backup, and round-the-clock water and electricity are all included. Weekend dates fill up fast — we recommend booking at least a week ahead; a small advance payment holds your slot.",
      ],
    },
    heroImage:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=600&q=80",
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=80",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    ],
    amenities: [
      { bn: "শীততাপ নিয়ন্ত্রিত", en: "Air Conditioned" },
      { bn: "কিং কমিউনিটি হলের নিজস্ব বাবুর্চী", en: "In-house Chef" },
      {
        bn: "কিং কমিউনিটি হলের নিজস্ব খাবার পরিবেশক",
        en: "In-house Catering Staff",
      },
      { bn: "ওয়াইফাই সুবিধা", en: "WiFi Facility" },
      { bn: "২৪ ঘন্টা পানি ও বিদ্যুৎ সুবিধা", en: "24/7 Water & Electricity" },
    ],
    facts: [
      {
        id: "capacity",
        bn: { label: "ধারণক্ষমতা", value: "১৫০ অতিথি" },
        en: { label: "Capacity", value: "150 guests" },
      },
      {
        id: "stage",
        bn: { label: "স্টেজ", value: "কেক কাটার স্টেজ ও সাউন্ড সিস্টেম" },
        en: { label: "Stage", value: "Cake stage + sound system" },
      },
      {
        id: "catering",
        bn: { label: "ক্যাটারিং", value: "স্ন্যাক্স থেকে ফুল ডিনার" },
        en: { label: "Catering", value: "Snacks to full dinners" },
      },
      {
        id: "schedule",
        bn: { label: "সময়সূচি", value: "সকাল বা সন্ধ্যার অর্ধদিবস স্লট" },
        en: { label: "Schedule", value: "Morning or evening half-day slots" },
      },
      {
        id: "parking",
        bn: { label: "পার্কিং", value: "গাড়ি ও বাইকের পর্যাপ্ত জায়গা" },
        en: { label: "Parking", value: "Ample car & bike parking" },
      },
      {
        id: "booking",
        bn: { label: "বুকিং", value: "১ সপ্তাহ আগে বুকিংয়ের পরামর্শ" },
        en: { label: "Booking", value: "Book at least 1 week ahead" },
      },
    ],
  },
  {
    id: "workshop",
    route: "/workshop",
    bn: {
      name: "ওয়ার্কশপ ও সেমিনার",
      headline: "জ্ঞান ভাগাভাগি ও শেখার মঞ্চ",
      subtitle: "পেশাদার পরিবেশে ওয়ার্কশপ আয়োজন করুন",
      description:
        "আমাদের আধুনিক সেমিনার হলটি প্রজেক্টর, সাউন্ড সিস্টেম এবং আরামদায়ক বসার ব্যবস্থা সহ সজ্জিত। শিক্ষামূলক ওয়ার্কশপ, প্রশিক্ষণ সেশন এবং সেমিনার আয়োজনের জন্য এটি আদর্শ স্থান। ২০০ জন পর্যন্ত অংশগ্রহণকারীর ব্যবস্থা রয়েছে।",
      details: [
        "শেখার আয়োজনের কথা মাথায় রেখেই আমাদের সেমিনার হল সাজানো — থিয়েটার স্টাইলে ২০০ জন বা ক্লাসরুম বিন্যাসে প্রায় ৮০ জন অংশগ্রহণকারীর ব্যবস্থা। প্রজেক্টর, ওয়্যারলেস মাইক্রোফোনসহ সাউন্ড সিস্টেম, হোয়াইটবোর্ড ও হাই-স্পিড ওয়াইফাই থাকছে স্ট্যান্ডার্ড হিসেবেই। শীতাতপ নিয়ন্ত্রিত পরিবেশে দীর্ঘ সেশনও হয় স্বাচ্ছন্দ্যময়।",
        "আয়োজকরা ঘণ্টা, অর্ধদিবস বা পূর্ণদিবস হিসেবে হল ভাড়া নিতে পারেন — দুই ঘণ্টার প্রশিক্ষণ থেকে কয়েক দিনের সার্টিফিকেশন কোর্স পর্যন্ত সবকিছুর জন্যই উপযোগী। চা-বিরতি ও দুপুরের খাবারের প্যাকেজ আমাদের নিজস্ব ক্যাটারিং টিমই প্রস্তুত করে, ফলে অংশগ্রহণকারীদের ভেন্যুর বাইরে যেতে হয় না।",
        "বিশ্ববিদ্যালয়ের ওয়ার্কশপ, এনজিও প্রশিক্ষণ ও পেশাগত উন্নয়ন সেমিনার নিয়মিতই আমাদের এখানে হয়। প্রাতিষ্ঠানিক প্রয়োজনে ইনভয়েস ও বুকিং ডকুমেন্টও দেওয়া হয়। জেনারেটর ব্যাকআপ থাকায় প্রেজেন্টেশন মাঝপথে থেমে যাওয়ার ভয় নেই।",
      ],
    },
    en: {
      name: "Workshop & Seminar",
      headline: "A Platform for Knowledge Sharing",
      subtitle: "Host workshops in a professional environment",
      description:
        "Our modern seminar hall is equipped with projector, sound system, and comfortable seating. It is the ideal venue for educational workshops, training sessions, and seminars. Capacity for up to 200 participants.",
      details: [
        "Our seminar hall is purpose-built for learning events: up to 200 participants in theater seating or around 80 in classroom layout, with a projector, PA system with wireless microphones, whiteboard, and high-speed WiFi as standard. The air-conditioned environment keeps even day-long sessions comfortable and distraction-free.",
        "Organizers can rent by the hour, half-day, or full day — practical for everything from a two-hour training session to a multi-day certification course. Tea-break and lunch packages are prepared by our in-house catering team, so participants never need to leave the venue.",
        "We regularly host university workshops, NGO training programs, and professional development seminars, and we provide invoices and booking documentation for institutional requirements. Generator backup guarantees your presentation never stops mid-slide.",
      ],
    },
    heroImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    ],
    amenities: [
      { bn: "শীততাপ নিয়ন্ত্রিত", en: "Air Conditioned" },
      { bn: "কিং কমিউনিটি হলের নিজস্ব বাবুর্চী", en: "In-house Chef" },
      {
        bn: "কিং কমিউনিটি হলের নিজস্ব খাবার পরিবেশক",
        en: "In-house Catering Staff",
      },
      { bn: "কিং কমিউনিটি হলের নিজস্ব ফার্নিচার", en: "In-house Furniture" },
      { bn: "ওয়াইফাই সুবিধা", en: "WiFi Facility" },
      { bn: "২৪ ঘন্টা পানি ও বিদ্যুৎ সুবিধা", en: "24/7 Water & Electricity" },
    ],
    facts: [
      {
        id: "capacity",
        bn: { label: "ধারণক্ষমতা", value: "থিয়েটারে ২০০ / ক্লাসরুমে ৮০" },
        en: { label: "Capacity", value: "200 theater / 80 classroom" },
      },
      {
        id: "stage",
        bn: {
          label: "প্রেজেন্টেশন সরঞ্জাম",
          value: "প্রজেক্টর, সাউন্ড ও ওয়্যারলেস মাইক",
        },
        en: {
          label: "Presentation Gear",
          value: "Projector, PA & wireless mics",
        },
      },
      {
        id: "schedule",
        bn: { label: "ভাড়ার ধরন", value: "ঘণ্টা, অর্ধদিবস বা পূর্ণদিবস" },
        en: { label: "Rental", value: "Hourly, half-day or full-day" },
      },
      {
        id: "catering",
        bn: { label: "ক্যাটারিং", value: "চা-বিরতি ও লাঞ্চ প্যাকেজ" },
        en: { label: "Catering", value: "Tea-break & lunch packages" },
      },
      {
        id: "power",
        bn: { label: "বিদ্যুৎ ব্যবস্থা", value: "জেনারেটর ব্যাকআপ" },
        en: { label: "Power Backup", value: "Generator backup" },
      },
      {
        id: "booking",
        bn: {
          label: "প্রাতিষ্ঠানিক বুকিং",
          value: "ইনভয়েস ও ডকুমেন্ট সুবিধা",
        },
        en: {
          label: "Institutional Booking",
          value: "Invoice & documentation support",
        },
      },
    ],
  },
  {
    id: "corporate",
    route: "/corporate",
    bn: {
      name: "কর্পোরেট ইভেন্ট",
      headline: "পেশাদার কর্পোরেট ইভেন্ট আয়োজন",
      subtitle: "আপনার ব্যবসায়িক অনুষ্ঠানের জন্য সেরা স্থান",
      description:
        "কর্পোরেট মিটিং, প্রোডাক্ট লঞ্চ, টিম বিল্ডিং ইভেন্ট এবং বার্ষিক সম্মেলনের জন্য আমাদের হলটি পুরোপুরি প্রস্তুত। হাই-স্পিড ওয়াইফাই, উন্নত অডিও-ভিজুয়াল সরঞ্জাম এবং পেশাদার পরিবেশ নিশ্চিত করা হয়।",
      details: [
        "প্রোডাক্ট লঞ্চ, বার্ষিক সাধারণ সভা, ডিলার কনফারেন্স কিংবা টিম-বিল্ডিং ডে — কর্পোরেট আয়োজনের পুরো পরিসরই আমাদের হলে সম্ভব। থিয়েটার স্টাইলে ২৫০ জন বা ব্যাংকুয়েট রাউন্ডে ১২০ অতিথির ব্যবস্থা রয়েছে। স্টেজে LED ব্যাকড্রপ ও ব্র্যান্ডেড ব্যানার লাগানোর সুবিধা আছে, আর পোডিয়াম, সাউন্ড সিস্টেম ও প্রজেক্টর থাকছে স্ট্যান্ডার্ড হিসেবেই।",
        "বিজনেস ক্যাটারিংয়ে রয়েছে নমনীয়তা — বুফে লাঞ্চ, ব্যস্ত শিডিউলের জন্য বক্সড মিল কিংবা আনুষ্ঠানিক ডিনার; সবই আমাদের নিজস্ব রান্নাঘরে প্রস্তুত। পুরো হলজুড়ে হাই-স্পিড ওয়াইফাই, আর অনুষ্ঠানের দিন আপনার টিমের সাথে কাজ করবেন আমাদের একজন ডেডিকেটেড কো-অর্ডিনেটর — লজিস্টিকসের ঝামেলা আপনার কর্মীদের ওপর পড়বে না।",
        "কর্পোরেট ক্লায়েন্টদের জন্য যথাযথ ইনভয়েস দেওয়া হয় এবং আনুষ্ঠানিক ওয়ার্ক অর্ডারে তারিখ সংরক্ষণ করা যায়। প্রায় ৬০টি গাড়ির পার্কিং, পূর্ণ জেনারেটর ব্যাকআপ আর পেশাদার পরিবেশ — আপনার ইভেন্ট চলবে পরিকল্পনামাফিক।",
      ],
    },
    en: {
      name: "Corporate Event",
      headline: "Professional Corporate Event Hosting",
      subtitle: "The best venue for your business events",
      description:
        "Our hall is fully prepared for corporate meetings, product launches, team building events, and annual conferences. High-speed WiFi, advanced audio-visual equipment, and a professional atmosphere are guaranteed.",
      details: [
        "Product launches, annual general meetings, dealer conferences, team-building days — our hall handles the full range of corporate events with up to 250 guests in theater seating or 120 in banquet rounds. The stage supports LED backdrops and branded banners, and a podium, PA system, and projector come standard.",
        "Business catering is flexible: buffet lunches, boxed meals for tight schedules, or formal plated dinners, all prepared in-house. High-speed WiFi covers the entire hall, and a dedicated on-site coordinator works with your event team throughout the day so logistics never land on your staff.",
        "Corporate clients receive proper invoicing and can reserve dates with a formal work order. With around 60 parking spaces, full generator backup, and a professional, distraction-free environment, your event runs exactly to plan.",
      ],
    },
    heroImage:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=600&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
      "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=600&q=80",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80",
    ],
    amenities: [
      { bn: "শীততাপ নিয়ন্ত্রিত", en: "Air Conditioned" },
      { bn: "কিং কমিউনিটি হলের নিজস্ব বাবুর্চী", en: "In-house Chef" },
      {
        bn: "কিং কমিউনিটি হলের নিজস্ব খাবার পরিবেশক",
        en: "In-house Catering Staff",
      },
      { bn: "কিং কমিউনিটি হলের নিজস্ব ফার্নিচার", en: "In-house Furniture" },
      { bn: "ওয়াইফাই সুবিধা", en: "WiFi Facility" },
      { bn: "২৪ ঘন্টা পানি ও বিদ্যুৎ সুবিধা", en: "24/7 Water & Electricity" },
    ],
    facts: [
      {
        id: "capacity",
        bn: { label: "ধারণক্ষমতা", value: "থিয়েটারে ২৫০ / ব্যাংকুয়েটে ১২০" },
        en: { label: "Capacity", value: "250 theater / 120 banquet" },
      },
      {
        id: "stage",
        bn: {
          label: "স্টেজ ও ব্র্যান্ডিং",
          value: "LED ব্যাকড্রপ ও ব্যানার স্পেস",
        },
        en: { label: "Stage & Branding", value: "LED backdrop & banner space" },
      },
      {
        id: "catering",
        bn: { label: "ক্যাটারিং", value: "বুফে, বক্সড বা ফরমাল ডিনার" },
        en: { label: "Catering", value: "Buffet, boxed or plated" },
      },
      {
        id: "parking",
        bn: { label: "পার্কিং", value: "প্রায় ৬০টি গাড়ি" },
        en: { label: "Parking", value: "~60 cars" },
      },
      {
        id: "power",
        bn: { label: "বিদ্যুৎ ব্যবস্থা", value: "পূর্ণ জেনারেটর ব্যাকআপ" },
        en: { label: "Power Backup", value: "Full generator backup" },
      },
      {
        id: "booking",
        bn: { label: "বুকিং", value: "ওয়ার্ক অর্ডার ও ইনভয়েস সুবিধা" },
        en: { label: "Booking", value: "Work-order & invoice support" },
      },
    ],
  },
  {
    id: "ielts",
    route: "/ielts",
    bn: {
      name: "IELTS কোর্স এবং স্পোকেন ইংলিশ",
      headline: "ইংরেজি ভাষা দক্ষতা অর্জন করুন",
      subtitle: "অভিজ্ঞ প্রশিক্ষকদের সাথে IELTS প্রস্তুতি নিন",
      description:
        "আমাদের IELTS প্রস্তুতি কোর্স এবং স্পোকেন ইংলিশ ক্লাস আপনাকে আন্তর্জাতিক পরীক্ষায় সাফল্য অর্জনে সহায়তা করবে। অভিজ্ঞ প্রশিক্ষক, ছোট ব্যাচ সাইজ এবং ইন্টারেক্টিভ শেখার পদ্ধতি আমাদের কোর্সের বৈশিষ্ট্য।",
      details: [
        "আমাদের IELTS ও স্পোকেন ইংলিশ প্রোগ্রাম চলে সর্বোচ্চ ১৫ জনের ছোট ব্যাচে, তাই প্রতিটি শিক্ষার্থী প্রশিক্ষকের কাছ থেকে আলাদা মনোযোগ পায়। প্রশিক্ষকদের প্রত্যেকেরই ব্যান্ড ৭.৫+ স্কোর ও বহু বছরের পাঠদানের অভিজ্ঞতা রয়েছে।",
        "IELTS কোর্সটি ১০-১২ সপ্তাহের, চারটি মডিউলই পড়ানো হয় এবং প্রতি সপ্তাহে বাস্তব পরীক্ষার পরিবেশে পূর্ণাঙ্গ মক টেস্ট ও ওয়ান-টু-ওয়ান ফিডব্যাক দেওয়া হয়। স্পোকেন ইংলিশ কোর্সটি ২ মাসের — ফ্লুয়েন্সি, উচ্চারণ ও দৈনন্দিন কথোপকথনের অনুশীলনই এর মূল লক্ষ্য। কোর্স ফির মধ্যেই স্টাডি ম্যাটেরিয়াল, প্র্যাকটিস বই ও মক টেস্টের খরচ অন্তর্ভুক্ত।",
        "সকাল ও সন্ধ্যা — দুই শিফটেই ব্যাচ চালু আছে, ফলে শিক্ষার্থী ও চাকরিজীবী উভয়েই সময় মিলিয়ে নিতে পারেন। প্রতি মাসের শুরুতে নতুন ব্যাচ শুরু হয় — চলতি শিডিউল জানতে ও আসন নিশ্চিত করতে ফোন করুন বা হল অফিসে আসুন।",
      ],
    },
    en: {
      name: "IELTS Course & Spoken English",
      headline: "Master English Language Skills",
      subtitle: "Prepare for IELTS with experienced instructors",
      description:
        "Our IELTS preparation course and spoken English classes will help you succeed in international exams. Experienced instructors, small batch sizes, and interactive learning methods are the hallmarks of our courses.",
      details: [
        "Our IELTS and Spoken English programs run in small batches of at most 15 students, so every learner gets individual attention. All of our instructors hold band 7.5+ scores themselves and bring years of teaching experience.",
        "The IELTS course runs 10–12 weeks and covers all four modules, with a full mock test every week under real exam conditions followed by one-to-one feedback. The Spoken English course is a 2-month program focused on fluency, pronunciation, and everyday conversation practice. Study materials, practice books, and mock test costs are included in the course fee.",
        "Morning and evening batches are both available, so students and working professionals can fit classes into their day. New batches start at the beginning of every month — call us or visit the hall office to check the current schedule and reserve a seat.",
      ],
    },
    heroImage:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&q=80",
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80",
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&q=80",
      "https://images.unsplash.com/photo-1546410531-bb4caa6b3241?w=600&q=80",
    ],
    facts: [
      {
        id: "capacity",
        bn: { label: "ব্যাচ সাইজ", value: "সর্বোচ্চ ১৫ জন" },
        en: { label: "Batch Size", value: "Max 15 students" },
      },
      {
        id: "schedule",
        bn: {
          label: "কোর্সের মেয়াদ",
          value: "IELTS ১০-১২ সপ্তাহ / স্পোকেন ২ মাস",
        },
        en: { label: "Duration", value: "IELTS 10–12 wks / Spoken 2 mo" },
      },
      {
        id: "materials",
        bn: { label: "ম্যাটেরিয়াল", value: "বই ও মক টেস্ট ফি-র অন্তর্ভুক্ত" },
        en: { label: "Materials", value: "Books & mock tests included" },
      },
      {
        id: "booking",
        bn: { label: "ভর্তি", value: "প্রতি মাসের শুরুতে নতুন ব্যাচ" },
        en: { label: "Admission", value: "New batches every month" },
      },
    ],
  },
  {
    id: "computer-training",
    route: "/computer-training",
    bn: {
      name: "কম্পিউটার প্রশিক্ষণ",
      headline: "আধুনিক কম্পিউটার প্রশিক্ষণ",
      subtitle: "ডিজিটাল দক্ষতা গড়ে তুলুন",
      description:
        "আমাদের কম্পিউটার প্রশিক্ষণ কেন্দ্রে মাইক্রোসফট অফিস, গ্রাফিক ডিজাইন, ওয়েব ডেভেলপমেন্ট এবং ডাটা এন্ট্রি কোর্স পরিচালিত হয়। আধুনিক কম্পিউটার ল্যাব এবং দক্ষ প্রশিক্ষকদের তত্ত্বাবধানে হাতে-কলমে প্রশিক্ষণ প্রদান করা হয়।",
      details: [
        "আমাদের কম্পিউটার ল্যাবে রয়েছে ২৫টি আধুনিক ওয়ার্কস্টেশন — প্রতিটি প্রশিক্ষণার্থী কাজ করেন নিজের আলাদা কম্পিউটারে; ভাগাভাগি বা পাশে বসে দেখার ব্যাপার নেই। কোর্সের তালিকায় আছে মাইক্রোসফট অফিস, গ্রাফিক ডিজাইন (ফটোশপ ও ইলাস্ট্রেটর), ওয়েব ডেভেলপমেন্ট, ডাটা এন্ট্রি এবং ফ্রিল্যান্সিংয়ের মৌলিক বিষয়।",
        "ট্র্যাকভেদে কোর্সের মেয়াদ এক থেকে তিন মাস, আর প্রতিটি মডিউলে থাকে হাতে-কলমে প্রজেক্ট — ডিজাইন করা পোস্টার, প্র্যাকটিস ওয়েবসাইট কিংবা সম্পন্ন ডাটা প্রজেক্টের মতো বাস্তব কাজ নিয়েই প্রশিক্ষণার্থীরা কোর্স শেষ করেন। কোর্স শেষে সার্টিফিকেট দেওয়া হয়, আর আগ্রহীদের মার্কেটপ্লেসে ফ্রিল্যান্সিং শুরুর দিকনির্দেশনাও দেন আমাদের প্রশিক্ষকরা।",
        "শিক্ষার্থী ও চাকরিজীবীদের সুবিধার্থে সন্ধ্যা ও সাপ্তাহিক ছুটির দিনের ব্যাচ চালু আছে। ভর্তি চলে মাসিক সাইকেলে এবং ল্যাবের ধারণক্ষমতা অনুযায়ী আসন সীমিত — তাই পরবর্তী ব্যাচে ওয়ার্কস্টেশন নিশ্চিত করতে অফিসে আসুন বা আগে ফোন করুন।",
      ],
    },
    en: {
      name: "Computer Training",
      headline: "Modern Computer Training",
      subtitle: "Build your digital skills",
      description:
        "Our computer training center offers courses in Microsoft Office, graphic design, web development, and data entry. Hands-on training is provided in a modern computer lab under the supervision of skilled instructors.",
      details: [
        "Our computer lab has 25 modern workstations, so every trainee works on their own machine — no sharing, no watching from the sidelines. Courses cover Microsoft Office, graphic design (Photoshop and Illustrator), web development, data entry, and freelancing fundamentals.",
        "Courses run one to three months depending on the track, with hands-on projects in every module: trainees finish with real work — a designed poster, a live practice website, a completed data project — not just lecture notes. A certificate is awarded on completion, and our instructors guide interested graduates toward marketplace freelancing.",
        "Evening and weekend batches keep the schedule friendly for students and job holders. Admission runs in monthly cycles and seats are limited by lab capacity, so visit the office or call ahead to secure a workstation in the next batch.",
      ],
    },
    heroImage:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=600&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
    ],
    facts: [
      {
        id: "lab",
        bn: { label: "কম্পিউটার ল্যাব", value: "২৫টি নিজস্ব ওয়ার্কস্টেশন" },
        en: { label: "Computer Lab", value: "25 personal workstations" },
      },
      {
        id: "schedule",
        bn: { label: "সময়সূচি", value: "সন্ধ্যা ও ছুটির দিনের ব্যাচ" },
        en: { label: "Schedule", value: "Evening & weekend batches" },
      },
      {
        id: "certificate",
        bn: { label: "সার্টিফিকেট", value: "কোর্স শেষে প্রদান করা হয়" },
        en: { label: "Certificate", value: "Awarded on completion" },
      },
      {
        id: "booking",
        bn: { label: "ভর্তি", value: "মাসিক সাইকেলে, আসন সীমিত" },
        en: { label: "Admission", value: "Monthly cycles, limited seats" },
      },
    ],
  },
];
