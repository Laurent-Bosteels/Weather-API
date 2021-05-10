// API URL - 470f22cc8a2f35fbc5b2273fa0d779e6
// Added &units=metric because the temp needs to be converted to °C
//

// Wrote a function so you can search on cityname (in the console)
// Used string interpolation 

function GetForecast (cityName) {

const url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=470f22cc8a2f35fbc5b2273fa0d779e6&units=metric`;

// Fetching the Forecast for one particular city, in this case London
// const url = 'http://api.openweathermap.org/data/2.5/forecast?q={London}&appid=470f22cc8a2f35fbc5b2273fa0d779e6&units=metric';

// Make a request for a user with a given ID
axios.get(url)

  .then(function (response) {
    // handle success
    // console.log(response.data.list[0].main.temp);

    // Showing the temp on the screen
    document.getElementById('target').innerHTML = `It is now ${response.data.list[0].main.temp}°C in ${cityName}`;

  })

  .catch(function (error) {
    // handle error
    console.log(error);
  })

}