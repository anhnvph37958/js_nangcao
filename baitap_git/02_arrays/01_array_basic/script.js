let x;

const arr = [23,26,59,68,100];

const mixed = [12,"hello",true,null];

const fruit = new Array('apple','grape',"orange");
// nhận giá trị bằng ví trị của phần tử trong mảng
x = arr[0];

x = arr[1] + arr[3];

x = `my favorite fruit is an ${fruit[2]}`;
x = arr.length;
fruit[2] = 'pear';

fruit[3] = 'lemon';
x = fruit;
// / Sử dụng độ dài làm chỉ mục sẽ luôn thêm vào cuối
fruit[fruit.length] = 'blueberry';
fruit[fruit.length] = 'peach';
console.log(x);