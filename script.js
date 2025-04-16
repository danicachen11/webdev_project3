function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 51.500857, lng: 0.124598},
        zoom: 15,
    });

    const marker = new google.maps.Marker({
        map,
        position: {lat: 51.5007, lng: 0.1246},
        title: "Big Ben",
    });
}

/*For the slider*/
const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


