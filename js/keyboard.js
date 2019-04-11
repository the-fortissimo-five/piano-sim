'use strict';

//---------------------------
//History log variables
//---------------------------
var CHARACTER_DISPLAY_LENGTH = 8;
var VALID_CHARACTERS = ['S', 'D', 'F', 'J', 'K', 'L', '_', ';'];
var VALID_CODE_KEYS = ['KeyL', 'Space', 'KeyS', 'KeyD', 'KeyF', 'KeyJ', 'KeyK', 'Semicolon'];

//---------------------------
//function to limit display of characters in history log
//---------------------------
function limitCharacterlength(stringOfCharacters) {
  if (stringOfCharacters.length > CHARACTER_DISPLAY_LENGTH) {
    stringOfCharacters = stringOfCharacters.slice(1);
  }
  return stringOfCharacters;
}

//---------------------------
//function to log keys pressed and add to history log
//---------------------------
function addToTracker(keyPressed){
  keyPressed = keyPressed.toUpperCase();
  if(keyPressed === ' '){
    keyPressed = '_';
  }
  if (VALID_CHARACTERS.includes(keyPressed)) {
    var parentId = document.getElementById('trackerContainer');
    var pElement = document.getElementById('tracker');
    pElement.textContent += keyPressed;
    pElement.textContent = limitCharacterlength(pElement.textContent);
    parentId.appendChild(pElement);
  }
}

//----------------------------
//function key log event handler to activate play function in app.js
//----------------------------
function keyLogEventHandler(event){
  addToTracker(event.key);
  if (VALID_CODE_KEYS.includes(event.code)) {
    keyboardObject[event.code].play();
  }
}

//----------------------------
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

//--------------------------
//Keyboard key press event listener
//--------------------------
input.addEventListener('keydown', keyLogEventHandler);
input.addEventListener('keydown', changeTheNameOfThisFunction);

//--------------------------
//On page load IFFE (Immediately-invoked function expression)
//--------------------------
(function onPageLoadKeyboard(){
  if(localStorage[STATE_KEY]){
    getStateFromLocalStorage();
    sheetMusicObject[STATE_OBJ.name].render('item');
  } else{
    sheetMusicObject[sheetMusicArray[0][0]].render('item');
  }
})();
