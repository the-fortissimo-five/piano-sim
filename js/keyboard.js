'use strict';

//---------------------------
//History log variables
//---------------------------
var characterDisplayLength = 8;
var validCharacters = ['S', 'D', 'F', 'J', 'K', 'L', '_', ';'];
var validCodeKeys = ['KeyL', 'Space', 'KeyS', 'KeyD', 'KeyF', 'KeyJ', 'KeyK', 'Semicolon'];

//---------------------------
//Function to limit display of characters in history log
//---------------------------
function limitCharacterlength(stringOfCharacters) {
  if (stringOfCharacters.length > characterDisplayLength) {
    stringOfCharacters = stringOfCharacters.slice(1);
  }
  return stringOfCharacters;
}

//---------------------------
//Function to log keys pressed and add to history log
//---------------------------
function addToTracker(keyPressed){
  keyPressed = keyPressed.toUpperCase();
  if(keyPressed === ' '){
    keyPressed = '_';
  }
  if (validCharacters.includes(keyPressed)) {
    var parentId = document.getElementById('trackerContainer');
    var pElement = document.getElementById('tracker');
    pElement.textContent += keyPressed;
    pElement.textContent = limitCharacterlength(pElement.textContent);
    parentId.appendChild(pElement);
  }
}

//----------------------------
//Function key log event handler to activate play function in app.js
//----------------------------
function keyLogEventHandler(event){
  addToTracker(event.key);
  if (validCodeKeys.includes(event.code)) {
    keyboardObject[event.code].play();
  }
}

//----------------------------
//Function to reset element class after transition event in css
//----------------------------
function transitionReset (event){
  setTimeout(function(){document.getElementById(keyboardObject[event.code].name).className = 'pianoKeys';
  }, 300);
}

//----------------------------
//Function to change element class to fire css transition event
//----------------------------
function changeClassName(event) {
  if (validCodeKeys.includes(event.code)) {
    document.getElementById(keyboardObject[event.code].name).className = 'played';
    var transition = document.querySelector('.played');
    transition.addEventListener('transitionend',transitionReset(event));
  }
}

//--------------------------
//Keyboard key press event listener
//--------------------------
input.addEventListener('keydown', keyLogEventHandler);
input.addEventListener('keydown', changeClassName);

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
