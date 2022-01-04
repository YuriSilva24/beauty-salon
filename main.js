const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* --- esconder --- */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

const header = document.querySelector('#header')
const navheight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navheight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

/* --- Testimonials slides ---*/

const swiper = new Swiper('.swiper', {
  slidesPerview: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})
