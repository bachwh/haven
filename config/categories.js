import * as _ from 'lodash';

const categories = [
  {
    name: 'Books',
    title: 'Books',
    image: require('../assets/images/categories/Books.jpg'),
    subs: [
      'Arts & Photography',
      'Biographies & Memoirs',
      'Business & Economics',
      "Children's Books",
      'Comics, Manga & Graphic Novels',
      'Computers & Internet',
      'Cookbooks, Food & Wine',
      'Crafts, Hobbies & Home',
      'Education Studies & Teaching',
      'Engineering & Transportation',
      'Family & Lifestyle',
      'Health, Fitness & Nutrition',
      'History',
      'Humour & Entertainment',
      'Law',
      'Lesbian, Gay, Bisexual & Transgender Books',
      'Literature & Fiction',
      'Medicine & Nursing',
      'Mystery, Thriller & Suspense',
      'Politics, Philosophy & Social Sciences',
      'Reference',
      'Religion & Spirituality',
      'Romance',
      'Science Fiction & Fantasy',
      'Science, Nature & Maths',
      'Sports & Outdoors',
      'Teen & Young Adult',
      'Textbooks & Study Guides',
      'Travel & Tourism',
    ],
  },
  {
    name: 'Consumer Electronics',
    title: 'Consumer Electronics',
    short: 'Electronics',
    image: require('../assets/images/categories/Consumer_Electronics.jpeg'),
    subs: [
      'Camera & Photo',
      'Portable Audio & Video',
      'Home Audio & Video',
      'Smart Electronics',
      'Accessories & Parts',
      'Electronic Cigarettes',
      'Video Games',
      'Earphones & Headphones',
      'Wearable Devices',
      'VR/AR Devices',
      'Sports & Action Video Cameras',
      '360° Video Cameras & Accessories',
      'Home Electronic Accessories',
      'Speakers',
      'Robot',
      'HIFI Devices',
      'Live Equipment',
      'Power Source',
    ],
  },
  {
    name: 'Toys & Hobbies',
    title: 'Toys & Hobbies',
    short: 'Games',
    image: require('../assets/images/categories/Toys_Hobbies.jpg'),
    subs: [
      'Dolls & Stuffed Toys',
      'Remote Control Toys',
      'Classic Toys',
      'Learning & Education',
      'Outdoor Fun & Sports',
      'Action & Toy Figures',
      'Model Building',
      'Diecasts & Toy Vehicles',
      'Baby & Toddler Toys',
      'Electronic Toys',
      'Puzzles & Games',
      'Novelty & Gag Toys',
      'Stress Relief Toy',
      'Building & Construction Toys',
      "Kid's Party",
      'Hobby & Collectibles',
      'High Tech Toys',
    ],
  },
  {
    name: "Women's Clothing",
    title: 'Apparel for Women',
    short: 'Clothing',
    image: require('../assets/images/categories/Womens_Clothing.jpg'),
    subs: [
      'Dresses',
      'Blouses & Shirts',
      'Hoodies & Sweatshirts',
      'Sweaters',
      'Jackets & Coats',
      'Bottoms',
      'Rompers',
      'Tops & Tees',
      'Jumpsuits',
      'Bodysuits',
      'Suits & Sets',
    ],
  },
  {
    name: "Men's Clothing",
    title: 'Apparel for Men',
    image: require('../assets/images/categories/Mens_Clothing.jpg'),
    subs: [
      'Hoodies & Sweatshirts',
      'Tops & Tees',
      'Jackets & Coats',
      'Pants',
      'Shirts',
      'Jeans',
      'Sweaters',
      'Suits & Blazers',
      'Casual Shorts',
      "Men's Sets",
      'Board Shorts',
    ],
  },
  {
    name: 'Cellphones & Telecommunications',
    title: 'Cellphones & Telecommunications',
    image: require('../assets/images/categories/Cellphones_Telecommunications.jpg'),
    subs: [
      'Cellphones',
      'iPhones',
      'Feature Phones',
      'Refurbished Phones',
      'Mobile Phone Accessories',
      'Mobile Phone Parts',
      'Phone Bags & Cases',
      'Communication Equipments',
      'Walkie Talkie',
      'Walkie Talkie Parts & Accessories',
    ],
  },
  {
    name: 'Computer & Office',
    title: 'Computer & Office',
    image: require('../assets/images/categories/Computer_Office.jpg'),
    subs: [
      'Office Electronics',
      'Computer Components',
      'Computer Peripherals',
      'Internal Storage',
      'External Storage',
      'Networking',
      'Laptops',
      'Gaming Laptops',
      'Laptop Parts',
      'Laptop Accessories',
      'Tablets',
      'Tablet Accessories',
      'Tablet Parts',
      'Mini PC',
      'Desktops',
      'Demo Board & Accessories',
      'Computer Cables & Connectors',
      'Servers',
      'Industrial Computer & Accessories',
      'Computer Cleaners',
    ],
  },
  {
    name: 'Jewelry & Accessories',
    title: 'Jewelry & Accessories',
    image: require('../assets/images/categories/Jewelry_Accessories.jpg'),
    subs: [
      'Fine Jewelry',
      'Necklaces & Pendants',
      'Earrings',
      'Rings',
      'Bracelets & Bangles',
      'Jewelry Sets & More',
      'Beads & Jewelry Making',
      'Wedding & Engagement Jewelry',
    ],
  },
  {
    name: 'Home & Garden',
    title: 'Home & Garden',
    image: require('../assets/images/categories/Home_Garden.jpeg'),
    subs: [
      'Kitchen,Dining & Bar',
      'Home Decor',
      'Home Textile',
      'Arts,Crafts & Sewing',
      'Festive & Party Supplies',
      'Home Storage & Organization',
      'Bathroom Products',
      'Household Cleaning',
      'Pet Products',
      'Garden Supplies',
      'Household Merchandises',
    ],
  },
  {
    name: 'Luggage & Bags',
    title: 'Luggage & Bags',
    image: require('../assets/images/categories/Luggage_Bags.jpg'),
    subs: [
      "Women's Bags",
      "Men's Bags",
      'Backpacks',
      'Wallets',
      "Kids & Baby's Bags",
      'Luggage & Travel Bags',
      'Functional Bags',
      'Coin Purses & Holders',
      'Bag Parts & Accessories',
    ],
  },
  {
    name: 'Shoes',
    title: 'Shoes',
    image: require('../assets/images/categories/Shoes.jpeg'),
    subs: [
      "Women's Shoes",
      "Women's Flats",
      "Women's Pumps",
      "Men's Shoes",
      "Men's Casual Shoes",
      "Women's Vulcanize Shoes",
      "Men's Vulcanize Shoes",
      "Women's Boots",
      "Men's Boots",
      'Shoe Accessories',
    ],
  },
  {
    name: 'Mother & Kids',
    title: 'Mother & Kids',
    image: require('../assets/images/categories/Mother_Kids.jpg'),
    subs: [
      "Girls' Baby Clothing",
      "Boys' Baby Clothing",
      "Girls' Clothing",
      "Boys' Clothing",
      'Baby Shoes',
      "Children's Shoes",
      'Baby Care',
      'Activity & Gear',
      'Safety Equipment',
      'Baby Bedding',
      'Feeding',
      'Matching Family Outfits',
      'Toilet Training',
      'Pregnancy & Maternity',
      'Baby Souvenirs',
      'Baby Furniture',
      'Baby Food',
    ],
  },
  {
    name: 'Sports & Entertainment',
    title: 'Sports & Entertainment',
    image: require('../assets/images/categories/Sports_Entertainment.jpg'),
    subs: [
      'Sports Clothing',
      'Sneakers',
      'Cycling',
      'Fishing',
      'Camping & Hiking',
      'Swimming',
      'Musical Instruments',
      'Hunting',
      'Fitness & Body Building',
      'Water Sports',
      'Team Sports',
      'Racquet Sports',
      'Golf',
      'Running',
      'Shooting',
      'Skiing & Snowboarding',
      'Sports Accessories',
    ],
  },
  {
    name: 'Beauty & Health',
    title: 'Beauty & Health',
    image: require('../assets/images/categories/Beauty_Health.jpg'),
    subs: [
      'Nails Art & Tools',
      'Makeup',
      'Health Care',
      'Skin Care',
      'Hair Care & Styling',
      'Shaving & Hair Removal',
      'Sex Products',
      'Beauty Essentials',
      'Tattoo & Body Art',
      'Bath & Shower',
      'Fragrances & Deodorants',
      'Oral Hygiene',
      'Sanitary Paper',
      'Tools & Accessories',
      "Men's Grooming",
      'Special Categories',
      'Skin Care Tools',
    ],
  },
  {
    name: 'Watches',
    title: 'Watches',
    image: require('../assets/images/categories/Watches.jpeg'),
    subs: [
      "Men's Watches",
      "Women's Watches",
      "Lover's Watches",
      "Children's Watches",
      'Pocket & Fob Watches',
      'Watch Accessories',
      "Women's Bracelet Watches",
    ],
  },
  {
    name: 'Weddings & Events',
    title: 'Weddings & Events',
    image: require('../assets/images/categories/Wedding_Events.jpg'),
    subs: [
      'Wedding Dresses',
      'Evening Dresses',
      'Prom Dresses',
      'Wedding Party Dress',
      'Wedding Accessories',
      'Celebrity-Inspired Dresses',
      'Cocktail Dresses',
      'Homecoming Dresses',
      'Bridesmaid Dresses',
      'Mother of the Bride Dresses',
      'Quinceanera Dresses',
      'Dresses under $80',
    ],
  },
  {
    name: 'Novelty & Special Use',
    title: 'Novelty & Special Use',
    image: require('../assets/images/categories/Novelty_Special_Use.jpg'),
    subs: [
      'Costumes & Accessories',
      'Exotic Apparel',
      'Stage & Dance Wear',
      'Traditional & Cultural Wear',
      'Work Wear & Uniforms',
    ],
  },
  {
    name: 'Automobiles & Motorcycles',
    title: 'Automobiles & Motorcycles',
    image: require('../assets/images/categories/Automobiles_Motorcycles.jpg'),
    subs: [
      'Car Lights',
      'Auto Replacement Parts',
      'Car Electronics',
      'Interior Accessories',
      'Car Repair Tools',
      'Motorcycle Accessories & Parts',
      'Exterior Accessories',
      'Car Wash & Maintenance',
      'ATV,RV,Boat & Other Vehicle',
      'Travel & Roadway Product',
      'Auto Sale',
    ],
  },
  {
    name: 'Lights & Lighting',
    title: 'Lights & Lighting',
    image: require('../assets/images/categories/Lights_Lighting.jpg'),
    subs: [
      'Lamps & Shades',
      'Ceiling Lights & Fans',
      'Light Bulbs',
      'LED Lighting',
      'Outdoor Lighting',
      'LED Lamps',
      'Portable Lighting',
      'Commercial Lighting',
      'Night Lights',
      'Book Lights',
      'Professional Lighting',
      'Novelty Lighting',
      'Holiday Lighting',
      'Lighting Accessories',
      'Under Cabinet Lights',
      'Special Engineering Lighting',
      'Vanity Lights',
    ],
  },
  {
    name: 'Furniture',
    title: 'Furniture',
    image: require('../assets/images/categories/Furniture.png'),
    subs: [
      'Home Furniture',
      'Office Furniture',
      'Children Furniture',
      'Outdoor Furniture',
      'Commercial Furniture',
      'Café Furniture',
      'Bar Furniture',
      'Furniture Accessories',
      'Furniture Parts',
    ],
  },
  {
    name: 'Electronic Components & Supplies',
    title: 'Electronic Components & Supplies',
    image: require('../assets/images/categories/Electronic_Components_Supplies.jpg'),
    subs: [
      'Active Components',
      'EL Products',
      'Electronic Accessories & Supplies',
      'Electronic Data Systems',
      'Electronic Signs',
      'Electronics Production Machinery',
      'Electronics Stocks',
      'Optoelectronic Displays',
      'Other Electronic Components',
      'Passive Components',
    ],
  },
  {
    name: 'Office & School Supplies',
    title: 'Office & School Supplies',
    image: require('../assets/images/categories/Office_School_Supplies.png'),
    subs: [
      'Pens, Pencils & Writing Supplies',
      'Notebooks & Writing Pads',
      'School & Educational Supplies',
      'Painting Supplies',
      'Tapes, Adhesives & Fasteners',
      'Stationery Stickers',
      'Desk Accessories & Organizer',
      'Office Binding Supplies',
      'Labels, Indexes & Stamps',
      'Paper',
      'Calendars, Planners & Cards',
      'Cutting Supplies',
      'Books',
      'Presentation Boards',
      'Filing Products',
      'Mail & Shipping Supplies',
    ],
  },
  {
    name: 'Home Appliances',
    title: 'Home Appliances',
    image: require('../assets/images/categories/Home_Appliances.jpeg'),
    subs: [
      'Kitchen Appliances',
      'Household Appliances',
      'Personal Care Appliances',
      'Major Appliances',
      'Commercial Appliances',
      'Home Appliance Parts',
    ],
  },
  {
    name: 'Home Improvement',
    title: 'Home Improvement',
    image: require('../assets/images/categories/Home_Improvement.jpg'),
    subs: [
      'Lights & Lighting',
      'Home Appliances',
      'Bathroom Fixtures',
      'Kitchen Fixtures',
      'Hardware',
      'Electrical Equipments & Supplies',
      'Building Supplies',
      'Painting Supplies & Wall Treatments',
      'Plumbing',
      'Family Intelligence System',
    ],
  },
  {
    name: 'Security & Protection',
    title: 'Security & Protection',
    image: require('../assets/images/categories/Security_Protection.jpg'),
    subs: [
      'Video Surveillance',
      'Security Alarm',
      'Access Control',
      'Workplace Safety Supplies',
      'Door Intercom',
      'Self Defense Supplies',
      'Smart Card System',
      'Building Automation',
      'Fire Protection',
      'Emergency Kits',
      'Roadway Safety',
      'Safes',
      'Lightning Protection',
      'Transmission & Cables',
      'Security Inspection Device',
      'IoT Devices',
      'Public Broadcasting',
    ],
  },
  {
    name: 'Tools',
    title: 'Tools',
    image: require('../assets/images/categories/Tools.jpg'),
    subs: [
      'Measurement & Analysis Instruments',
      'Machine Tools & Accessories',
      'Hand Tools',
      'Power Tools',
      'Hand & Power Tool Accessories',
      'Welding & Soldering Supplies',
      'Welding Equipment',
      'Woodworking Machinery & Parts',
      'Tool Organizers',
      'Garden Tools',
      'Tool Sets',
      'Abrasives',
      'Abrasive Tools',
      'Construction Tools',
      'Tool Parts',
      'Riveter Guns',
      'Lifting Tools & Accessories',
    ],
  },
  {
    name: 'Hair Extensions & Wigs',
    title: 'Hair Extensions & Wigs',
    image: require('../assets/images/categories/Hair_Extensions_Wigs.jpg'),
    subs: [
      'Human Hair Weaves',
      'Lace Wigs',
      'Hair Extensions',
      'Salon Hair Supply Chain',
      'Synthetic Wigs',
      'Hair Braids',
      'Synthetic Extensions',
      'Hair Pieces',
      'Tools & Accessories',
    ],
  },
  {
    name: 'Apparel Accessories',
    title: 'Apparel Accessories',
    image: require('../assets/images/categories/Apparel_Accessories.jpg'),
    subs: [
      "Women's Glasses",
      "Women's Hats",
      "Women's Scarves",
      "Women's Hair Accessories",
      "Women's Gloves",
      "Women's Belts",
      "Women's Accessories",
      "Men's Glasses",
      "Men's Hats",
      "Men's Scarves",
      "Men's Belts",
      "Men's Gloves",
      "Men's Ties & Handkerchiefs",
      "Men's Accessories",
      "Girl's Accessories",
      "Boy's Accessories",
      'Garment Fabrics & Accessories',
    ],
  },
  {
    name: 'Underwear & Sleepwears',
    title: 'Underwear & Sleepwears',
    image: require('../assets/images/categories/Underwear_Sleepwear.jpg'),
    subs: [
      "Women's Intimates",
      "Women's Sleepwears",
      "Women's Socks & Hosiery",
      "Men's Underwear",
      "Men's Socks",
      "Men's Sleep & Lounge",
      "Women's panties",
    ],
  },
  {
    name: 'Gift Cards',
    title: 'Gift Cards',
    image: require('../assets/images/categories/Gift_Cards.jpg'),
    subs: [
      'General Merchandise',
      'Food & Restaurants',
      'Music, Movies & Entertainment',
      'Digital & Gaming',
      'Clothing & Accessories',
      'Electronics',
      'Sports & Outdoors',
      'Health, Spa & Beauty',
      'Home & Garden',
      'Travel & Lodging',
      'Baby & Kids',
    ],
  },
  {
    name: 'Other',
    title: 'Other',
    image: require('../assets/images/categories/Other.jpg'),
    subs: [
      'Entertainment',
      'Meme',
      'Other',
      'Weird',
      'WTF',
    ],
  },
];

export const getCategoryItem = name => categories.find(cat => cat.name === name);
export const homeCategories = _.slice(categories, 0, 4);
homeCategories.push('More Button');

categories.forEach((categoryObject) => {
  // eslint-disable-next-line no-param-reassign
  categoryObject.subs = _.sortBy(categoryObject.subs);
});

export default _.sortBy(categories, c => c.title);
