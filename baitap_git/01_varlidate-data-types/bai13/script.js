const x = Math.floor(Math.random()*100+1);
const y = Math.floor(Math.random()* 50 +1);

// get the sum 
const sum = x+y;
const sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput);

// get the difference 
const diff = x-y;
const diffOut = `${x}-${y} = ${diff}`;
console.log(diffOut);

// get product
const prod = x*y;
const prodOut = `${x}*${y} = ${prod}`;
console.log(prodOut);

// get the quotient 
const quot = x/y;
const qoutOut = `${x}/${y}=${quot}`;
console.log(qoutOut);

// get the remainder 
const rm = x%y;
const tmOut = `${x}%${y}=${rm}`;
console.log(tmOut);