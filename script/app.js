


function displaySum() {
    let firstNum = Number(document.getElementById('firstNum').textContent);
    let secondNum = Number(document.getElementById('secondNum').textContent);

    let total = firstNum + secondNum;
    document.getElementById("answer").textContent = `The sum is: ${total}`;
}

function displayMultiply() {
    let firstNum = Number(document.getElementById('firstNum').textContent);
    let secondNum = Number(document.getElementById('secondNum').textContent);

    let product = firstNum * secondNum;
    document.getElementById("answer").textContent = `The product is: ${product}`;
}

function displaySubtract() {
    let firstNum = Number(document.getElementById('firstNum').textContent);
    let secondNum = Number(document.getElementById('secondNum').textContent);

    let difference = firstNum - secondNum;
    document.getElementById("answer").textContent = `The difference is: ${difference}`;
}
