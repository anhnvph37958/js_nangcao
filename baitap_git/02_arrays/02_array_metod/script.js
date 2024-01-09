let x;

const arr = [28, 48, 58, 69, 209];
// push đẩy 1 giá trị vào cuối mag
arr.push(190);
// pop :bỏ giá trị cuối cùng
arr.pop();

//them giá trị vào đầu mảng
arr.unshift(99);
// xóa giá trị đầu
arr.shift();
// dao ngược mảng
arr.reverse();
// kiểm tra mảng có tồn tại giá trị này không
x = arr.includes(455);
//   indexOf() kiểm tra vi trí phần tử trong mảng
x = arr.indexOf(28)
// trả về 1 chuỗi
x = arr.join();
x = arr.toString();
// 
x = arr.slice(1,4);
x = arr.splice(1,4)

x = arr.slice(1,4).reverse().toString().charAt(0);
console.log(x);