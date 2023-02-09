var searcheddata = [];
var rootURL = 'https://api.openweathermap.org';
var apiKey = '25398e04490cafc49d1aa70a6c6ee328';

function search(city){
    fetch(

        `${rootURL}/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    ) .then(function (response){
        return response.json()
    }) .then(function (data){
        console.log(data);
        var icon = data.weather[0].icon
        var iconURL = `https://openweathermap.org/img/w/${icon}.png`
        var searchedCity = $(`
        <h2>${data.name} <img src='${iconURL}' alt = '${data.weather[0].description}'/></h2>
        <p>temperature ${data.main.temp}</p>
        <p>humidity ${data.main.humidity}</p>
        <p>wind-speed ${data.wind.speed}</p>
        
        `)
        $('.forecast').append(searchedCity) 
        // set a var for latitude/longitude
    })
}

$('#search-button').on('click', function(event){
    event.preventDefault()
    var city = $('#search').val().trim()
    search(city)

})
