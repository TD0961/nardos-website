export interface Project {
  id: number;
  slug: string;
  title: string;
  location: string;
  area: string;
  status: 'In Progress' | 'Delivered' | 'Upcoming';
  progress: number;
  units: string;
  type: string;
  image: string;
  videoUrl?: string;
  delivery: string;
  description: string;
}

export const projects: Project[] = [
  {
    "id": 1,
    "slug": "sarbet-city-plus",
    "title": "Sarbet City Plus",
    "location": "Sarbet, Addis Ababa",
    "area": "Sarbet",
    "status": "In Progress",
    "progress": 78,
    "units": "120 Units",
    "type": "Luxury Apartments & Commercial",
    "image": "https://temerproperties.com/wp-content/uploads/2026/05/onebedcityplus.jpg",
    "videoUrl": "https://youtu.be/pjm7ZImtw58",
    "delivery": "2026 Q4",
    "description": "Sarbet City Plus offers premium 1, 2, and 3-bedroom luxury apartments with expansive balconies and modern smart amenities in the heart of Sarbet."
  },
  {
    "id": 2,
    "slug": "bulgaria-project",
    "title": "Bulgaria Project",
    "location": "Bulgaria Mazoriya, Addis Ababa",
    "area": "Bulgaria",
    "status": "In Progress",
    "progress": 65,
    "units": "84 Units",
    "type": "Residential Apartments",
    "image": "https://temerproperties.com/wp-content/uploads/2026/05/twobedrooms.jpg",
    "videoUrl": "https://youtu.be/kOfmRUApHHM",
    "delivery": "2027 Q1",
    "description": "Strategically situated near key diplomatic enclaves, providing exceptional urban access, contemporary architecture, and top-tier finishes."
  },
  {
    "id": 3,
    "slug": "ayat-49",
    "title": "Ayat 49 Project",
    "location": "Ayat, Addis Ababa",
    "area": "Ayat",
    "status": "In Progress",
    "progress": 82,
    "units": "96 Units",
    "type": "Modern Residential Complex",
    "image": "https://temerproperties.com/wp-content/uploads/2026/05/threebeds.jpg",
    "videoUrl": "https://youtu.be/ksRMiid2hMA",
    "delivery": "2026 Q3",
    "description": "A serene residential oasis in Ayat featuring spacious family layouts, landscaped green zones, and dependable infrastructure."
  },
  {
    "id": 4,
    "slug": "gelan-shopping-center",
    "title": "Gelan Commercial Center",
    "location": "Gelan, Addis Ababa",
    "area": "Gelan",
    "status": "In Progress",
    "progress": 90,
    "units": "150 Shops & Offices",
    "type": "Commercial Mall & Business Hub",
    "image": "https://temerproperties.com/wp-content/uploads/2025/11/test.jpg",
    "videoUrl": "https://youtu.be/BuCyQ9wUPWA",
    "delivery": "2026 Q2",
    "description": "Modern retail spaces, offices, and dining terraces built for maximum foot traffic and high-yield commercial investment."
  },
  {
    "id": 5,
    "slug": "aware-project",
    "title": "Aware Project",
    "location": "Aware, Addis Ababa",
    "area": "Aware",
    "status": "In Progress",
    "progress": 70,
    "units": "72 Units",
    "type": "Exclusive Apartments",
    "image": "https://temerproperties.com/wp-content/uploads/2026/02/photo_2026-02-10_15-32-24.jpg",
    "videoUrl": "https://youtu.be/e693iKpA12U",
    "delivery": "2026 Q4",
    "description": "Elevated urban living overlooking central Addis Ababa with high-ceiling units, underground parking, and backup power."
  },
  {
    "id": 6,
    "slug": "sarbet-blue-point",
    "title": "Sarbet Blue Point",
    "location": "Sarbet, Addis Ababa",
    "area": "Sarbet",
    "status": "In Progress",
    "progress": 85,
    "units": "64 Units",
    "type": "Executive Residences",
    "image": "https://temerproperties.com/wp-content/uploads/2025/11/photo_2026-02-10_15-33-15.jpg",
    "videoUrl": "https://youtu.be/4KLvlRLTmlI",
    "delivery": "2026 Q3",
    "description": "A landmark development near Sarbet roundabouts offering 3-bedroom residences with sweeping city panoramas."
  },
  {
    "id": 7,
    "slug": "lycee-seken",
    "title": "Lycee Seken",
    "location": "Piyassa / Lycee, Addis Ababa",
    "area": "Piyassa",
    "status": "In Progress",
    "progress": 75,
    "units": "90 Units",
    "type": "Urban Apartments",
    "image": "https://temerproperties.com/wp-content/uploads/2026/02/photo_2026-02-10_15-32-24.jpg",
    "videoUrl": "",
    "delivery": "2026 Q4",
    "description": "Premium downtown residences located near cultural landmarks and business districts."
  },
  {
    "id": 8,
    "slug": "lycee-newroad",
    "title": "Lycee NewRoad",
    "location": "Piyassa / Lycee, Addis Ababa",
    "area": "Piyassa",
    "status": "In Progress",
    "progress": 60,
    "units": "55 Units",
    "type": "Boutique Apartments",
    "image": "https://temerproperties.com/wp-content/uploads/2026/05/onebedcityplus.jpg",
    "videoUrl": "",
    "delivery": "2027 Q1",
    "description": "Boutique residential development combining quiet urban living with proximity to city transit."
  },
  {
    "id": 9,
    "slug": "haile-garment-commercial",
    "title": "Haile Garment Site",
    "location": "Haile Garment, Addis Ababa",
    "area": "Garment",
    "status": "Delivered",
    "progress": 100,
    "units": "56 Commercial Units",
    "type": "Commercial Shops & Showrooms",
    "image": "https://temerproperties.com/wp-content/uploads/2026/10/blog-post-11-2-1024x640.png",
    "videoUrl": "",
    "delivery": "Delivered 2026",
    "description": "Successfully completed and handed over 56 commercial units with 100% customer satisfaction."
  },
  {
    "id": 10,
    "slug": "atena-tera-project",
    "title": "AGT-Trading Atena Tera",
    "location": "Atena Tera, Addis Ababa",
    "area": "Addis Ababa",
    "status": "Delivered",
    "progress": 100,
    "units": "45 Units",
    "type": "Commercial & Residential",
    "image": "https://temerproperties.com/wp-content/uploads/2025/11/photo_2026-02-10_15-33-15.jpg",
    "videoUrl": "",
    "delivery": "Delivered",
    "description": "Fully completed commercial complex featuring premium retail stores and corporate offices."
  },
  {
    "id": 11,
    "slug": "sahil-project",
    "title": "Sahil Project",
    "location": "Lebu, Addis Ababa",
    "area": "Lebu",
    "status": "Delivered",
    "progress": 100,
    "units": "80 Units",
    "type": "Residential Apartments",
    "image": "https://temerproperties.com/wp-content/uploads/2026/05/threebeds.jpg",
    "videoUrl": "",
    "delivery": "Delivered",
    "description": "Completed luxury residential apartments delivered ahead of schedule in Lebu."
  },
  {
    "id": 12,
    "slug": "adwa-ewket",
    "title": "Adwa 001 - Ewket Site",
    "location": "Adwa / Piyassa, Addis Ababa",
    "area": "Piyassa",
    "status": "Upcoming",
    "progress": 15,
    "units": "110 Units",
    "type": "High-Rise Apartments",
    "image": "https://temerproperties.com/wp-content/uploads/2026/05/twobedrooms.jpg",
    "videoUrl": "",
    "delivery": "2027 Q3",
    "description": "Next-generation modern architecture at the historic Adwa intersection."
  }
];
