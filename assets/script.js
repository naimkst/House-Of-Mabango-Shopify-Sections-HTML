const openBtns = document.querySelectorAll('.openBtn');
const closeBtn = document.querySelector('.newsletter-close-btn');
const myElement = document.querySelector('.newsletter-popup-area-section');

openBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    myElement.classList.add('active');
  });
});

closeBtn.addEventListener('click', () => {
  myElement.classList.remove('active');
});

