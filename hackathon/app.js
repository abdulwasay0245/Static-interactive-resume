"use strict";
const toggleButton = document.querySelector(".toggle-button");
const hiddenElements = document.querySelectorAll(".hidden");
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener('click', () => {
    hiddenElements.forEach(element => {
        element.classList.toggle('show');
    });
});
