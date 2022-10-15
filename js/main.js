import Swiper from 'swiper/swiper-bundle';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';

import gsap from 'gsap';

// SWIPER
const swiper = new Swiper('.season--banner .swiper', {
  direction: 'horizontal',
  // autoplay: {
  //   delay: 5000
  // },
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  }
})

