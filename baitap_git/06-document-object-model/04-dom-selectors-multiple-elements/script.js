// querySelectorAll()
// Returns a NodeList

const listItem = document.querySelectorAll('.item');

// accsee elements by index
console.log(listItem[1].innerText);

listItem[1].style.color = 'red';

listItem.forEach((item, index)=>{
    item.style.color ='red';

    if(index===1){
        item.remove();
    }
    if (index === 0) {
        item.innerHTML = ` Oranges
        <button class="remove-item btn-link text-red">
          <i class="fa-solid fa-xmark"></i>
        </button>`;
      }
});

// getElementsByClassName()
// Returns an HTMLCollection

const listItem2 = document.getElementsByClassName('item');

console.log(listItem2[2].innerText);

const listItemArray = Array.from(listItem2);

listItemArray.forEach((item)=>{
    console.log(item.innerText);
});

const listItem3 = document.getElementsByTagName('li');
console.log(listItem3[0].innerText);
