function displaySum() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML);
  let secondNum = Number(document.getElementById('secondNum').innerHTML);

  let total = firstNum + secondNum;
  document.getElementById("answer").innerHTML = `${firstNum} + ${secondNum} equals ${total}`;
}

function displayMultiply() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML);
  let secondNum = Number(document.getElementById('secondNum').innerHTML);

  let product = firstNum * secondNum;
  document.getElementById("answer").innerHTML = `${firstNum} × ${secondNum} equals ${product}`;
}

function displaySubtract() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML);
  let secondNum = Number(document.getElementById('secondNum').innerHTML);

  let difference = firstNum - secondNum;
  document.getElementById("answer").innerHTML = `${firstNum} - ${secondNum} equals ${difference}`;
}

document.getElementById('sumButton').addEventListener("click", displaySum);
document.getElementById('multiplyButton').addEventListener("click", displayMultiply);
document.getElementById('subtractButton').addEventListener("click", displaySubtract);



