// oplossing 1
const changeClassBlueBackground = function () {
  const bodyElement = document.body;
  bodyElement.classList.add("red-background");
};
const attachEventToChangeColorButton = function () {
  const changeColorButton = document.getElementById("change-background-button");
  changeColorButton.addEventListener("click", function () {
    changeClassBlueBackground();
  });
};
const attachEventToAlertButton = function () {
  const alertButton = document.getElementById("alert-button");
  alertButton.addEventListener("click", function () {
    alert("Hello World!");
  });
};

attachEventToAlertButton();
attachEventToChangeColorButton();

//oplossing 2


const attachEventToAlertButton = function() {
    const alertButton = document.getElementById("alert-button");
    alertButton.addEventListener("click", function() {
        alert("Hello World!");
    });
};

const toggleColor = function() {
    const bodyElement = document.body;
    bodyElement.classList.toggle("red-background");
};

const attachEventToChangeColorButton = function() {
    const changeColorButton = document.getElementById("change-background-button");
    changeColorButton.addEventListener("click", function() {
        toggleColor();
    });
};

attachEventToAlertButton();
attachEventToChangeColorButton();