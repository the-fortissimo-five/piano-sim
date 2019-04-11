'use strict';

var CHARACTER_DISPLAY_LENGHT = 8;
var VALID_CHARACTERS = ['S', 'D', 'F', 'J', 'K', 'L', ' ', ';'];
var VALID_CODE_KEYS = ['KeyL', 'Space', 'KeyS', 'KeyD', 'KeyF', 'KeyJ', 'KeyK', 'Semicolon'];




function limitCharacterlength(stringOfCharacters) {
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
    pElement.textContent = limitCharacterlength(pElement.textContent);
    parentId.appendChild(pElement);
  }
}

function keyLogEventHandler(event){
  addToTracker(event.key);
  if (VALID_CODE_KEYS.includes(event.code)) {
    keyboardObject[event.code].play();
  }
}

function transitionReset (event){
  setTimeout(function(){document.getElementById(keyboardObject[event.code].name).className = 'pianoKeys';
  }, 1000);
}

function changeTheNameOfThisFunction(event) {
  if (VALID_CODE_KEYS.includes(event.code)) {
    document.getElementById(keyboardObject[event.code].name).className = 'played';
    var transition = document.querySelector('.played');
    transition.addEventListener('transitionend',transitionReset(event));
  }
}
//keydown event listener
//--------to be used for history later

input.addEventListener('keydown', keyLogEventHandler);
input.addEventListener('keydown', changeTheNameOfThisFunction);

(function onPageLoadKeyboard(){
  if(localStorage[STATE_KEY]){
    getStateFromLocalStorage();
    sheetMusicObject[STATE_OBJ.name].render('item');
  } else{
    sheetMusicObject[sheetMusicArray[0][0]].render('item');
  }

})();
