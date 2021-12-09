//Свойства обьекта (свойства узла). html - элементы.

const btnRef = document.querySelector('.btn');
const imgEl = document.querySelector('.img');
 
btnRef.addEventListener('click', () => {
  const imgEl = document.querySelector('.img');

  console.log(imgEl.src)
  console.log(imgEl)

  imgEl.src = '/img/DSC00791.JPG';
  imgEl.alt = 'Winston';
})

const titleEl = document.querySelector('.title');
titleEl.textContent = 'Hello';

const buttonsRef = document.querySelectorAll('.js-buttons button');




console.log(buttonsRef[1].dataset.action)