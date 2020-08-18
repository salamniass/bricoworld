$(document).ready(function () {
  $(".owl-one").owlCarousel({
    loop: true,
    items: 4,
    autoplay: true,
    margin: 20,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      300: {
        items: 1.2,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      },
      1200: {
        items: 4,
        nav: false,
        loop: true
      }
    }
  })
})
