function getRange() {
    let start = parseInt(document.getElementById('start').value);
    let end = parseInt(document.getElementById('end').value);
    return { start, end };
}

function clearOutput() {
    document.getElementById('output').innerHTML = '';
}

function appendOutput(text) {
    let outputDiv = document.getElementById('output');
    let paragraph = document.createElement('p');
    paragraph.innerText = text;
    outputDiv.appendChild(paragraph);
}

function displayNumbers() {
    clearOutput();
    let { start, end } = getRange();
    let output = 'Numbers: ';
    for (let i = start; i <= end; i++) {
        output += i + ' ';
    }
    appendOutput(output);
}

function displayOddNumbers() {
    clearOutput();
    let { start, end } = getRange();
    let output = 'Odd Numbers: ';
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            output += i + ' ';
        }
    }
    appendOutput(output);
}

function displayEvenNumbers() {
    clearOutput();
    let { start, end } = getRange();
    let output = 'Even Numbers: ';
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            output += i + ' ';
        }
    }
    appendOutput(output);
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function displayPrimeNumbers() {
    clearOutput();
    let { start, end } = getRange();
    let output = 'Prime Numbers: ';
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            output += i + ' ';
        }
    }
    appendOutput(output);
}