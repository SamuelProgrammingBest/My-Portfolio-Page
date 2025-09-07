let imgContainer = document.querySelector(".img-container");
let images = imgContainer.querySelectorAll("img");
let overlay = document.querySelector(".overlay");
let imgOverlay = overlay.querySelector(".img-cont");

function overlayItem(e) {
  let overlayInnerItem = e.currentTarget.cloneNode(true);
  // This clones the current target element and stores it in a variable

  let closeX = document.createElement("div")
  closeX.classList.add("close")

  overlay.classList.add("show");
  // This adds a show class to the overlay div

  overlay.innerHTML = "";
  // This clears everything up so that only one cloned element is appended in the next step

  overlay.appendChild(overlayInnerItem);
  overlay.appendChild(closeX);
  // This adds the cloned element to the overlay element

  overlay.addEventListener("click", () => {
    overlay.classList.remove("show");
  });
  // This is to remove the overlay effect element when clicked
}

images.forEach((image) => {
  image.addEventListener("click", (e) => {
    image.classList.remove("big");
    // This is the base case that removes the class of big from all the image elements

    images.forEach((im) => {
      im.classList.remove("big");
      e.currentTarget.classList.add("big");
      // This then adds a class of big to only one of the selected image element out of all the image element by removing every instance of the class big and adding it only to the image clicked
      
      overlayItem(e);
      // This is the function
    });
  });
});
