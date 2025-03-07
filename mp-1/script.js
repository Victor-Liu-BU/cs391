// Function to handle addition
function addition() {
    let num1 = parseFloat(document.getElementById('first-number').value);
    let num2 = parseFloat(document.getElementById('second-number').value);
    let result = num1 + num2;
    displayResult(result);
}

// Function to handle subtraction
function subtraction() {
    let num1 = parseFloat(document.getElementById('first-number').value);
    let num2 = parseFloat(document.getElementById('second-number').value);
    let result = num1 - num2;
    displayResult(result);
}

// Function to handle multiplication
function multiplication() {
    let num1 = parseFloat(document.getElementById('first-number').value);
    let num2 = parseFloat(document.getElementById('second-number').value);
    let result = num1 * num2;
    displayResult(result);
}

// Function to handle division
function division() {
    let num1 = parseFloat(document.getElementById('first-number').value);
    let num2 = parseFloat(document.getElementById('second-number').value);
    if (num2 !== 0) {
        let result = num1 / num2;
        displayResult(result);
    } else {
        document.getElementById('output').innerHTML = 'Error: Division by zero';
    }
}

// Function to handle power (using a for loop)
function power() {
    let num1 = parseFloat(document.getElementById('first-number').value);
    let num2 = parseInt(document.getElementById('second-number').value);
    let result = 1;
    for (let i = 0; i < num2; i++) {
        result *= num1;
    }
    displayResult(result);
}

// Function to display the result and change color if negative
function displayResult(result) {
    let outputElement = document.getElementById('output');
    if (result < 0) {
        outputElement.style.color = 'red';
    } else {
        outputElement.style.color = 'black';
    }
    outputElement.innerHTML = String(result);
}

// Function to clear all input fields and output
function clearFields() {
    document.getElementById('first-number').value = '';
    document.getElementById('second-number').value = '';
    document.getElementById('output').innerHTML = '';
}