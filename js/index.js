function handleClick(event) {
  event.preventDefault();
  console.log(event);
  if(event.target.className === 'indexPageMusicSheet'){
    console.log('Hi');
  }

}
container.addEventListener('click', handleClick);
