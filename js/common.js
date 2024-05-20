'use strict'

new Swiper('.participant-slider', {
  spaceBetween: 10,
  loop: true,
  breakpoints: {
    1100: {
      slidesPerView: 3
    },
    767: {
      slidesPerView: 2
    },
    320: {
      slidesPerView: 1
    }
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth
  if (width < 1024){
    const slider = new Swiper('.transformation-slder', {
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    })
  }
})

//----aанимация
const animItems = document.querySelectorAll('._anim__items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active')
      } else {
        if(!animItem.classList.contains('_anim_stop')){
          animItem.classList.remove('_active');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset  || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);
}


//-----плавный скролл
function smoothScroll(selector){
  document.querySelector(selector).scrollIntoView({
    behavior: 'smooth'
  });
}
const anchors = document.querySelectorAll('.preview__links a');
anchors.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    let selector = this.hash;
    smoothScroll(selector)
  })
})


//----бегущая строка
let marquee = document.querySelector('.marquee');
let marqueeList = document.querySelector('.marquee__content');
let marqueeListCopy = marqueeList.cloneNode(true);

marquee.append(marqueeListCopy)