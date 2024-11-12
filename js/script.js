//Add one valid, error-free JavaScript file with your original code; linked from the head of all four HTML files
//Make sure your JavaScript throws no uncaught errors and is loaded unobtrusively. 
//You can check for errors using the console on your browser inspector


//For trees slider
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


//for the API maps

const CONFIGURATION = {
  "locations": [
  {"title":"Illinois Institute of Technology Academic Campus","address1":"3300 S Federal St","address2":"Chicago, IL 60616, USA","coords":{"lat":41.83446952994897,"lng":-87.62930912209013},"placeId":"ChIJxTColxIsDogR1I20Cuv5mag"}
  ],
  "mapOptions": {"center":{"lat":38.0,"lng":-100.0},"fullscreenControl":true,"mapTypeControl":false,"streetViewControl":false,"zoom":4,"zoomControl":true,"maxZoom":17,"mapId":""},
  "mapsApiKey": "YOUR_API_KEY_HERE",
  "capabilities": {"input":false,"autocomplete":false,"directions":false,"distanceMatrix":false,"details":false,"actions":false}
};

document.addEventListener('DOMContentLoaded', async () => {
  await customElements.whenDefined('gmpx-store-locator');
  const locator = document.querySelector('gmpx-store-locator');
  locator.configureFromQuickBuilder(CONFIGURATION);
});