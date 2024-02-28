console.log("Welcome to the console!")

function add7(addend) {
    return addend + 7
}

function multiply(multiplicand1, multiplicand2 = 1) {
    return multiplicand1 * multiplicand2
}

function capitalize(sentence) {
    return sentence.at(0).toUpperCase() + sentence.slice(1)
}

function lastLetter(sentence) {
    return sentence.at(-1)
}

function fizzBuzz(goal) {
    let threes = 0
    let fives = 0
    let result
    for (let i = 1; i <= goal; i++) {
        threes++
        fives++
        result = ""
        if (threes == 3) {
            result = result.concat("Fizz")
            threes = 0
        }
        if (fives == 5) {
            result = result.concat("Buzz")
            fives = 0
        }
        if (result == "") {
            result = result.concat(i)
        }
        console.log(result)
    }
}

console.log("1 + 7 is " + add7(1))
console.log("2 * 3 is " + multiply(2,3))
console.log("Uppercase 'hello' is " + capitalize("hello"))
console.log("And the last letter of 'hello' is " + lastLetter("hello"))

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
fizzBuzz(answer)