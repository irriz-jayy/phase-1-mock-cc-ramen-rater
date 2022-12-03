const baseUrl = "http://localhost:3000/ramens";
const ramenMenu = document.querySelector("#ramen-menu");

// load up the dom
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM loaded");
});

//fetch ramen data
function displayRamen() {
  fetch(baseUrl)
    .then((res) => res.json())
    .then(getAllRamen);
}

function getAllRamen(ramenArr) {
  ramenArr.forEach(getRamen);
}

//Gets images from source, append images to div
//Takes the image src from the ramens object array in the localhost URL
function getRamen(ramenObj) {
  const ramenImg = document.createElement("img");
  ramenImg.src = ramenObj.image;
  ramenMenu.append(ramenImg);

  // Event listener on click for images
  //On click takes the clicked image to the rating div.

  ramenImg.addEventListener("click", () => {
    const img = document.querySelector(".detail-image");
    img.src = ramenObj.image;
    img.alt = ramenObj.name;
    //On click adds the clicked ramens name to the rating div.
    const ramenName = document.querySelector(".name");
    ramenName.textContent = ramenObj.name;

    //On click adds the restaurants name to the rating div.
    const ramenResta = document.querySelector(".restaurant");
    ramenResta.textContent = ramenObj.restaurant;

    //On click adds the rating to the rating div.
    const ratingDisplay = document.querySelector("#rating-display");
    ratingDisplay.innerText = ramenObj.rating;

    //On click adds the comment to the rating div.
    const commentDisplay = document.querySelector("#comment-display");
    commentDisplay.innerText = ramenObj.comment;
  });
}

//create form by targeting the already existing form.
function createRamenForm() {
  const newRamenForm = document.getElementById("new-ramen");

  newRamenForm.addEventListener("submit", (event) => {
    event.preventDefault(); // stop the page from refreshing on form submit

    // create new ramen object
    const newRamenObject = {};
    newRamenObject.name = document.querySelector("#new-name").value;
    newRamenObject.restaurant = document.querySelector("#new-restaurant").value;
    newRamenObject.image = document.querySelector("#new-image").value;
    newRamenObject.rating = document.querySelector("#new-rating").value;
    newRamenObject.comment = document.querySelector("#new-comment").value;
    console.log(newRamenObject);

    // display new ramen in #ramen-menu
    const newRamenItem = document.createElement("img");
    newRamenItem.src = newRamenObject.image;
    ramenMenu.append(newRamenItem);
  });
}

//initialise
displayRamen();
createRamenForm();
