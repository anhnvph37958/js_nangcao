// define a function 
function sayHello(){
    console.log("hello world");
}
//  invoke exsocute ỏ call a function 
sayHello();

// define a function with parameters
function add(num1,num2){
    console.log(num1,num2);
}
add(10,99);

// parameter vs arguments
// parameter are the names of the variables that are used to data intro a function.
// arguments are the values that are paased intro the function 

// returning a value 
function subtract(num1, num2){
    return num1 + num2 ;

    console.log('after the return');
}
const result = subtract(10,5);
console.log(result,subtract(99,90));

