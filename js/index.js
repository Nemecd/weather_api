let weather = {
    "apikey": "c5ef7a1568d930dae67962de3efb300e",
    fetchWeather: function (city) {
        mode: "no cors";
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid=" + this.apikey
        )
        .then((res) => res.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function (data){
        const  { name } = data
        const { icon ,description} = data.weather[0]
        const {temp, humidity } = data.main
        const { speed } = data.wind
        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector('.city').innerText = 'Weather in ' + name
        document.querySelector('.icon').src = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"
        document.querySelector('.describe').innerText = description
        document.querySelector('.temp').innerText = temp + '°C'
        document.querySelector('.humdity').innerText = 'humidity : ' + humidity + '%'
        document.querySelector('.wind').innerText = 'Windspeed:'+ speed + 'km/h'
    },
    search: function(){
        this.fetchWeather(document.querySelector('#bar').value)
    }
}
document.querySelector('.search button').addEventListener('click', function (){
    weather.search()
})
