function keyLogEventHandler(event){
  // console.log(event);
  console.log(event.code);
  // console.log(keyboardObject);
  console.log(keyboardObject[event.code]);
  // console.log(keyboardObject[event.code].play());
  //keyboardObject[event.code].play();
  /*if (event.code === 'keyS'){
    var code = event.code;
    
  }*/
  try {
    keyboardObject[event.code].play();
  }
  catch(error){
    //alert('Lemon Merangue Pie!');
    console.log('You entered the wrong key');
  }
}
function transitionReset (){
  //debugger;
  //console.log('Hello from transition end');
  var keys = document.getElementById('cKey').className = 'pianoKeys';

}
function changeTheNameOfThisFunction(event) {
  // event.target.classList.remove('pianoKeys');
  var keys = document.getElementById('cKey').className = 'played';
  var transition = document.querySelector('.played');
  transition.addEventListener('transitionend', transitionReset);

}
//keydown event listener
var log = document.getElementById('log');   //--------to be used for history later
input.addEventListener('keydown', keyLogEventHandler);
input.addEventListener('keydown', changeTheNameOfThisFunction);

function clearTextField(){
  document.getElementById('keyboardInput').value = '';
}
