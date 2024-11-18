//Add one valid, error-free JavaScript file with your original code; linked from the head of all four HTML files
//Make sure your JavaScript throws no uncaught errors and is loaded unobtrusively. 
//You can check for errors using the console on your browser inspector

//for the API maps
// Initialize and add the map
if (document.body.classList.contains('map-page')) {
  
  function init() {
    async function initMap() {

      // The location
      const position = {lat: 41.8367, lng: -87.6260};
      // Request needed libraries.
      //@ts-ignore
      const { Map } = await google.maps.importLibrary("maps");
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
      // The map
      map = new Map(document.getElementById("map"), {
        scaleControl: true,
        zoom: 15,
        center: position,
        mapId: "befb6f94c2eb29a2",
      });
      // The marker
      const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Illinois Institute of Technology",
      });
      
      //test
      
    }
    initMap();
  }
  window.addEventListener("load", init);
}



//For trees slider
if (document.body.classList.contains('trees-page')) {
  let slideIndex = 1;
  showSlides(slideIndex);
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
  }
}

