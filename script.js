let number
let num1
let num2
let updatedNum2
let num3
let operator

document.addEventListener("DOMContentLoaded", () => {
  const multiply = function(num1, num2) {
    num3 = (num1 * num2)
    result.textContent= num3;
    return num3
  }

  const add = function(num1, num2) {
    result.textContent= (num1 + num2);
  }

  const divide = function(num1, num2) {
    if (num2 === 0) {
      return alert("To infinity! And beyond!");
    } 
    return num1 / num2;
  }

  const substract = function(num1, num2) {
    return num1 - num2;
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

  const input = document.querySelector("#numberInput");
  const addButton = document.querySelector("#add");
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
    if (number === undefined) {
      num1 = Math.floor(num3)
    } else {
      num1 = Math.floor(number);
    }
    wipe();
  });

  equalButton.addEventListener("click", (event) => {
    updatedNum2 = Math.floor(num2);
    switch (operator) {
      case "add":
        add(num1, updatedNum2);
        wipe();
        cleanup();
        break;
      case "subtract":
        subtract(num1, updatedNum2);
        break;
    }
  });

  clear.addEventListener("click", (event) => {
    number = undefined;
    operator = undefined;
    num1 = undefined;
    num2 = undefined;
    updatedNum2 = undefined;
    result.textContent = "0";
    wipe();
  })
});




