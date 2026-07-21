
// data
const recipes = [
  {
    title: "Pâtes crémeuses au citron",
    ingredients: ["Pâtes", "Crème", "Citron", "Parmesan"],
    preparation: ["Cuire les pâtes", "Mélanger la crème et le citron", "Ajouter le parmesan"]
  },
];

const errorMessages = ["Le nom doit contenir au moins 2 caractères.", "Le commentaire doit contenir au moins 10 caractères."];

const commentsSection = [];


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

// comments section

// validation fields when the name typed has less than 2 characters
const firstnameInput = document.getElementById("firstname");

const pNameMsg = document.querySelector(".name-input");
pNameMsg.textContent = errorMessages[0];
const pCommentMsg = document.querySelector(".comment-input");
pCommentMsg.textContent = errorMessages[1];

firstnameInput.addEventListener("change", function (e) {
  if (event.target.value.trim().length <= 2) {
    return pNameMsg.style.display = "block";
  } else {
    return pNameMsg.style.display = "none";
  }

});

// validation fields when the comment typed has less than 10 characters

const commentTextarea = document.getElementById("comment");

commentTextarea.addEventListener("change", function (e) {
  if (e.target.value.trim().length <= 10) {
    return pCommentMsg.style.display = "block";
  } else {
    return (
      pCommentMsg.style.display = "none"

    );
  }
});


// publish button and save data


const publishBtn = document.querySelector(".publish");

function handleSubmit (e) {
  e.preventDefault();
  const name = firstnameInput.value.trim();
  const comment = commentTextarea.value.trim();
  const data = { firstname: name, comment: comment };
  let valid = true;
  if (name.length <= 2) {
    pNameMsg.style.display = "block";
    valid = false;
  } else {
    pNameMsg.style.display = "none";
  }

  if (comment.length <= 10) {
    pCommentMsg.style.display = "block";
    valid = false;
  } else {
    pCommentMsg.style.display = "none";
  }

  if (!valid) return;

  commentsSection.push(data);
  firstnameInput.value = "";
  commentTextarea.value = "";
}

publishBtn.addEventListener("click", handleSubmit);