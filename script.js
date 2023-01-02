const output = document.querySelector('.output');
const decimalBtn = document.querySelector(".dot");
output.innerText = "";

let currentOperation = "";
let userInput = 0;
let value1 = 0;
let value2 = 0;
let final = 0;

document.querySelector(".one").addEventListener('click', (e) => {  
    userInput = 1;
    display();
})
document.querySelector(".two").addEventListener('click', (e) => {
    userInput = 2;
    display();
})
document.querySelector(".three").addEventListener('click', (e) => {
    userInput = 3;
    display();
})
document.querySelector(".four").addEventListener('click', (e) => {
    userInput = 4;
    display();
})
document.querySelector(".five").addEventListener('click', (e) => {
    userInput = 5;
    display();
})
document.querySelector(".six").addEventListener('click', (e) => {
    userInput = 6;
    display();
})
document.querySelector(".seven").addEventListener('click', (e) => {
    userInput = 7;
    display();
})
document.querySelector(".eight").addEventListener('click', (e) => {
    userInput = 8;
    display();
})
document.querySelector(".nine").addEventListener('click', (e) => {
    userInput = 9;
    display();
})
document.querySelector(".clear").addEventListener('click', (e) => {
    clearOutput();
    value1 = 0;
    value2 = 0;
    final = 0;
    currentOperation = "";
    decimalBtn.disabled = false;
})
decimalBtn.addEventListener('click', (e) => {
    output.append(".");
    decimalBtn.disabled = true;
})
document.querySelector(".plus").addEventListener('click', (e) => {
    let temporary = parseFloat(output.innerText);

    if (currentOperation === "add") {
        value1 += temporary
    } else if (currentOperation === "subtract") {
        value1 -= temporary;
    } else if (currentOperation === "multiply") {
        value1 *= temporary;
    } else if (currentOperation === "divide") {
        value1 /= temporary;
    } else {
        value1 = temporary;
    }

    clearOutput();
    decimalBtn.disabled = false;
    currentOperation = "add";
})
document.querySelector(".minus").addEventListener('click', (e) => {
    let temporary = parseFloat(output.innerText)
    
    if (currentOperation === "add") {
        value1 += temporary
    } else if (currentOperation === "subtract") {
        value1 -= temporary;
    } else if (currentOperation === "multiply") {
        value1 *= temporary;
    } else if (currentOperation === "divide") {
        value1 /= temporary;
    } else {
        value1 = temporary;
    }
    
    clearOutput();
    decimalBtn.disabled = false;
    currentOperation = "subtract";
})
document.querySelector(".times").addEventListener('click', (e) => {
    let temporary = parseFloat(output.innerText)
    
    if (currentOperation === "add") {
        value1 += temporary
    } else if (currentOperation === "subtract") {
        value1 -= temporary;
    } else if (currentOperation === "multiply") {
        value1 *= temporary;
    } else if (currentOperation === "divide") {
        value1 /= temporary;
    } else {
        value1 = temporary;
    }

    clearOutput();
    decimalBtn.disabled = false;
    currentOperation = "multiply";
})
document.querySelector(".divide").addEventListener('click', (e) => {
    let temporary = parseFloat(output.innerText)
    
    if (currentOperation === "add") {
        value1 += temporary
    } else if (currentOperation === "subtract") {
        value1 -= temporary;
    } else if (currentOperation === "multiply") {
        value1 *= temporary;
    } else if (currentOperation === "divide") {
        value1 /= temporary;
    } else {
        value1 = temporary;
    }

    clearOutput();
    decimalBtn.disabled = false;
    currentOperation = "divide";
})
document.querySelector(".equals").addEventListener('click', (e) => {
     value2 = parseFloat(output.innerText);
     clearOutput();

     switch (currentOperation) {
        case "add":
            final = add(value1, value2);
            break;
        case "subtract":
            final = subtract(value1, value2);
            break;
        case "divide":
            final = divide(value1, value2);
            break
        case "multiply":
            final = multiply(value1, value2);
            break;
     }

     display(final);
     decimalBtn.disabled = false;
})

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function display(num=userInput.toString()) {
    output.append(num.toString());
}

function clearOutput() {
    output.innerText = "";
}