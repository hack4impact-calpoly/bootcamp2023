// Define the array of Food objects
var foods = [
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
function renderFoodss() {
    var containerElements = document.getElementsByClassName("foodContainer");
    if (containerElements.length === 0) {
        console.error('Container element with class name "foodContainer" not found in the DOM.');
        return; // Exit the function if container not found
    }
    var foodContainer = containerElements[0];
    foods.forEach(function (food) {
        var foodElement = document.createElement("div");
        foodElement.classList.add("food-entry"); // Add a class for styling, if needed
        // Create a bulleted list of ingredients
        var ingredientsList = food.ingredients
            .map(function (ingredient) { return "<li>".concat(ingredient, "</li>"); })
            .join("");
        foodElement.innerHTML = "\n            <h2>".concat(food.title, "</h2>\n            <div class=\"food-image\">\n            <img src=\"").concat(food.image, "\" alt=\"").concat(food.title, "\" />\n            </div>\n            <p><strong>Ingredients:</strong></p>\n            <ul>").concat(ingredientsList, "</ul>\n        ");
        // Append the food element to the container
        foodContainer.appendChild(foodElement);
    });
}
// Call the renderFoodss function when the DOM is fully loaded
window.onload = function () {
    renderFoodss();
};
