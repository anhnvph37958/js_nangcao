const title = document.getElementById('title');

title.addEventListener('input',onChange);

// function onChange(event){
//     // console.log('value',event.target.value);
// }
// khi da nhan du lieu tu input => button submit 
// form lang ngh e su kien submit

const formSub = document.getElementById('form');

formSub.addEventListener('submit',onSubmit);

function onSubmit(event){
    event.preventDefault(); // chan day input len url
    console.log('handSubmit'
    
    );
    // lay value;
    console.log("title",title.value);

    // validate 
    if(!title.value){
        alert('Please to call me');
        return;
    }

    // b4 call api  fecth /axios
    // create 
    // edit

}