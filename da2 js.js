// 1. Basic Function Declaration
function sayHello(name) {
    return `Hello, ${name}!`;
}

// Using the function
console.log(sayHello("John")); // Output: Hello, John!

// 2. Function with Multiple Parameters
function calculateTotal(price, quantity) {
    return price * quantity;
}

// Using the function
console.log(calculateTotal(10, 5)); // Output: 50

// 3. Function with Default Parameters
function greet(name = "Guest", time = "day") {
    return `Good ${time}, ${name}!`;
}

// Using the function
console.log(greet()); // Output: Good day, Guest!
console.log(greet("Alice", "morning")); // Output: Good morning, Alice!

// 4. Arrow Function
const add = (a, b) => {
    return a + b;
};

// Simple arrow function (one line)
const multiply = (a, b) => a * b;

// Using arrow functions
console.log(add(5, 3)); // Output: 8
console.log(multiply(4, 2)); // Output: 8

// 5. Function that uses another function
function calculateGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}

function getStudentResult(name, score) {
    const grade = calculateGrade(score);
    return `${name} received a grade of ${grade}`;
}

// Using the function
console.log(getStudentResult("Alice", 95)); // Output: Alice received a grade of A