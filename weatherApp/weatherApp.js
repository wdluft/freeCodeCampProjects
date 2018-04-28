//VARIABLES
var userLatitude, userLongitude, apiURL, weatherJSON, temperature, city, weatherDescription;
var api = "https://fcc-weather-api.glitch.me/api/current?"
var temperatureUnit = "Celsius";

//GET USER'S CURRENT LOCATION
navigator.geolocation.getCurrentPosition(success, error);

//FUNCTION TO ACCESS API AND GET JSON
function currentWeather(apiCall){
	$.getJSON(apiCall, function(json){
		weatherJSON = json;
		temperature = weatherJSON.main.temp;
		city = weatherJSON.name;
		weatherDescription = weatherJSON.weather[0].main;
		$("#temperature").html(temperature + " " + String.fromCharCode(176) + " ");
		$("#temperatureUnit").html(temperatureUnit);
		$("#currentDescription").html(weatherJSON.weather[0].main);
		$("#currentLocation").html(city);
		for(var i = 0; i < weatherBackgrounds.length; i++){
			if(weatherDescription === weatherBackgrounds[i].typeOfWeather){
				$("body").css({
					"background": "url(" + weatherBackgrounds[i].url + ")",
					"-webkit-background-size": "cover",
					"-moz-background-size": "cover",
					"-o-background-size": "cover",
					"background-size": "cover"
					});
				$("#imageBy").text("Background image by " + weatherBackgrounds[i].photographer);
			};
		};
	});
}

//SUCCESS AND ERROR FUNCTIONS FOR GETTING USER'S LOCATION
function success(pos) {
	userLatitude = pos.coords.latitude;
	userLongitude = pos.coords.longitude;
	apiURL = api + "lat=" + userLatitude + "&lon=" + userLongitude;

	currentWeather(apiURL);
};
function error(err) {
	console.warn(`ERROR(${err.code}): ${err.message}`);
	console.log("Geolocation not supported");
};

//CONVERT TEMPERATURE TO FAHRENHEIT OR CELSIUS
$("#changeTemperature").on("click", function(){
	var currentTemperatureUnit = $("#temperatureUnit").text();
	var newTemperatureUnit;
	if(currentTemperatureUnit === "Celsius"){
		newTemperatureUnit = "Fahrenheit";
	} else {
		newTemperatureUnit = "Celsius";
	}
	$("#temperatureUnit").text(newTemperatureUnit);
	if(newTemperatureUnit === "Fahrenheit"){
		var temperatureInFahrenheit = Math.round(parseInt($("#temperature").text()) * 9 / 5 + 32);
		$("#temperature").text(temperatureInFahrenheit + " " + String.fromCharCode(176) + " ");
	} else{
		$("#temperature").text(temperature + " " + String.fromCharCode(176) + " ")
	}
});


var weatherBackgrounds = [
	{
		url: "https://images.unsplash.com/photo-1500320821405-8fc1732209ca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=60dabe438f1984eec277736ff1004ac8&auto=format&fit=crop&w=1050&q=80",
		photographer: "Marko Blažević",
		typeOfWeather: "Clear"
	},
	{
		url: "https://images.unsplash.com/photo-1495933925743-bb94d1d4ea4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a2bf1f8d1d4095908f23289cd68d406f&auto=format&fit=crop&w=1050&q=80",
		photographer: "Cody Schroeder",
		typeOfWeather: "Clouds"
	},
	{
		url: "https://images.unsplash.com/photo-1438449805896-28a666819a20?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=950c1c30e781da5fa29e7db2f185c360&auto=format&fit=crop&w=1050&q=80",
		photographer: "Inge Maria",
		typeOfWeather: "Drizzle"
	},
	{
		url: "https://images.unsplash.com/photo-1438449805896-28a666819a20?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=950c1c30e781da5fa29e7db2f185c360&auto=format&fit=crop&w=1050&q=80",
		photographer: "Inge Maria",
		typeOfWeather: "Rain"
	},
	{
		url: "https://images.unsplash.com/photo-1457528877294-b48235bdaa68?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=23776c88850b790975e42c214f781376&auto=format&fit=crop&w=1050&q=80",
		photographer: "Jeremy Bishop",
		typeOfWeather: "Thunderstorm"
	},
	{
		url: "https://images.unsplash.com/photo-1484603738253-e5b73679e8cb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3d626d1bc5fda2b5ccc0c72a89d9c120&auto=format&fit=crop&w=1100&q=80",
		photographer: "Michael Hacker",
		typeOfWeather: "Snow"
	},
	{
		url: "https://images.unsplash.com/photo-1508491792520-2cdee706579d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0cf5cbd9549e75a4359794a453f9a72d&auto=format&fit=crop&w=1050&q=80",
		photographer: "Annie Spratt",
		typeOfWeather: "Atmosphere"
	}
];