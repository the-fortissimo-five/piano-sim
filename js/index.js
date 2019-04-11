'use strict';
// -------------------------
// Sheet music click handler
// -------------------------
function handleClick(event) {
  event.preventDefault();
  if(event.target.className === 'sheetMusic'){
    STATE_OBJ = sheetMusicObject[event.target.id];
    setStateToLocalStorage();
    document.location.href = './keyboard.html';
  }
}

//--------------------------
//Sheet music mouse click event listener
//--------------------------
container.addEventListener('click', handleClick);

//--------------------------
//On page load IFFE (Immediately-invoked function expression)
//--------------------------
(function onPageLoadIndex(){
  if(localStorage[STATE_KEY]){
    getStateFromLocalStorage();
    for(var i = 0; i < sheetMusicArray.length; i++){
      if(sheetMusicObject[sheetMusicArray[i][0]].name === STATE_OBJ.name){
        var temp = sheetMusicObject[STATE_OBJ.name].imgFilePath;
        sheetMusicObject[STATE_OBJ.name].imgFilePath = sheetMusicObject[STATE_OBJ.name].pickedFilePath;
        sheetMusicObject[sheetMusicArray[i][0]].render(`item${i}`);
        sheetMusicObject[STATE_OBJ.name].imgFilePath = temp;
      }else{
        sheetMusicObject[sheetMusicArray[i][0]].render(`item${i}`);
      }
    }
  }else
  {
    for(var j = 0; j < sheetMusicArray.length; j++){
      sheetMusicObject[sheetMusicArray[j][0]].render(`item${j}`);
    }
  }
})();

