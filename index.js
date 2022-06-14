/* --------------- variables --------------- */

let text = document.getElementById("text");
let ans = document.getElementById("ans");
let num = () => parseFloat(text.textContent);
let val;

const btn = document.querySelectorAll(".symbol");

const del = document.getElementById("del");
const c = document.getElementById("c");
const ce = document.getElementById("ce");
const percent = document.getElementById("percent");
const divide = document.getElementById("divide");
const sqrt = document.getElementById("sqrt");
const squared = document.getElementById("squared");
const half = document.getElementById("half");
const mul = document.getElementById("mul");
const nine = document.getElementById("nine");
const eight = document.getElementById("eight");
const seven = document.getElementById("seven");
const minus = document.getElementById("minus");
const six = document.getElementById("six");
const five = document.getElementById("five");
const four = document.getElementById("four");
const plus = document.getElementById("plus");
const three = document.getElementById("three");
const two = document.getElementById("two");
const one = document.getElementById("one");
const equals = document.getElementById("equals");
const point = document.getElementById("point");
const zero = document.getElementById("zero");
const plusminus = document.getElementById("plusminus");

let decimalPointClicked = false;
let operatorClicked = false;

/* --------------- Main --------------- */

text.textContent = "0";

// document.addEventListener("contextmenu", (e) => e.preventDefault());

document.addEventListener("click", () => (val = text.textContent));

del.addEventListener("click", () => {
  text.textContent = text.textContent.substring(0, text.textContent.length - 1);
  if (text.textContent.length === 0) text.textContent = "0";
});

c.addEventListener("click", () => {
  text.textContent = "0";
  decimalPointClicked = false;
  operatorClicked = false;
});

ce.addEventListener("click", () => {
  text.textContent = "0";
  decimalPointClicked = false;
  operatorClicked = false;
});

percent.addEventListener("click", () => {
  text.textContent = num() / 100;
  operatorClicked = false;
});

divide.addEventListener("click", () => {
  if (!operatorClicked) text.textContent += "\u00F7";
  operatorClicked = true;
});

sqrt.addEventListener("click", () => {
  text.textContent = Math.sqrt(num());
  operatorClicked = false;
});

squared.addEventListener("click", () => {
  text.textContent = Math.pow(num(), 2);
  operatorClicked = false;
});

half.addEventListener("click", () => {
  text.textContent = num() / 2;
  operatorClicked = false;
});

mul.addEventListener("click", () => {
  if (!operatorClicked) text.textContent += "\u00D7";
  operatorClicked = true;
});

nine.addEventListener("click", () => {
  if (text.textContent == "0") {
    text.textContent = "9";
  } else {
    text.textContent += "9";
  }
  operatorClicked = false;
});

eight.addEventListener("click", () => {
  if (text.textContent == "0") {
    text.textContent = "8";
  } else {
    text.textContent += "8";
  }
  operatorClicked = false;
});

seven.addEventListener("click", () => {
  if (text.textContent == "0") {
    text.textContent = "7";
  } else {
    text.textContent += "7";
  }
  operatorClicked = false;
});

minus.addEventListener("click", () => {
  if (!operatorClicked) text.textContent += "-";
  operatorClicked = true;
});

six.addEventListener("click", () => {
  if (text.textContent == "0") {
    text.textContent = "6";
  } else {
    text.textContent += "6";
  }
  operatorClicked = false;
});

five.addEventListener("click", () => {
  if (text.textContent == 0) {
    text.textContent = 5;
  } else {
    text.textContent += 5;
  }
  operatorClicked = false;
});

four.addEventListener("click", () => {
  if (text.textContent == 0) {
    text.textContent = 4;
  } else {
    text.textContent += 4;
  }
  operatorClicked = false;
});

plus.addEventListener("click", () => {
  if (!operatorClicked) text.textContent += "+";
  operatorClicked = true;
});

three.addEventListener("click", () => {
  if (text.textContent == "0") {
    text.textContent = "3";
  } else {
    text.textContent += "3";
  }
  operatorClicked = false;
});

two.addEventListener("click", () => {
  if (text.textContent == "0") {
    text.textContent = "2";
  } else {
    text.textContent += "2";
  }
  operatorClicked = false;
});

one.addEventListener("click", () => {
  if (text.textContent == "0") {
    text.textContent = "1";
  } else {
    text.textContent += "1";
  }
  operatorClicked = false;
});

equals.addEventListener("click", () => {
  text.textContent = val;
});

point.addEventListener("click", () => {
  if (decimalPointClicked == false) {
    text.textContent += ".";
    decimalPointClicked = true;
  }
});

zero.addEventListener("click", () => {
  if (text.textContent == "0") {
    text.textContent = "0";
  } else {
    text.textContent += "0";
  }
});

plusminus.addEventListener("click", () => {
  text.textContent = num() * -1;
});
