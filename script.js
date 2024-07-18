let number
let num1
let num2
let updatedNum2
let num3
let operator

document.addEventListener("DOMContentLoaded", () => {
  const multiply = function(num1, num2) {
    result.textContent = (num1 * num2);
  }

  const add = function(num1, num2) {
    result.textContent = (num1 + num2);
  }

  const divide = function(num1, num2) {
    if (num2 === 0) {
      return alert("To infinity! And beyond!");
    } 
    result.textContent=  num1 / num2;
  }

  const subtract = function(num1, num2) {
    result.textContent=  num1 - num2;
  }

  const wipe = function() {
    input.value = "";
    input.focus();
  }

  const cleanup = function() {
    num3 = Math.floor(result.innerText);
    num1 = undefined;
    updatedNum2 = undefined;
    number = undefined;
  }

  const clearAll = function() {
    number = undefined;
    operator = undefined;
    num1 = undefined;
    num2 = undefined;
    updatedNum2 = undefined;
    result.textContent = "0";
    wipe();
  }

  const checkNumber = function(value) {
    if (isNaN(value)) {
      alert("Enter a valid number.")
      clearAll();
      wipe();
    } 
  }

  const handleNum3 = function() {
    if (number === undefined) {
      num1 = Math.floor(num3)
    } else {
      num1 = Math.floor(number);
      checkNumber(num1)
    }
  }

  const input = document.querySelector("#numberInput");
  const addButton = document.querySelector("#add");
  const subtractButton = document.querySelector("#subtract");
  const multiplyButton = document.querySelector("#multiply")
  const divideButton = document.querySelector("#divide")
  const equalButton = document.querySelector("#equal");
  const result = document.querySelector("#result")
  const clear = document.querySelector("#clear")


  input.addEventListener("input", (event) => {
    if (typeof num1 === "undefined") {
      number = event.target.value; 
    } else {
      num2 = event.target.value
    }
  });

  addButton.addEventListener("click", (event) => {
    operator = "add";
    handleNum3();
    wipe();
  });

  subtractButton.addEventListener("click", (event) => {
    operator = "subtract";
    handleNum3();
    wipe();
  });

  multiplyButton.addEventListener("click", (event) => {
    operator = "multiply";
    handleNum3();
    wipe();
  });

  divideButton.addEventListener("click", (event) => {
    operator = "divide";
    handleNum3();
    wipe();
  });

  equalButton.addEventListener("click", (event) => {
    updatedNum2 = Math.floor(num2);
    switch (operator) {
      case "add":
        add(num1, updatedNum2);
        break;
      case "subtract":
        subtract(num1, updatedNum2);
        break;
      case "multiply":
        multiply(num1, updatedNum2);
        break;
      case "divide":
        divide(num1, updatedNum2);
        break;
    }
    wipe();
    cleanup();
  });

  clear.addEventListener("click", (clearAll))  
});