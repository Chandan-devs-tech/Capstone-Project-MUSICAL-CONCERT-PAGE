// About page mobile menu

const ham2 = document.querySelector('.hamBtn2');
const closeBtn2 = document.querySelector('.closeBtn2');
const mobMenu2 = document.querySelector('.mob-menu2');
const sponsorSection = document.getElementById('sponser');

ham2.addEventListener('click', () => {
  mobMenu2.style.display = 'flex';
  sponsorSection.style.filter = 'blur(300px)';
});

closeBtn2.addEventListener('click', () => {
  mobMenu2.style.display = 'none';
  sponsorSection.style.filter = 'blur(0px)';
});

mobMenu2.addEventListener('click', () => {
  mobMenu2.style.display = 'none';
  sponsorSection.style.filter = 'blur(0px)';
});