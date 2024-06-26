window.onload = function() {
    const apiKey = 'bf56484408341784d4cba93d5d445abb';

    async function getWeather(city) {
        return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(weatherData => {
                if (weatherData === null) {
                    throw new Error('Weather data is null');
                }
                return weatherData;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                return 'Weather could not be retrieved.';
            });
    }

    function displayWeather(city) {
        getWeather(city).then(data => {
            if (typeof data === 'string') {
                alert(data);
                return;
            }

            const weatherInfo = document.querySelector('#weather-info');
            weatherInfo.innerHTML = `Temperature: ${data.main.temp}°C<br>Weather: ${data.weather[0].main}<br>Wind Speed: ${data.wind.speed} m/s<br><br>`;

            const weather = {
                rain: data.weather[0].main === 'Rain',
                snow: data.weather[0].main === 'Snow',
                temperature: data.main.temp,
                windSpeed: data.wind.speed
            };

            truckController.updateWeather(weather);
        });
    }

    const citySelect = document.querySelector('#city-select');
    citySelect.addEventListener('change', () => {
        displayWeather(citySelect.value);
    });

    const loadhallView = new LoadHallView();
    const loadhallManager = new LoadHallManager();
    const loadhallController = new LoadHallController(loadhallView, loadhallManager);
    loadhallManager.setController(loadhallController);

    // Create two LoadHalls
    const loadhall1 = new LoadHall();
    const loadhall2 = new LoadHall();

    // Add the LoadHalls to the LoadHallManager
    loadhallManager.addLoadhall(loadhall1);
    loadhallManager.addLoadhall(loadhall2);

    // Initialize LoadHalls
    loadhallController.initializeLoadhalls();

    const truckFormView = new TruckFormView();
    const truckController = new TruckController(truckFormView, loadhallManager);
    truckFormView.setController(truckController);

    truckController.bindListeners();

    const shapeView = new ShapeView();
    const shapeFactory = new ShapeFactory();
    const shapeController = new ShapeController(shapeView, shapeFactory, loadhallManager);

    const assemblyLineView = new AssemblyLineView();
    const assemblyLineController = new AssemblyLineController(assemblyLineView, loadhallManager, shapeFactory);
    assemblyLineController.bindListeners();

    const switchLoadhallButton = document.querySelector('#switch-loadhall-button');
    switchLoadhallButton.addEventListener('click', function() {
        loadhallController.switchLoadhall();
    });

    loadhallController.setAssemblyLineController(assemblyLineController);
}