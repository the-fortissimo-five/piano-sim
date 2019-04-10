function handleClick(event) {
  event.preventDefault();
  // console.log(event);
  console.log(event.target.className);
  if(event.target.className === 'sheetMusic'){
    console.log('Hi');
  }

}
container.addEventListener('click', handleClick);
