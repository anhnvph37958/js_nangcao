(function(){
    const user = "Nguyen";
    console.log(user);
    const hello = () => console.log('Hello from the IIFE');
    hello();
})();

(function (name){
    console.log("hello"+name);
})('Anhneg');

(function hello(){
    console.log("hello");
})();