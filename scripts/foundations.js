console.log("Welcome to the console!");

function add7(addend) {
  return addend + 7;
}

function multiply(multiplicand1, multiplicand2 = 1) {
  return multiplicand1 * multiplicand2;
}

function capitalize(sentence) {
  return sentence.at(0).toUpperCase() + sentence.slice(1);
}

function lastLetter(sentence) {
  return sentence.at(-1);
}

function fizzBuzz(goal) {
  let threes = 0;
  let fives = 0;
  let result;
  for (let i = 1; i <= goal; i++) {
    threes++;
    fives++;
    result = "";
    if (threes == 3) {
      result = result.concat("Fizz");
      threes = 0;
    }
    if (fives == 5) {
      result = result.concat("Buzz");
      fives = 0;
    }
    if (result == "") {
      result = result.concat(i);
    }
    console.log(result);
  }
}

console.log("1 + 7 is " + add7(1));
console.log("2 * 3 is " + multiply(2, 3));
console.log("Uppercase 'hello' is " + capitalize("hello"));
console.log("And the last letter of 'hello' is " + lastLetter("hello"));
/*
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
fizzBuzz(answer)
*/
const container = document.querySelector("#container");

const firstParagraph = document.createElement("p");
firstParagraph.style.color = "red";
firstParagraph.textContent = "Hello. I'm red.";
container.appendChild(firstParagraph);

const firstH3 = document.createElement("h3");
firstH3.style.color = "blue";
firstH3.textContent = "Hello. I'm a blue H3.";
container.appendChild(firstH3);

const innerContainer = document.createElement("div");
innerContainer.style["background-color"] = "pink";
innerContainer.style["border-color"] = "black";
innerContainer.style["border-style"] = "solid";
innerContainer.style["border-weight"] = "2px";
const innerH1 = document.createElement("h1");
innerH1.textContent = "I'm in a div!";
const innerParagraph = document.createElement("p");
innerParagraph.textContent = "Me too!";
innerContainer.appendChild(innerH1);
innerContainer.appendChild(innerParagraph);
container.appendChild(innerContainer);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => console.log(button.id));
});
