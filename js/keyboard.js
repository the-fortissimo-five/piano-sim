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
    console.log('You entered the wrong key');
  }
}
//keydown event listener
var log = document.getElementById('log');   //--------to be used for history later
input.addEventListener('keydown', keyLogEventHandler);

function clearTextField(){
  document.getElementById('keyboardInput').value = '';
}
