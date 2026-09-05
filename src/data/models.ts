export interface EscortModel {
  id: string;
  slug: string;
  name: string;
  age: number;
  height: string;
  measurements: string;
  languages: string[];
  location: string;
  shortBio: string;
  fullBio: string;
  images: string[];
  services: string[];
  reviews: { author: string; rating: number; text: string; date: string }[];
}

export const models: EscortModel[] = [
  {
    id: "9",
    slug: "kriti",
    name: "Kriti",
    age: 23,
    height: "5'8\"",
    measurements: "34-26-36",
    languages: ["English","Hindi"],
    location: "MG Road",
    shortBio: "Traditional beauty with a modern twist, perfect for long dates.",
    fullBio: "Kriti is a beautiful and enchanting companion. Traditional beauty with a modern twist, perfect for long dates. She loves meeting new people and providing a memorable experience that you will cherish forever. Available for both in-calls and out-calls at luxury locations.",
    images: [
      "/gallary/kriti/hot-girl-pic-agra-kriti-1.jpg",
      "/gallary/kriti/nude-girl-pic-agra-kriti-1.jpg",
      "/gallary/kriti/sexy-girl-pic-agra-kriti-1.jpg"
    ],
    services: ["Girlfriend Experience (GFE)","Outcall","Dinner Date","Roleplay"],
    reviews: [
      { author: "Verified Client", rating: 5, text: "Absolutely stunning! The photos don't even do her justice. Very sweet and professional.", date: "2026-07-10" },
      { author: "Rahul M.", rating: 5, text: "One of the best experiences I've had in Agra. Highly recommended.", date: "2026-06-25" }
    ]
  },
  {
    id: "10",
    slug: "neha",
    name: "Neha",
    age: 22,
    height: "5'7\"",
    measurements: "34-26-36",
    languages: ["English","Hindi"],
    location: "Bodla",
    shortBio: "Charming and incredibly sweet, giving you the best GFE.",
    fullBio: "Neha is a beautiful and enchanting companion. Charming and incredibly sweet, giving you the best GFE. She loves meeting new people and providing a memorable experience that you will cherish forever. Available for both in-calls and out-calls at luxury locations.",
    images: [
      "/gallary/neha/best-callgirl-in-agra-neha-1.jpg",
      "/gallary/neha/hot-girl-pic-agra-neha-1.jpg",
      "/gallary/neha/nude-girl-pic-agra-neha-1.jpg",
      "/gallary/neha/sexy-girl-pic-agra-neha-1.jpg"
    ],
    services: ["Girlfriend Experience (GFE)","Outcall","Dinner Date","Roleplay"],
    reviews: [
      { author: "Verified Client", rating: 5, text: "Absolutely stunning! The photos don't even do her justice. Very sweet and professional.", date: "2026-07-10" },
      { author: "Rahul M.", rating: 5, text: "One of the best experiences I've had in Agra. Highly recommended.", date: "2026-06-25" }
    ]
  },
  {
    id: "11",
    slug: "kavya",
    name: "Kavya",
    age: 25,
    height: "5'3\"",
    measurements: "34-26-36",
    languages: ["English","Hindi"],
    location: "Shahganj",
    shortBio: "Intelligent and beautiful, a perfect plus-one for business trips.",
    fullBio: "Kavya is a beautiful and enchanting companion. Intelligent and beautiful, a perfect plus-one for business trips. She loves meeting new people and providing a memorable experience that you will cherish forever. Available for both in-calls and out-calls at luxury locations.",
    images: [
      "/gallary/kavya/callgirl-pic-agra-kavya-1.jpg",
      "/gallary/kavya/hot-girl-pic-agra-kavya-1.jpg",
      "/gallary/kavya/hot-girl-pic-agra-kavya-2.jpg",
      "/gallary/kavya/nude-girl-pic-agra-kavya-1.jpg"
    ],
    services: ["Girlfriend Experience (GFE)","Outcall","Dinner Date","Roleplay"],
    reviews: [
      { author: "Verified Client", rating: 5, text: "Absolutely stunning! The photos don't even do her justice. Very sweet and professional.", date: "2026-07-10" },
      { author: "Rahul M.", rating: 5, text: "One of the best experiences I've had in Agra. Highly recommended.", date: "2026-06-25" }
    ]
  },
  {
    id: "12",
    slug: "shruti",
    name: "Shruti",
    age: 21,
    height: "5'7\"",
    measurements: "34-26-36",
    languages: ["English","Hindi"],
    location: "Arjun Nagar",
    shortBio: "Curvy and passionate, she knows how to make you feel special.",
    fullBio: "Shruti is a beautiful and enchanting companion. Curvy and passionate, she knows how to make you feel special. She loves meeting new people and providing a memorable experience that you will cherish forever. Available for both in-calls and out-calls at luxury locations.",
    images: [
      "/gallary/shruti/hot-girl-pic-agra-shruti-1.jpg",
      "/gallary/shruti/nude-girl-pic-agra-shruti-1.jpg",
      "/gallary/shruti/sexy-girl-pic-agra-shruti-1.jpg"
    ],
    services: ["Girlfriend Experience (GFE)","Outcall","Dinner Date","Roleplay"],
    reviews: [
      { author: "Verified Client", rating: 5, text: "Absolutely stunning! The photos don't even do her justice. Very sweet and professional.", date: "2026-07-10" },
      { author: "Rahul M.", rating: 5, text: "One of the best experiences I've had in Agra. Highly recommended.", date: "2026-06-25" }
    ]
  },
  {
    id: "1",
    slug: "ananya",
    name: "Ananya",
    age: 22,
    height: "5'5\"",
    measurements: "34-26-36",
    languages: ["English","Hindi"],
    location: "Tajganj",
    shortBio: "A highly educated, stunning companion perfect for VIP events.",
    fullBio: "Ananya is a breathtakingly gorgeous, highly educated companion who knows exactly how to make a gentleman feel special. Her sophisticated demeanor makes her the perfect plus-one for high-society dinner dates or corporate events. She loves deep conversations, fine dining, and providing the ultimate Girlfriend Experience.",
    images: [
      "/gallary/ananya/best-callgirl-in-agra-ananya-1.jpg"],
    services: ["Girlfriend Experience (GFE)","Outcall","Dinner Date","Roleplay"],
    reviews: [
      { author: "Verified Client", rating: 5, text: "Absolutely stunning! The photos don't even do her justice. Very sweet and professional.", date: "2026-07-10" },
      { author: "Rahul M.", rating: 5, text: "One of the best experiences I've had in Agra. Highly recommended.", date: "2026-06-25" }
    ]
  },
  {
    id: "2",
    slug: "priya",
    name: "Priya",
    age: 24,
    height: "5'7\"",
    measurements: "36-24-36",
    languages: ["English","Hindi","Punjabi"],
    location: "Sanjay Place",
    shortBio: "Bold, adventurous, and incredibly fun to be around.",
    fullBio: "Priya is an adventurous and deeply passionate companion. If you are looking for an unforgettable night filled with excitement, she is the perfect match. With her stunning curves and hypnotic eyes, she guarantees a deeply satisfying and completely discreet encounter.",
    images: [
      "/gallary/priya/pic-priya-1.jpg"
    ],
    services: ["Girlfriend Experience (GFE)","Outcall","Dinner Date","Roleplay"],
    reviews: [
      { author: "Verified Client", rating: 5, text: "Absolutely stunning! The photos don't even do her justice. Very sweet and professional.", date: "2026-07-10" },
      { author: "Rahul M.", rating: 5, text: "One of the best experiences I've had in Agra. Highly recommended.", date: "2026-06-25" }
    ]
  },
  {
    id: "3",
    slug: "natasha",
    name: "Natasha (VIP)",
    age: 21,
    height: "5'8\"",
    measurements: "34-24-34",
    languages: ["English","Russian"],
    location: "Fatehabad Road",
    shortBio: "Stunning international VIP model for the elite gentleman.",
    fullBio: "Natasha is one of our most highly sought-after international models. She brings a touch of exotic European elegance to Agra. Perfect for long weekend getaways at 5-star resorts, Natasha is absolutely breathtaking and guarantees an elite, unhurried experience.",
    images: [
      "/gallary/natasha/pic-natasha-1.jpg"
    ],
    services: ["Girlfriend Experience (GFE)","Outcall","Dinner Date","Roleplay"],
    reviews: [
      { author: "Verified Client", rating: 5, text: "Absolutely stunning! The photos don't even do her justice. Very sweet and professional.", date: "2026-07-10" },
      { author: "Rahul M.", rating: 5, text: "One of the best experiences I've had in Agra. Highly recommended.", date: "2026-06-25" }
    ]
  },
  {
    id: "4",
    slug: "sneha",
    name: "Sneha",
    age: 23,
    height: "5'4\"",
    measurements: "34-26-34",
    languages: ["Hindi","English"],
    location: "Kamla Nagar",
    shortBio: "Sweet, affectionate, and offers the best Girlfriend Experience.",
    fullBio: "Sneha is known for her incredibly sweet and submissive nature. She is the absolute queen of the Girlfriend Experience (GFE). If you want cuddling, deep affection, and a night of pure intimacy without the feeling of a rushed transaction, Sneha is your girl.",
    images: [
      "/gallary/sneha/pic-sneha-1.jpg"
    ],
    services: ["Girlfriend Experience (GFE)","Outcall","Dinner Date","Roleplay"],
    reviews: [
      { author: "Verified Client", rating: 5, text: "Absolutely stunning! The photos don't even do her justice. Very sweet and professional.", date: "2026-07-10" },
      { author: "Rahul M.", rating: 5, text: "One of the best experiences I've had in Agra. Highly recommended.", date: "2026-06-25" }
    ]
  },
  {
    id: "5",
    slug: "kiara",
    name: "Kiara",
    age: 25,
    height: "5'6\"",
    measurements: "36-26-38",
    languages: ["English","Hindi"],
    location: "Sikandra",
    shortBio: "Curvy, confident, and unforgettable.",
    fullBio: "Kiara brings curves and confidence. She is a highly experienced companion who knows how to take charge and ensure her client is completely satisfied. Very discreet and available for outcalls to all major hotels.",
    images: [
      "/gallary/kiara/nude-girl-pic-agra-kiara-1.jpg"
    ],
    services: ["Girlfriend Experience (GFE)","Outcall","Dinner Date","Roleplay"],
    reviews: [
      { author: "Verified Client", rating: 5, text: "Absolutely stunning! The photos don't even do her justice. Very sweet and professional.", date: "2026-07-10" },
      { author: "Rahul M.", rating: 5, text: "One of the best experiences I've had in Agra. Highly recommended.", date: "2026-06-25" }
    ]
  },
  {
    id: "6",
    slug: "tanya",
    name: "Tanya",
    age: 20,
    height: "5'2\"",
    measurements: "32-24-34",
    languages: ["Hindi","English"],
    location: "Dayal Bagh",
    shortBio: "Petite, energetic college girl looking for fun.",
    fullBio: "Tanya is a young, bubbly, and incredibly energetic college girl. She loves exploring the city and having fun behind closed doors. Her petite frame and innocent look make her highly requested among our elite clients.",
    images: [
      "/gallary/tanya/best-callgirl-in-agra-tanya-1.jpg",
      "/gallary/tanya/nude-girl-pic-agra-tanya-1.jpg",
      "/gallary/tanya/sexy-girl-pic-agra-tanya-1.jpg"
    ],
    services: ["Girlfriend Experience (GFE)","Outcall","Dinner Date","Roleplay"],
    reviews: [
      { author: "Verified Client", rating: 5, text: "Absolutely stunning! The photos don't even do her justice. Very sweet and professional.", date: "2026-07-10" },
      { author: "Rahul M.", rating: 5, text: "One of the best experiences I've had in Agra. Highly recommended.", date: "2026-06-25" }
    ]
  },
  {
    id: "7",
    slug: "aisha",
    name: "Aisha",
    age: 25,
    height: "5'8\"",
    measurements: "34-26-36",
    languages: ["English","Hindi"],
    location: "Civil Lines",
    shortBio: "Elegant and classy companion for the sophisticated gentleman.",
    fullBio: "Aisha is a beautiful and enchanting companion. Elegant and classy companion for the sophisticated gentleman. She loves meeting new people and providing a memorable experience that you will cherish forever. Available for both in-calls and out-calls at luxury locations.",
    images: [
      "/gallary/aisha/best-callgirl-in-agra-aisha-1.jpg",
      "/gallary/aisha/hot-girl-pic-agra-aisha-1.jpg",
      "/gallary/aisha/nude-girl-pic-agra-aisha-1.jpg",
      "/gallary/aisha/sexy-girl-pic-agra-aisha-1.jpg"
    ],
    services: ["Girlfriend Experience (GFE)","Outcall","Dinner Date","Roleplay"],
    reviews: [
      { author: "Verified Client", rating: 5, text: "Absolutely stunning! The photos don't even do her justice. Very sweet and professional.", date: "2026-07-10" },
      { author: "Rahul M.", rating: 5, text: "One of the best experiences I've had in Agra. Highly recommended.", date: "2026-06-25" }
    ]
  },
  {
    id: "8",
    slug: "riya",
    name: "Riya",
    age: 22,
    height: "5'3\"",
    measurements: "34-26-36",
    languages: ["English","Hindi"],
    location: "Khandari",
    shortBio: "Young, fun-loving, and always ready for an adventure.",
    fullBio: "Riya is a beautiful and enchanting companion. Young, fun-loving, and always ready for an adventure. She loves meeting new people and providing a memorable experience that you will cherish forever. Available for both in-calls and out-calls at luxury locations.",
    images: [
      "/gallary/riya/best-callgirl-in-agra-riya-1.jpg",
      "/gallary/riya/hot-girl-pic-agra-riya-1.jpg",
      "/gallary/riya/nude-girl-pic-agra-riya-1.jpg"
    ],
    services: ["Girlfriend Experience (GFE)","Outcall","Dinner Date","Roleplay"],
    reviews: [
      { author: "Verified Client", rating: 5, text: "Absolutely stunning! The photos don't even do her justice. Very sweet and professional.", date: "2026-07-10" },
      { author: "Rahul M.", rating: 5, text: "One of the best experiences I've had in Agra. Highly recommended.", date: "2026-06-25" }
    ]
  },
  {
    id: "13",
    slug: "simran",
    name: "Simran",
    age: 19,
    height: "5'5\"",
    measurements: "34-26-36",
    languages: ["English","Hindi"],
    location: "Balkeshwar",
    shortBio: "Stunning Punjabi beauty with a lovely personality.",
    fullBio: "Simran is a beautiful and enchanting companion. Stunning Punjabi beauty with a lovely personality. She loves meeting new people and providing a memorable experience that you will cherish forever. Available for both in-calls and out-calls at luxury locations.",
    images: [
      "/gallary/simran/best-callgirl-in-agra-simran-1.jpg",
      "/gallary/simran/callgirl-pic-agra-simran-1.jpg",
      "/gallary/simran/hot-girl-pic-agra-simran-1.jpg",
      "/gallary/simran/nude-girl-pic-agra-simran-1.jpg",
      "/gallary/simran/sexy-girl-pic-agra-simran-1.jpg"
    ],
    services: ["Girlfriend Experience (GFE)","Outcall","Dinner Date","Roleplay"],
    reviews: [
      { author: "Verified Client", rating: 5, text: "Absolutely stunning! The photos don't even do her justice. Very sweet and professional.", date: "2026-07-10" },
      { author: "Rahul M.", rating: 5, text: "One of the best experiences I've had in Agra. Highly recommended.", date: "2026-06-25" }
    ]
  },
  {
    id: "14",
    slug: "meha",
    name: "Meha",
    age: 25,
    height: "5'7\"",
    measurements: "34-26-36",
    languages: ["English","Hindi"],
    location: "Lohamandi",
    shortBio: "Fierce, independent, and incredibly sexy.",
    fullBio: "Meha is a beautiful and enchanting companion. Fierce, independent, and incredibly sexy. She loves meeting new people and providing a memorable experience that you will cherish forever. Available for both in-calls and out-calls at luxury locations.",
    images: [
      "/gallary/meha/best-callgirl-in-agra-meha-1.jpg",
      "/gallary/meha/hot-girl-pic-agra-meha-1.jpg",
      "/gallary/meha/hot-girl-pic-agra-meha-2.jpg",
      "/gallary/meha/nude-girl-pic-agra-meha-1.jpg",
      "/gallary/meha/nude-girl-pic-agra-meha-2.jpg"
    ],
    services: ["Girlfriend Experience (GFE)","Outcall","Dinner Date","Roleplay"],
    reviews: [
      { author: "Verified Client", rating: 5, text: "Absolutely stunning! The photos don't even do her justice. Very sweet and professional.", date: "2026-07-10" },
      { author: "Rahul M.", rating: 5, text: "One of the best experiences I've had in Agra. Highly recommended.", date: "2026-06-25" }
    ]
  },
  {
    id: "15",
    slug: "zoya",
    name: "Zoya",
    age: 23,
    height: "5'3\"",
    measurements: "34-26-36",
    languages: ["English","Hindi"],
    location: "Sadar Bazar",
    shortBio: "Exotic looks with an open mind for all your fantasies.",
    fullBio: "Zoya is a beautiful and enchanting companion. Exotic looks with an open mind for all your fantasies. She loves meeting new people and providing a memorable experience that you will cherish forever. Available for both in-calls and out-calls at luxury locations.",
    images: [
      "/gallary/zoya/best-callgirl-in-agra-zoya-1.jpg",
      "/gallary/zoya/callgirl-pic-agra-zoya-1.jpg",
      "/gallary/zoya/callgirl-pic-agra-zoya-2.jpg",
      "/gallary/zoya/college-girl-pic-agra-zoya-1.jpg",
      "/gallary/zoya/hot-girl-pic-agra-zoya-1.jpg",
      "/gallary/zoya/nude-girl-pic-agra-zoya-1.jpg",
      "/gallary/zoya/nude-girl-pic-agra-zoya-2.jpg",
      "/gallary/zoya/nude-girl-pic-agra-zoya-3.jpg",
      "/gallary/zoya/nude-girl-pic-agra-zoya-4.jpg",
      "/gallary/zoya/school-girl-pic-agra-zoya-1.jpg",
      "/gallary/zoya/sexy-girl-pic-agra-zoya-1.jpg"
    ],
    services: ["Girlfriend Experience (GFE)","Outcall","Dinner Date","Roleplay"],
    reviews: [
      { author: "Verified Client", rating: 5, text: "Absolutely stunning! The photos don't even do her justice. Very sweet and professional.", date: "2026-07-10" },
      { author: "Rahul M.", rating: 5, text: "One of the best experiences I've had in Agra. Highly recommended.", date: "2026-06-25" }
    ]
  },
  {
    id: "16",
    slug: "divya",
    name: "Divya",
    age: 20,
    height: "5'3\"",
    measurements: "34-26-36",
    languages: ["English","Hindi"],
    location: "Tajganj",
    shortBio: "Friendly, affectionate, and very discreet.",
    fullBio: "Divya is a beautiful and enchanting companion. Friendly, affectionate, and very discreet. She loves meeting new people and providing a memorable experience that you will cherish forever. Available for both in-calls and out-calls at luxury locations.",
    images: [
      "/gallary/divya/best-callgirl-in-agra-divya-1.jpg",
      "/gallary/divya/callgirl-pic-agra-divya-1.jpg",
      "/gallary/divya/hot-girl-pic-agra-divya-1.jpg",
      "/gallary/divya/school-girl-pic-agra-divya-1.jpg",
      "/gallary/divya/sexy-girl-pic-agra-divya-1.jpg"
    ],
    services: ["Girlfriend Experience (GFE)","Outcall","Dinner Date","Roleplay"],
    reviews: [
      { author: "Verified Client", rating: 5, text: "Absolutely stunning! The photos don't even do her justice. Very sweet and professional.", date: "2026-07-10" },
      { author: "Rahul M.", rating: 5, text: "One of the best experiences I've had in Agra. Highly recommended.", date: "2026-06-25" }
    ]
  },
  {
    id: "17",
    slug: "roshni",
    name: "Roshni",
    age: 26,
    height: "5'3\"",
    measurements: "34-26-36",
    languages: ["English","Hindi"],
    location: "Fatehabad Road",
    shortBio: "Bright and bubbly, illuminating every room she enters.",
    fullBio: "Roshni is a beautiful and enchanting companion. Bright and bubbly, illuminating every room she enters. She loves meeting new people and providing a memorable experience that you will cherish forever. Available for both in-calls and out-calls at luxury locations.",
    images: [
      "/gallary/roshni/callgirl-pic-agra-roshni-1.jpg",
      "/gallary/roshni/hot-girl-pic-agra-roshni-1.jpg",
      "/gallary/roshni/nude-girl-pic-agra-roshni-1.jpg",
      "/gallary/roshni/sexy-girl-pic-agra-roshni-1.jpg"
    ],
    services: ["Girlfriend Experience (GFE)","Outcall","Dinner Date","Roleplay"],
    reviews: [
      { author: "Verified Client", rating: 5, text: "Absolutely stunning! The photos don't even do her justice. Very sweet and professional.", date: "2026-07-10" },
      { author: "Rahul M.", rating: 5, text: "One of the best experiences I've had in Agra. Highly recommended.", date: "2026-06-25" }
    ]
  },
  {
    id: "18",
    slug: "isha",
    name: "Isha",
    age: 22,
    height: "5'9\"",
    measurements: "34-26-36",
    languages: ["English","Hindi"],
    location: "Sanjay Place",
    shortBio: "A true romantic at heart, looking to share intimate moments.",
    fullBio: "Isha is a beautiful and enchanting companion. A true romantic at heart, looking to share intimate moments. She loves meeting new people and providing a memorable experience that you will cherish forever. Available for both in-calls and out-calls at luxury locations.",
    images: [
      "/gallary/isha/hot-girl-pic-agra-isha-1.jpg",
      "/gallary/isha/nude-girl-pic-agra-isha-1.jpg",
      "/gallary/isha/sexy-girl-pic-agra-isha-1.jpg"
    ],
    services: ["Girlfriend Experience (GFE)","Outcall","Dinner Date","Roleplay"],
    reviews: [
      { author: "Verified Client", rating: 5, text: "Absolutely stunning! The photos don't even do her justice. Very sweet and professional.", date: "2026-07-10" },
      { author: "Rahul M.", rating: 5, text: "One of the best experiences I've had in Agra. Highly recommended.", date: "2026-06-25" }
    ]
  },
  {
    id: "19",
    slug: "sonia",
    name: "Sonia",
    age: 26,
    height: "5'8\"",
    measurements: "34-26-36",
    languages: ["English","Hindi"],
    location: "Kamla Nagar",
    shortBio: "Experienced and sophisticated, catering to mature gentlemen.",
    fullBio: "Sonia is a beautiful and enchanting companion. Experienced and sophisticated, catering to mature gentlemen. She loves meeting new people and providing a memorable experience that you will cherish forever. Available for both in-calls and out-calls at luxury locations.",
    images: [
      "/gallary/sonia/college-girl-pic-agra-sonia-1.jpg",
      "/gallary/sonia/hot-girl-pic-agra-sonia-1.jpg",
      "/gallary/sonia/nude-girl-pic-agra-sonia-1.jpg",
      "/gallary/sonia/sexy-girl-pic-agra-sonia-1.jpg"
    ],
    services: ["Girlfriend Experience (GFE)","Outcall","Dinner Date","Roleplay"],
    reviews: [
      { author: "Verified Client", rating: 5, text: "Absolutely stunning! The photos don't even do her justice. Very sweet and professional.", date: "2026-07-10" },
      { author: "Rahul M.", rating: 5, text: "One of the best experiences I've had in Agra. Highly recommended.", date: "2026-06-25" }
    ]
  },
  {
    id: "20",
    slug: "tara",
    name: "Tara",
    age: 25,
    height: "5'5\"",
    measurements: "34-26-36",
    languages: ["English","Hindi"],
    location: "Sikandra",
    shortBio: "A shining star in our agency, highly requested and exclusive.",
    fullBio: "Tara is a beautiful and enchanting companion. A shining star in our agency, highly requested and exclusive. She loves meeting new people and providing a memorable experience that you will cherish forever. Available for both in-calls and out-calls at luxury locations.",
    images: [
      "/gallary/tara/hot-girl-pic-agra-tara-1.jpg",
      "/gallary/tara/nude-girl-pic-agra-tara-1.jpg"
    ],
    services: ["Girlfriend Experience (GFE)","Outcall","Dinner Date","Roleplay"],
    reviews: [
      { author: "Verified Client", rating: 5, text: "Absolutely stunning! The photos don't even do her justice. Very sweet and professional.", date: "2026-07-10" },
      { author: "Rahul M.", rating: 5, text: "One of the best experiences I've had in Agra. Highly recommended.", date: "2026-06-25" }
    ]
  },
  {
    id: "22",
    slug: "jasmine",
    name: "Jasmine",
    age: 22,
    height: "5'6\"",
    measurements: "34-24-34",
    languages: ["English","Hindi"],
    location: "Fatehabad Road",
    shortBio: "A vibrant and energetic companion ready to make your night unforgettable.",
    fullBio: "Jasmine is a vibrant and energetic companion ready to make your night unforgettable. With her stunning looks and charming personality, she is the perfect match for those who seek thrill and excitement. She enjoys nightlife, dancing, and providing a passionate experience.",
    images: [
      "/gallary/jasmine/best-callgirl-in-agra-jasmine-1.jpg",
      "/gallary/jasmine/hot-girl-pic-agra-jasmine-1.jpg"
    ],
    services: ["Girlfriend Experience (GFE)","Outcall","Dinner Date","Party Companion"],
    reviews: [
      { author: "Verified Client", rating: 5, text: "Absolutely stunning! The photos don't even do her justice.", date: "2026-07-10" }
    ]
  },
  {
    id: "24",
    slug: "maya",
    name: "Maya",
    age: 21,
    height: "5'4\"",
    measurements: "32-24-34",
    languages: ["English","Hindi"],
    location: "Tajganj",
    shortBio: "Sweet, innocent looks with a wild side.",
    fullBio: "Maya has sweet, innocent looks with a wild side. She is playful, affectionate, and loves to cuddle. Her bubbly nature will instantly put you at ease, making her the perfect companion for a relaxed weekend.",
    images: [
      "/gallary/maya/best-callgirl-in-agra-maya-1.jpg",
      "/gallary/maya/college-girl-pic-agra-maya-1.jpg",
      "/gallary/maya/hot-girl-pic-agra-maya-1.jpg",
      "/gallary/maya/hot-girl-pic-agra-maya-2.jpg",
      "/gallary/maya/nude-girl-pic-agra-maya-1.jpg"
    ],
    services: ["Girlfriend Experience (GFE)","Outcall","Roleplay"],
    reviews: [
      { author: "Ankur", rating: 5, text: "Amazing time with Maya.", date: "2026-07-15" }
    ]
  },
  {
    id: "25",
    slug: "aditi",
    name: "Aditi",
    age: 26,
    height: "5'7\"",
    measurements: "36-28-38",
    languages: ["English","Hindi","Punjabi"],
    location: "Kamla Nagar",
    shortBio: "Curvy, beautiful, and highly experienced.",
    fullBio: "Aditi is curvy, beautiful, and highly experienced in providing the ultimate pleasure. She knows exactly how to cater to your desires and ensures a deeply satisfying experience. Highly recommended for those who appreciate voluptuous beauty.",
    images: [
      "/gallary/aditi/hot-girl-pic-agra-aditi-1.jpg",
      "/gallary/aditi/nude-girl-pic-agra-aditi-1.jpg"
    ],
    services: ["Girlfriend Experience (GFE)","Outcall","Dinner Date"],
    reviews: [
      { author: "Client", rating: 5, text: "She is a goddess.", date: "2026-07-20" }
    ]
  },
  {
    id: "26",
    slug: "nisha",
    name: "Nisha",
    age: 23,
    height: "5'6\"",
    measurements: "34-25-35",
    languages: ["English","Hindi"],
    location: "Dayal Bagh",
    shortBio: "A passionate and alluring model waiting for you.",
    fullBio: "Nisha is a passionate and alluring model waiting for you. Her sensual aura and captivating eyes will mesmerize you. She is dedicated to making every moment spent with her truly magical and unforgettable.",
    images: [
      "/gallary/nisha/callgirl-pic-agra-nisha-1.jpg",
      "/gallary/nisha/hot-girl-pic-agra-nisha-1.jpg",
      "/gallary/nisha/nude-girl-pic-agra-nisha-1.jpg",
      "/gallary/nisha/sexy-girl-pic-agra-nisha-1.jpg"
    ],
    services: ["Girlfriend Experience (GFE)","Outcall","Party Companion"],
    reviews: [
      { author: "VIP Guest", rating: 5, text: "Simply the best.", date: "2026-07-22" }
    ]
  },
  {
    id: "27",
    slug: "trisha",
    name: "Trisha",
    age: 24,
    height: "5'5\"",
    measurements: "34-26-36",
    languages: ["English","Hindi"],
    location: "Sikandra",
    shortBio: "A glamorous VIP model for luxury events.",
    fullBio: "Trisha is a glamorous VIP model for luxury events. Her beauty is matched only by her intelligence and charm.",
    images: [
      "/gallary/trisha/callgirl-pic-agra-trisha-1.jpg",
      "/gallary/trisha/college-girl-pic-agra-trisha-1.jpg",
      "/gallary/trisha/college-girl-pic-agra-trisha-2.jpg",
      "/gallary/trisha/hot-girl-pic-agra-trisha-1.jpg",
      "/gallary/trisha/school-girl-pic-agra-trisha-1.jpg"
    ],
    services: ["Girlfriend Experience (GFE)","Outcall"],
    reviews: [
      { author: "VIP", rating: 5, text: "Incredible.", date: "2026-07-28" }
    ]
  }
];

export function getFeaturedModels() {
  return models.slice(0, 4);
}

export function getAllModels() {
  return models;
}

export function getModelBySlug(slug: string) {
  return models.find(m => m.slug === slug);
}
