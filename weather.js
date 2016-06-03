var weatherRequest = new XMLHttpRequest();
var apikey = "e4633948d7d6fedf3beb638679fd1da7";
var zipCodeBox = document.getElementById("zipcode");
var zip="";
var selectBox = document.getElementById("forecasttype");
var curApi;


function setAPI(){
curApi=currentWeather;
var hourlyForecast=`http://api.openweathermap.org/data/2.5/forecast/city?zip=${zip},us&APPID=${apikey}`;
var currentWeather =`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&APPID=${apikey}`;
var dailyForecast= `http://api.openweathermap.org/data/2.5/forecast/daily?zip=${zip},us&APPID=${apikey}`;
if(selectBox.value==1){
	curApi = currentWeather;
}
if(selectBox.value==2){
	curApi=hourlyForecast;
}
if(selectBox.value==3){
	curApi=dailyForecast;
}


};

zipCodeBox.addEventListener("keyup", function(){
	 zip = zipCodeBox.value;
	 if(curApi===undefined){
	 curApi=`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&APPID=${apikey}`
	};
	 
});
var getDataBtn = document.getElementById("runbtn");
getDataBtn.addEventListener("click",function(){
	if(zip.length <5 || zip.length >5){
		alert("enter a valid zip code");
	}
	else getData();
});

function getData(){
setAPI();

weatherRequest.addEventListener("load", displayWeather);
weatherRequest.addEventListener("error", displayError);
weatherRequest.open("GET", curApi);
weatherRequest.send();
};

function displayError(){
	console.log(event);
};


function displayWeather(){
	var weather = JSON.parse(this.responseText);
	console.log(weather);

};