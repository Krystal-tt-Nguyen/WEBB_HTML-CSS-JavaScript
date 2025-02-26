FetchWeatherInformation()
.then(data => {
    if (data != null) {
        RenderWeatherInformation(data);
    }
    else {
        console.log("Unable to fetch weather information.")
    }
});

async function FetchWeatherInformation()
{
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=57.7072&longitude=11.9668&daily=temperature_2m_min,temperature_2m_max,apparent_temperature_max,apparent_temperature_min,weather_code&timezone=auto&forecast_days=7';            
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }
    catch (error) {
        console.log("Error fetching local weather: ", error);
        return null;
    }
}

function RenderWeatherInformation(data) {
    const forecastContainer = document.getElementById('forecast');
       
    // map()-metoden skapar en ny array genom att anropa en funktion på varje element i den ursprungliga arrayen. 
    // index är inbyggt funktion i JavaScript, hämtar det aktuella elementet i arrayen
    var forecastList = data.daily.time.map((time, index) => {
        return {
            date: time,
            minTemp: data.daily.temperature_2m_min[index],
            maxTemp: data.daily.temperature_2m_max[index],
            minAppTemp: data.daily.apparent_temperature_min[index],
            maxAppTemp: data.daily.apparent_temperature_max[index],
            weatherCode: data.daily.weather_code[index]
        };
    });
    
    forecastList.forEach(item => {
        const forecast = document.createElement('div');
        forecast.className = "mt-5 mb-3";
        forecast.innerHTML = `
                <p>${item.date || "Unknown date"}</p>
                <p ><strong>Min:</strong> ${item.minTemp}°C (${item.minAppTemp}°C)</p>
                <p><strong>Max:</strong> ${item.maxTemp}°C (${item.maxAppTemp}°C)</p>
                <img src="${wmoCodeIcons[item.weatherCode]}" alt="forecast-icon-${wmoCodeText[item.weatherCode]}" width="80" height="80">
                <p>${wmoCodeText[item.weatherCode] || "Unknown weather description"}</p>
                `;
            forecastContainer.appendChild(forecast)
        }
    );
}

const wmoCodeText = {
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

const wmoCodeIcons = {
    0: "https://openweathermap.org/img/wn/01d@2x.png",
    1: "https://openweathermap.org/img/wn/02d@2x.png",
    2: "https://openweathermap.org/img/wn/03d@2x.png",
    3: "https://openweathermap.org/img/wn/04d@2x.png",
    45: "https://openweathermap.org/img/wn/50d@2x.png",
    48: "https://openweathermap.org/img/wn/50d@2x.png",
    51: "https://openweathermap.org/img/wn/09d@2x.png",
    53: "https://openweathermap.org/img/wn/09d@2x.png",
    55: "https://openweathermap.org/img/wn/09d@2x.png",
    56: "https://openweathermap.org/img/wn/13d@2x.png",
    57: "https://openweathermap.org/img/wn/13d@2x.png",
    61: "https://openweathermap.org/img/wn/10d@2x.png",
    63: "https://openweathermap.org/img/wn/10d@2x.png",
    65: "https://openweathermap.org/img/wn/10d@2x.png",
    66: "https://openweathermap.org/img/wn/13d@2x.png",
    67: "https://openweathermap.org/img/wn/13d@2x.png",
    71: "https://openweathermap.org/img/wn/13d@2x.png",
    73: "https://openweathermap.org/img/wn/13d@2x.png",
    75: "https://openweathermap.org/img/wn/13d@2x.png",
    77: "https://openweathermap.org/img/wn/13d@2x.png",
    80: "https://openweathermap.org/img/wn/09d@2x.png",
    81: "https://openweathermap.org/img/wn/09d@2x.png",
    82: "https://openweathermap.org/img/wn/09d@2x.png",
    85: "https://openweathermap.org/img/wn/13d@2x.png",
    86: "https://openweathermap.org/img/wn/13d@2x.png",
    95: "https://openweathermap.org/img/wn/11d@2x.png",
    96: "https://openweathermap.org/img/wn/11d@2x.png",
    99: "https://openweathermap.org/img/wn/11d@2x.png"
};