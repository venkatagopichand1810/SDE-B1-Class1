
// a variable in javascript used to store the data values, i save the information in memory

// a variable is box with label where we keep the data 


// var is the keyword used to declare the variables, store the data values


// var name = "venkat"; // we are declaring the variable called "name" and assinging the value called "venkat"
// console.log(name);


// // in javascript redeclartion is possible
// var value = 100; 
// var value = 200;
// console.log(value); //200


// var name; // we are declaring the variable
// name = "venkat"; // we are assigning the value
// console.log(name)


// // this is called reassiagn value 
// var x = 10; 
// x = 100;
// console.log(x)



// var is not the block scope 
// var a = 1000;
// if(true){
//     console.log(a); // 1000
//     var a = 2000; 
// }
// var a = 3000;
// console.log(a); //3000


// 
var ipl = "Chennai"; //global scope
function helloo(){ //function scope
    var ipl = "RCB"; //local scope
    console.log(ipl)
}

helloo(); //function call
console.log(ipl); //chennai