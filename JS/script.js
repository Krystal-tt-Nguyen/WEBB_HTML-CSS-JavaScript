// Fetch Header, Nav or Footer
fetch('/HTML/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    })
    .catch(error => {
        console.error('Unable to load Header: ', error)
});

fetch('/HTML/nav.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data
    })
    .catch(error => {
        console.error('Unable to load Navbar: ', error)
});

fetch('/HTML/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data
    })
    .catch(error => {
        console.error('Unable to load Footer: ', error)
});


FetchWeatherInformation()
.then(data => {
    if (data) {
        RenderWeatherInformation(data);
    }
    else {
        console.log("unable to fetch weather information.")
    }
});

async function FetchWeatherInformation()
{
    var url = 'https://api.open-meteo.com/v1/forecast?latitude=57.7072&longitude=11.9668&daily=temperature_2m_min,temperature_2m_max,apparent_temperature_max,apparent_temperature_min,weather_code&timezone=auto&forecast_days=7';            
    try 
    {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error) 
    {
        console.log("Error fetching local weather: ", error);
    }
}

async function RenderWeatherInformation() {
    const data = await FetchWeatherInformation(); 

    if (data) {
        var weatherContainer = document.getElementById('weather');
       
        const forecastList = data.daily.time.map((time, index) => {
            return {
                time: time,
                minTemp: data.daily.temperature_2m_min[index],
                maxTemp: data.daily.temperature_2m_max[index],
                minAppTemp: data.daily.apparent_temperature_min[index],
                maxAppTemp: data.daily.apparent_temperature_max[index],
                weatherCode: data.daily.weather_code[index]
            };
        });
        
        forecastList.forEach(item => {
            var forecast = document.createElement('div');
            forecast.className = "mt-5 forecast-div";
            forecast.innerHTML = `
                    <p id="forecast-time">${item.time}</p>
                    <p id="forecast-temperatures">
                        <strong>Min:</strong> ${item.minTemp}°C (<span class="app-temp">${item.minAppTemp}°C</span>)
                    </p>
                    <p id="forecast-temperatures">
                        <strong>Max:</strong> ${item.maxTemp}°C (<span class="app-temp">${item.maxAppTemp}°C</span>)
                    </p>
                    <img src="${wmoCodeIcons[item.weatherCode]}" alt="weather-icon-${wmoCodeText[item.weatherCode]}">
                    <p id="forecast-weather">
                        ${wmoCodeText[item.weatherCode] || "Unknown weather description"}
                    </p>`;

                weatherContainer.appendChild(forecast)
            }
        );
    }
}


// JS Associative array --> Dictionary i C#
var wmoCodeText = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog and depositing rime fog",
    48: "Fog and depositing rime fog",
    51: "Drizzle: Light intensity",
    53: "Drizzle: Moderate intensity",
    55: "Drizzle: Dense intensity",
    56: "Freezing Drizzle: Light intensity",
    57: "Freezing Drizzle: Dense intensity",
    61: "Rain: Slight intensity",
    63: "Rain: Moderate intensity",
    65: "Rain: Heavy intensity",
    66: "Freezing Rain: Light intensity",
    67: "Freezing Rain: Heavy intensity",
    71: "Snow fall: Slight intensity",
    73: "Snow fall: Moderate intensity",
    75: "Snow fall: Heavy intensity",
    77: "Snow grains",
    80: "Rain showers: Slight intensity",
    81: "Rain showers: Moderate intensity",
    82: "Rain showers: Violent intensity",
    85: "Snow showers: Slight intensity",
    86: "Snow showers: Heavy intensity",
    95: "Thunderstorm: Slight intensity",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail"
};

var wmoCodeIcons = {
    0: "https://openweathermap.org/img/wn/01d@2x.png", // Clear sky
    1: "https://openweathermap.org/img/wn/02d@2x.png", // Mainly clear
    2: "https://openweathermap.org/img/wn/03d@2x.png", // Partly cloudy
    3: "https://openweathermap.org/img/wn/04d@2x.png", // Overcast
    45: "https://openweathermap.org/img/wn/50d@2x.png", // Fog and depositing rime fog
    48: "https://openweathermap.org/img/wn/50d@2x.png", // Fog and depositing rime fog (same icon)
    51: "https://openweathermap.org/img/wn/09d@2x.png", // Drizzle: Light intensity
    53: "https://openweathermap.org/img/wn/09d@2x.png", // Drizzle: Moderate intensity
    55: "https://openweathermap.org/img/wn/09d@2x.png", // Drizzle: Dense intensity
    56: "https://openweathermap.org/img/wn/13d@2x.png", // Freezing Drizzle: Light intensity
    57: "https://openweathermap.org/img/wn/13d@2x.png", // Freezing Drizzle: Dense intensity
    61: "https://openweathermap.org/img/wn/10d@2x.png", // Rain: Slight intensity
    63: "https://openweathermap.org/img/wn/10d@2x.png", // Rain: Moderate intensity
    65: "https://openweathermap.org/img/wn/10d@2x.png", // Rain: Heavy intensity
    66: "https://openweathermap.org/img/wn/13d@2x.png", // Freezing Rain: Light intensity
    67: "https://openweathermap.org/img/wn/13d@2x.png", // Freezing Rain: Heavy intensity
    71: "https://openweathermap.org/img/wn/13d@2x.png", // Snow fall: Slight intensity
    73: "https://openweathermap.org/img/wn/13d@2x.png", // Snow fall: Moderate intensity
    75: "https://openweathermap.org/img/wn/13d@2x.png", // Snow fall: Heavy intensity
    77: "https://openweathermap.org/img/wn/13d@2x.png", // Snow grains
    80: "https://openweathermap.org/img/wn/09d@2x.png", // Rain showers: Slight intensity
    81: "https://openweathermap.org/img/wn/09d@2x.png", // Rain showers: Moderate intensity
    82: "https://openweathermap.org/img/wn/09d@2x.png", // Rain showers: Violent intensity
    85: "https://openweathermap.org/img/wn/13d@2x.png", // Snow showers: Slight intensity
    86: "https://openweathermap.org/img/wn/13d@2x.png", // Snow showers: Heavy intensity
    95: "https://openweathermap.org/img/wn/11d@2x.png", // Thunderstorm: Slight intensity
    96: "https://openweathermap.org/img/wn/11d@2x.png", // Thunderstorm with slight hail
    99: "https://openweathermap.org/img/wn/11d@2x.png"  // Thunderstorm with heavy hail
};