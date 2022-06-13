function Info(){
    const newName = document.getElementById("cityInput");
    const cityName =document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--"
}

fetch("https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=03e4117d4ffcfe106f7d287a2cdf04a1")
.then(Response => Response.json())
.then(data =>{
    for (i=0;i<5;i++){
        document.getElementById("day" +(i+1)+ "Min").innerHTML = "Min:" +Number(data.list[i].main.temp_min -300.24).toFixed(1)+"";
    }
    for (i=0;i<5;i++){
        document.getElementById("day" +(i+1)+ "Mix").innerHTML = "Max:" +Number(data.list[i].main.temp_max -300.24).toFixed(1)+"";
    }
    for (i=0;i<5;i++){
        document.getElementById("img" +(i+1)).src

}