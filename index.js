
console.log("===== DESTRUCTURING =====");

// Exercise 1: Basic object destructuring
let student = {
    name: "Ayesha",
    rollNo: 12,
    marks: 85,
    city: "Lahore"
};

let { name, marks } = student;
console.log("Exercise 1:", name, marks);


// Exercise 2: Destructuring with renaming
let product = {
    id: 5,
    title: "Wireless Mouse",
    price: 25.99
};

let { title: productName } = product;
console.log("Exercise 2:", productName);


// Exercise 3: Destructuring with default values
let user = {
    username: "bilal99"
};

let { username, age: userAge = 18 } = user;
console.log("Exercise 3:", username, userAge);


// Exercise 4: Array destructuring
let colors = ["red", "green", "blue"];

let [first, second] = colors;
console.log("Exercise 4:", first, second);


// Exercise 5: Skipping values in array destructuring
let numbers = [10, 20, 30, 40];

let [a, , c] = numbers;
console.log("Exercise 5:", a, c);


console.log("===== SPREAD OPERATORS =====");

// Exercise 6: Merge two objects
let personalInfo = { name: "Zara", age: 22 };
let jobInfo = { company: "TechCorp", salary: 50000 };

let employee = { ...personalInfo, ...jobInfo };
console.log("Exercise 6:", employee);


// Exercise 7: Copy and override
let defaultSettings = {
    theme: "light",
    fontSize: 14,
    notifications: true
};

let userSettings = {
    ...defaultSettings,
    theme: "dark"
};

console.log("Exercise 7:", userSettings);


// Exercise 8: Combine two arrays
let fruits = ["mango", "banana"];
let vegetables = ["potato", "onion"];

let groceryList = [...fruits, ...vegetables];
console.log("Exercise 8:", groceryList);


// Exercise 9: Add items while spreading
let cart = ["shirt", "shoes"];

let updatedCart = [...cart, "jacket"];
console.log("Exercise 9:", updatedCart);
console.log("Original cart:", cart);


console.log("===== TERNARY OPERATOR =====");

// Exercise 16: Pass or fail
let marksObtained = 45;

let result = marksObtained >= 50 ? "Pass" : "Fail";
console.log("Exercise 16:", result);


// Exercise 17: Even or odd
let num = 7;

let numberType = num % 2 === 0 ? "Even" : "Odd";
console.log("Exercise 17:", numberType);


// Exercise 18: Nested ternary - grading system
let score = 72;

let grade = score >= 90 ? "A"
    : score >= 75 ? "B"
    : score >= 60 ? "C"
    : "F";

console.log("Exercise 18:", grade);


// Exercise 19: Login button text
let isLoggedIn = false;

let buttonText = isLoggedIn ? "Logout" : "Login";
console.log("Exercise 19:", buttonText);


// Exercise 20: Eligible for voting
let votingAge = 16;

let votingMessage = votingAge >= 18
    ? "You can vote!"
    : `Wait ${18 - votingAge} more years`;

console.log("Exercise 20:", votingMessage);
alert(votingMessage);

console.log("===== ASSIGNMENT COMPLETED =====");
