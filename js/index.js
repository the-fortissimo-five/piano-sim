'use strict';

function handleClick(event) {
  event.preventDefault();
  // console.log(event);
  // console.log(event.target.className);
  if(event.target.className === 'sheetMusic'){
    STATE_OBJ = sheetMusicObject[event.target.id];
    // STATE_OBJ.pickedImage = true;
    console.log(STATE_OBJ);

    setStateToLocalStorage();
    console.log(sheetMusicObject[STATE_OBJ.name]);
    document.location.href = './keyboard.html';

  }

}
container.addEventListener('click', handleClick);

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
    for(var i = 0; i < sheetMusicArray.length; i++){
      sheetMusicObject[sheetMusicArray[i][0]].render(`item${i}`);
    }
  }
})();

