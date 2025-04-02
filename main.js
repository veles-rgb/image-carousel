/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
// index.js



const imageSlide = document.querySelector(".image-slide");
const images = imageSlide.querySelectorAll("img");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
let currentIndex = 0;

images[0].style.display = "block";

leftArrow.addEventListener("click", () => {
    if (currentIndex === 0) {
        currentIndex = images.length - 1;
        showImage(currentIndex);
    } else {
        currentIndex--;
        showImage(currentIndex);
    }
    hideImages();
    renderCircles();
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
    renderCircles();
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

function createCircles() {
    const circleContainer = document.createElement("div");
    circleContainer.classList.add("circle-container");
    imageSlide.appendChild(circleContainer);
    // eslint-disable-next-line no-unused-vars
    images.forEach(image => {
        const newCircle = document.createElement("div");
        newCircle.classList.add("circle");
        circleContainer.appendChild(newCircle);
    });
}

createCircles();

function renderCircles() {
    const circleContainer = document.querySelector(".circle-container");
    const circles = circleContainer.querySelectorAll(".circle");

    circles.forEach((circle, index) => {
        if (currentIndex === index) {
            circle.style.backgroundColor = "black";
        }
        if (currentIndex !== index) {
            circle.style.backgroundColor = "white";
        }

        circle.addEventListener("click", () => {
            currentIndex = index;
            showImage(index);
            hideImages();
            circles.forEach(circle => {
                circle.style.backgroundColor = "white";
            });
            circle.style.backgroundColor = "black";
        });
    });
}

renderCircles();
/******/ })()
;
//# sourceMappingURL=main.js.map