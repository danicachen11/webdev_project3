function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 41.836449, lng: -87.626691},
        zoom: 15,
    });

    const marker = new google.maps.Marker({
        map,
        position: {lat: 41.838615380326466, lng: -87.63213314132148},
        title: "Ferro's",
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


