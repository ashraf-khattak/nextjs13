// const x = document.getElementById("demo");

console.log("Location file loaded");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    console.log(position);
//    x.innerHTML = "Latitude: " + position.coords.latitude + 
//    "<br>Longitude: " + position.coords.longitude;
}
getLocation();