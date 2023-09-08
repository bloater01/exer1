document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('sumButton').addEventListener("click", displaySum);
    document.getElementById('multiplyButton').addEventListener("click", displayMultiply);
    document.getElementById('subtractButton').addEventListener("click", displaySubtract);
});

function displaySum() {
    let firstNum = Number(document.getElementById('firstNum').innerText);
    let secondNum = Number(document.getElementById('secondNum').innerText);

    let total = firstNum + secondNum;
    document.getElementById("answer").innerText = `The sum is: ${total}`;
}

function displayMultiply() {
    let firstNum = Number(document.getElementById('firstNum').innerText);
    let secondNum = Number(document.getElementById('secondNum').innerText);

    let product = firstNum * secondNum;
    document.getElementById("answer").innerText = `The product is: ${product}`;
}

function displaySubtract() {
    let firstNum = Number(document.getElementById('firstNum').innerText);
    let secondNum = Number(document.getElementById('secondNum').innerText);

    let difference = firstNum - secondNum;
    document.getElementById("answer").innerText = `The difference is: ${difference}`;
}
