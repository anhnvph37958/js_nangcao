// Tạo một chuỗi mới tên là "myNewString" chứa giá trị của "Developer", sử dụng giá trị chữ thường từ "myString"
const myString = 'developer';

let myNewString;
// solution 1;
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// solution 2;
myNewString = myString[0].toUpperCase() + myString.substring(1);
//solution 3;
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

console.log(myNewString);