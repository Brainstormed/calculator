// Variable Declarations

let numpad = document.querySelectorAll(".numpad");
let clearScreen = document.querySelectorAll(".clear");
let error = document.getElementById("error");
let btn = document.querySelectorAll(".cols");
let toggleDark = document.getElementById("toggle-dark");
let html = document.querySelector("html");
let dark = true;
let decimalPresent = false;
let decimalPoint = document.getElementById("decimal");
let screen = document.getElementById("screen");

// Functions

function del() {
  screen.textContent = screen.textContent.slice(0, -1);
}

function clear() {
  screen.textContent = "0";
  decimalPresent = false;
}

function numClick(i) {
  screen.textContent += numpad[i].textContent;
}

function btnColor(color) {
  for (let i = 0; i < btn.length; i++) {
    btn[i].style.backgroundColor = color;
  }
}

function errorDialog() {
  error.style.transition = "opacity 0.1s, transform 0.1s";
  error.style.transform = "translateY(0)";
  error.style.opacity = 1;
  error.textContent = "Cannot divide by zero";
  setTimeout(() => {
    error.style.transition = "opacity 0.1s, transform 0.1s";
    error.style.opacity = 0;
    error.style.transform = "translateY(-5em)";
  }, 2000);
}

// Enter numbers in the calculator

for (let i = 0; i < numpad.length; i++) {
  numpad[i].addEventListener("click", () => {
    if (screen.textContent != "0") {
      numClick(i);
    } else {
      del();
      numClick(i);
    }
  });
}

// Clear the screen

for (let i = 0; i < clearScreen.length; i++) {
  clearScreen[i].addEventListener("click", () => clear());
}

// Delete key

btn[3].addEventListener("click", () => {
  if (screen.textContent.length > 1) {
    del();
    if (!screen.textContent.includes(".")) {
      decimalPresent = false;
    }
  } else {
    screen.textContent = "0";
  }
});

// Enter decimal point

decimalPoint.addEventListener("click", () => {
  if (!decimalPresent) {
    screen.textContent += ".";
    decimalPresent = true;
  }
});

// The plus minus key

btn[20].addEventListener("click", () => {
  screen.textContent *= -1;
});

// Reciprocal, square and square root functions

btn[4].addEventListener("click", () => {
  if (screen.textContent != "0" && !isNaN(screen.textContent)) {
    screen.textContent = 1 / screen.textContent;
  } else if (isNaN(screen.textContent)) {
    null;
  } else {
    errorDialog();
  }
});

btn[5].addEventListener("click", () => {
  if (!isNaN(screen.textContent)) screen.textContent *= screen.textContent;
});

btn[6].addEventListener("click", () => {
  if (!isNaN(screen.textContent)) {
    screen.textContent = Math.pow(screen.textContent, 1 / 2);
  }
});

// Modulus, division, multiplication, suntraction and addition
// operators

btn[0].addEventListener("click", () => {
  if (
    screen.textContent[screen.textContent.length - 1] != "." &&
    !screen.textContent.includes("%")
  ) {
    screen.textContent += "%";
    decimalPresent = false;
  }
});

btn[7].addEventListener("click", () => {
  if (
    screen.textContent[screen.textContent.length - 1] != "." &&
    !screen.textContent.includes("/")
  ) {
    screen.textContent += "/";
    decimalPresent = false;
  }
});

btn[11].addEventListener("click", () => {
  if (
    screen.textContent[screen.textContent.length - 1] != "." &&
    screen.textContent[screen.textContent.length - 1] != "*"
  ) {
    screen.textContent += "*";
    decimalPresent = false;
  }
});

btn[15].addEventListener("click", () => {
  if (
    screen.textContent[screen.textContent.length - 1] != "." &&
    screen.textContent[screen.textContent.length - 1] != "-"
  ) {
    screen.textContent += "-";
    decimalPresent = false;
  }
});

btn[19].addEventListener("click", () => {
  if (
    screen.textContent[screen.textContent.length - 1] != "." &&
    screen.textContent[screen.textContent.length - 1] != "+"
  ) {
    screen.textContent += "+";
  }
});

// Evaluate the answer

btn[23].addEventListener("click", () => {
  screen.textContent = eval(screen.textContent);
  if (screen.textContent == "NaN" || screen.textContent == "Infinity") {
    errorDialog();
    screen.textContent = "0";
  }
  decimalPresent = false;
});

// Dark mode and light mode styles

toggleDark.addEventListener("click", () => {
  if (!dark) {
    html.style.backgroundColor = "#1d1d1d";
    html.style.color = "#ffffff";
    btnColor("#4b4b4b");
    btn[3].style.backgroundColor = "#fa4949";
    btn[3].style.boxShadow = "0.1em 0.1em 0.05em #fa4949";
    screen.style.backgroundColor = "#4b4b4b";
    screen.style.color = "#ffffff";
    error.style.backgroundColor = "#747474";
    toggleDark.innerHTML = '<img src="assets/light_mode.svg">';
    toggleDark.style.backgroundColor = "#e9e76e";
    html.style.transition = "all 0.5s";
  }
  if (dark) {
    html.style.backgroundColor = "#e0e0e0";
    html.style.color = "#000000";
    btnColor("#f7fbff");
    btn[3].style.backgroundColor = "#fa4949";
    btn[3].style.boxShadow = "0.1em 0.1em 0.05em #fa4949";
    screen.style.backgroundColor = "#f7fbff";
    screen.style.color = "#000000";
    error.style.backgroundColor = "#d6d6d6";
    toggleDark.innerHTML = '<img src="assets/dark_mode.svg">';
    toggleDark.style.backgroundColor = "#24237c";
    html.style.transition = "all 0.5s";
  }
  dark = !dark;
});
