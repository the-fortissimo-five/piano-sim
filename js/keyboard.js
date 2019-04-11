'use strict';

var CHARACTER_DISPLAY_LENGHT = 8;
var VALID_CHARACTERS = ['S', 'D', 'F', 'J', 'K', 'L', ' ', ';'];

var log = document.getElementById('log');

function limitCharacterlengt(stringOfCharacters) {
  if (stringOfCharacters.length > CHARACTER_DISPLAY_LENGHT) {
    stringOfCharacters = stringOfCharacters.slice(1);
  }
  return stringOfCharacters;
}



function addToTracker(keyPressed){
  keyPressed = keyPressed.toUpperCase();
  if (VALID_CHARACTERS.includes(keyPressed)) {
    var parentId = document.getElementById('trackerContainer');
    var pElement = document.getElementById('tracker');
    pElement.textContent += keyPressed;
    pElement.textContent = limitCharacterlengt(pElement.textContent);
    parentId.appendChild(pElement);
  }
}


function keyLogEventHandler(event){
  // console.log(event);
  // console.log(event.code);
  // console.log(keyboardObject);

  addToTracker(event.key);

  // log.textContent += ` ${event.code}`;
  // try {
  //   keyboardObject[event.code].play();
  // }
  // catch(error){
  //   console.log('You entered the wrong key');
  // }
}
function transitionReset (event){
  // console.log(event);
  // debugger;
  //console.log('Hello from transition end');
  setTimeout(function(){document.getElementById(keyboardObject[event.code].name).className = 'pianoKeys';
  }, 1000);
  // console.log(keyboardObject[event.code].name);
  // console.log((keyboardObject[event.code].name).className);
}
function changeTheNameOfThisFunction(event) {
  // event.target.classList.remove('pianoKeys');
  // console.log(keyboardObject[event.code].name);
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


