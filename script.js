const toggle = document.querySelector('.header__toggle');
const nav = document.querySelector('.header__nav-list');

toggle.addEventListener('click', () => {
  nav.classList.toggle('is-open');
  toggle.classList.toggle('is-open');

  const isOpen = nav.classList.contains('is-open');
  toggle.setAttribute('aria-expanded', isOpen);
});

const targets = document.querySelectorAll('h2,p,li,dt,dd,img');

targets.forEach(el=>{
    el.classList.add('fade-in');
    console.log(el.classList);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
},{
    threshold:0.1
});

targets.forEach(el=> observer.observe(el) );