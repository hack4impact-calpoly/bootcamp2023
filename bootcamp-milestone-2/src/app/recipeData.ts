// recipeData.ts

export interface Recipe {
    foodname: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  }
  
  const recipeArray: Recipe[] = [
    {
      foodname: "Nachos",
      description: "chips with cheese and protein on top",
      image: "/nachos.jpg",
      ingredients: ["chips", "salsa", "cheese", "meat", "beans", "jalapenos"],
      instructions: ["chips in first, then beans, then meat, then cheese, then salsa, then eat"],
    },
    {
      foodname: "Steak",
      description: "Straight meat",
      image: "/steak.jpg",
      ingredients: ["Meat"],
      instructions: ["cook it"]
    }
  ];
  
  export { recipeArray };
  