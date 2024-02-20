const apikey = "7a4072db2bcb66998d2a24d3435a10d6"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

const weatherIcon = document.querySelector(".wether-icon")

async function getWeather(city) {
    const renspont = await fetch(apiURL + city + `&appid=${apikey}`);
   
    if(renspont.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }
   
    var data =  await renspont.json();

   

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp)  + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./images/clouds.png"

    }  else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./images/clear.png"

    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./images/rain.png"

    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./images/drizzle.png"

    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./images/mist.png"
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "./images/snow.png"
    }


    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";


}

searchBtn.addEventListener("click", () => {
    getWeather(searchBox.value);
})

