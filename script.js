const aboutBtn = document.getElementById('btn-menu-about');
const featuresBtn = document.getElementById('btn-menu-features');
const toursBtn = document.getElementById('btn-menu-tours');
const storiesBtn = document.getElementById('btn-menu-stories');
const bookBtn = document.getElementById('btn-menu-book');
const navBtn = document.getElementById('navigation__button');

function scrollBtn(section) {
  navBtn.click();
  setTimeout(() => document.getElementById(section).scrollIntoView(), 100);
}

aboutBtn.addEventListener('click', () => scrollBtn('section-about'));
featuresBtn.addEventListener('click', () => scrollBtn('section-features'));
toursBtn.addEventListener('click', () => scrollBtn('section-tours'));
storiesBtn.addEventListener('click', () => scrollBtn('section-stories'));
bookBtn.addEventListener('click', () => scrollBtn('section-book'));
