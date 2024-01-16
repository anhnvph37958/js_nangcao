const add = (a,b) =>{
    return a+b;
};

// implicit return
const subtract = (a,b) => a-b;

// can leave off() with single param 
const double = (a) => a*2;

// returning an object 
const createObj = ()=>({
    name:'Brad',
});
const numbers = [1,2,3,4,5,6];
numbers.forEach(function (n){
    console.log(n);
});

// arrow function in callback
numbers.forEach((n) => console.log(n));

console.log(add(1,2));
console.log(subtract(10,56));
console.log(double(10));
console.log(createObj());
