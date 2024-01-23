const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run(){
    console.log(itemList.className);

    text.className= 'card dark';
    // classList - Array of classes, which also has methods to add, remove, toggle and replace
    console.log(itemList.classList);
    // We can loop through the classes
    itemList.classList.forEach((c)=>console.log(c));

    text.classList.add('dark');
    text.classList.remove('card');
    text.classList.toggle('hidden');
    text.classList.replace('card','dark');

    itemList.style.lineHeight = '3';

items.forEach((item,index)=>{
    item.style.color = 'red';
    if(index===2){
        item.style.color = 'blue';
    }
});
}
document.querySelector('button').onclick = run;