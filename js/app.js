'use strict';

var soundArray = [
  'aKey', './assets/audio/a.wav', 
  'bKey', './assets/audio/b.wav',
  'cKey', './assets/audio/c.wav',
  'dKey', './assets/audio/d.wav',
  'eKey', './assets/audio/e.wav',
  'fKey', './assets/audio/f.wav',
  'gKey', './assets/audio/g.wav'
];

var sheetMusicArray = [
  'odeToJoy', './assets/img/odeDefault.png', './assets/img/odePicked.png',
];

// console.log(soundArray);
// console.log(sheetMusicArray);
var keyboardObject = {};
var sheetMusicObject = {};

function keyboardObjectConstructor(name, audioURL){
  this.name = name;
  this.audioURL = audioURL;

  keyboardObject[this.name] = this;
}
// console.log(new keyboardObjectConstructor(soundArray[0], soundArray[1]));
// console.log(keyboardObject);
function sheetMusicObjectConstructor(imgFilePath){
  this.imgFilePath =imgFilePath;

  sheetMusicObject['sheetMusicFilePath'] = this.imgFilePath;
}

// console.log(new sheetMusicObjectConstructor(sheetMusicArray[1]));
// console.log(sheetMusicObject);
