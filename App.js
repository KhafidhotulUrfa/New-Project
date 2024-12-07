const studentName = "Urfa"
let studentAge = 20
let studentGrade = undefined

//Format Lama
let namaUsiaFormatLama = "Nama" + studentName + "Usia: " + studentAge

// Format baru menggunakan bactiks dari ES6
let namaUsiaFormatBaru = `Nama ${studentName} Usia: ${studentAge}`

console.log(namaUsiaFormatBaru)

let variabel
variabel = "nilai";
variabel = 0;
variabel = 5.6;
variabel = true;
variabel = 'data';
// console.log(variabel);

//String
let courseName = "JavaScript 101";
// Number
let score = 95.5;
// Boolean
let isPassing = true;
// Undifined
let nextCorse;
// Null
let certificatNumber = null

console.log(courseName)

//console.log(studentName)

// Array
let courseModules = ["Variabeles, Functions", "Objects", "Arrays"];
// object
let students = {
    name: "Urfa",
    age: 21,
    grades: [90, 100, 95],
    contact: {
        email: "khafidhotulurfa@gail.com",
        phone: "085176741023"
    }
}
console.log(`${students.name} ${courseModules[2]} ${students.contact.email}`)

let saldo = 1000
let saldo2 = "1000"
if (saldo == saldo2) {}

//Aritmetic Operator
let totalScore = 85 + 90;
let averageScore = totalScore / 2;
let bonusPoints = score++;
let penaltyPoints = score--;
let remainder = 10 % 3;

// Assigment Operators
let currentScore = 85;
currentScore += 5;
currentScore += 2;
//Comparison
let isEqual = 5 == "5";
let isStrictEqual = 5 === "5";
let isGreater = 90 > 85;
let isLessOrEqual = 85 <= 90;
let attendance = 90;

// logical operators
let hasPassingGrade = score >= 60;
let hasAttendance = true;
// And OPeration
let willPass = hasPassingGrade && hasAttendance;
// oR OPertaor
let needsHelp = (score < 60) || (attendance < 89);
// Not operator
let isFailing = !hasPassingGrade;

// 1. FOR LOOP
// Basic for loop
console.log("--- Basic for loop ---");
for (let i = 1; i <= 5; i++) {
    console.log(`Count: ${i}`);
}

// Loop through array
const fruits = ["apple", "banana", "orange", "mango"];
console.log("--- Looping through array ---");
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

// 2. FOR...OF LOOP
// Easier way to loop through arrays
console.log("--- for...of loop ---");
const colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(`Color: ${color}`);
}

// 3. FOR...IN LOOP
// Used for objects
console.log("--- for...in loop ---");
const student = {
    name: "John",
    age: 20,
    grade: "A"
};
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}

// 4. WHILE LOOP
// Runs while condition is true
console.log("--- while loop ---");
let count = 1;
while (count <= 5) {
    console.log(`While count: ${count}`);
    count++;
}

// 5. DO...WHILE LOOP
// Always runs at least once
console.log("--- do...while loop ---");
let num = 1;
do {
    console.log(`Number: ${num}`);
    num++;
} while (num <= 3);

// 6. BREAK AND CONTINUE
console.log("--- break and continue ---");
for (let i = 1; i <= 5; i++) {
    if (i === 2) continue; // Skip 2
    if (i === 4) break; // Stop at 4
    console.log(`Number: ${i}`);
}

//
let studentScore = 85;
if (studentScore >= 88) {
    console.log("Excellent work");
}

let age = 17;
if (age >= 18) {
    console.log("You can Vote");
} else {
    console.log("Too young to vote");
}

let grade = 75;
if (grade >= 90) {
    console.log("Grade : A");
} else if (grade >= 80) {
    console.log("Grade: B");
} else if (grade >= 70) { console.log("Grade: c"); } else if (grade >= 60) {
    console.log("Grade: D");
} else { console.log("Grade: F"); }


let isLoggedIn = true;
let isAdmin = true;
let hasPermission = true;

if (isLoggedIn) {
    if (isAdmin) {
        if (hasPermission) {
            console.log("Welcome to admin");
        } else {
            console.log("insufficient permissin");
        }
    } else { console.log("welcome to user dasborad"); }
} else { console.log("Please log in firt"); }

let username = "john";
let password = "secret123";
if (username === "john" && password == 'secret123') {
    console.log("Login succes");
} else {
    console.log("Invalid");
}
let isSubcribed = true;
let message = isSubcribed ? "welome back" : "Please subscribe";



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

// 1. Basic Class Defition
class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    study() {
        return `${this.name} is studying`;
    }
    get studentInfo() {
        return `${this.name}, age ${this.age}, grade${this.grade}`;
    }
    set studentGrade(newGrade) {
        if (newGrade >= 0 && newGrade <= 100) {
            this.grade = newGrade;
        } else { console.log("Invalid Grade"); }
    }

}

let p = new Student("Urfa", 21, 95);
console.log(p.study());

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `Hi, I'm ${this.name}`;
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    teach() {
        return `${this.name} is teaching ${this.subject}`;
    }
}

const teacher1 = new Teacher("Ms.Susi", 32, "JavaScript");
console.log(teacher1.introduce());
console.log(teacher1.teach());

class BankAccount {#
    balance = 0;

    constructor(accountHolder) {
        this.accountHolder = accountHolder;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return `Deposit ${amount}. New balance: ${this.#balance}`;
        }
        return `Invalid amount`;
    }
    getBalance() {
        return this.#balance;
    }
}

const account1 = new BankAccount("Urfa");
console.log(account1.deposit(100));
console.log(account1.getBalance());