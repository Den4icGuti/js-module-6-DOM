// .document.createElement() . Создание элементов.
const ulRef = document.querySelector('.site-nav')
const titleEl = document.createElement('h2');
titleEl.classList.add('title');
titleEl.textContent = 'TITLE'
console.log(titleEl)

const imgEl = document.createElement('img');

imgEl.src = '/img/DSC01980.JPG';
imgEl.alt = 'Адуванчик';
imgEl.width = 200;
imgEl.height = 200;

console.log(imgEl)

// document.body.appendChild(imgEl)

const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

const navLinkEl = document.createElement('a');

navLinkEl.classList.add('site-nav__link');
navLinkEl.href = '/service'
navLinkEl.textContent = 'Service'
navItemEl.append(navLinkEl)
console.log(navItemEl);
ulRef.append(titleEl,imgEl)
ulRef.insertBefore(navItemEl, ulRef.childNodes[2])





