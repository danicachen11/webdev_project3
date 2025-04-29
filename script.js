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

  const infoWindow = new google.maps.InfoWindow({
    content: "This is one of London's iconic landmarks!",
  });

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });

}

  var swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
    delay: 5000,
  },
 
  navigation: {
           nextEl: '.swiper-button-next', 
           prevEl: '.swiper-button-prev',  
  },
});


