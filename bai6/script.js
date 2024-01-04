let amount = 'hello';
// chuyển chuỗi thành số
amount = parseInt(amount);
amount=+amount;
amount=Number(amount);
//chuyển số thành chuỗi
amount = amount.toString();
amount=String(amount);
// Chuyển chuỗi thành số thập phân
amount = parseFloat(amount);
//chuyển số thành kiểu boolean
amount = Boolean(amount);

//Ways to get NaN
console.log(Math.sqrt(-1));
console.log(1+NaN);
console.log(undefined + undefined);
console.log('foo' / 3);
console.log(amount,typeof amount);
