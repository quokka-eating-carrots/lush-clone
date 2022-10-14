import Swiper from 'swiper/swiper-bundle';
import 'swiper/swiper.min.css';

import gsap from 'gsap';

// SWIPER
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  autoplay: {
    delay: 5000
  },
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  centeredSlides: true,
})

