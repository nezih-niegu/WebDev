var lat;
var lon;
var result;
const apiKey = "ab973587cd05ee2678797d174baa5ba5";

function getWeather() {
  lat = parseFloat(document.getElementById("lat").value);
  lon = parseFloat(document.getElementById("lon").value);
  var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
  var request = new XMLHttpRequest();
  request.onload = function(resp)
  {
    console.log(resp);
    console.log(resp.target.responseText);
    result = JSON.parse(resp.target.responseText);
    var temp = document.getElementById("result");
    var city = result.name;
    var country = result.sys.country;
    temp.innerHTML = `Current Temperature in ${city}, ${country} is ${((9/5)*(parseFloat(result.main.temp) - 273.15)+32).toFixed(2)}°F`;
}
  request.open("GET", url, true);
  request.send();
}
