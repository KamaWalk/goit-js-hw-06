const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientList = document.getElementById("ingredients");

const items = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement("li");

  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add("ingredient");
  return ingredientItem;
});
ingredientList.append(...items);
