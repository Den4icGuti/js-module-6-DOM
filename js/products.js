//Схема создания простой странницы
const product = {
  name: 'Цифровой эфирный тюнер Satcom T505 HEVC',
  img: '/img/t2.jpg',
  discription: 'ифровой эфирный приемник с пультом дистанционного управления, компактным пластиковым корпусом и возможностью подключения внешнего ИК приемника.',
  price: 350
  
};



const article = document.createElement('article');
article.classList.add('product');


const titleEl = document.createElement('h2');

titleEl.classList.add('product__name');
titleEl.textContent = product.name;
console.log(titleEl)
const imgEl = document.createElement('img');
imgEl.classList.add('product__img');
imgEl.alt = 'Satcom T505'
imgEl.src = product.img;
console.log(imgEl.src)

const descrEl = document.createElement('p');
descrEl.classList.add('product__descr');
descrEl.textContent = product.discription;

console.log(descrEl)


