let numpad = document.querySelectorAll(".numpad");
let clearScreen = document.querySelectorAll(".clear");
let error = document.getElementById("error");
let btn = document.querySelectorAll(".cols");

let decimalPoint = document.getElementById("63");

let screen = document.getElementById("screen");

function del() {
  screen.textContent = screen.textContent.slice(0, -1);
}

function clear() {
  screen.textContent = "0";
}

function numClick(i) {
  screen.textContent += numpad[i].textContent;
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

for (let i = 0; i < clearScreen.length; i++) {
  clearScreen[i].addEventListener("click", () => clear());
}

btn[3].addEventListener("click", () => {
  if (screen.textContent.length > 1) {
    del();
  } else {
    screen.textContent = "0";
  }
});

decimalPoint.addEventListener("click", () => {
  if (!screen.textContent.includes(".")) {
    screen.textContent += ".";
  }
});

btn[20].addEventListener("click", () => {
  screen.textContent *= -1;
});

btn[4].addEventListener("click", () => {
  if (screen.textContent != 0) {
    screen.textContent = 1 / screen.textContent;
  } else {
    errorDialog();
  }
});

btn[5].addEventListener("click", () => {
  screen.textContent *= screen.textContent;
});

btn[6].addEventListener("click", () => {
  screen.textContent = Math.pow(screen.textContent, 1 / 2);
});

btn[7].addEventListener("click", () => {
  if (
    screen.textContent[screen.textContent.length - 1] != "." &&
    !screen.textContent.includes("/")
  ) {
    screen.textContent += "/";
  }
});

btn[0].addEventListener("click", () => {
  if (
    screen.textContent[screen.textContent.length - 1] != "." &&
    !screen.textContent.includes("%")
  ) {
    screen.textContent += "%";
  }
});

btn[11].addEventListener("click", () => {
  if (screen.textContent[screen.textContent.length - 1] != ".") {
    screen.textContent += "*";
  }
});

btn[15].addEventListener("click", () => {
  if (screen.textContent[screen.textContent.length - 1] != ".") {
    screen.textContent += "-";
  }
});

btn[19].addEventListener("click", () => {
  if (screen.textContent[screen.textContent.length - 1] != ".") {
    screen.textContent += "+";
  }
});

btn[23].addEventListener("click", () => {
  screen.textContent = eval(screen.textContent);
  if (screen.textContent == "NaN" || screen.textContent == "Infinity") {
    errorDialog();
    screen.textContent = "0";
  }
});
