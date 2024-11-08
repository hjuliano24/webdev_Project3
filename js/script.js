//Add one valid, error-free JavaScript file with your original code; linked from the head of all four HTML files
//Make sure your JavaScript throws no uncaught errors and is loaded unobtrusively. 
//You can check for errors using the console on your browser inspector
//For the final turn-in, add a JavaScript picture slider to one of your pages.

//this is from lab 9
function init(){
//add your javascrip between these two lines of code
  document.getElementById("entrybutton").addEventListener("click", function() {
  var entry = document.getElementById("entryinput");
  document.getElementById("textoutput").innerHTML = entry.value;
  alert("Hailie Jade Juliano: " + entry.value);
}, false);
  
}

window.addEventListener('load', init);
