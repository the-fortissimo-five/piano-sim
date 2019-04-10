'use strict';

var soundArray = [
  ['aKey', './assets/audio/a.wav', 'KeyL'],
  ['bKey', './assets/audio/b.wav', 'Space'],
  ['cKey', './assets/audio/c.wav', 'KeyS'],
  ['dKey', './assets/audio/d.wav', 'KeyD'],
  ['eKey', './assets/audio/e.wav', 'KeyF'],
  ['fKey', './assets/audio/f.wav', 'KeyJ'],
  ['gKey', './assets/audio/g.wav', 'KeyK'],
  ['highC', './assets/audio/highC.wav', 'Semicolon']
];

var sheetMusicArray = [
  ['odeToJoy', './assets/img/odeDefault.jpg', './assets/img/odePicked.jpg'],
  ['cmajor', './assets/img/cmajorDefault.jpg', './assets/img/cmajorPicked.jpg']
];

// console.log(soundArray);
// console.log(sheetMusicArray);
var keyboardObject = {};
var sheetMusicObject = {};
var container = document.getElementById('mainContainer');
console.log(container);
var input = document.querySelector('input');

function KeyboardObjectConstructor(name, audioURL, keyName){
  this.name = name;
  this.audioURL = audioURL;
  this.keyName = keyName;

  keyboardObject[this.keyName] = this;
}

//play prototype
//-----------------------
KeyboardObjectConstructor.prototype.play = function(){
  var audio = new Audio(this.audioURL);

  audio.play();
};
// console.log(new keyboardObjectConstructor(soundArray[0], soundArray[1]));
console.log(keyboardObject);
function SheetMusicObjectConstructor(name, imgFilePath){
  this.name = name;
  this.imgFilePath =imgFilePath;

  sheetMusicObject[this.name] = this;
}
//render prototype
//----------------------
SheetMusicObjectConstructor.prototype.render = function(parentId){
  var parent = document.getElementById(parentId);

  var img = document.createElement('img');
  img.setAttribute('id', this.name);
  img.setAttribute('src', this.imgFilePath);
  img.setAttribute('class', 'sheetMusic'); //delete later if we don't end up using

  parent.appendChild(img);
};
new SheetMusicObjectConstructor(sheetMusicArray[0][0], sheetMusicArray[0][1]);

// Working on click event handler
// function handleClick(event) {
//   event.preventDefault();
//   console.log(event);
//   if(event.target.className === 'indexPageMusicSheet'){
//     console.log('Hi');
//   }

// }
// container.addEventListener('click', handleClick);


console.log(sheetMusicObject);
console.log(sheetMusicArray[0][0]);
console.log(sheetMusicObject[sheetMusicArray[0][0]]);
sheetMusicObject[sheetMusicArray[0][0]].render(`item_${0}`);
