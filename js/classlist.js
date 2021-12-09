// Как добавить стили.
// const btnEl = document.querySelector('.js-btn')
// const siteNavEl = document.querySelector('.site-nav');
//  siteNavEl.classList.add('new-class');
//   siteNavEl.classList.remove('site-nav')

// siteNavEl.classList.replace('new-class', 'qwerty')
  
// console.log(siteNavEl.classList.contains('qwerty'))


const currentLink = "/contacts";


const linkEl = document.querySelector(`.site-nav__link[href="${currentLink}"]`,);
linkEl.classList.add('link--current-color')
console.log(linkEl)
