/* open and close the menu when click on icon hamburguer */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* when click in an iten of menu, hidden the menu*/

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* change the header of page when scroll*/

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScholl() {
  window.addEventListener('scroll', function () {
    if (window.scrollY >= navHeight) {
      header.classList.add('scroll')
    } else {
      header.classList.remove('scroll')
    }
  })
}

/* testimonials slider */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* SCROLLREVEAL: show elements when scroll page*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image , #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links, #contact .li
footer .brand, footer .logo, footer p, footer .social`,
  { interval: 100 }
)

/* ====== button back to top ====== */

function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  window.addEventListener('scroll', function () {
    if (window.scrollY >= 560) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
  })
}

/* menu active according to the section visible on page */

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function () {
  /* when scroll */
  changeHeaderWhenScholl()
  backToTop()
  activateMenuAtCurrentSection()
})
