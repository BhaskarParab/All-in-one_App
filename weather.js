const celcius = document.getElementById('celsius')
const input = document.getElementById('input')
const error = document.getElementById('error')

function fetchData(){

    fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${APIkey}&q=${input.value}&units=metric`)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        if(data.cod != 200){
            error.innerHTML = `Enter valid place`;
            celcius.innerHTML = '';
        return;
        }
        error.innerHTML = '';
        console.log(data)
        const current = data.list[0]
        const weather = data.list[0].weather[0]
        celcius.innerHTML = `<h1>${data.city.name}</h1>
        <h1>${current.main.temp}°C</h1>
        <h1>${weather.description}</h1>`

    })
    .catch((err) => { 
        console.log(err)
    })
}

input.addEventListener('keydown',(e) =>{
    if(e.key === 'Enter'){
        fetchData()
        input.value = ''
    }
})

