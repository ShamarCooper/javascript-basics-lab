// Part 1: Declaring and Invoking Functions


function greet(name) {
    return "Hello my name is Shamar";
}
 
console.log(greet("Shamar"));



// Part 2: Working with Parameters and Returning Values

function addNumbers(num1, num2) {
   return  num1 + num2;

}

console.log(addNumbers(1,2));



// Part 3: Function Scope

let x = 10;

function changeValue() {
    let x = 11; 
    console.log("Inside function:", x);
}

changeValue();

console.log("Outside function:", x);




// Part 4: Closures

function outerFunction() {
    let count = 0;
    return function() {
         count++;
        return count;
    }
}

let counter = outerFunction();

console.log(counter());
