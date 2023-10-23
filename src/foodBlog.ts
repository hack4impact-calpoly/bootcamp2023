// Define the Food type
type Food = {
  title: string;
  image: string;
  ingredients: string[];
};

// Define the array of Food objects
const foods: Food[] = [
  {
    title: "Shrimp Carbonara",
    image: "shrimpCarbonara.jpg",
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
    image: "aperol.jpg",
    ingredients: [
      "Prosecco Rosé",
      "Aperol",
      "Soda Water",
      "Simple Syrup",
      "Brûléed Orange",
    ],
  },
];

// Function to render foods
function renderFoodss(): void {
  const containerElements: HTMLCollectionOf<Element> =
    document.getElementsByClassName("foodContainer");

  if (containerElements.length === 0) {
    console.error(
      'Container element with class name "foodContainer" not found in the DOM.'
    );
    return; // Exit the function if container not found
  }

  const foodContainer: Element = containerElements[0];

  foods.forEach((food) => {
    const foodElement: HTMLDivElement = document.createElement("div");
    foodElement.classList.add("food-entry"); // Add a class for styling, if needed

    // Create a bulleted list of ingredients
    const ingredientsList: string = food.ingredients
      .map((ingredient) => `<li>${ingredient}</li>`)
      .join("");

    foodElement.innerHTML = `
            <h2>${food.title}</h2>
            <div class="food-image">
            <img src="${food.image}" alt="${food.title}" />
            </div>
            <p><strong>Ingredients:</strong></p>
            <ul>${ingredientsList}</ul>
        `;

    // Append the food element to the container
    foodContainer.appendChild(foodElement);
  });
}

// Call the renderFoodss function when the DOM is fully loaded
window.onload = () => {
  renderFoodss();
};
