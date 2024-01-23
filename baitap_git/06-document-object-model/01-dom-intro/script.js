// const title = document.getElementById('app-title');

// const listItem =document.querySelectorAll('li');

// console.log(listItem);

// listItem[0].innerText = 'hello again';
// listItem[0].innerHTML = '<strong>shoping list</strong>';
// div.innerText = "day la the div moi"
// title.appendChild(div);

// Global window object
console.log(window);

// The document object is part of the window object
console.dir(window.document);

// We can access DOM elements directly with properties
console.log(document.body);
console.log(document.links[0]);

// We can set properties of elements
// document.body.innerHTML = '<h1>Hello from body</h1>';

// The document object has a ton of methods. One is `document.write()`, which will write something to the document
document.write('Hello from JS');

// We also have methods to select elements more directly
document.getElementById('main').innerHTML = '<h1>Hello from main</h1>';

document.querySelector('#main h1').innerText = 'Hello';