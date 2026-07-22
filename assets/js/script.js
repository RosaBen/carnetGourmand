
// data ******
const recipes = [
  {
    title: "Pâtes crémeuses au citron",
    ingredients: ["Pâtes", "Crème", "Citron", "Parmesan"],
    preparation: ["Cuire les pâtes", "Mélanger la crème et le citron", "Ajouter le parmesan"]
  },
];

let commentsSection = [];


// recipe section ******
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

// comments section ******

const form = document.querySelector("form");
const firstnameInput = document.getElementById("firstname");
const commentTextarea = document.getElementById("comment");
const pNameMsg = document.querySelector(".name-input");
const pCommentMsg = document.querySelector(".comment-input");
const cardsSection = document.querySelector(".cards");
const allcards = document.querySelectorAll(".card");
const deleteBtn = document.querySelectorAll(".delete-card");

// 1- show error message

function showErrorMessage () {
  let valid = true;

  if (firstnameInput.value.trim().length < 3) {
    pNameMsg.style.display = "block";
    valid = false;
  } else {
    pNameMsg.style.display = "none";
  }

  if (commentTextarea.value.trim().length < 11) {
    pCommentMsg.style.display = "block";
    valid = false;
  } else {
    pCommentMsg.style.display = "none";
  }

  return valid;
}

// 3-get data from local storage

const savedComments = localStorage.getItem("comments");
if (savedComments) {
  commentsSection = JSON.parse(savedComments);
}

// 4- display comments

function displayComments (array) {

  cardsSection.innerHTML = "";
  const savedComments = localStorage.getItem("comments");
  if (savedComments) {
    array = JSON.parse(savedComments);
  }


  const comments = array.forEach((element, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const h4 = document.createElement("h4");
    h4.textContent = `${element.name}`;

    const p = document.createElement("p");
    p.textContent = `${element.comment}`;

    const button = document.createElement("button");
    button.classList.add("delete-card");
    button.textContent = `🗑️ Supprimer`;
    button.dataset.index = index;


    card.appendChild(h4);
    card.appendChild(p);
    card.appendChild(button);
    cardsSection.appendChild(card);
  });
  return comments;
}

// 5- submit form
function handleSubmit (e) {
  e.preventDefault();
  const isValid = showErrorMessage();

  if (!isValid) {
    return;
  }

  const data = {
    name: firstnameInput.value.trim(),
    comment: commentTextarea.value.trim()
  };

  commentsSection.unshift(data);

  localStorage.setItem("comments", JSON.stringify(commentsSection));
  displayComments([data]);
  firstnameInput.value = "";
  commentTextarea.value = "";
  pNameMsg.style.display = "none";
  pCommentMsg.style.display = "none";
}

// 6- delete comment

function deleteComment (e) {
  if (e.target.classList.contains("delete-card")) {
    const index = e.target.dataset.index;
    commentsSection.splice(index, 1);
    localStorage.setItem("comments", JSON.stringify(commentsSection));
  }
  displayComments(commentsSection);

}

// 7- display old comments when refresh page

displayComments(commentsSection);

// 6- events listeners
firstnameInput.addEventListener("input", showErrorMessage);
commentTextarea.addEventListener("input", showErrorMessage);
form.addEventListener("submit", handleSubmit);
cardsSection.addEventListener("click", deleteComment)





