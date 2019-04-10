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
function transitionReset (event){
  console.log(event);
  // debugger;
  //console.log('Hello from transition end');
  setTimeout(function(){document.getElementById(keyboardObject[event.code].name).className = 'pianoKeys';
  }, 1000);
  console.log(keyboardObject[event.code].name);
  console.log((keyboardObject[event.code].name).className);
}
function changeTheNameOfThisFunction(event) {
  // event.target.classList.remove('pianoKeys');
  document.getElementById(keyboardObject[event.code].name).className = 'played';
  var transition = document.querySelector('.played');
  transition.addEventListener('transitionend',transitionReset(event));


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
