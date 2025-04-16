<script>
  // Make the slider (no autoplay at first)
  var swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // When Slide 1 is clicked, start autoplay
  document.getElementById('slide-1').onclick = function () {
    swiper.params.autoplay = {
      delay: 5000,
      disableOnInteraction: false,
    };
    swiper.autoplay.start();
  };
</script>

/*For the slider*/
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});




