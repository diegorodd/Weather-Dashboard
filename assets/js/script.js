function Info(){
    const newName = document.getElementById("cityInput");
    const cityName =document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--"
}

fetch("https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=03e4117d4ffcfe106f7d287a2cdf04a1")
.then(Response => Response.json())
.then(data =>){
    
}