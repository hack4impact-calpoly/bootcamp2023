
export interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  };

const recipeArray: Recipe[] = [
    {
        name: "Nachos",
        description: "chips with cheese and protein on top",
        image: "bootcamp-milestone-2/public/nachos.jpg",
        ingredients: ["chips", "salsa", "cheese", "meat", "beans", "jalapenos"],
        instructions: ["chips in first, then beans, then meat, then cheese, then salsa, then eat"],
    },
    {
        name: "Steak",
        description: "Straight meat",
        image: "bootcamp-milestone-2/public/steak.jpg",
        ingredients: ["Meat"],
        instructions: ["cook dat B"]
    }
];  

export default recipeArray;