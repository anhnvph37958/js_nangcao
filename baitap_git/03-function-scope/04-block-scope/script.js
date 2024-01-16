const x = 100;

if(true){
    console.log(x);
    const y = 200;
    console.log(x+y);
}

// console.log(y)// referencesError:y is not defined
for(let i =0;x<=10;i++){
    console.log(i);
}

if(true){
    const a = 500;
    let b = 600;
    var c= 700;
}
console.log(c);

function run(){
    var d = 100;
    console.log(d);
}
run();
// console.log(d);
const foo = 1;
var bar = 2;