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
    om: "Maamiltoota Itti Qanani'an",
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

  // Contact Page & Components
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
  directContact: {
    en: "Direct Contact",
    am: "ቀጥታ ግንኙነት",
    om: "Qunnamtii Kallattii",
  },
  connectDirectly: {
    en: "Connect Directly With Temer Property",
    am: "ከቴመር ፕሮፐርቲ ጋር በቀጥታ ይገናኙ",
    om: "Temer Property Waliin Kallattiin Qunnamaa",
  },
  contactFormDesc: {
    en: "We believe in full transparency and direct communication. Feel free to call us, reach out on WhatsApp, or send an inquiry. All listings, floor plans, and pricing details are completely open and accessible.",
    am: "ሙሉ ግልጽነትና ቀጥተኛ ግንኙነትን እናምናለን። በስልክ ይደውሉ፣ በዋትስአፕ ያግኙን ወይም መልእክት ይላኩልን። ሁሉም መረጃዎች ክፍት ናቸው።",
    om: "Iftoomina guutuu fi qunnamtii kallattiitti amanna. Bilbilaan, WhatsApp ykn ergaan nu qunnamaa. Odeeffannoon hundi banaadha.",
  },
  headquarters: {
    en: "Headquarters",
    am: "ዋና መስሪያ ቤት",
    om: "Waajjira Muummee",
  },
  headquartersLocation: {
    en: "Sarbet to Kera Road, Woldemaryam Building, Addis Ababa",
    am: "ሳርቤት ወደ ቄራ መንገድ፣ ወልደማሪያም ህንፃ፣ አዲስ አበባ",
    om: "Saarbeet gara Daandii Qeraa, Gamoo Woldemaryam, Finfinnee",
  },
  tapToCall: {
    en: "Tap to call directly",
    am: "በቀጥታ ለመደወል ይጫኑ",
    om: "Kallattiin bilbiluuf tuqaa",
  },
  quickResponse: {
    en: "Quick response • 0938125777",
    am: "ፈጣን ምላሽ • 0938125777",
    om: "Deebii dafee • 0938125777",
  },
  firstName: {
    en: "First Name",
    am: "የመጀመሪያ ስም",
    om: "Maqaa Duraa",
  },
  lastName: {
    en: "Last Name",
    am: "የአባት ስም",
    om: "Maqaa Abbaa",
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

  // Blog Section
  readFromOurBlog: {
    en: "Read From Our Blog",
    am: "ከብሎጋችን ያንብቡ",
    om: "Biloogii Keenya Irraa Dubbisaa",
  },
  readFromOurBlogSubtitle: {
    en: "Stay informed with real estate market insights, construction progress announcements, and partnership news from Addis Ababa.",
    am: "ወቅታዊ የሪል እስቴት መረጃዎች፣ የግንባታ ዜናዎች እና ጠቃሚ የገበያ ግንዛቤዎችን ያግኙ።",
    om: "Odeeffannoo gabaa manneenii fi haala guddina ijaarsaa Finfinnee keessaa beekaa.",
  },
  viewAllArticles: {
    en: "View All Articles",
    am: "ሁሉንም ጽሁፎች ይመልከቱ",
    om: "Barreeffamoota Hunda Ilaalaa",
  },

  // Video Section
  videoTitle: {
    en: "Experience Modern Living With Temer Property",
    am: "ዘመናዊ ኑሮን ከቴመር ፕሮፐርቲ ጋር ይለማመዱ",
    om: "Jireenya Ammayyaa Temer Property Waliin Dhandhamaa",
  },
  videoSubtitle: {
    en: "Watch our on-site tour and architectural highlights across our prime developments in Addis Ababa.",
    am: "በአዲስ አበባ ያሉትን ማራኪ ፕሮጀክቶቻችንን እና የግንባታ ጥራታችንን በቪዲዮ ይመልከቱ።",
    om: "Pirojektoota keenya filatamoofi qulqullina ijaarsaa viidiyoodhaan daawwadhaa.",
  },

  // About Us Page
  aboutTitle: {
    en: "About Temer Property",
    am: "ስለ ቴመር ፕሮፐርቲ",
    om: "Waa'ee Temer Property",
  },
  aboutSubtitle: {
    en: "Transforming the Ethiopian real estate landscape with architectural precision, structural reliability, and customer-first integrity since 2010 EC. 10+ completed projects and over 350+ happy families.",
    am: "ከ2010 ዓ.ም ጀምሮ በጥራትና በታማኝነት የኢትዮጵያን ሪል እስቴት በመለወጥ ላይ የሚገኝ፤ ከ10 በላይ የተጠናቀቁ ፕሮጀክቶችና ከ350 በላይ የተረከቡ ደንበኞች።",
    om: "Bara 2010 ALIdhaa kaasee misooma manneenii qulqullina olaanaafi amanamummaan geggeessaa kan jiru.",
  },
  ourJourney: {
    en: "Our Journey",
    am: "የእኛ ጉዞ",
    om: "Imala Keenya",
  },
  buildingTrust: {
    en: "Building Trust & Delivering Dream Homes Across Addis Ababa",
    am: "ታማኝነትን በመገንባት የህልም ቤቶችን ማስረከብ",
    om: "Amanamummaa Ijaaruun Manneen Hawwii Dhiyeessuu",
  },
  ourMission: {
    en: "Our Mission",
    am: "ተልዕኮ",
    om: "Ergama Keenya",
  },
  ourMissionDesc: {
    en: "To elevate the living experience in Addis Ababa by connecting residents with homes that embody the essence of this vibrant community. From historic neighborhoods to emerging developments, we are committed to showcasing the unique charm and opportunities that Addis Ababa has to offer.",
    am: "በአዲስ አበባ ነዋሪዎች ዘመናዊና የተመቻቸ ኑሮ እንዲኖራቸው ጥራት ያላቸውን ቤቶች በተመጣጣኝ ዋጋ ማቅረብና የከተማዋን እድገት ማፋጠን።",
    om: "Jireenya jiraattota Finfinnee ammayyeessuuf manneen qulqullina qaban gatii madaalawaan dhiyeessuu.",
  },
  ourVision: {
    en: "Our Vision",
    am: "ራዕይ",
    om: "Mul'ata Keenya",
  },
  ourVisionDesc: {
    en: "To redefine the method in which real estate is delivered and experienced in Ethiopia. We aim to be the benchmark developer recognized for architectural innovation, transparency, prompt execution, and long-term customer fulfillment.",
    am: "በኢትዮጵያ ውስጥ ግንባር ቀደም፣ በፈጠራና በታማኝነት የሚታወቅ፣ በወቅቱ የሚያስረክብ ተመራጭ የሪል እስቴት አልሚ መሆን።",
    om: "Itoophiyaa keessatti misoomsituu manneenii beekkamaa, qulqullinaafi yeroon dhiyeessuudhaan adda duree ta\'uu.",
  },
  ourValues: {
    en: "Our Values",
    am: "እሴቶቻችን",
    om: "Duudhaalee Keenya",
  },
  ourValuesDesc: {
    en: "Customer transparency, structural excellence, timely delivery, and verified title deed handovers are the core values guiding every project we build.",
    am: "ግልጽነት፣ የህንፃ ጥራት፣ በወቅቱ ማስረከብ እና ሕጋዊ የባለቤትነት ካርታ መስጠት መሰረታዊ መርሆዎቻችን ናቸው።",
    om: "Iftoomina, qulqullina ijaarsaa, yeroon xumuruufi waraqaa ragaa seera qabeessa kennuu.",
  },
  faqsTitle: {
    en: "Frequently Asked Questions",
    am: "ተደጋግመው የሚጠየቁ ጥያቄዎች",
    om: "Gaaffilee Yeroo Baay'ee Gaafataman",
  },
  faqsSubtitle: {
    en: "Everything you need to know about purchasing an apartment with Temer Property in Addis Ababa.",
    am: "ስለ አፓርታማ ግዢና የክፍያ ሁኔታዎች ማወቅ የሚፈልጓቸው ዝርዝር መረጃዎች።",
    om: "Waa'ee bittaa manneenii fi kaffaltii odeeffannoo barbaachisaa hunda.",
  },

  // Properties Standard List
  propertiesTitle: {
    en: "Available Apartments & Penthouses",
    am: "ለሽያጭ የቀረቡ አፓርታማዎችና ፔንት ሃውሶች",
    om: "Manneen Jireenyaa fi Daldalaa Gurguraaf Qophaa'an",
  },
  propertiesSubtitle: {
    en: "Explore our verified collection of luxury apartments, penthouses, and commercial retail shops across prime Addis Ababa neighborhoods. 100% direct developer pricing with 15% down payment and 36-month interest-free installments.",
    am: "በአዲስ አበባ ምርጥ አካባቢዎች ያሉ ዘመናዊ አፓርታማዎችና ሱቆች። 15% ቅድመ ክፍያና በ36 ወራት የሚከፈል ወለድ አልባ የክፍያ አማራጭ።",
    om: "Manneen ammayyaa bakkeewwan filatamootti qophaa'an. Kaffaltii duraa 15% fi kaffaltii dhala malee.",
  },
  allNeighborhoods: {
    en: "All Neighborhoods",
    am: "ሁሉም አካባቢዎች",
    om: "Naannoolee Hundumaa",
  },
  allPropertyTypes: {
    en: "All Property Types",
    am: "ሁሉም የንብረት አይነቶች",
    om: "Gosa Qabeenyaa Hunda",
  },
  allBedrooms: {
    en: "All Bedrooms",
    am: "ሁሉም የመኝታ ክፍሎች",
    om: "Kutaawwan Hunda",
  },
  clearFilters: {
    en: "Clear Filters",
    am: "ማጣሪያ አጽዳ",
    om: "Haqi",
  },
  searchPlaceholder: {
    en: "Search title, neighborhood...",
    am: "በስም ወይም በአካባቢ ይፈልጉ...",
    om: "Barbaadaa...",
  },

  // Construction Updates Page
  constructionTitle: {
    en: "Construction Updates & Handover Schedules",
    am: "የግንባታ ሂደትና የርክክብ ጊዜያት",
    om: "Haala Ijaarsaa fi Yeroo Dabarsaa",
  },
  constructionSubtitle: {
    en: "Stay up to date with ongoing construction milestones, structural progress, and handover timelines across all Temer Property project sites. We maintain rigorous photographic and engineering logs for full transparency.",
    am: "በሁሉም የቴመር ፕሮፐርቲ ሳይቶች ያሉ የግንባታ ደረጃዎችንና የርክክብ ቀጠሮዎችን በግልጽ ይከታተሉ።",
    om: "Haala ijaarsa pirojektoota keenya hunda iftoominaan hordofaa.",
  },
  allSiteUpdates: {
    en: "All Site Updates",
    am: "ሁሉም የሳይት መረጃዎች",
    om: "Haala Bakkeewwan Hunda",
  },

  // Events & Blog Lists
  eventsTitle: {
    en: "Events & Milestone Celebrations",
    am: "ክስተቶችና ልዩ በዓላት",
    om: "Taateewwan fi Ayyaaneffannaa",
  },
  eventsSubtitle: {
    en: "Join us for upcoming groundbreakings, site handover ceremonies, and diaspora investor open days across Addis Ababa.",
    am: "የምረቃ፣ የርክክብ እና የዲያስፖራ ባለሀብቶች መድረኮችን አብረውን ያክብሩ።",
    om: "Taateewwan eebbaa fi dabarsaa manneenii irratti hirmaadhaa.",
  },
  blogListTitle: {
    en: "News, Market Insights & Real Estate Guide",
    am: "ዜናዎች፣ የገበያ መረጃዎችና የሪል እስቴት መመሪያዎች",
    om: "Oduu fi Qajeelfama Bittaa Manneenii",
  },
  blogListSubtitle: {
    en: "Essential reading for home buyers, diaspora investors, and commercial property owners in Ethiopia.",
    am: "ለቤት ፈላጊዎች፣ ለዲያስፖራ ባለሀብቶችና ለንግድ ማህበረሰብ ጠቃሚ መረጃዎች።",
    om: "Bittaa manneeniif odeeffannoo baay'ee barbaachisaa ta'an.",
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
  footerDirectContact: {
    en: "DIRECT CONTACT",
    am: "ቀጥታ አድራሻ",
    om: "QUNNAMTII KALLATTII",
  },
  footerQuickLinks: {
    en: "QUICK LINKS",
    am: "ጠቃሚ ሊንኮች",
    om: "LIINKIIWWAN DAFAA",
  },
  footerPrivacy: {
    en: "Privacy Policy",
    am: "የግላዊነት ፖሊሲ",
    om: "Imaammata Qunnamtii",
  },
  footerTerms: {
    en: "Terms of Use",
    am: "የአጠቃቀም ደንቦች",
    om: "Waliigaltee Fayyadamaa",
  },
};
