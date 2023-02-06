var searcheddata = [];
var rootURL = 'https://api.openweathermap.org';
var apiKey = 'df3fb9934a7d8ebae97c6749b588071a';

function search(city){
    fetch(

        `${rootURL}/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    ) .then(function (response){
        return response.json()
    }) .then(function (data){
        console.log(data);
    })
}

$('#search-button').on('click', function(event){
    event.preventDefault()
    var city = $('#search').val().trim()
    search(city)

})
