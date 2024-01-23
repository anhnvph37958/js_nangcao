const itemInput = document.getElementById('item-input');

const onkeyPress = (e) =>{
    console.log('keypress');
};

const onKeyUp = (e) => {
    console.log('keyup');
};

const keyDown = (e) =>{
      // key
  // if (e.key === 'Enter') {
  //   alert('You pressed enter');
  // }

  // keyCode
  // https://www.toptal.com/developers/keycode/table-of-all-keycodes

if(e.keyCode ===13){
    alert('you pressed enter');
}

if(e.code=== 'Digit1'){
    console.log('you pressed 1');
}

if(e.repeat){
    console.log('you are holding down'+ e.key);
}
console.log('shift: '+ e.shiftKey);
console.log('Control: '+e.ctrlKey);;
console.log('Alt: '+ e.altKey);

if(e.shiftKey && e.key =='K'){
    console.log('you hit shift + K');
}
};
itemInput.addEventListener('keypress', onkeyPress);
itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', keyDown);