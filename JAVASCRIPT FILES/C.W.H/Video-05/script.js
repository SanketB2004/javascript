// 1️⃣ Basic Function
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Sanket"));
console.log(greet("Bharat"));
// 2️⃣ Function with Default Parameters
function multiply(a, b = 2) {
    return a * b;
}

console.log(multiply(5));    // Output: 10 (5 * 2)
console.log(multiply(4, 3)); // Output: 12 (4 * 3)
//3️⃣ Arrow Function
const square = (num) => num * num;

console.log(square(4));  // Output: 16
console.log(square(7));  // Output: 49
//5️⃣ Anonymous Function
const greetUser = function(name) {
    return "Welcome, " + name;
};

console.log(greetUser("Sanket")); // Output: Welcome, Sanket
console.log(greetUser("Bharat")); // Output: Welcome, Bharat

