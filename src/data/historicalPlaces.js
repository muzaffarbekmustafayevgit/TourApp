// src/data/historicalPlaces.js
const images = import.meta.glob("../images/*.{jpg,png,jpeg}", {
  eager: true,
  import: "default"
});

function getImage(name) {
  return images[`../images/${name}`];
}
export const historicalPlaces = [
  {
    id: 1,
    name: "Registon maydoni",
    description: "Samarqanddagi mashhur me'moriy yodgorlik - madrasalar majmuasi",
    images: [
      getImage("1.jpg"),
      getImage("2.jpg"),
      getImage("3.jpg"),
    ],
    rating: 4.8,
    location: { lat: 39.6542, lng: 66.9757 },
    city: "Samarqand",
    category: "architecture",
    price: "Bepul",
    openingHours: "9:00 - 18:00",
    bestTime: "Bahor, Kuz",
    yearBuilt: "15-17-asrlar",
    features: ["Madrasalar", "Islom me'morchiligi", "Markaziy maydon"]
  },
  {
    id: 2,
    name: "Shahi Zinda",
    description: "Samarqanddagi qadimiy maqbaralar majmuasi - Amir Temur sulolasi qabristoni",
    images: [
      getImage("4.jpg"),
      getImage("5.jpg"),
      getImage("6.jpg"),
    ],
    rating: 4.7,
    location: { lat: 39.6615, lng: 66.9882 },
    city: "Samarqand",
    category: "religious",
    price: "30000 so'm",
    openingHours: "8:00 - 19:00",
    bestTime: "Sertabr",
    yearBuilt: "11-19-asrlar",
    features: ["Maqbaralar", "Koshin bezaklar", "Ziyoratgoh"]
  },
  {
    id: 3,
    name: "Bibi Xonim masjidi",
    description: "Amir Temur Hindistondan keyingi g'alabasi sharafiga qurdirgan buyuk masjid",
    images: [
      getImage("7.jpg"),
      getImage("8.jpg"),
      getImage("9.jpg"),
    ],
    rating: 4.6,
    location: { lat: 39.6590, lng: 66.9757 },
    city: "Samarqand",
    category: "religious",
    price: "25000 so'm",
    openingHours: "8:30 - 17:30",
    bestTime: "Yil bo'yi",
    yearBuilt: "1399-1404",
    features: ["Jome masjidi", "Marmar ustunlar", "Kubba"]
  },
  {
    id: 4,
    name: "Xiva Ichan Qal'a",
    description: "Xorazmdagi qadimiy shahar qal'asi - UNESCOning Butunjahon merosi",
    images: [
      getImage("10.jpg"),
      getImage("11.jpg"),
      getImage("12.jpg"),
    ],
    rating: 4.9,
    location: { lat: 41.3783, lng: 60.3619 },
    city: "Xiva",
    category: "fortress",
    price: "50000 so'm",
    openingHours: "9:00 - 20:00",
    bestTime: "Bahor, Kuz",
    yearBuilt: "5-asr",
    features: ["Ichki qal'a", "Mudofaa devorlari", "Qadimiy shahar"]
  },
  {
    id: 5,
    name: "Buxoro Ark",
    description: "Buxorodagi qadimiy hukmdor qal'asi - 5-asrga oid mudofaa inshooti",
    images: [
     getImage("13.jpg"),
      getImage("14.jpg"),
      getImage("15.jpg"),
    ],
    rating: 4.5,
    location: { lat: 39.7756, lng: 64.4094 },
    city: "Buxoro",
    category: "fortress",
    price: "30000 so'm",
    openingHours: "9:00 - 17:00",
    bestTime: "Mart-May",
    yearBuilt: "5-asr",
    features: ["Hukmdor qasri", "Mudofaa inshooti", "Tarixiy muzey"]
  },
  {
    id: 6,
    name: "Minorai Kalon",
    description: "Buxorodagi ulkan minora - 12-asrga oid me'moriy durdona",
    images: [
       getImage("16.jpg"),
      getImage("17.jpg"),
      getImage("18.jpg"),
    ],
    rating: 4.7,
    location: { lat: 39.7758, lng: 64.4147 },
    city: "Buxoro",
    category: "architecture",
    price: "Bepul",
    openingHours: "24/7",
    bestTime: "Kechqurun",
    yearBuilt: "1127",
    features: ["Baland minora", "Ma'zan", "Shahar ramzi"]
  },
  {
    id: 7,
    name: "Ulug'bek rasadxonasi",
    description: "Samarqanddagi 15-asrga oid astronomik rasadxona",
    images: [
      getImage("19.jpg"),
      getImage("20.jpg"),
      getImage("21.jpg"),
    ],
    rating: 4.4,
    location: { lat: 39.6723, lng: 66.9895 },
    city: "Samarqand",
    category: "museum",
    price: "25000 so'm",
    openingHours: "9:00 - 17:00",
    bestTime: "Kun davomida",
    yearBuilt: "1428-1429",
    features: ["Astronomiya", "Ilmiy markaz", "Tarixiy asboblar"]
  },
  {
    id: 8,
    name: "Chor Minor",
    description: "Buxorodagi to'rt minorali masjid - noyob me'moriy yodgorlik",
    images: [
      getImage("22.jpg"),
      getImage("23.jpg"),
      getImage("24.jpg"),
    ],
    rating: 4.3,
    location: { lat: 39.7689, lng: 64.4211 },
    city: "Buxoro",
    category: "religious",
    price: "15000 so'm",
    openingHours: "8:00 - 18:00",
    bestTime: "Ertalab",
    yearBuilt: "1807",
    features: ["To'rt minora", "Masjid", "Noyob me'moriy"]
  },
  {
    id: 9,
    name: "Dorut Tilovat",
    description: "Shahrisabzdagi Amir Temur saroyi xarobalari",
    images: [
      getImage("25.jpg"),
      getImage("26.jpg"),
      getImage("27.jpg"),
    ],
    rating: 4.2,
    location: { lat: 39.0578, lng: 66.8339 },
    city: "Shahrisabz",
    category: "architecture",
    price: "20000 so'm",
    openingHours: "9:00 - 17:00",
    bestTime: "Bahor",
    yearBuilt: "14-asr",
    features: ["Saroy xarobalari", "Amir Temur", "Tarixiy majmua"]
  },
  {
    id: 10,
    name: "Sitorai Mohi Xosa",
    description: "Buxoro amirining yozgi saroyi - me'moriy durdona",
    images: [
     getImage("28.jpg"),
      getImage("29.jpg"),
      getImage("30.jpg"),
    ],
    rating: 4.6,
    location: { lat: 39.7917, lng: 64.4292 },
    city: "Buxoro",
    category: "architecture",
    price: "35000 so'm",
    openingHours: "9:00 - 18:00",
    bestTime: "Bahor, Kuz",
    yearBuilt: "19-asr",
    features: ["Yozgi saroy", "Amir qarorgohi", "Arxitektura"]
  },
  // Navoiy viloyati joylari
  {
    id: 11,
    name: "Nurata qadimiy shahri",
    description: "Nurota tog' etagidagi qadimiy shahar - miloddan avvalgi asrlarga oid tarixiy joy",
    images: [
      "https://images.unsplash.com/photo-1540959733332-8cbd5d2d3c2a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1588666309999-ef3b3d8d8c28?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1593081891731-fda0877988da?w=800&h=600&fit=crop"
    ],
    rating: 4.5,
    location: { lat: 40.5614, lng: 65.6885 },
    city: "Nurota",
    category: "fortress",
    price: "20000 so'm",
    openingHours: "8:00 - 18:00",
    bestTime: "Bahor, Kuz",
    yearBuilt: "Miloddan avvalgi 4-asr",
    features: ["Qadimiy qal'a", "Sanskrit yozuvlari", "Arxeologik joy"]
  },
  {
    id: 12,
    name: "Chashma bulog'i",
    description: "Nurotadagi muqaddas buloq - tabiiy buloq va ziyoratgoh",
    images: [
      "https://images.unsplash.com/photo-1540959733332-8cbd5d2d3c2a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1588666309999-ef3b3d8d8c28?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1599733875147-259389120c8d?w=800&h=600&fit=crop"
    ],
    rating: 4.7,
    location: { lat: 40.5667, lng: 65.6833 },
    city: "Nurota",
    category: "religious",
    price: "Bepul",
    openingHours: "6:00 - 22:00",
    bestTime: "Yil bo'yi",
    yearBuilt: "Tabiiy",
    features: ["Muqaddas buloq", "Ziyoratgoh", "Tabiiy go'zallik"]
  },
  {
    id: 13,
    name: "Qizilqum qo'riqxonasi",
    description: "Navoiy viloyatidagi yirik qo'riqxona - noyob o'simlik va hayvonot dunyosi",
    images: [
      "https://images.unsplash.com/photo-1540959733332-8cbd5d2d3c2a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1588666309999-ef3b3d8d8c28?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1593081891731-fda0877988da?w=800&h=600&fit=crop"
    ],
    rating: 4.4,
    location: { lat: 41.5000, lng: 64.0000 },
    city: "Navoiy",
    category: "museum",
    price: "15000 so'm",
    openingHours: "9:00 - 17:00",
    bestTime: "Bahor, Kuz",
    yearBuilt: "1971-yil",
    features: ["Qo'riqxona", "Noyob turlar", "Tabiat muzeyi"]
  },
  {
    id: 14,
    name: "Sarmishsoy petrogliflari",
    description: "Qadimiy tosh rasmlari - miloddan avvalgi 10-4 ming yilliklarga oid san'at asarlari",
    images: [
      "https://images.unsplash.com/photo-1540959733332-8cbd5d2d3c2a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1588666309999-ef3b3d8d8c28?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1599733875147-259389120c8d?w=800&h=600&fit=crop"
    ],
    rating: 4.8,
    location: { lat: 40.3000, lng: 65.1500 },
    city: "Navoiy",
    category: "museum",
    price: "10000 so'm",
    openingHours: "8:00 - 19:00",
    bestTime: "Bahor, Kuz",
    yearBuilt: "Miloddan avvalgi 10-4 ming yillik",
    features: ["Tosh rasmlari", "Arxeologik joy", "Qadimiy san'at"]
  },
  {
    id: 15,
    name: "Raboti Malik",
    description: "11-asrga oid karavonsaroy - Seljuk me'morchiligi durdonasi",
    images: [
      "https://images.unsplash.com/photo-1540959733332-8cbd5d2d3c2a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1588666309999-ef3b3d8d8c28?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1599733875147-259389120c8d?w=800&h=600&fit=crop"
    ],
    rating: 4.3,
    location: { lat: 40.1000, lng: 65.3667 },
    city: "Navoiy",
    category: "architecture",
    price: "12000 so'm",
    openingHours: "9:00 - 18:00",
    bestTime: "Kun davomida",
    yearBuilt: "11-asr",
    features: ["Karavonsaroy", "Seljuk me'morchiligi", "Tarixiy bino"]
  },
  {
    id: 16,
    name: "Xazrati Dovud maqbarasi",
    description: "Nurotadagi ziyoratgoh - payg'ambar Dovudga bag'ishlangan muqaddas joy",
    images: [
      "https://images.unsplash.com/photo-1540959733332-8cbd5d2d3c2a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1588666309999-ef3b3d8d8c28?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1599733875147-259389120c8d?w=800&h=600&fit=crop"
    ],
    rating: 4.6,
    location: { lat: 40.5689, lng: 65.6850 },
    city: "Nurota",
    category: "religious",
    price: "Bepul",
    openingHours: "6:00 - 20:00",
    bestTime: "Yil bo'yi",
    yearBuilt: "16-asr",
    features: ["Maqbara", "Ziyoratgoh", "Diniy marosimlar"]
  },
  {
    id: 17,
    name: "Kontepa buddist ibodatxonasi",
    description: "Miloddan avvalgi 1-asrga oid buddist ibodatxonasi xarobalari",
    images: [
      "https://images.unsplash.com/photo-1540959733332-8cbd5d2d3c2a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1588666309999-ef3b3d8d8c28?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1599733875147-259389120c8d?w=800&h=600&fit=crop"
    ],
    rating: 4.2,
    location: { lat: 40.0833, lng: 65.3833 },
    city: "Navoiy",
    category: "religious",
    price: "8000 so'm",
    openingHours: "9:00 - 17:00",
    bestTime: "Bahor, Kuz",
    yearBuilt: "Miloddan avvalgi 1-asr",
    features: ["Buddist ibodatxonasi", "Arxeologik joy", "Qadimiy din"]
  },
  {
    id: 18,
    name: "Ayazqala qal'asi",
    description: "Qadimiy xorazm qal'asi - miloddan avvalgi 4-asrga oid mudofaa inshooti",
    images: [
      "https://images.unsplash.com/photo-1540959733332-8cbd5d2d3c2a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1588666309999-ef3b3d8d8c28?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1599733875147-259389120c8d?w=800&h=600&fit=crop"
    ],
    rating: 4.5,
    location: { lat: 41.8333, lng: 60.1667 },
    city: "Navoiy",
    category: "fortress",
    price: "15000 so'm",
    openingHours: "8:00 - 19:00",
    bestTime: "Bahor, Kuz",
    yearBuilt: "Miloddan avvalgi 4-asr",
    features: ["Qadimiy qal'a", "Mudofaa inshooti", "Arxeologik joy"]
  },
  {
    id: 19,
    name: "Navoiy konchilik muzeyi",
    description: "O'zbekiston konchilik sanoati tarixiga bag'ishlangan muzey",
    images: [
      "https://images.unsplash.com/photo-1540959733332-8cbd5d2d3c2a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1588666309999-ef3b3d8d8c28?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1599733875147-259389120c8d?w=800&h=600&fit=crop"
    ],
    rating: 4.1,
    location: { lat: 40.0844, lng: 65.3792 },
    city: "Navoiy",
    category: "museum",
    price: "10000 so'm",
    openingHours: "10:00 - 17:00",
    bestTime: "Hafta ichida",
    yearBuilt: "1985-yil",
    features: ["Konchilik tarixi", "Mineral kolleksiya", "Sanoat muzeyi"]
  },
  {
    id: 20,
    name: "Nurota tog'i",
    description: "Qadimiy tog' tizmasi - tabiiy go'zallik va tarixiy ahamiyatga ega",
    images: [
      "https://images.unsplash.com/photo-1540959733332-8cbd5d2d3c2a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1588666309999-ef3b3d8d8c28?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1599733875147-259389120c8d?w=800&h=600&fit=crop"
    ],
    rating: 4.7,
    location: { lat: 40.5667, lng: 65.6833 },
    city: "Nurota",
    category: "architecture",
    price: "Bepul",
    openingHours: "24/7",
    bestTime: "Bahor, Kuz",
    yearBuilt: "Tabiiy",
    features: ["Tog' tizmasi", "Tabiiy go'zallik", "Trekking yo'llari"]
  }
];

export const cities = [
  "Barcha shaharlar",
  "Samarqand",
  "Buxoro", 
  "Xiva",
  "Shahrisabz",
  "Toshkent",
  "Navoiy",
  "Nurota"
];

export const categories = [
  "Barcha kategoriyalar",
  "architecture",
  "religious",
  "fortress", 
  "museum"
];