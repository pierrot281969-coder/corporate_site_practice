const toggle = document.querySelector('.header__toggle');
const nav = document.querySelector('.header__nav-list');

toggle.addEventListener('click', () => {
  nav.classList.toggle('is-open');
  toggle.classList.toggle('is-open');

  const isOpen = nav.classList.contains('is-open');
  toggle.setAttribute('aria-expanded', isOpen);
});
