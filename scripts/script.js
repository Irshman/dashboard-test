const menuBtn = document.querySelector('.section__btn');
const sidebar = document.querySelector('.sidebar');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('section__btn--open');
  sidebar.classList.toggle('sidebar--open');
})