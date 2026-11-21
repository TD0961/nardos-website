export type Language = "en" | "am" | "om";

export interface Translations {
  [key: string]: {
    en: string;
    am: string;
    om: string;
  };
}

export const translations: Translations = {
  // Navigation
  navHome: {
    en: "Home",
    am: "ዋና ገጽ",
    om: "Fuula Duraa",
  },
  navProjects: {
    en: "Projects",
    am: "ፕሮጀክቶች",
    om: "Pirojektoota",
  },
  navPropertiesList: {
    en: "Properties Standard List",
    am: "የንብረቶች ዝርዝር",
    om: "Tarree Qabeenyaa",
  },
  navPropertiesMap: {
    en: "Properties With Map",
    am: "ንብረቶች በካርታ",
    om: "Qabeenya Kaartaadhaan",
  },
  navConstructionUpdates: {
    en: "Construction Updates",
    am: "የግንባታ ሂደት",
    om: "Haala Ijaarsaa",
  },
  navAboutUs: {
    en: "About Us",
    am: "ስለ እኛ",
    om: "Waa\'ee Keenya",
  },
  navEvents: {
    en: "Events",
    am: "ክስተቶች",
    om: "Taateewwan",
  },
  navNewsEvents: {
    en: "News & Events",
    am: "ዜናዎች እና ክስተቶች",
    om: "Oduu fi Taateewwan",
  },
  navBlog: {
    en: "Insights & Blog",
    am: "ብሎግ እና መረጃዎች",
    om: "Biloogii fi Hubannoo",
  },
  navOurTeam: {
    en: "Our Team",
    am: "ቡድናችን",
    om: "Garee Keenya",
  },
  navManagement: {
    en: "Management Team",
    am: "የስራ አመራር ቦርድ",
    om: "Garee Hojii Gaggeessitootaa",
  },
  navSalesOfficers: {
    en: "Sales Officers",
    am: "የሽያጭ አማካሪዎች",
    om: "Gurgurtoota fi Gorsitoota",
  },
  navJobPortal: {
    en: "Job Portal",
    am: "የስራ እድሎች",
    om: "Carraa Hojii",
  },
  navContact: {
    en: "Contact",
    am: "ያግኙን",
    om: "Nu Qunnamaa",
  },

  // Common CTAs & Buttons
  callNow: {
    en: "Call 0938125777",
    am: "ይደውሉ 0938125777",
    om: "Bilbilaa 0938125777",
  },
  whatsappChat: {
    en: "WhatsApp",
    am: "ዋትስአፕ",
    om: "WhatsApp",
  },
  bookTour: {
    en: "Book Site Visit",
    am: "የሳይት ጉብኝት ይያዙ",
    om: "Iddoo Ijaarsaa Daawwadhaa",
  },
  viewDetails: {
    en: "View Details",
    am: "ዝርዝሩን ይመልከቱ",
    om: "Bal\'inaan Ilaalaa",
  },
  inquireNow: {
    en: "Inquire Now",
    am: "አሁን ይጠይቁ",
    om: "Amma Gaafadhaa",
  },
  allLocations: {
    en: "All Locations",
    am: "ሁሉም አካባቢዎች",
    om: "Bakkeewwan Hundumaa",
  },
  exploreAll: {
    en: "Explore All Properties",
    am: "ሁሉንም ንብረቶች ይመልከቱ",
    om: "Qabeenya Hundumaa Ilaalaa",
  },

  // Hero Section
  heroBadge: {
    en: "Temer Property • Real Estate in Ethiopia",
    am: "ቴመር ፕሮፐርቲ • የሪል እስቴት አልሚ በኢትዮጵያ",
    om: "Temer Property • Misoonsa Manneenii Itoophiyaatti",
  },
  heroTitle: {
    en: "Find Your Dream Apartment in Addis Ababa",
    am: "የህልምዎን አፓርታማ በአዲስ አበባ ይምረጡ",
    om: "Mana Jireenyaa Hawwii Keessanii Finfinneetti Argadhaa",
  },
  heroSubtitle: {
    en: "Modern luxury apartments and commercial shops in Sarbet, Ayat, Aware, and Piassa. 15% down payment with milestone interest-free installments.",
    am: "ዘመናዊ አፓርታማዎችና የንግድ ሱቆች በሳርቤት፣ አያት፣ አዋሬ እና ፒያሳ። 15% ቅድመ ክፍያና የወለድ ነፃ የክፍያ አማራጮች።",
    om: "Manneen ammayyaa fi daldalaa Saarbeet, Aayaat, Awaaree fi Piyoosaatti. Kaffaltii duraa 15% fi kaffaltii dhala malee.",
  },

  // Property Card Specs
  bedrooms: {
    en: "Beds",
    am: "መኝታ",
    om: "Kutaa",
  },
  bathrooms: {
    en: "Baths",
    am: "መታጠቢያ",
    om: "Mana Fincaan",
  },
  downPayment: {
    en: "Down Payment",
    am: "ቅድመ ክፍያ",
    om: "Kaffaltii Duraa",
  },
  freePublicAccess: {
    en: "100% Free Public Pricing Access",
    am: "100% ክፍት የዋጋ እና የፕላን መረጃ",
    om: "Odeeffannoo Gatii fi Pilaanii Bilisaan",
  },
  directAdvisor: {
    en: "Direct Advisor Hotline: 0938125777",
    am: "የቀጥታ ስልክ መስመር: 0938125777",
    om: "Sarara Bilbila Kallattii: 0938125777",
  },

  // Contact Page
  contactHotline: {
    en: "HOTLINE – 0938125777",
    am: "የቀጥታ ስልክ መስመር – 0938125777",
    om: "SARARA BILBILA – 0938125777",
  },
  scheduleShowing: {
    en: "Schedule a showing / site visit?",
    am: "የሳይት ጉብኝት ማስተካከል ይፈልጋሉ?",
    om: "Iddoo ijaarsaa daawwachuu barbaadduu?",
  },
  sendEmail: {
    en: "Send Email",
    am: "ኢሜይል ይላኩ",
    om: "Imeelii Ergaa",
  },
  yourName: {
    en: "Your Name",
    am: "ስምዎ",
    om: "Maqaa Keessan",
  },
  yourEmail: {
    en: "Email Address",
    am: "የኢሜይል አድራሻ",
    om: "Teessoo Imeelii",
  },
  yourPhone: {
    en: "Phone Number",
    am: "ስልክ ቁጥር",
    om: "Lakkoofsa Bilbilaa",
  },
  yourMessage: {
    en: "Message / Comment",
    am: "መልእክት / አስተያየት",
    om: "Ergaa / Yaada",
  },

  // Footer & Trust
  footerAbout: {
    en: "Temer Property is a premier real estate developer in Addis Ababa, Ethiopia, dedicated to delivering superior residential and commercial projects with verified title deeds.",
    am: "ቴመር ፕሮፐርቲ በአዲስ አበባ ኢትዮጵያ ውስጥ ጥራት ያላቸው የመኖሪያ አፓርታማዎችንና የንግድ ማዕከላትን በሕጋዊ ካርታ የሚያስረክብ ግንባር ቀደም የሪል እስቴት አልሚ ነው።",
    om: "Temer Property misoomsituu manneenii fi daldalaa Finfinnee keessatti qulqullina olaanaafi waraqaa ragaa seera qabeessaan dhiyeessudha.",
  },
  rightsReserved: {
    en: "All rights reserved. Temer Property.",
    am: "መብቱ በህግ የተጠበቀ ነው። ቴመር ፕሮፐርቲ።",
    om: "Mirgi hundi seeraan eegamaadha. Temer Property.",
  },
};

