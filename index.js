/* --------------- variables --------------- */

let text = document.getElementById("text");

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

/* --------------- Main --------------- */

text.textContent = 0;

document.addEventListener("contextmenu", (e) => e.preventDefault());

del.addEventListener("click", () => {

});

c.addEventListener("click", () => {

})

ce.addEventListener("click", () => {
    
})

percent.addEventListener("click", () => {
    
})

divide.addEventListener("click", () => {
    
})

sqrt.addEventListener("click", () => {
    
})

squared.addEventListener("click", () => {
    
})

half.addEventListener("click", () => {
    
})

mul.addEventListener("click", () => {
    
})

nine.addEventListener("click", () => {
    if (text.textContent == 0) {
        text.textContent = 9
    } else {
        text.textContent += 9
    }
})

eight.addEventListener("click", () => {
    if (text.textContent == 0) {
        text.textContent = 8
    } else {
        text.textContent += 8
    }
})

seven.addEventListener("click", () => {
    if (text.textContent == 0) {
        text.textContent = 7
    } else {
        text.textContent += 7
    }
})

minus.addEventListener("click", () => {
    
})

six.addEventListener("click", () => {
    if (text.textContent == 0) {
        text.textContent = 6
    } else {
        text.textContent += 6
    }
})

five.addEventListener("click", () => {
    if (text.textContent == 0) {
        text.textContent = 5
    } else {
        text.textContent += 5
    }
})

four.addEventListener("click", () => {
    if (text.textContent == 0) {
        text.textContent = 4
    } else {
        text.textContent += 4
    }
})

plus.addEventListener("click", () => {
    
})

three.addEventListener("click", () => {
    if (text.textContent == 0) {
        text.textContent = 3
    } else {
        text.textContent += 3
    }
})

two.addEventListener("click", () => {
    if (text.textContent == 0) {
        text.textContent = 2
    } else {
        text.textContent += 2
    }
})

one.addEventListener("click", () => {
    if (text.textContent == 0) {
        text.textContent = 1
    } else {
        text.textContent += 1
    }
})

equals.addEventListener("click", () => {
    
})

point.addEventListener("click", () => {
    if (text.textContent == 0) {
        text.textContent = "0."
    } else {
        text.textContent += "."
    }
})

zero.addEventListener("click", () => {
    if (text.textContent == 0) {
        text.textContent = 0
    } else {
        text.textContent += 0
    }
})

plusminus.addEventListener("click", () => {
    
})
