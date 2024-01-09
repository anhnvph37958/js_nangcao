let x;

const fruit = ['apple','pear','orange'];
const berie = ['stawberry','blueberry','rasberry'];

fruit.push(berie);
x = fruit[3][1];

const allFruit  = [fruit,berie];

x = allFruit;
// concat nối mảng
x = fruit.concat(berie);
// spread toán tử ... nối với
x = {...fruit,...berie};
// flat() flatten an array
const arr = [1,3,4,5,6,7,[8,9,0]];
x = arr.flat();
// isArray()
x = Array.isArray(fruit);

x = Array.isArray('12345');
//of 
const a = 1
const b = 2;
const c = 3;

x = Array.of(a,b,c);






console.log(x);