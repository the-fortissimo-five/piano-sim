'use strict';

function handleClick(event) {
  event.preventDefault();
  // console.log(event);
  // console.log(event.target.className);
  if(event.target.className === 'sheetMusic'){
    STATE_OBJ = sheetMusicObject[event.target.id];
    console.log(STATE_OBJ);
    setStateToLocalStorage();
    document.location.href = './keyboard.html';
  }

}
container.addEventListener('click', handleClick);

