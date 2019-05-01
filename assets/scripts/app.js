'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $(window).scroll(function () {
    const winTop = $(window).scrollTop()
    if (winTop >= 30) {
      $('body').addClass('sticky-shrinknav-wrapper')
    } else {
      $('body').removeClass('sticky-shrinknav-wrapper')
    }
  })
  $('[data-menu-underline-from-center] a').addClass('underline-from-center')
  // $('.typed').typeIt({
  //   speed: 100,
  //   lifeLike: true,
  //   autoStart: false,
  //   loop: true,
  //   loopDelay: 2
  // })
  //   .tiType('full-stack web-developer')
  //   .tiPause(3000)
  //   .tiDelete()
  //   .tiType('designer')
  //   .tiPause(3000)
  //   .tiDelete()
  //   .tiType('book-lover')
  //   .tiPause(3000)
  //   .tiDelete()
  //   .tiType('educator')
  //   .tiPause(3000)
  //   .tiDelete()
  //   .tiType('Pizza Enthusiast')
  //   .tiPause(3000)
  //   .tiDelete()
})
