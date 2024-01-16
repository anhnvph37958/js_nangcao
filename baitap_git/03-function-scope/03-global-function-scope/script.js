// window is globally scoped 
// alert('hello');
// console.log(innerWidth);

// global scope variable
 const x = 100;

 console.log(x,'in global');

 function run(){
    // access global vars im functions
    console.log(window.innerHeight);
    console.log(x,'in function');
 }

 run();
 // access global vars in bllocks
 if(true){
    console.log(x,'in blocks');
 }
function add(){
    const x= 1;
    const y = 50;
    console.log(x+y);
}


add();