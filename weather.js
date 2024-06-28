function getWeather() {
    const locationInput = document.getElementById('locationInput');
    const location = locationInput.value.trim();
  
    if (location !== '') {
      const apiKey = '51110f58330aeec10c5be19f06f29147'; // Replace with your OpenWeatherMap API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Description: ${data.weather.description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
          `;
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = '<p>Error: Unable to fetch weather data.</p>';
        });
    }
  }
  