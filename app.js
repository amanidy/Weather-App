const apiKey = "";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

 const searchBox = document.querySelector(".input-bar input");
 const searchBtn = document.querySelector(".input-bar button");
async function search(weather_location) {
    const response = await fetch(apiUrl + weather_location + `&appid=${apiKey}`);
    var data = await response.json()


    console.log(data);
    document.querySelector(".humidity-percentage").innerHTML = data.main.humidity;
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".weather_temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".weather_location").innerHTML = data.name;


     
}
searchBtn.addEventListener('click', () => {
          const location = searchBox.value;
          search(location); // Call the search function with the user's input
      }); 
