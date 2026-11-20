export interface ProjectMilestones {
  foundation: number;
  structure: number;
  masonry: number;
  mep: number;
  finishing: number;
}

export interface ProjectSpecs {
  floors: string;
  totalUnits: string;
  parkingSpaces: string;
  elevators: string;
  waterReservoir: string;
  generator: string;
  landArea: string;
}

export interface ProjectUnitOption {
  type: string;
  size: string;
  bedrooms: number;
  bathrooms: number;
  price: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  tagline?: string;
  location: string;
  area: string;
  status: 'In Progress' | 'Delivered' | 'Upcoming';
  progress: number;
  units: string;
  type: string;
  image: string;
  gallery: string[];
  videoUrl?: string;
  delivery: string;
  description: string;
  fullOverview: string;
  specs: ProjectSpecs;
  milestones: ProjectMilestones;
  amenities: string[];
  availableUnits: ProjectUnitOption[];
}

export const projects: Project[] = [
  {
    "id": 1,
    "slug": "sarbet-city-plus",
    "title": "Sarbet City Plus",
    "tagline": "Luxury High-Rise Living in the Heart of Diplomatic Sarbet",
    "location": "Sarbet to Kera Road, Addis Ababa",
    "area": "Sarbet",
    "status": "In Progress",
    "progress": 78,
    "units": "120 Units",
    "type": "Luxury Apartments & Ground Commercial",
    "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1200&auto=format&fit=crop&q=80"
    ],
    "videoUrl": "https://youtu.be/pjm7ZImtw58",
    "delivery": "December 2026",
    "description": "Sarbet City Plus delivers 120 premium residential apartments with panoramic balconies, smart building controls, and dedicated parking in central Sarbet.",
    "fullOverview": "Sarbet City Plus is one of Temer Property's signature developments, located just moments from the African Union Headquarters and diplomatic residential quarters. Engineered with earthquake-resistant structural standards, this 2B+G+14 multi-story landmark offers an exclusive lifestyle combining urban convenience with refined tranquility. The building includes ground-floor boutique retail, multiple elevators, and dedicated underground parking for every resident.",
    "specs": {
      "floors": "2B + G + 14 Floors",
      "totalUnits": "120 Units (1, 2 & 3 Beds)",
      "parkingSpaces": "135 Secure Basement Bays",
      "elevators": "3 High-Speed Passenger Elevators",
      "waterReservoir": "120,000 Liters Underground Tank",
      "generator": "150 kVA Standby Generator (100% Backup)",
      "landArea": "2,400 m\u00b2 Prime Plot"
    },
    "milestones": {
      "foundation": 100,
      "structure": 100,
      "masonry": 95,
      "mep": 85,
      "finishing": 65
    },
    "amenities": [
      "24/7 CCTV & Professional Security Guard Service",
      "Three High-Speed Otis Passenger Elevators",
      "100% Power Backup with Automatic Transfer Switch",
      "Massive 120,000L Underground Water Reservoir System",
      "Direct Title Deed (\u12ab\u122d\u1273) Handover Guaranteed",
      "Underground Basement Parking with Smart Access Cards",
      "Rooftop Terrace with 360\u00b0 Addis Skyline Panoramas",
      "Ground Floor Commercial Galleria & Pharmacy Space",
      "Pre-installed Fiber Optic Internet & Intercom System"
    ],
    "availableUnits": [
      {
        "type": "1 Bedroom Luxury Apartment",
        "size": "76 m\u00b2",
        "bedrooms": 1,
        "bathrooms": 1,
        "price": "8,740,000 ETB"
      },
      {
        "type": "2 Bedroom Modern Residence",
        "size": "100 m\u00b2",
        "bedrooms": 2,
        "bathrooms": 2,
        "price": "11,500,000 ETB"
      },
      {
        "type": "3 Bedroom Family Penthouse",
        "size": "151 m\u00b2",
        "bedrooms": 3,
        "bathrooms": 2,
        "price": "17,365,000 ETB"
      }
    ]
  },
  {
    "id": 2,
    "slug": "bulgaria-project",
    "title": "Bulgaria Mazoriya Project",
    "location": "Bulgaria Mazoriya / Kirkos, Addis Ababa",
    "area": "Bulgaria",
    "status": "In Progress",
    "progress": 65,
    "units": "84 Units",
    "type": "Contemporary Residential High-Rise",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&auto=format&fit=crop&q=80"
    ],
    "videoUrl": "https://youtu.be/kOfmRUApHHM",
    "delivery": "March 2027",
    "description": "Strategically situated near key diplomatic enclaves, providing exceptional urban access, contemporary architecture, and top-tier finishes.",
    "fullOverview": "The Bulgaria Mazoriya development provides high-specification modern apartments designed for professionals, expatriates, and modern families seeking central proximity to Kirkos, Mexico Square, and Bole. Features generous ceiling heights, sound-insulating double glazing, and seamless vehicle circulation.",
    "specs": {
      "floors": "2B + G + 12 Floors",
      "totalUnits": "84 Residential Units",
      "parkingSpaces": "90 Basement Spaces",
      "elevators": "2 High-Speed Elevators",
      "waterReservoir": "100,000 Liters Tank",
      "generator": "125 kVA Automatic Generator",
      "landArea": "1,850 m\u00b2"
    },
    "milestones": {
      "foundation": 100,
      "structure": 100,
      "masonry": 85,
      "mep": 70,
      "finishing": 45
    },
    "amenities": [
      "24/7 Security Patrol & Gate Monitoring",
      "Dual Passenger Elevators with Battery Rescue System",
      "Complete Backup Generator Coverage for all Units",
      "Underground Water Storage with Dual Electric Pumps",
      "Assigned Basement Parking with Electronic Entry",
      "Modular Imported Kitchen Cabinets & Quartz Countertops"
    ],
    "availableUnits": [
      {
        "type": "2 Bedroom Urban Suite",
        "size": "110 m\u00b2",
        "bedrooms": 2,
        "bathrooms": 2,
        "price": "11,880,000 ETB"
      },
      {
        "type": "3 Bedroom Executive Suite",
        "size": "145 m\u00b2",
        "bedrooms": 3,
        "bathrooms": 2,
        "price": "15,660,000 ETB"
      }
    ]
  },
  {
    "id": 3,
    "slug": "ayat-49",
    "title": "Ayat 49 Project",
    "location": "Ayat Zone 49, Addis Ababa",
    "area": "Ayat",
    "status": "In Progress",
    "progress": 82,
    "units": "96 Units",
    "type": "Serene Suburban Residential Community",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&auto=format&fit=crop&q=80"
    ],
    "videoUrl": "https://youtu.be/ksRMiid2hMA",
    "delivery": "September 2026",
    "description": "A serene residential oasis in Ayat featuring spacious family layouts, landscaped green zones, and dependable infrastructure.",
    "fullOverview": "Ayat 49 is tailored for families seeking clean air, green surroundings, and high quality of life within Addis Ababa's fastest-growing residential corridor. Walking distance to the Light Rail Transit terminal and top private schools, it boasts expansive living areas and robust infrastructure.",
    "specs": {
      "floors": "B + G + 10 Floors",
      "totalUnits": "96 Family Apartments",
      "parkingSpaces": "110 Parking Stalls",
      "elevators": "2 Passenger Elevators",
      "waterReservoir": "90,000 Liters Tank",
      "generator": "100 kVA Generator",
      "landArea": "2,800 m\u00b2"
    },
    "milestones": {
      "foundation": 100,
      "structure": 100,
      "masonry": 100,
      "mep": 90,
      "finishing": 70
    },
    "amenities": [
      "Children's Safe Play Yard & Landscaped Garden",
      "Convenience Supermarket on Ground Floor",
      "Dual Elevators & Wide Emergency Stairwells",
      "Continuous Clean Water Supply System",
      "Full Generator Backup for Lighting & Elevators",
      "Perimeter Electric Security Fence & Guard House"
    ],
    "availableUnits": [
      {
        "type": "2 Bedroom Family Flat",
        "size": "110 m\u00b2",
        "bedrooms": 2,
        "bathrooms": 2,
        "price": "9,790,000 ETB"
      },
      {
        "type": "3 Bedroom Family Apartment",
        "size": "145 m\u00b2",
        "bedrooms": 3,
        "bathrooms": 2,
        "price": "12,905,000 ETB"
      },
      {
        "type": "4 Bedroom Spacious Residence",
        "size": "165 m\u00b2",
        "bedrooms": 4,
        "bathrooms": 3,
        "price": "14,685,000 ETB"
      }
    ]
  },
  {
    "id": 4,
    "slug": "gelan-shopping-center",
    "title": "Gelan Commercial Center (Mall)",
    "location": "Gelan Commercial Expressway, Addis Ababa",
    "area": "Gelan",
    "status": "In Progress",
    "progress": 90,
    "units": "150 Shops & Offices",
    "type": "Premier Commercial Mall & Business Hub",
    "image": "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?w=1200&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80"
    ],
    "videoUrl": "https://youtu.be/BuCyQ9wUPWA",
    "delivery": "July 2026",
    "description": "Modern retail spaces, offices, and dining terraces built for maximum foot traffic and high-yield commercial investment.",
    "fullOverview": "Gelan Commercial Center represents an outstanding commercial real estate opportunity with projected annual rental yields exceeding 14%. Featuring double-height showroom glass facades, wide interior corridors, dedicated bank branches, and ample customer parking, it serves an active economic corridor.",
    "specs": {
      "floors": "2B + G + 8 Floors",
      "totalUnits": "150 Retail & Corporate Lots",
      "parkingSpaces": "180 Surface & Basement Bays",
      "elevators": "4 Commercial Elevators (Inc. Freight)",
      "waterReservoir": "150,000 Liters Tank",
      "generator": "250 kVA Industrial Generator",
      "landArea": "3,500 m\u00b2"
    },
    "milestones": {
      "foundation": 100,
      "structure": 100,
      "masonry": 100,
      "mep": 95,
      "finishing": 85
    },
    "amenities": [
      "Double-Height Glass Showrooms on Ground & 1st Floor",
      "Dedicated Bank Halls & ATM Lobbies",
      "Heavy Freight Elevator & Logistics Loading Dock",
      "24/7 Security Patrol & CCTV Surveillance Network",
      "Central Fire Detection & Automatic Sprinkler System",
      "Ample Customer Parking Area for 180+ Vehicles"
    ],
    "availableUnits": [
      {
        "type": "Ground Floor Retail Storefront",
        "size": "45 m\u00b2",
        "bedrooms": 0,
        "bathrooms": 1,
        "price": "6,075,000 ETB"
      },
      {
        "type": "First Floor Boutique Retail",
        "size": "75 m\u00b2",
        "bedrooms": 0,
        "bathrooms": 1,
        "price": "10,125,000 ETB"
      },
      {
        "type": "Corporate Office Suite",
        "size": "110 m\u00b2",
        "bedrooms": 0,
        "bathrooms": 2,
        "price": "14,850,000 ETB"
      }
    ]
  },
  {
    "id": 5,
    "slug": "aware-project",
    "title": "Aware Executive Residences",
    "location": "Aware / 4 Kilo, Addis Ababa",
    "area": "Aware",
    "status": "In Progress",
    "progress": 70,
    "units": "72 Units",
    "type": "Exclusive Diplomatic Apartments",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&auto=format&fit=crop&q=80"
    ],
    "videoUrl": "https://youtu.be/e693iKpA12U",
    "delivery": "November 2026",
    "description": "Elevated urban living overlooking central Addis Ababa with high-ceiling units, underground parking, and backup power.",
    "fullOverview": "Commanding a prominent location in Aware near UNECA and government administrative centers, Aware Executive Residences offers peerless prestige and access. Built for discerning buyers seeking timeless design, high security, and strong capital appreciation.",
    "specs": {
      "floors": "2B + G + 11 Floors",
      "totalUnits": "72 Luxury Residences",
      "parkingSpaces": "85 Basement Bays",
      "elevators": "2 Otis Passenger Elevators",
      "waterReservoir": "90,000 Liters Tank",
      "generator": "110 kVA Automatic Standby",
      "landArea": "1,900 m\u00b2"
    },
    "milestones": {
      "foundation": 100,
      "structure": 100,
      "masonry": 90,
      "mep": 80,
      "finishing": 55
    },
    "amenities": [
      "Panoramic Views of Mount Entoto and City Skyline",
      "Private Keycard Access Control to Each Floor",
      "Underground Multi-Level Secure Parking",
      "Continuous Pressurized Water Supply",
      "100% Uninterrupted Power Backup System",
      "Professional Property Management & Cleaning Service"
    ],
    "availableUnits": [
      {
        "type": "1 Bedroom Diplomatic Suite",
        "size": "76 m\u00b2",
        "bedrooms": 1,
        "bathrooms": 1,
        "price": "8,360,000 ETB"
      },
      {
        "type": "2 Bedroom Luxury Apartment",
        "size": "110 m\u00b2",
        "bedrooms": 2,
        "bathrooms": 2,
        "price": "12,100,000 ETB"
      },
      {
        "type": "3 Bedroom Presidential Flat",
        "size": "145 m\u00b2",
        "bedrooms": 3,
        "bathrooms": 2,
        "price": "15,950,000 ETB"
      }
    ]
  },
  {
    "id": 6,
    "slug": "sarbet-blue-point",
    "title": "Sarbet Blue Point",
    "location": "Sarbet Blue Point, Addis Ababa",
    "area": "Sarbet",
    "status": "In Progress",
    "progress": 85,
    "units": "64 Units",
    "type": "Boutique Luxury Penthouses & Apartments",
    "image": "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1200&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&auto=format&fit=crop&q=80"
    ],
    "videoUrl": "https://youtu.be/4KLvlRLTmlI",
    "delivery": "August 2026",
    "description": "A landmark development near Sarbet roundabouts offering 3-bedroom residences with sweeping city panoramas.",
    "fullOverview": "Situated at the coveted Blue Point junction in Sarbet, this boutique residential address emphasizes privacy, expansive floor layouts, and ultra-high-end fixtures. With only 4 apartments per floor, residents enjoy peace, security, and prestige.",
    "specs": {
      "floors": "2B + G + 13 Floors",
      "totalUnits": "64 Spacious Residences",
      "parkingSpaces": "75 Basement Spaces",
      "elevators": "2 High-Speed Elevators",
      "waterReservoir": "100,000 Liters Tank",
      "generator": "150 kVA Standby Generator",
      "landArea": "1,750 m\u00b2"
    },
    "milestones": {
      "foundation": 100,
      "structure": 100,
      "masonry": 100,
      "mep": 90,
      "finishing": 80
    },
    "amenities": [
      "Exclusive Low-Density Living (4 Units Per Floor)",
      "High Ceilings (3.2m Clearance) with Recessed Lighting",
      "European Imported Sanitaryware and Tiles",
      "Dual Elevators with Direct Basement Access",
      "Automatic Switchover Generator System",
      "Immediate Title Deed Handover Upon Completion"
    ],
    "availableUnits": [
      {
        "type": "3 Bedroom Luxury Corner Unit",
        "size": "145 m\u00b2",
        "bedrooms": 3,
        "bathrooms": 2,
        "price": "16,675,000 ETB"
      },
      {
        "type": "3 Bedroom Penthouse with Terrace",
        "size": "168 m\u00b2",
        "bedrooms": 3,
        "bathrooms": 3,
        "price": "19,320,000 ETB"
      }
    ]
  },
  {
    "id": 7,
    "slug": "lycee-seken",
    "title": "LYCEE Seken Project",
    "location": "Churchill Avenue / Lycee Gebremariam, Addis Ababa",
    "area": "Piyassa",
    "status": "In Progress",
    "progress": 75,
    "units": "90 Units",
    "type": "Urban Luxury Residences",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&auto=format&fit=crop&q=80"
    ],
    "videoUrl": "",
    "delivery": "October 2026",
    "description": "Premium downtown residences located near cultural landmarks and business districts.",
    "fullOverview": "LYCEE Seken is designed for modern city dwellers who value walking distance to culture, commerce, and international schooling. Featuring clean architectural lines, energy-efficient LED systems, and high rental return appeal.",
    "specs": {
      "floors": "2B + G + 12 Floors",
      "totalUnits": "90 Apartments",
      "parkingSpaces": "100 Basement Bays",
      "elevators": "2 Fast Passenger Elevators",
      "waterReservoir": "90,000 Liters Tank",
      "generator": "120 kVA Generator",
      "landArea": "2,100 m\u00b2"
    },
    "milestones": {
      "foundation": 100,
      "structure": 100,
      "masonry": 90,
      "mep": 80,
      "finishing": 60
    },
    "amenities": [
      "Prime Downtown Position Near Churchill Avenue",
      "Dual Elevators & High-Capacity Backup Generator",
      "Underground Parking & Security Checkpoint",
      "Balconies with City Center Panoramas",
      "High Rental Yield Investment Guarantee"
    ],
    "availableUnits": [
      {
        "type": "1 Bedroom Urban Studio",
        "size": "76 m\u00b2",
        "bedrooms": 1,
        "bathrooms": 1,
        "price": "8,208,000 ETB"
      },
      {
        "type": "2 Bedroom Central Flat",
        "size": "110 m\u00b2",
        "bedrooms": 2,
        "bathrooms": 2,
        "price": "11,880,000 ETB"
      },
      {
        "type": "3 Bedroom Family Apartment",
        "size": "145 m\u00b2",
        "bedrooms": 3,
        "bathrooms": 2,
        "price": "15,660,000 ETB"
      }
    ]
  },
  {
    "id": 8,
    "slug": "lycee-newroad",
    "title": "LYCEE NewRoad Project",
    "location": "Lycee New Road / Piassa, Addis Ababa",
    "area": "Piyassa",
    "status": "In Progress",
    "progress": 60,
    "units": "55 Units",
    "type": "Boutique City Apartments",
    "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&auto=format&fit=crop&q=80"
    ],
    "videoUrl": "",
    "delivery": "January 2027",
    "description": "Boutique residential development combining quiet urban living with proximity to city transit.",
    "fullOverview": "LYCEE NewRoad offers a peaceful residential enclave situated just off the main avenue. Designed with high-spec interior finishes, individual utility meters, and dedicated parking.",
    "specs": {
      "floors": "B + G + 9 Floors",
      "totalUnits": "55 Boutique Units",
      "parkingSpaces": "60 Parking Stalls",
      "elevators": "1 High-Speed Elevator",
      "waterReservoir": "70,000 Liters Tank",
      "generator": "80 kVA Generator",
      "landArea": "1,400 m\u00b2"
    },
    "milestones": {
      "foundation": 100,
      "structure": 100,
      "masonry": 80,
      "mep": 65,
      "finishing": 40
    },
    "amenities": [
      "Quiet Residential Street Near City Center",
      "High-Speed Passenger Elevator",
      "Standby Generator & Water Reservoir Backup",
      "Secure Electronic Entry Gate"
    ],
    "availableUnits": [
      {
        "type": "2 Bedroom Boutique Unit",
        "size": "110 m\u00b2",
        "bedrooms": 2,
        "bathrooms": 2,
        "price": "11,880,000 ETB"
      },
      {
        "type": "3 Bedroom Boutique Residence",
        "size": "145 m\u00b2",
        "bedrooms": 3,
        "bathrooms": 2,
        "price": "15,660,000 ETB"
      }
    ]
  },
  {
    "id": 9,
    "slug": "haile-garment-commercial",
    "title": "Haile Garment Site",
    "location": "Haile Garment Commercial Corridor, Addis Ababa",
    "area": "Garment",
    "status": "Delivered",
    "progress": 100,
    "units": "56 Commercial Units",
    "type": "Commercial Center & Modern Showrooms",
    "image": "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&auto=format&fit=crop&q=80"
    ],
    "videoUrl": "",
    "delivery": "Handed Over & Fully Operational",
    "description": "Successfully completed and handed over 56 commercial units with 100% customer satisfaction.",
    "fullOverview": "Haile Garment Site is a prime example of Temer Property's reliable execution. Handed over on schedule, it is now an active commercial landmark featuring retail businesses, corporate offices, and services.",
    "specs": {
      "floors": "G + 4 Commercial Hub",
      "totalUnits": "56 Commercial Units",
      "parkingSpaces": "70 Surface Parking Bays",
      "elevators": "1 Commercial Elevator",
      "waterReservoir": "80,000 Liters Tank",
      "generator": "150 kVA Industrial Backup",
      "landArea": "2,500 m\u00b2"
    },
    "milestones": {
      "foundation": 100,
      "structure": 100,
      "masonry": 100,
      "mep": 100,
      "finishing": 100
    },
    "amenities": [
      "100% Delivered & Occupied Commercial Spaces",
      "Official Title Deeds Transferred to All Buyers",
      "High-Footfall Commercial Road Frontage",
      "Continuous Three-Phase Electrical Supply"
    ],
    "availableUnits": [
      {
        "type": "Completed Commercial Unit (Resale/Rent)",
        "size": "65 m\u00b2",
        "bedrooms": 0,
        "bathrooms": 1,
        "price": "Call for Availability"
      }
    ]
  },
  {
    "id": 10,
    "slug": "atena-tera-project",
    "title": "AGT-Trading Atena Tera",
    "location": "Atena Tera / Merkato Gateway, Addis Ababa",
    "area": "Addis Ababa",
    "status": "Delivered",
    "progress": 100,
    "units": "45 Units",
    "type": "Commercial & Residential Center",
    "image": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=1200&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=1200&auto=format&fit=crop&q=80"
    ],
    "videoUrl": "",
    "delivery": "Delivered",
    "description": "Fully completed commercial complex featuring premium retail stores and corporate offices.",
    "fullOverview": "Successfully completed multi-purpose commercial center at Atena Tera providing high-density retail spaces and commercial facilities delivered with excellence.",
    "specs": {
      "floors": "G + 5 Floors",
      "totalUnits": "45 Commercial Lots",
      "parkingSpaces": "50 Parking Bays",
      "elevators": "1 Elevator",
      "waterReservoir": "60,000 Liters Tank",
      "generator": "100 kVA Generator",
      "landArea": "1,600 m\u00b2"
    },
    "milestones": {
      "foundation": 100,
      "structure": 100,
      "masonry": 100,
      "mep": 100,
      "finishing": 100
    },
    "amenities": [
      "100% Completed & Delivered",
      "Prime Commercial Commerce Position",
      "Reliable Power and Water Systems"
    ],
    "availableUnits": []
  },
  {
    "id": 11,
    "slug": "sahil-project",
    "title": "Sahil Luxury Residences",
    "location": "Lebu Mebrat Hail, Addis Ababa",
    "area": "Lebu",
    "status": "Delivered",
    "progress": 100,
    "units": "80 Units",
    "type": "Residential Apartments",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80"
    ],
    "videoUrl": "",
    "delivery": "Delivered",
    "description": "Completed luxury residential apartments delivered ahead of schedule in Lebu.",
    "fullOverview": "Sahil Project stands as a testament to timely delivery and quality craftsmanship. Located in Lebu Mebrat Hail, all 80 homes were handed over with complete legal titles to satisfied homeowners.",
    "specs": {
      "floors": "B + G + 8 Floors",
      "totalUnits": "80 Completed Apartments",
      "parkingSpaces": "85 Parking Bays",
      "elevators": "2 Elevators",
      "waterReservoir": "80,000 Liters Tank",
      "generator": "120 kVA Generator",
      "landArea": "2,200 m\u00b2"
    },
    "milestones": {
      "foundation": 100,
      "structure": 100,
      "masonry": 100,
      "mep": 100,
      "finishing": 100
    },
    "amenities": [
      "100% Delivered Ahead of Schedule",
      "Complete Legal Title Deeds Handed Over",
      "Gated Community with Landscaped Areas"
    ],
    "availableUnits": []
  },
  {
    "id": 12,
    "slug": "adwa-ewket",
    "title": "Adwa 001 - Ewket Site",
    "location": "Adwa Victory Memorial / Piyassa, Addis Ababa",
    "area": "Piyassa",
    "status": "Upcoming",
    "progress": 15,
    "units": "110 Units",
    "type": "High-Rise Luxury Apartments & Retail Galleria",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80"
    ],
    "videoUrl": "",
    "delivery": "September 2027",
    "description": "Next-generation modern architecture at the historic Adwa intersection.",
    "fullOverview": "Adjacent to the historic Adwa Victory Memorial, this upcoming 16-story development will feature ultra-modern glass facades, rooftop recreational infinity terraces, smart home technology, and prime retail storefronts.",
    "specs": {
      "floors": "3B + G + 16 Floors",
      "totalUnits": "110 Luxury Units",
      "parkingSpaces": "140 Basement Spaces",
      "elevators": "3 High-Speed Elevators",
      "waterReservoir": "150,000 Liters Tank",
      "generator": "200 kVA Standby Generator",
      "landArea": "2,700 m\u00b2"
    },
    "milestones": {
      "foundation": 40,
      "structure": 10,
      "masonry": 0,
      "mep": 0,
      "finishing": 0
    },
    "amenities": [
      "Historic Landmark Position at Adwa Memorial",
      "Rooftop Executive Sky Lounge & Fitness Center",
      "Triple-Level Basement Automated Parking",
      "Smart Home Pre-wiring & Keyless Entry"
    ],
    "availableUnits": [
      {
        "type": "Pre-Sale 2 Bedroom Modern Flat",
        "size": "110 m\u00b2",
        "bedrooms": 2,
        "bathrooms": 2,
        "price": "11,000,000 ETB"
      },
      {
        "type": "Pre-Sale 3 Bedroom Sky Residence",
        "size": "150 m\u00b2",
        "bedrooms": 3,
        "bathrooms": 2,
        "price": "15,000,000 ETB"
      }
    ]
  }
];
