export interface Food {
  title: string;
  image: string;
  ingredients: string[];
}

// Define the array of Food objects
const foods: Food[] = [
  {
    title: "Shrimp Carbonara",
    image: "/shrimpCarbonara.jpg",
    ingredients: [
      "Homemade Fettuccine with Balsamic",
      "Pancetta",
      "Shrimp",
      "Egg Yolk and Pecorino Romano",
      "Parmesan Cheese",
    ],
  },
  {
    title: "Aperol Spritz",
    image: "/aperol.jpg",
    ingredients: [
      "Prosecco Rosé",
      "Aperol",
      "Soda Water",
      "Simple Syrup",
      "Brûléed Orange",
    ],
  },
];

export default foods;
