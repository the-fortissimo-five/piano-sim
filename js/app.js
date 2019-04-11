'use strict';

var soundArray = [
  ['aKey', './assets/audio/a.wav', 'KeyL'],
  ['bKey', './assets/audio/b.wav', 'Space'],
  ['cKey', './assets/audio/c.wav', 'KeyS'],
  ['dKey', './assets/audio/d.wav', 'KeyD'],
  ['eKey', './assets/audio/e.wav', 'KeyF'],
  ['fKey', './assets/audio/f.wav', 'KeyJ'],
  ['gKey', './assets/audio/g.wav', 'KeyK'],
  ['highC', './assets/audio/highC.wav', 'Semicolon'],
];

var sheetMusicArray = [
  ['odeToJoy', './assets/img/odeDefault.jpg', './assets/img/odePicked.jpg'],
  ['cmajor', './assets/img/cmajorDefault.jpg', './assets/img/cmajorPicked.jpg'],
];

var keyboardObject = {};
var sheetMusicObject = {};

var container = document.getElementById('musicSheetWrapper');
var input = document.querySelector('input');

var STATE_KEY = 'sheetMusicState';
var STATE_OBJ = {};

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

for(var i = 0; i < soundArray.length; i++){
  new KeyboardObjectConstructor(soundArray[i][0], soundArray[i][1], soundArray[i][2]);
}
// console.log(new keyboardObjectConstructor(soundArray[0], soundArray[1]));
// console.log(keyboardObject);
function SheetMusicObjectConstructor(name, imgFilePath, pickedFilePath){

  this.name = name;
  this.imgFilePath = imgFilePath;
  this.pickedFilePath = pickedFilePath;
  // this.pickedImage = false;

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

for(i = 0; i < sheetMusicArray.length; i++){
  // console.log(sheetMusicArray[i][2]);
  // debugger;
  new SheetMusicObjectConstructor(sheetMusicArray[i][0], sheetMusicArray[i][1], sheetMusicArray[i][2]);
}
console.log(sheetMusicObject);

function setStateToLocalStorage(){
  localStorage.setItem(STATE_KEY, JSON.stringify(STATE_OBJ));
}
function getStateFromLocalStorage(){
  var rawState = localStorage.getItem(STATE_KEY);
  STATE_OBJ = JSON.parse(rawState);
  new SheetMusicObjectConstructor(STATE_OBJ.name, STATE_OBJ.imgFilePath, STATE_OBJ.pickedFilePath);
}

