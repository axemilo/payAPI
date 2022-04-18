const header_link = document.querySelector('.header__link')
const navbar = document.querySelector('.nav__list')
$(document).ready(function () {
  $('.header__burger').click(function (event) {
    navbar.append(header_link)
    $('.header__burger,.nav, .header__link').toggleClass('active')
  })
})
