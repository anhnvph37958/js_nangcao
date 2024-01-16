let x;

const todo = new Object();

todo.id = 1;
todo.name = "Buy milk";
todo.completed = false;

x = todo;

const person = {
    address: {
        coords: {
            lat: 42.9385,
            lng : -71.467,
        },
    },
};

x = person.address.coords.lat;

const obj1 = {a:1,b:3};
const obj2 = {c:2,d:4};

const obj3 ={...obj1,...obj2};
x = obj3;
const obj4 = Object.assign({},obj1,obj2);
x = obj4;
const todos = [
    {id:1,name :'Buy milk'},
    {id:2,name:'pickup kids dỏm school'},
    {id:3,name:'tale out trash'},

];
x = todos[0].name;

// get array of obj keys
x = Object.keys(todo);

// get lenght of an obj
x = Object.keys(todo).length;

// get array of obj values 
x= Object.values(todo);

// get array of obj key/value pairs
x = Object.entries(todo);
// ckeck if obj has property
x =todo.hasOwnProperty('id');
console.log(x);