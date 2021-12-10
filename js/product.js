//Схема создания простой странницы
import products from './data/products.js'



const makeProductCard = ({name,model,color,img,price}) => { 
  const article = document.createElement('article');
  
  article.classList.add('product','article');
  
  const titleEl = document.createElement('h2');
  

  titleEl.classList.add('product__name');
  titleEl.textContent = name;

  const imgEl = document.createElement('img');
  imgEl.classList.add('product__img');
  
  imgEl.src = img;
  imgEl.width = 220
  
  const modeEl = document.createElement('p');
  modeEl.classList.add('product__nodel');
  modeEl.textContent = `Модель ${model}`;

  const productColorEl = document.createElement('p');

  productColorEl.classList.add('product__color');

  productColorEl.textContent = `Цвет: ${color}`;

  const productPrice = document.createElement('p');
  productPrice.classList.add('product__price');
  productPrice.textContent = `Цена: ${price} грн`;

  article.append(titleEl, imgEl, modeEl, productColorEl, productPrice);
  
  return article;
}

const elements = products.map(makeProductCard);

console.log(elements)

const cardProductsRef = document.querySelector('.card-product');

cardProductsRef.append(...elements)