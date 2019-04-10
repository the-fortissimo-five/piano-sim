'use strict';

var log = document.getElementById('log');

function keyLogEventHandler(event){
  // console.log(event);
  // console.log(event.code);
  // console.log(keyboardObject);

  log.textContent += ` ${event.code}`;
  try {
    keyboardObject[event.code].play();
  }
  catch(error){
    //alert('Lemon Merangue Pie!');
    console.log('You entered the wrong key');
  }
}
function changeTheNameOfThisFunction(event) {
  // event.target.classList.remove('pianoKeys');
  var keys = document.getElementById('cKey');
  var keyClassName = keys.className;
  console.log(keyClassName);
  keyClassName = 'played';
  console.log(keyClassName);

}
//keydown event listener
//--------to be used for history later


input.addEventListener('keydown', keyLogEventHandler);
input.addEventListener('keydown', changeTheNameOfThisFunction);

function clearTextField(){
  document.getElementById('keyboardInput').value = '';
}

function clearHistoryField(){
  log.textContent = '';
}
