//Поиск элементов

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  const navRef = document.querySelector('.site-nav');
  console.log(navRef);

  const navLinkRef = navRef.querySelectorAll('.site-nav__link');
  console.log(navLinkRef)

})


