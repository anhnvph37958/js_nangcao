let x;
const name = 'john';
const age = 31;
//concatenation
x = 'hello, my name is ' + name + ' and i am ' + age + ' years old ';

// template literals
x = `hello, my name is ${name} and I am ${age} years old`;
// console.log(x);
// String properties and methods thuộc tính và phuowg thức
//// Tạo một "đối tượng chuỗi" (JS tự động thực hiện việc này khi sử dụng thuộc tính hoặc phương thức trên chuỗi nguyên thủy)
const s = new String('hello world');
x = typeof s;
x = s.length;
//access value by key ; truy cập giá trị bàng key
x = s[1];

// Hiển thị nguyên mẫu của đối tượng chuỗi. Hiển thị các thuộc tính và phương thức
x = s.__proto__;
// console.log(x);
// change case
x = s.toLocaleLowerCase();
x = s.toLocaleUpperCase();

// charAt() - trả về ký tự tại chỉ mục đã chỉ định
x = s.charAt(1);
// indexOf - returns the index of the first occurrence of a specified value in a string
x = s.indexOf('o');
//chuỗi con() - tìm kiếm một chuỗi cho một giá trị được chỉ định
x = s.substring(2, 5);

x = s.substring(7);

//slice() - trích xuất một phần của chuỗi và trả về một chuỗi mới
x = s.slice(-11, -6);

// Trim() - xóa khoảng trắng ở đầu và cuối chuỗi
x = '         Hello World';
x = x.trim();
// thay thế() - thay thế tất cả các phiên bản của một chuỗi
x = s.replace('World', 'John');

// bao gồm() - trả về true nếu tìm thấy chuỗi
x = s.includes('Hell');

// valueOf() - trả về giá trị nguyên thủy của một biến
x = s.valueOf();

// tách() - trả về một mảng chuỗi
x = s.split('');
console.log(x);
