'use strict';

var soundArray = [
  ['aKey', './assets/audio/a.wav'], 
  ['bKey', './assets/audio/b.wav'],
  ['cKey', './assets/audio/c.wav'],
  ['dKey', './assets/audio/d.wav'],
  ['eKey', './assets/audio/e.wav'],
  ['fKey', './assets/audio/f.wav'],
  ['gKey', './assets/audio/g.wav'],
  ['highC', './assets/audio/highC.wav']
];

var sheetMusicArray = [
  ['odeToJoy', './assets/img/odeDefault.jpg', './assets/img/odePicked.jpg'],
  ['cmajor', './assets/img/cmajorDefault.jpg', './assets/img/cmajorPicked.jpg']
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

//play prototype
//-----------------------
keyboardObjectConstructor.prototype.play = function(keyID){


  keyID.play();
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
  img.setAttribute('class', 'sheetMusic');  //delete later if we don't end up using

  parent.appendChild(img);
};
new sheetMusicObjectConstructor(sheetMusicArray[0][0], sheetMusicArray[0][1]);
console.log(sheetMusicObject);
console.log(sheetMusicArray[0][0]);
console.log(sheetMusicObject[sheetMusicArray[0][0]]);
sheetMusicObject[sheetMusicArray[0][0]].render('music-sheet');

(function onPageLoad(){
  for(var i = 0; i < soundArray.length; i++){
    new keyboardObjectConstructor(soundArray[i][0], soundArray[i][1]);
  }
})();
