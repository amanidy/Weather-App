const apiKey = config.get('apiKey');
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=germany&units=metric";
    
    
async function search() {
    const element = document.getElementById("search");
    if (element.value === "") {
        return 0;
    }

    try { 
    let  response = await fetch(apiUrl + `&appid=${apiKey}`);
    if (response.ok) {
        let data = await response.json();
        const humidity = document.getElementById("humidity-percentage");
        const wind = document.getElementById("wind-speed");
        const temperature = document.getElementById("weather_temp");
        const location = document.getElementById("weather_location");

        humidity[0].innerHTML = data.main.humidity + "%";
        wind[0].innerHTML = data.wind.speed + "km/h";
        temperature[0].innerHTML = data.main.temp;
        location[0].innerHTML = data.name + "," + data.sys.country;
    } else {
        alert("city not found.")
    }
    } catch (error) {
        console.error("An error occurred:",error)
    }
    console.log(data);
    search();
}
