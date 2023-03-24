// About page mobile menu

const ham2=document.querySelector(".hamBtn2");
const closeBtn2=document.querySelector(".closeBtn2");
const mobMenu2=document.querySelector(".mob-menu2");


ham2.addEventListener('click',()=>{
    mobMenu2.style.display="flex";
});

closeBtn2.addEventListener('click',()=>{
    mobMenu2.style.display="none";
});

mobMenu2.addEventListener('click',()=>{
    mobMenu2.style.display="none";
});