let screen = elementSelector("#screen");
let numbers = elementSelector(".num");
let operators = elementSelector(".ops");
let theNum = "0";
let oldNum = "0";
let resultNum;
let resetButton = elementSelector(".clear");
let operator;
let equal = elementSelector(".equal");

function elementSelector(element) {
    if (element.charAt(0) === "#") {
        return document.querySelector(element);
    } else {
        return document.querySelectorAll(element);
    }
}

function setNum() {
    let key = this.getAttribute("data-num");
    if (resultNum) {
        theNum = key;
        resultNum = "";
    } else if (((screen.innerHTML.charAt(screen.innerHTML.length - 1) === ".")
                && (key === "."))
                || ((screen.innerHTML.includes(".")))
                    && key === ".") {
    } else {
        theNum += key;
    }
    screen.innerHTML = theNum;
}

function moveNum() {
    oldNum = theNum;
    theNum = "";
    operator = this.getAttribute("data-ops");
}

function displayNum() {
    let num1 = parseFloat(oldNum);
    let num2 = parseFloat(theNum);
    switch(operator) {
        case("plus"):
            resultNum = num1 + num2;
            break;
        case("minus"):
            resultNum = num1 - num2;
            break;
        case("mult"):
            resultNum = num1 * num2;
            break;
        case("div"):
            resultNum = num1 / num2;
            break;
    }
    screen.innerHTML = resultNum.toString();
}

function reset() {
    screen.innerHTML = 0;
    theNum = oldNum = "0";

}

for (let i = 0; i < numbers.length; ++i) {
    numbers[i].onclick = setNum;
}

for (let i = 0; i < resetButton.length; ++i) {
    resetButton[i].onclick = reset;
}

for (let i = 0; i < operators.length; ++i) {
    operators[i].onclick = moveNum;
    operators[i].addEventListener(setNum, onclick);
}

equal[0].onclick = displayNum;

//
// for (let i = 0; i < buttons.length; ++i) {
//     let input1, input2;
//     let button = document.querySelector(buttons[i]);
//     document.getElementById("screen").innerHTML = button;
// }
//
