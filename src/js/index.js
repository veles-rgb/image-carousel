// index.js
import "../styles/styles.css";
import "../styles/reset.css";

const imageSlide = document.querySelector(".image-slide");
const images = imageSlide.querySelectorAll("img");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
let currentIndex = 0;

images[0].style.display = "block";

function createCircles() {
    images.forEach(image => {
        const newCircle = document.createElement("div");

    });
}

leftArrow.addEventListener("click", () => {
    if (currentIndex === 0) {
        currentIndex = images.length - 1;
        showImage(currentIndex);
    } else {
        currentIndex--;
        showImage(currentIndex);
    }
    hideImages();
});

rightArrow.addEventListener("click", () => {
    if (currentIndex === images.length - 1) {
        currentIndex = 0;
        showImage(currentIndex);
    } else {
        currentIndex++;
        showImage(currentIndex);
    }
    hideImages();
});

function showImage(index) {
    images[index].style.display = "block";
}

function hideImages() {
    images.forEach((image, index) => {
        if (currentIndex !== index) {
            image.style.display = "none";
        }
    });
}

