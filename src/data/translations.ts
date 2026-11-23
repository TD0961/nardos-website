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
    om: "Waa'ee Keenya",
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
    om: "Bal'inaan Ilaalaa",
  },
  inquireNow: {
    en: "Inquire Now",
    am: "አሁን ይጠይቁ",
    om: "Amma Gaafadhaa",
  },
  contactAdvisor: {
    en: "Contact Advisor",
    am: "አማካሪ ያነጋግሩ",
    om: "Gorsaa Qunnamaa",
  },
  inquireAdvisor: {
    en: "Inquire",
    am: "ይጠይቁ",
    om: "Gaafadhaa",
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

  // Stats Counters
  satisfiedClients: {
    en: "Satisfied Customers",
    am: "ረክተው የተረከቡ ደንበኞች",
    om: "Maamiltoota Itti Qanani\'an",
  },
  yearsExperience: {
    en: "Years Of Experience",
    am: "የዓመታት አስተማማኝ ልምድ",
    om: "Waggoota Muuxannoo",
  },
  deliveredProjects: {
    en: "Delivered Projects",
    am: "የተጠናቀቁ ፕሮጀክቶች",
    om: "Pirojektoota Xumuraman",
  },
  apartmentUnits: {
    en: "Apartment Units",
    am: "የተሰሩ አፓርታማ ቤቶች",
    om: "Manneen Jireenyaa",
  },

  // Section Headers
  latestProperties: {
    en: "Our Latest Properties",
    am: "የቅርብ ጊዜ አፓርታማዎች እና ሱቆች",
    om: "Qabeenyaalee Keenya Haaraa",
  },
  latestPropertiesSubtitle: {
    en: "Explore thoughtfully designed apartments and commercial retail shops across prime Addis Ababa neighborhoods.",
    am: "በአዲስ አበባ ምርጥ አካባቢዎች በጥራት የተገነቡ ዘመናዊ የመኖሪያ ቤቶችንና የንግድ ሱቆችን ይጎብኙ።",
    om: "Manneen ammayyaa fi suuqii daldalaa bakkeewwan filatamootti qophaa'an daawwadhaa.",
  },
  ourProjects: {
    en: "Our Projects",
    am: "የእኛ ፕሮጀክቶች",
    om: "Pirojektoota Keenya",
  },
  ourProjectsSubtitle: {
    en: "From landmark residential high-rises to vibrant commercial centers, discover our development projects across Addis Ababa.",
    am: "ከተዋቡ የመኖሪያ አፓርታማዎች እስከ ዘመናዊ የንግድ ማዕከላት ድረስ በአዲስ አበባ ያሉ ፕሮጀክቶቻችንን ይመልከቱ።",
    om: "Pirojektoota manneen jireenyaa fi daldalaa Finfinnee keessatti ijaaramaa jiran ilaalaa.",
  },

  // Filter Tabs
  tabAll: {
    en: "All",
    am: "ሁሉም",
    om: "Hundumaa",
  },
  tabInProgress: {
    en: "In Progress",
    am: "በግንባታ ላይ",
    om: "Ijaarsa Irra",
  },
  tabDelivered: {
    en: "Delivered",
    am: "የተጠናቀቀ",
    om: "Xumurame",
  },
  tabUpcoming: {
    en: "Upcoming",
    am: "በቅርብ የሚጀመር",
    om: "Fuulduratti",
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

  // Team Page
  meetOurTeam: {
    en: "Meet Our Team",
    am: "የስራ አመራር ቡድናችን",
    om: "Garee Keenya Baradhaa",
  },
  meetOurTeamSubtitle: {
    en: "Meet the visionary founders, executive directors, and experienced department heads driving excellence across Temer Property developments in Addis Ababa.",
    am: "በቴመር ፕሮፐርቲ የላቀ ጥራትና ታማኝነትን የሚያረጋግጡ መስራቾችን፣ ዳይሬክተሮችንና የስራ ሃላፊዎችን ይወቁ።",
    om: "Hundeeffamtoota, daarektaroota fi gaggeessitoota misooma Temer Property geggeessan beekaa.",
  },
  executiveBoard: {
    en: "Executive Board & Co-Founders",
    am: "የስራ አስፈፃሚ ቦርድና መስራቾች",
    om: "Boordii Hojii Raawwachiiftuu fi Hundeeffamtoota",
  },
  executiveManagement: {
    en: "Executive Management Team",
    am: "የማኔጅመንት እና ክፍል ሃላፊዎች",
    om: "Garee Hojii Gaggeessitootaa",
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
    en: "Send Message",
    am: "መልእክት ይላኩ",
    om: "Ergaa Ergaa",
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

  // Booking Modal
  consultationTitle: {
    en: "Schedule an Optional Consultation",
    am: "የሳይት ጉብኝት ወይም ምክክር ይያዙ",
    om: "Mariifi Daawwannaa Qopheessaa",
  },
  consultationSubtitle: {
    en: "Free site tours and personalized payment plans • Direct consultation with Senior Property Advisors & Developer Sales Team",
    am: "ነፃ የሳይት ጉብኝትና የክፍያ አማራጮች • በቀጥታ ከአማካሪዎች ጋር",
    om: "Daawwannaa tolaa fi karoora kaffaltii • Gorsitoota waliin",
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
