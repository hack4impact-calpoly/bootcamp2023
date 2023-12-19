export interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  }

const recipes: Recipe[] = [
    {
        name: "Recipe 1",
        description: "Description for Recipe 1",
        image: "../public/joemama.jpg",
        ingredients: ["Ingredient 1", "Ingredient 2"],
        instructions: ["Step 1", "Step 2"],
    },
    {
        name: "Recipe 2",
        description: "Description for Recipe 2",
        image: "../public/joemama.jpg",
        ingredients: ["Ingredient 3", "Ingredient 4"],
        instructions: ["Step 3", "Step 4"],
    },
    {
        name: "Recipe 3",
        description: "Description for Recipe 3",
        image: "../public/joemama.jpg",
        ingredients: ["Ingredient 5", "Ingredient 6"],
        instructions: ["Step 5", "Step 6"],
    },
];
  
export default recipes;