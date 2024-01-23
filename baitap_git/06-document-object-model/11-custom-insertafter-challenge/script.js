function insertAfter(newEl,existingEl){
    existingEl.parentElement.insertBefore(newEl,existingEl.nextSibling);
}

const li = document.createElement('li');
li.textContent = 'Insert Me After';

const firstitem = document.querySelector('li:first-child');

insertAfter(li,firstitem);
