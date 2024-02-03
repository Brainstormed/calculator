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
});

btn[5].addEventListener("click", () => {
  screen.textContent *= screen.textContent
})

btn[6].addEventListener("click", () => {
  screen.textContent = Math.pow(screen.textContent, 1/2)
})
