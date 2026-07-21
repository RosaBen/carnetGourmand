
// data
const recipes = [
  {
    title: "Pâtes crémeuses au citron",
    ingredients: ["Pâtes", "Crème", "Citron", "Parmesan"],
    preparation: ["Cuire les pâtes", "Mélanger la crème et le citron", "Ajouter le parmesan"]
  },
];

const errorMessages = ["Le nom doit contenir au moins 2 caractères.", "Le commentaire doit contenir au moins 10 caractères."];

let comments = [];


// recipe section
const recipeTitle = document.querySelector(".recipes h2");
recipeTitle.textContent = recipes[0].title;

const ingredientsContainer = document.querySelector(".ingredients ul");
const ingredientsList = recipes[0].ingredients.map(ingredient => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  ingredientsContainer.appendChild(li);
});

const preparationContainer = document.querySelector(".preparation ol");
const preparationSteps = recipes[0].preparation.map(step => {
  const li = document.createElement("li");
  li.textContent = step;
  preparationContainer.appendChild(li);
});