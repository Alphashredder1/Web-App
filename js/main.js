
// Default location (area code or city, state – in quotes)
var lc = "Providence, RI";


// Really Simple Weather Plug-In Details

reallySimpleWeather.weather({
  wunderkey: '', // leave blank for Yahoo API
  location: lc, //your location here, also works in lat/lon
  woeid: '', // "Where on Earth ID" optional alternative to location
  unit: 'f', // 'c' also works
  success: function(weather) {
    // sample data to display city and temperature
 	html = '<main>';
  html += '<section class="top">';
  html += '<header>';
  html += '<img src="img/logo-stack.svg">';
  html += '<i class="fa fa-search" aria-hidden="true"></i>';
  html += '</header>';
  html += '<h1 class="wdata-01">'+weather.city+'</h1>';
  html += '<h1 class="wdata-02">'+weather.region+'</h1>';
  html += '<h2 class="wdata-03">'+weather.forecast[0].date+'</h2>';
  html += '</section>';
  html += '</main>'
  html += '<section class="middle">';
  html += '<h2 class="wdata-04">'+weather.temp+'&deg;</h2>';
  html += '<div class="wdata-05">';
  html += '<h3 class="high">'+weather.high+'</h3>';
  html += '<h3 class="low">'+weather.low+'</h3>';
  html += '</div>';
  html += '<div class="wdata-06">';
  html += '<h2>'+weather.currently+'</h2>';
  html += '</div>';
  html += '<i class="icon icon-'+weather.code+'"></i>';
  html += '</section>';
  html += '<section class="bottom">';
  html += '<ul class="sun">';
  html += '<li>';
  html += '<h2 class="wdata-07">'+weather.sunrise+'</h2>';
  html += '</li>';
  html += '<li>';
  html += '<h2 class="wdata-08">'+weather.sunset+'</h2>';
  html += '</li>';
  html += '<li>';
  html += '<h2 class="sunrise">Sunrise</h2>';
  html += '</li>';
  html += '<li>';
  html += '<h2 class="sunset">Sunset</h2>';
  html += '</li>';
  html += '</ul>';
  html += '<ul class="wind">';
  html += '<li>';
  html += '<h2 class="wdata-09">'+weather.wind.speed+''+weather.units.distance+'</h2>';
  html += '</li>';
  html += '<li>';
  html += '<h2 class="wind-s">Wind Speed</h2>';
  html += '</li>';
  html += '<li>';
  html += '<h2 class="wdata-10">'+weather.wind.direction+'</h2>';
  html += '</li>';
  html += '<li>';
  html += '<h2 class="wind-d">Wind Direction</h2>';
  html += '</li>';
  html += '</ul>';
  html += '</section>';
  html += '<section class="forcast">';
  html += '<div class="col">';
  html += '<h3 class="wdata-11">Tomorrow:'+weather.forecast[1].day+'</h3>';
  html += '<p>'+weather.forecast[1].high+'&deg;</p>';
  html += '<div>';
  html += '</section>';
    	  document.getElementById('weather').innerHTML = html;
  },
  error: function(error) {
	  document.getElementById('weather').innerHTML = '<p>'+error+'</p>';
  }
});
