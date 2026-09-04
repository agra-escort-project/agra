export interface Faq {
  question: string;
  answer: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  faqs: Faq[];
}

export const categories: Category[] = [
  { 
    id: "escorts", 
    name: "Escorts",
    description: "Explore the most beautiful and high-profile escorts offering premium companionship.",
    faqs: [
      { question: "What is the price of escorts in Agra?", answer: "Our premium escorts in Agra start from ₹2,500 for a standard session. VIP profiles may vary based on duration and services." },
      { question: "Are these independent escorts in Agra?", answer: "Yes, we connect you with highly verified independent escorts in Agra who offer a more personal and unhurried experience." },
      { question: "Do you offer hotel outcall services for escorts?", answer: "Absolutely. Our Agra escorts provide discrete outcall services to all major hotels and private residences across the city." },
      { question: "How can I verify the photos of the escorts?", answer: "We guarantee 100% genuine photos. The escort you select from our gallery is exactly who will arrive at your location." },
      { question: "Is cash on delivery available for booking?", answer: "Yes, we operate on a strict cash-on-arrival model. You only pay when the escort arrives at your location, ensuring zero advance payment scams." }
    ]
  },
  { 
    id: "bhabhi", 
    name: "Bhabhi",
    description: "Find mature, experienced, and stunning local Bhabhis for an unforgettable experience.",
    faqs: [
      { question: "What is the booking price for Bhabhi escorts in Agra?", answer: "Our exclusive Bhabhi escorts in Agra start at highly affordable rates. Contact us directly for the latest pricing and availability." },
      { question: "Are local Agra Bhabhis available for night stays?", answer: "Yes, many of our mature Bhabhi escorts are available for full-night bookings, offering a passionate and caring companion experience." },
      { question: "How discreet is the Bhabhi escort service?", answer: "Discretion is our top priority. Our Bhabhis arrive in casual, everyday attire to blend perfectly into any residential or hotel environment." },
      { question: "Can I book a genuine divorced or unsatisfied Bhabhi in Agra?", answer: "Yes, we represent authentic, divorced, and unsatisfied local Bhabhis who are actively seeking discreet fun, romance, and passionate companionship." },
      { question: "Do you require advance payment for Bhabhi bookings?", answer: "No, we never ask for advance payments. You pay the agreed amount in cash directly to the Bhabhi upon her arrival." }
    ]
  },
  { 
    id: "housewife", 
    name: "Housewife",
    description: "Connect with authentic, lonely housewives looking for discreet and passionate encounters.",
    faqs: [
      { question: "How can I find genuine housewife escorts in Agra?", answer: "Our agency maintains a private network of genuine, lonely housewives in Agra seeking discreet companionship and pleasure." },
      { question: "Are housewife escorts safe and verified?", answer: "Absolutely. Every housewife model is personally interviewed and verified by our team to ensure your complete safety and satisfaction." },
      { question: "What are the rates for a housewife companion in Agra?", answer: "Housewife escort rates are highly competitive. Since many are doing this for pleasure rather than just money, you get an incredibly authentic experience." },
      { question: "Can I host a housewife at my private apartment?", answer: "Yes, our housewife escorts are perfectly comfortable visiting private apartments or residences, provided the location is safe and secure." },
      { question: "Is my privacy protected when booking a housewife?", answer: "We maintain 100% confidentiality for both our clients and our housewife models. Your details are never shared with third parties." }
    ]
  },
  { 
    id: "college", 
    name: "College Girl",
    description: "Meet young, fresh, and energetic college girls who bring enthusiasm and charm.",
    faqs: [
      { question: "Are the college girl escorts in Agra actually students?", answer: "Yes, many of our fresh college girl escorts are actual university students in Agra looking to support their lifestyle or seeking fun." },
      { question: "What makes college girls different from regular escorts?", answer: "College girls offer a Girlfriend Experience (GFE). They are enthusiastic, fresh, highly energetic, and perfect for dates or parties." },
      { question: "What is the age group of your college girl escorts?", answer: "Our college girl models strictly range between 18 to 22 years of age, ensuring a youthful and vibrant companionship experience." },
      { question: "Can I take a college girl escort to a party or event?", answer: "Absolutely! Our college girls are well-educated, well-spoken, and make perfect plus-ones for social events, dinners, or parties." },
      { question: "How do I book a college girl for a full night in Agra?", answer: "Simply browse our gallery, select a college girl profile, and contact us on WhatsApp to arrange a discrete full-night booking at your hotel." }
    ]
  },
  { 
    id: "russian", 
    name: "Russian",
    description: "Experience luxury with gorgeous Russian and international models.",
    faqs: [
      { question: "Do you have real Russian escorts in Agra?", answer: "Yes, we represent genuine, high-class Russian and international models who travel to Agra for exclusive VIP client bookings." },
      { question: "What is the price of Russian escorts in Agra?", answer: "Russian escorts fall under our premium luxury category. Rates are higher than local models due to their exclusivity and travel requirements." },
      { question: "Do Russian escorts speak English?", answer: "Yes, all our Russian and international escorts are fluent in English, ensuring excellent communication and a smooth Girlfriend Experience." },
      { question: "Can I book a Russian model for a weekend trip?", answer: "Certainly. Our luxury Russian escorts are available for extended bookings, weekend getaways, and outstation trips outside Agra." },
      { question: "Are Russian escorts available 24/7 in Agra?", answer: "Availability depends on their travel schedule. We recommend booking Russian models at least a few hours in advance to secure your preferred companion." }
    ]
  },
  { 
    id: "vip", 
    name: "VIP Models",
    description: "Elite, high-class VIP models and celebrity escorts for the most exclusive clients.",
    faqs: [
      { question: "What defines a VIP escort in Agra?", answer: "VIP escorts are elite, top-tier models, including fashion models, TV actresses, and high-society women who offer the ultimate luxury experience." },
      { question: "How much does a high-profile VIP escort cost?", answer: "VIP escorts command premium rates starting from ₹10,000 and above, reflecting their beauty, status, and the exclusive service they provide." },
      { question: "Is the VIP escort service completely confidential?", answer: "We understand the needs of high-net-worth individuals. Our VIP escort service in Agra guarantees absolute, ironclad discretion." },
      { question: "Can VIP models accompany me to 5-star hotels?", answer: "Yes, our VIP models are specifically trained in elite etiquette and are perfectly suited for 5-star hotel environments and luxury resorts like ITC Mughal or Oberoi Amarvilas." },
      { question: "Do I need to pay an advance for VIP bookings?", answer: "While standard bookings are cash-on-arrival, some extremely high-profile celebrity escorts may require a token confirmation advance. We will inform you transparently during booking." }
    ]
  },
  { 
    id: "corporate", 
    name: "Corporate",
    description: "Professional corporate women and office girls for intelligent and sophisticated companionship.",
    faqs: [
      { question: "What is a corporate escort?", answer: "Corporate escorts are sophisticated, working-class women—such as receptionists, HR professionals, or office girls—who offer part-time companionship." },
      { question: "Why book an office girl in Agra?", answer: "Office girls provide a highly intelligent, mature, and professional Girlfriend Experience. They are great conversationalists and very classy." },
      { question: "Are corporate women available during the day?", answer: "Since they hold regular jobs, availability varies. Many are available during lunch hours, evenings, or weekends. Contact us to check schedule availability." },
      { question: "Can a corporate escort attend a business dinner with me?", answer: "Yes, they excel at corporate events. Their professional demeanor makes them the perfect 'fake girlfriend' or date for business dinners." },
      { question: "What are the rates for corporate escorts in Agra?", answer: "Rates are very reasonable. You get the perfect blend of beauty and brains without the extreme premium of celebrity models." }
    ]
  },
  { 
    id: "gym", 
    name: "Gym Girls",
    description: "Fit, athletic, and flexible gym girls offering a highly active and energetic experience.",
    faqs: [
      { question: "What makes gym girl escorts special?", answer: "Gym girl escorts possess incredibly fit, toned, and athletic bodies. They offer immense stamina, flexibility, and a highly energetic experience." },
      { question: "Are these girls actually fitness trainers?", answer: "Yes, many of our gym girl escorts are actual fitness instructors, yoga teachers, or dedicated athletes in Agra." },
      { question: "Can I request specific physical attributes?", answer: "Absolutely. Whether you prefer a slim-toned physique or a thick, muscular build, we have athletic escorts to match your specific desires." },
      { question: "What is the price for athletic escorts in Agra?", answer: "Our gym girls fall into a specialized category, but their rates are highly competitive. Contact us for detailed pricing on specific models." },
      { question: "Are gym escorts available for outcall to my location?", answer: "Yes, our athletic escorts are available for secure outcall services to any reputed hotel or private residence in Agra." }
    ]
  }
];
