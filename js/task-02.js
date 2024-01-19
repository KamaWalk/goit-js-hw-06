const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientList = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  const ingredientItem = document.createElement("li");

  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add("ingredient");
  ingredientList.appendChild(ingredientItem);
});
