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

function keyboardObjectConstructor(name, audioURL, keyName){
  this.name = name;
  this.audioURL = audioURL;
  this.keyName = keyName;

  keyboardObject[this.keyName] = this;
}

//play prototype
//-----------------------
keyboardObjectConstructor.prototype.play = function(){
  var audio = new Audio(this.audioURL);

  audio.play();
};
// console.log(new keyboardObjectConstructor(soundArray[0], soundArray[1]));
console.log(keyboardObject);
function sheetMusicObjectConstructor(name, imgFilePath){
  this.name = name;
  this.imgFilePath =imgFilePath;

  sheetMusicObject[this.name] = this;
}
//render prototype
//----------------------
sheetMusicObjectConstructor.prototype.render = function(parentId){
  var parent = document.getElementById(parentId);

  var img = document.createElement('img');
  img.setAttribute('id', this.name);
  img.setAttribute('src', this.imgFilePath);
  img.setAttribute('class', 'sheetMusic'); //delete later if we don't end up using

  parent.appendChild(img);
};
new sheetMusicObjectConstructor(sheetMusicArray[0][0], sheetMusicArray[0][1]);

//keydown event listener

var input = document.querySelector('input');
// var log = document.getElementById('log');   --------to be used for history later
input.addEventListener('keydown', keyLogEventHandler);

function keyLogEventHandler(event){
  // console.log(event);
  console.log(event.code);
  // console.log(keyboardObject);
  console.log(keyboardObject[event.code]);
  // console.log(keyboardObject[event.code].play());
  //keyboardObject[event.code].play();
  try {
    keyboardObject[event.code].play();
  }
  catch(error){
    //alert('Lemon Merangue Pie!');
    console.log('Youentered the wrong key')
    
  }
}

function clearTextField(){
  document.getElementById('keyboardInput').value = ''
}

(function onPageLoad(){
  for(var i = 0; i < soundArray.length; i++){
    new keyboardObjectConstructor(soundArray[i][0], soundArray[i][1], soundArray[i][2]);
  }
})();

console.log(sheetMusicObject);
console.log(sheetMusicArray[0][0]);
console.log(sheetMusicObject[sheetMusicArray[0][0]]);
sheetMusicObject[sheetMusicArray[0][0]].render(`item_${0}`);
