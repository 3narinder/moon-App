import {
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  teamMember1,
  teamMember2,
  teamMember3,
  teamMember4,
} from "./Images";

export const NAV_LINKS = [
  { name: "Home", href: "/", icon: "/icons/home_fill.png" },
  { name: "Shop", href: "/shop", icon: "/icons/shop_fill.png" },
  { name: "About", href: "/about", icon: "/icons/about_fill.png" },
  { name: "Contact", href: "/contact", icon: "/icons/Phone.png" },
];

export const NAV_ICONS_NAVBAR = [
  { src: "/icons/Search.png", alt: "Search", href: "/" },
  { src: "/icons/Shopping_cart.png", alt: "Cart", href: "/cart" }, // ✅ Fixed
  { src: "/icons/Avatar.png", alt: "Profile", href: "/profile" }, // ✅ Use appropriate path
];

export const NAV_ICONS_DROPDOWN = [
  { src: "/icons/Avatar.png", alt: "Profile", href: "cart" },
  { src: "/icons/Heart.png", alt: "Wishlist", href: "cart" },
];

export const FOOTER_LINKS = [
  {
    title: "About Us",
    links: [
      { name: "Mission", href: "/mission" },
      { name: "Our Team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "Testimonials", href: "/testimonials" },
      { name: "Privacy Policy", href: "/policy" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "/web-development" },
      { name: "UI/UX Design", href: "/ui-ux-design" },
      { name: "Consulting", href: "/consulting" },
      { name: "Mobile Design", href: "/mobile-design" },
      { name: "Branding", href: "/branding" },
    ],
  },
  {
    title: "Portfolio",
    links: [
      { name: "E-Commerce", href: "/e-commerce" },
      { name: "SaaS Solutions", href: "/saas" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "UI/UX Design", href: "/ui-ux-design" },
      { name: "Landing pages", href: "/landing" },
    ],
  },
];

export const products = [
  {
    id: 1,
    name: "Handcrafted Ceramic Dinner Set",
    price: 129.99,
    sold: 80,
    dateOfArrival: "2024-03-10",
    category: "Dinnerware",
    colors: ["#FF0000", "#c69b78", "#c69b78", "#ccd8ce"],
    tag: ["dinner set", "handmade", "ceramic"],
    categories: ["Dinnerware", "Tableware"],
    image: [product1, product2, product3, product4, product5],
    description:
      "A beautifully handcrafted ceramic dinner set featuring a classic white and blue design. Perfect for elegant dining experiences.",
  },
  {
    id: 2,
    name: "Rustic Clay Tea Cups",
    price: 39.99,
    sold: 120,
    dateOfArrival: "2024-02-20",
    category: "Cookware",
    colors: ["#c69b78", "#c69b78", "#ccd8ce"],
    tag: ["tea cups", "rustic", "handmade"],
    categories: ["Home-Holiday", "Tableware"],
    image: [product6, product7, product8, product9, product10],
    description:
      "Enjoy your tea in these rustic, handcrafted clay tea cups. A perfect blend of tradition and elegance.",
  },
  {
    id: 3,
    name: "Glazed Ceramic Flower Pot",
    price: 24.99,
    sold: 95,
    dateOfArrival: "2024-03-05",
    category: "Holiday",
    colors: ["#ccd8ce", "#b4555d", "#c69b78", "#ccd8ce"],
    tag: ["flower pot", "glazed", "ceramic"],
    categories: ["Holiday", "Gardening"],
    image: [product1, product2, product3, product4, product5],
    description:
      "A stunning glazed ceramic flower pot, ideal for both indoor and outdoor plants. Adds charm to any space.",
  },
  {
    id: 4,
    name: "Vintage Ceramic Soup Bowls",
    price: 49.99,
    sold: 60,
    dateOfArrival: "2024-01-30",
    category: "Bowls",
    colors: ["#b4555d", "#c69b78", "#ccd8ce"],
    tag: ["soup bowls", "vintage", "ceramic"],
    categories: ["Bowls", "Tableware"],
    image: [product6, product7, product8, product9, product10],
    description:
      "Set of 4 vintage-style ceramic soup bowls, perfect for serving warm and hearty meals in style.",
  },
  {
    id: 5,
    name: "Matte Finish Coffee Mug",
    price: 14.99,
    sold: 150,
    dateOfArrival: "2024-02-15",
    category: "Home-Holiday",
    colors: ["#9b92a1", "#FF0000", "#c69b78", "#ccd8ce"],
    tag: ["coffee mug", "matte", "ceramic"],
    categories: ["Home-Holiday", "Collection"],
    image: [product1, product2, product3, product4, product5],
    description:
      "A sleek matte finish ceramic coffee mug designed for comfort and a stylish drinking experience.",
  },
  {
    id: 6,
    name: "Handmade Ceramic Vase",
    price: 34.99,
    sold: 70,
    dateOfArrival: "2024-03-08",
    category: "Holiday",
    colors: ["#c69b78", "#ccd8ce", "#c69b78"],
    tag: ["vase", "handmade", "ceramic"],
    categories: ["Holiday", "Home Accessories"],
    image: [product6, product7, product8, product9, product10],
    description:
      "A handmade ceramic vase with an elegant white finish. A timeless decor piece for any home.",
  },
  {
    id: 7,
    name: "Ceramic Serving Platter",
    price: 59.99,
    sold: 85,
    dateOfArrival: "2024-02-25",
    category: "Tableware",
    colors: ["#b4555d", "#9b92a1", "#c69b78"],
    tag: ["serving platter", "glazed", "ceramic"],
    categories: ["Tableware", "Collection"],
    image: [product1, product2, product3, product4, product5],
    description:
      "A high-quality ceramic serving platter with a beautiful glazed finish. Perfect for showcasing your favorite dishes.",
  },
  {
    id: 8,
    name: "Speckled Ceramic Mixing Bowls",
    price: 69.99,
    sold: 55,
    dateOfArrival: "2024-01-20",
    category: "Bowls",
    colors: ["#FF0000", "#c69b78", "#ccd8ce"],
    tag: ["mixing bowls", "ceramic", "kitchen"],
    categories: ["Bowls", "Collection"],
    image: [product6, product7, product8, product9, product10],
    description:
      "A set of three speckled ceramic mixing bowls, ideal for cooking, baking, and serving meals.",
  },
  {
    id: 9,
    name: "Minimalist Ceramic Pasta Plates",
    price: 39.99,
    sold: 90,
    dateOfArrival: "2024-02-10",
    category: "Dinnerware",
    colors: ["#ccd8ce"],
    tag: ["pasta plates", "minimalist", "ceramic"],
    categories: ["Dinnerware", "Tableware"],
    image: [product1, product2, product3, product4, product5],
    description:
      "Minimalist ceramic pasta plates designed for modern dining. Comes in a set of two elegant gray plates.",
  },
  {
    id: 10,
    name: "Traditional Clay Water Jug",
    price: 44.99,
    sold: 100,
    dateOfArrival: "2024-03-01",
    category: "Home-Holiday",
    colors: ["#b4555d", "#c69b78", "#c69b78", "#ccd8ce"],
    tag: ["water jug", "traditional", "clay"],
    categories: ["Home-Holiday", "Collection"],
    image: [product6, product7, product8, product9, product10],
    description:
      "A traditional handcrafted clay water jug that keeps water naturally cool and fresh.",
  },

  {
    id: 11,
    name: "Handcrafted Ceramic Dinner Set",
    price: 129.99,
    sold: 80,
    dateOfArrival: "2024-03-10",
    category: "Dinnerware",
    colors: ["#FF0000", "#c69b78"],
    tag: ["dinner set", "handmade", "ceramic"],
    categories: ["Dinnerware", "Tableware"],
    image: [product1, product2, product3, product4, product5],
    description:
      "A beautifully handcrafted ceramic dinner set featuring a classic white and blue design. Perfect for elegant dining experiences.",
  },
  {
    id: 12,
    name: "Rustic Clay Tea Cups",
    price: 39.99,
    sold: 120,
    dateOfArrival: "2024-02-20",
    category: "Home-Holiday",
    colors: ["#c69b78"],
    tag: ["tea cups", "rustic", "handmade"],
    categories: ["Home-Holiday", "Tableware"],
    image: [product6, product7, product8, product9, product10],
    description:
      "Enjoy your tea in these rustic, handcrafted clay tea cups. A perfect blend of tradition and elegance.",
  },
  {
    id: 13,
    name: "Glazed Ceramic Flower Pot",
    price: 24.99,
    sold: 95,
    dateOfArrival: "2024-03-05",
    category: "Holiday",
    colors: ["#ccd8ce", "#b4555d"],
    tag: ["flower pot", "glazed", "ceramic"],
    categories: ["Holiday", "Gardening"],
    image: [product1, product2, product3, product4, product5],
    description:
      "A stunning glazed ceramic flower pot, ideal for both indoor and outdoor plants. Adds charm to any space.",
  },
  {
    id: 14,
    name: "Vintage Ceramic Soup Bowls",
    price: 49.99,
    sold: 60,
    dateOfArrival: "2024-01-30",
    category: "Bowls",
    colors: ["#b4555d"],
    tag: ["soup bowls", "vintage", "ceramic"],
    categories: ["Bowls", "Tableware"],
    image: [product6, product7, product8, product9, product10],
    description:
      "Set of 4 vintage-style ceramic soup bowls, perfect for serving warm and hearty meals in style.",
  },
  {
    id: 15,
    name: "Matte Finish Coffee Mug",
    price: 14.99,
    sold: 150,
    dateOfArrival: "2024-02-15",
    category: "Home-Holiday",
    colors: ["#9b92a1", "#FF0000"],
    tag: ["coffee mug", "matte", "ceramic"],
    categories: ["Home-Holiday", "Collection"],
    image: [product1, product2, product3, product4, product5],
    description:
      "A sleek matte finish ceramic coffee mug designed for comfort and a stylish drinking experience.",
  },
  {
    id: 16,
    name: "Handmade Ceramic Vase",
    price: 34.99,
    sold: 70,
    dateOfArrival: "2024-03-08",
    category: "Holiday",
    colors: ["#c69b78", "#ccd8ce", "#c69b78", "#ccd8ce"],
    tag: ["vase", "handmade", "ceramic"],
    categories: ["Holiday", "Home Accessories"],
    image: [product6, product7, product8, product9, product10],
    description:
      "A handmade ceramic vase with an elegant white finish. A timeless decor piece for any home.",
  },
  {
    id: 17,
    name: "Ceramic Serving Platter",
    price: 59.99,
    sold: 85,
    dateOfArrival: "2024-02-25",
    category: "Tableware",
    colors: ["#b4555d", "#9b92a1"],
    tag: ["serving platter", "glazed", "ceramic"],
    categories: ["Tableware", "Collection"],
    image: [product1, product2, product3, product4, product5],
    description:
      "A high-quality ceramic serving platter with a beautiful glazed finish. Perfect for showcasing your favorite dishes.",
  },
  {
    id: 18,
    name: "Speckled Ceramic Mixing Bowls",
    price: 69.99,
    sold: 55,
    dateOfArrival: "2024-01-20",
    category: "Bowls",
    colors: ["#FF0000", "#c69b78", "#ccd8ce"],
    tag: ["mixing bowls", "ceramic", "kitchen"],
    categories: ["Bowls", "Collection"],
    image: [product6, product7, product8, product9, product10],
    description:
      "A set of three speckled ceramic mixing bowls, ideal for cooking, baking, and serving meals.",
  },
  {
    id: 19,
    name: "Minimalist Ceramic Pasta Plates",
    price: 39.99,
    sold: 90,
    dateOfArrival: "2024-02-10",
    category: "Dinnerware",
    colors: ["#ccd8ce"],
    tag: ["pasta plates", "minimalist", "ceramic"],
    categories: ["Dinnerware", "Tableware"],
    image: [product1, product2, product3, product4, product5],
    description:
      "Minimalist ceramic pasta plates designed for modern dining. Comes in a set of two elegant gray plates.",
  },
  {
    id: 20,
    name: "Traditional Clay Water Jug",
    price: 44.99,
    sold: 100,
    dateOfArrival: "2024-03-01",
    category: "Home-Holiday",
    colors: ["#b4555d", "#c69b78", "#c69b78"],
    tag: ["water jug", "traditional", "clay"],
    categories: ["Home-Holiday", "Collection"],
    image: [product6, product7, product8, product9, product10],
    description:
      "A traditional handcrafted clay water jug that keeps water naturally cool and fresh.",
  },
];

export const cartProducts = [
  {
    id: 1,
    name: "Handcrafted Ceramic Dinner Set",
    price: 129.99,
    sold: 80,
    dateOfArrival: "2024-03-10",
    category: "Dinnerware",
    colors: ["#FF0000", "#c69b78", "#c69b78", "#ccd8ce"],
    tag: ["dinner set", "handmade", "ceramic"],
    categories: ["Dinnerware", "Tableware"],
    image: [product1, product2, product3, product4, product5],
    description:
      "A beautifully handcrafted ceramic dinner set featuring a classic white and blue design. Perfect for elegant dining experiences.",

    quantity: 1,
  },
  {
    id: 2,
    name: "Rustic Clay Tea Cups",
    price: 39.99,
    sold: 120,
    dateOfArrival: "2024-02-20",
    category: "Cookware",
    colors: ["#c69b78", "#c69b78", "#ccd8ce"],
    tag: ["tea cups", "rustic", "handmade"],
    categories: ["Home-Holiday", "Tableware"],
    image: [product6, product7, product8, product9, product10],
    description:
      "Enjoy your tea in these rustic, handcrafted clay tea cups. A perfect blend of tradition and elegance.",
    quantity: 1,
  },
  {
    id: 3,
    name: "Glazed Ceramic Flower Pot",
    price: 24.99,
    sold: 95,
    dateOfArrival: "2024-03-05",
    category: "Holiday",
    colors: ["#ccd8ce", "#b4555d", "#c69b78", "#ccd8ce"],
    tag: ["flower pot", "glazed", "ceramic"],
    categories: ["Holiday", "Gardening"],
    image: [product1, product2, product3, product4, product5],
    description:
      "A stunning glazed ceramic flower pot, ideal for both indoor and outdoor plants. Adds charm to any space.",
    quantity: 1,
  },
  {
    id: 4,
    name: "Vintage Ceramic Soup Bowls",
    price: 49.99,
    sold: 60,
    dateOfArrival: "2024-01-30",
    category: "Bowls",
    colors: ["#b4555d", "#c69b78", "#ccd8ce"],
    tag: ["soup bowls", "vintage", "ceramic"],
    categories: ["Bowls", "Tableware"],
    image: [product6, product7, product8, product9, product10],
    description:
      "Set of 4 vintage-style ceramic soup bowls, perfect for serving warm and hearty meals in style.",
    quantity: 1,
  },
  {
    id: 5,
    name: "Matte Finish Coffee Mug",
    price: 14.99,
    sold: 150,
    dateOfArrival: "2024-02-15",
    category: "Home-Holiday",
    colors: ["#9b92a1", "#FF0000", "#c69b78", "#ccd8ce"],
    tag: ["coffee mug", "matte", "ceramic"],
    categories: ["Home-Holiday", "Collection"],
    image: [product1, product2, product3, product4, product5],
    description:
      "A sleek matte finish ceramic coffee mug designed for comfort and a stylish drinking experience.",
    quantity: 1,
  },
];

export const team = [
  {
    id: 1,
    name: "Brandon Johnson",
    position: "Team Lead",
    image: teamMember1,
  },
  {
    id: 2,
    name: "Alice Johnson",
    position: "Frontend Developer",
    image: teamMember2,
  },
  {
    id: 3,
    name: "Charlie Brown",
    position: "Backend Developer",
    image: teamMember3,
  },
  {
    id: 4,
    name: "Diana Prince",
    position: "UI/UX Designer",
    image: teamMember4,
  },
];

export const sortItems = [
  { id: 1, title: "Name" },
  { id: 2, title: "Price" },
  { id: 3, title: "Popularity" },
];

export const categories = [
  "Dinnerware",
  "Holiday",
  "Home-Holiday",
  "Collection",
];

export const priceRanges = [
  "Under $50",
  "$50 - $100",
  "$100 - $200",
  "Above $200",
];

export const colors = ["#FF0000", "#c69b78", "#ccd8ce", "#b4555d", "#9b92a1"];

export const tags = [
  "New Arrival",
  "Best Seller",
  "Limited Edition",
  "Discounted",
];
