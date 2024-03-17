document.querySelector('#parent').addEventListener('click', (e) => {
  console.log('Parent clicked');
});

document.querySelector('#child').addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('Child clicked');
});
