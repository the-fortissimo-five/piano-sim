'use strict';

function handleClick(event) {
  event.preventDefault();
  // console.log(event);
  // console.log(event.target.className);
  if(event.target.className === 'sheetMusic'){
    STATE_OBJ = sheetMusicObject[event.target.id];
    STATE_OBJ.pickedImage = true;
    console.log(STATE_OBJ);

    setStateToLocalStorage();
    console.log(sheetMusicObject[STATE_OBJ.name]);
    document.location.href = './keyboard.html';

  }

}
container.addEventListener('click', handleClick);

