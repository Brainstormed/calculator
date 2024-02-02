const btn11 = document.getElementById("11");
const btn12 = document.getElementById("12");
const btn13 = document.getElementById("13");
const btn14 = document.getElementById("14");
const btn21 = document.getElementById("21");
const btn22 = document.getElementById("22");
const btn23 = document.getElementById("23");
const btn24 = document.getElementById("24");
const btn31 = document.getElementById("31");
const btn32 = document.getElementById("32");
const btn33 = document.getElementById("33");
const btn34 = document.getElementById("34");
const btn41 = document.getElementById("41");
const btn42 = document.getElementById("42");
const btn43 = document.getElementById("43");
const btn44 = document.getElementById("44");
const btn51 = document.getElementById("51");
const btn52 = document.getElementById("52");
const btn53 = document.getElementById("53");
const btn54 = document.getElementById("54");
const btn61 = document.getElementById("61");
const btn62 = document.getElementById("62");
const btn63 = document.getElementById("63");
const btn64 = document.getElementById("64");

let numpad = document.querySelectorAll(".numpad");

let screen = document.getElementById("screen");

function buttonClick() {
  btn31.addEventListener("click", () => (screen.textContent += 7));
  btn32.addEventListener("click", () => (screen.textContent += 8));
  btn33.addEventListener("click", () => (screen.textContent += 9));

  btn41.addEventListener("click", () => (screen.textContent += 4));
  btn42.addEventListener("click", () => (screen.textContent += 5));
  btn43.addEventListener("click", () => (screen.textContent += 6));

  btn51.addEventListener("click", () => (screen.textContent += 1));
  btn52.addEventListener("click", () => (screen.textContent += 2));
  btn53.addEventListener("click", () => (screen.textContent += 3));

  btn62.addEventListener("click", () => (screen.textContent += 0));

  btn12.addEventListener("click", () => (screen.textContent = 0));
  btn13.addEventListener("click", () => (screen.textContent = 0));
}

function del() {
  screen.textContent = screen.textContent.substring(0, screen.textContent - 1);
}

if (screen.textContent === "0") {
  for (let i = 0; i < numpad.length; i++) {
    numpad[i].addEventListener("click", () => del());
  }
  setTimeout(() => {
    buttonClick();
  }, 1);
} else {
  buttonClick();
}
