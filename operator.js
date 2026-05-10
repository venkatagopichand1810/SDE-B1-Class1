// operator are the special symbols to perform operations on values and variables in JS


// arithmetic, assignment, comparison, logical, increment, string, ternary operator, nulliesh coalescing operator, optional chaining operator, spread/rest operator, bitwise operator 


// add, sub, diviion modules, exporntne
// let a = 10; 
// let b = 20; 
// console.log(a + b, a - b, a * b, a / b, a % b, a ** b);


// assignment operators or compount assignment operators 

// let x = 10; 
// x += 5; // x = x + 5


// comparsion operator will give the boolean value

//equal will check only the value
// let value1 = 100;
// let value2 = "100";
// console.log(value1 !== value2); //equality (value + type)
// console.log(5 >= 5)

// logical operators &&, || and !

// &&, both should be true then it will true, false
// ||, if both are false it will false, true
// !true = false

// let age = 20;
// let hasID = true

// console.log(age > 18 && hasID);
// console.log(age < 18 || hasID);
// console.log(!hasID)


// increment /decrement
// let x = 5; 
// x++
// console.log(x)


// ternaary opertor...
// condition ? "firstvalue" : "secondvalue"

// let age1 = 18;
// let result = age1 >= 18 ? "adult" : "minor";
// console.log(result)


// nullish coalescing operator, returns right value when the left is null or undefined

let bill = 0;
console.log(bill ?? 100);


let username = "venkat";
console.log(username ?? "guest")





let price = 1000;
let discount = 200; 

let afterDiscount = price - discount;

let tax = afterDiscount * 18 / 100;

let total = afterDiscount + tax;

let delivary = total > 500 ? "free delivary" :"delivayr charges will apply";

console.log("original price", price);
console.log("after discount", afterDiscount);
console.log("tax", tax)
console.log("total amount", total)
console.log(delivary)