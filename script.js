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

  const palaceMarker = new google.maps.Marker({
    map,
    position: { lat: 51.4995, lng: 0.1248 }, // Coordinates for Palace of Westminster
    title: "Palace of Westminster",
    icon: {
    url: "media/bigBenMarker.png",  // Your custom icon path
    scaledSize: new google.maps.Size(50, 50), // Custom size for the icon
    },
  });

  const palaceInfoWindow = new google.maps.InfoWindow({
    content: "Contrary to what most think, Big Ben is not the name of the actual place, but rather a nickname for the large bell inside the clock tower at the Palace of Westminster.",
  });

  palaceMarker.addListener("click", () => {
    palaceInfoWindow.open(map, palaceMarker);
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

