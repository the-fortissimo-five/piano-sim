'use strict';

//-----------------------------
//Array containing the different key sounds
//-----------------------------
var soundArray = [
  ['aKey', './assets/audio/a.wav', 'KeyL'],
  ['bKey', './assets/audio/b.wav', 'Space'],
  ['cKey', './assets/audio/c.wav', 'KeyS'],
  ['dKey', './assets/audio/D2.wav', 'KeyD'],
  ['eKey', './assets/audio/e.wav', 'KeyF'],
  ['fKey', './assets/audio/f.wav', 'KeyJ'],
  ['gKey', './assets/audio/g.wav', 'KeyK'],
  ['highC', './assets/audio/highC.wav', 'Semicolon'],
];

//-------------------------------
//Array containing the different music sheets
//-------------------------------
var sheetMusicArray = [
  ['odeToJoy', './assets/img/odeDefault.jpg', './assets/img/odePicked.jpg'],
  ['cmajor', './assets/img/cmajorDefault.jpg', './assets/img/cmajorPicked.jpg'],
  ['dependsOnTheWeather', './assets/img/dependsOnTheWeatherDefault.jpg', './assets/img/dependsOnTheWeatherPicked.jpg'],
  ['breakEveryChain', './assets/img/breakEveryChainDefault.jpg','./assets/img/breakEveryChainPicked.jpg'],
];

//-------------------------------
//Global variables
//-------------------------------
var keyboardObject = {};
var sheetMusicObject = {};

var container = document.getElementById('musicSheetWrapper');

var STATE_KEY = 'sheetMusicState';
var STATE_OBJ = {};

//-------------------------------
//Keyboard object constructor function
//-------------------------------

function KeyboardObjectConstructor(name, audioURL, keyName){
  this.name = name;
  this.audioURL = audioURL;
  this.keyName = keyName;

  keyboardObject[this.keyName] = this;
}

//-------------------------------
//Keyboard object constructor prototype play function
//-------------------------------
KeyboardObjectConstructor.prototype.play = function(){
  var audio = new Audio(this.audioURL);

  audio.play();
};

//--------------------------------
//Sheet music object constructor function
//--------------------------------
function SheetMusicObjectConstructor(name, imgFilePath, pickedFilePath){

  this.name = name;
  this.imgFilePath = imgFilePath;
  this.pickedFilePath = pickedFilePath;

  sheetMusicObject[this.name] = this;
}

//--------------------------------
//Sheet music object constructor prototype render function
//--------------------------------
SheetMusicObjectConstructor.prototype.render = function(parentId){
  var parent = document.getElementById(parentId);

  var img = document.createElement('img');
  img.setAttribute('id', this.name);
  img.setAttribute('src', this.imgFilePath);
  img.setAttribute('class', 'sheetMusic');

  parent.appendChild(img);
};

//---------------------------------
//Local storage setter function
//---------------------------------
function setStateToLocalStorage(){
  localStorage.setItem(STATE_KEY, JSON.stringify(STATE_OBJ));
}

//---------------------------------
//Local storage getter function
//---------------------------------
function getStateFromLocalStorage(){
  var rawState = localStorage.getItem(STATE_KEY);
  STATE_OBJ = JSON.parse(rawState);
  new SheetMusicObjectConstructor(STATE_OBJ.name, STATE_OBJ.imgFilePath, STATE_OBJ.pickedFilePath);
}

//--------------------------------
//IFFE (Immediately-invoked function expression) to create objects
//--------------------------------
(function createObjectsOnLoad(){
  for(var i = 0; i < soundArray.length; i++){
    new KeyboardObjectConstructor(soundArray[i][0], soundArray[i][1], soundArray[i][2]);
  }
  for(i = 0; i < sheetMusicArray.length; i++){
    new SheetMusicObjectConstructor(sheetMusicArray[i][0], sheetMusicArray[i][1], sheetMusicArray[i][2]);
  }
})();
