
// console.log(city);

async function request() {
    // console.log(document.getElementById('city').value);
    city = document.getElementById('city').value;
    if (city == "") { city = "udgir" }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2d21866611d9e7a4fa98557e3ab35014&units=metric`;

    if (res = await fetch(url)) {
        let ans = await res.json();
        console.log(ans);
        console.log(ans.weather);

        let name = `<h2>${ans.name}</h2>`
        let temp = `<p style="font-size:30px">${ans.main.temp} °C</p>`
        let desc = `<p>Weather: ${ans.weather[0].description}</p>`

        let humidaty = ` <img class="wind" style="margin-left: 50px" src="/src/humidity.png" alt=""><div style="line-height: 2px"> <p style="font-size:22px"> ${ans.main.humidity}%</p><p>humidity</p></div> `
        let speed = ` <img class="wind" src="/src/wind.png" alt=""> <div style="line-height: 2px"><p style="font-size:22px"> ${ans.wind.speed} m/s</p><p>wind speed</p></div>`
        let div = `<div class="center space">${speed} ${humidaty}</div>`


        function time(x){
        let unixTimestamp = x;
        let date = new Date(unixTimestamp * 1000); 
        let hours = date.getHours().toString().padStart(2, '0'); 
        let minutes = date.getMinutes().toString().padStart(2, '0'); 
        let seconds = date.getSeconds().toString().padStart(2, '0'); 
        let time = `${hours}:${minutes}:${seconds}`;
        return time;
        }

        let sunrise = ` <img class="wind" src="/src/sunrise.png" alt=""><div style="line-height: 2px"> <p style="font-size:18px"> ${time(ans.sys.sunrise)}</p><p style="font-size:14px">sunrise</p></div> `
        let sunset = ` <img class="wind" style="margin-left: 65px" src="/src/sunset.png" alt=""> <div style="line-height: 2px"><p style="font-size:18px"> ${time(ans.sys.sunset)} </p><p style="font-size:14px">sunset</p></div>`
        let sun = `<div class="center space">${sunrise} ${sunset}</div>`


        document.getElementById('weather-info1').innerHTML = temp + name + div + sun;
        // document.getElementById('weather-info2').innerHTML = name + temp + desc + humidaty + speed;

    } else {
        // let p = document.createElement("p");
    }
    
}
request();
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' ){
        request();
    }
})
