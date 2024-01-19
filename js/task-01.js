// Policzy i wypisze w konsoli liczbę kategorii w ul#categories, czyli elementy li.item.

//let listWithId = document.querySelector("#categories");
const listWithId = document.querySelectorAll(".item");
const listWithIdLength = listWithId.length;
console.log(`Number of categories: ${listWithIdLength}`);

//Dla każdego elementu li.item na liście ul#categories, znajdzie i wypisze w konsoli tekst nagłówka elementu (tag <h2>) i liczbę elementów w danej kategorii (wszystkich w jej obrębie <li>).

for (const category of listWithId) {
  const categoryHeader = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("ul > li");
  const numberOfElements = categoryElements.length;

  console.log(`Category: ${categoryHeader}`);
  console.log(`Elements: ${numberOfElements}`);
}
