const firstName = 'john';
const lastname = 'Doe';
const age = 30;

const person = {
    firstName,
    lastname,
    age,
};

console.log(person.age);

const todo= {
    id:1,
    title: 'take out trash',
    user :{
        name: 'John',
    },
};

const {
    id :todoId,
    title,
    user:{name},
} = todo;
console.log(todoId);

// destructuring arrays & using the rest/spread operator
const numbers = [23,45,67,88,77];
const[first,second,...rest] = numbers;
console.log(first,second,rest);