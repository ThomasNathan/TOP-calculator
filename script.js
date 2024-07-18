console.log("connected")

const multiply = function(num1, num2) {
  return num1 * num2;
}

const add = function(num1, num2) {
  return num1 + num2;
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

let number = 0


document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#numberInput");
  
  input.addEventListener("input", (event) => {
    number = event.target.value;
  });
});
