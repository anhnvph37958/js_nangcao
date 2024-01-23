const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');
const from = document.querySelector('from');

button.addEventListener('click',(e)=>{
    alert('Button was clicked');
    e.stopPropagation();
});

div.addEventListener('click',()=>{
    alert("div was clicked");
});

form.addEventListener('clicked',()=>{
    alert('from was clicked');
});

document.body.addEventListener('clicked',()=>{
    alert('body was clicked');
});
