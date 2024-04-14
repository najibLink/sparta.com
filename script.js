let searchForm = document.querySelector('.search-form');
var closeBtn = document.querySelector('.fa-bars');
var newBtn = document.querySelector('.fa-bars');

document.querySelector('#search').onclick = () => {
    closeBtn.classList = 'fa-solid fa-bars';
    searchForm.classList.toggle('active')
    userGraduate.classList.remove('active');
    navbarNav.classList.remove('active');
}

let userGraduate = document.querySelector('.user-graduate');

document.querySelector('#user-graduate').onclick = () => {
  closeBtn.classList = 'fa-solid fa-bars';
    userGraduate.classList.toggle('active')
    searchForm.classList.remove('active');
    navbarNav.classList.remove('active');
}

let navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
    closeBtn.classList.toggle('fa-bars');
    newBtn.classList.toggle('fa-xmark');
    navbarNav.classList.toggle('active');
    searchForm.classList.remove('active');
    userGraduate.classList.remove('active');
}

window.onscroll = ()=>{
  closeBtn.classList = 'fa-solid fa-bars';
    searchForm.classList.remove('active');
    userGraduate.classList.remove('active');
    navbarNav.classList.remove('active');
}

var swiper = new Swiper(".product-slider1", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction: false,
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

var swiper = new Swiper(".product-slider2", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:6500,
        disableOnInteraction: false,
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:5500,
        disableOnInteraction: false,
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });