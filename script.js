
// console.log(city);

async function request() {
    // console.log(document.getElementById('city').value);
    city = document.getElementById('city').value;
    if (city == "") { city = "udgir" }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2d21866611d9e7a4fa98557e3ab35014&units=metric`;

    if (res = await fetch(url)) {
        let ans = await res.json();
        console.log(ans.weather);

        let name = `${ans.name}`
        let temp = `${ans.main.temp} °C`
        let speed = `${ans.wind.speed} m/s`
        let humidity = `${ans.main.humidity}% `
        let sunrise = `${time(ans.sys.sunrise)} `
        let sunset = `${time(ans.sys.sunset)}`

        function time(x) {
            let unixTimestamp = x;
            let date = new Date(unixTimestamp * 1000);
            let hours = date.getHours().toString().padStart(2, '0');
            let minutes = date.getMinutes().toString().padStart(2, '0');
            let seconds = date.getSeconds().toString().padStart(2, '0');
            let time = `${hours}:${minutes}:${seconds}`;
            return time;
        }
       
            document.getElementById('temp').innerHTML = temp
            document.getElementById('name').innerHTML = name
            document.getElementById('speed').innerHTML = speed
            document.getElementById('humidity').innerHTML = humidity
            document.getElementById('sunrise').innerHTML = sunrise
            document.getElementById('sunset').innerHTML = sunset

    } 

}
request();
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        request();
    }
})
