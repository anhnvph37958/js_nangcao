// funtion declaration
function addDollarSign(value){
    return '$'+value;
}

// when using declaration you can invoke the function before the declaratioon wwith exxpression, you can not 
console.log(addDollarSign(100));

// function expression 
const addPlusSign = function (value){
    return '+' +value;
};
console.log(addPlusSign(2000));