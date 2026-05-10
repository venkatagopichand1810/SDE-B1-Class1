
//javascript data types are the types of values that variables can hold. jS having automatic type conversion 

// primitive data types 
//  non-primitive data types / reference data types

// Number : used to store the numberic values

// let age = 100;
// let price = 99.999;
// console.log(age, price);
// console.log(typeof age);
// console.log(typeof price)


//string used to store the text " " or ''

// let name = "venkat";
// let lname = 'chandu';
// console.log(name + " " + lname)
// console.log(typeof name, typeof lname)


// boolean going store true or false

// let isLogged = true; 
// let isAdmin = false;

// console.log(isAdmin);
// console.log(typeof isLogged)



// // undefined...when the variable is declared but value is not assigned 
// let username; //we are assigning any value
// console.log(typeof username); //undefined (datatype)


// // null represent empty value or intentional no value
// let user = null; //we are assign null
// console.log(typeof null); //object is the datatype

// // bigint, symbol
 



// non primitive data types(reference data types)

// object.. stores data in key - value pair...  { }...we have use .

let student = {
    name: "venkat",
    city: "bangalore",
    state: "KA"
}

console.log(student.name);

// array we can stores multiple values in one variable... if we wanted to access the values in js we have to use index [] and index will start from "0"

let mobiles = ["oppo", "vivo", "iphone", 10, true, {name: "venkat"}]
console.log(mobiles)
console.log(mobiles.length);
console.log(mobiles[1])

