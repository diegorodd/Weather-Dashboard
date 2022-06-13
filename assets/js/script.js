function Info() { // new name is for the user to put whichever city they want
    const newName = document.getElementById("cityInput");
    const cityName = document.getElementById("cityName");
    cityName.innerHTML = "--" + newName.value + "--"

    // make the fetch get any city its searched for
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+newName.value+"&appid=03e4117d4ffcfe106f7d287a2cdf04a1").then(Response => Response.json()).then(data => {
        console.log(data);
        for (i = 0; i < 5; i ++) {
            document.getElementById("day" + (
                i + 1
            ) + "Min").innerHTML = "Min:" + Number(data.list[i].main.temp_min - 300.24).toFixed(1) + "";
        }
        for (i = 0; i < 5; i ++) {
            document.getElementById("day" + (
                i + 1
            ) + "Mix").innerHTML = "Max:" + Number(data.list[i].main.temp_max - 300.24).toFixed(1) + "";
        }
        for (i = 0; i < 5; i ++) {
            document.getElementById("img" + (
                i + 1
            )).src = " http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + "png"
        }
    }).catch(error => alert("something went wrong"))
}

const d = new Date();
const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday"];

function CheckDay(day) {
    if (day + d.getDay() > 6) {
        return day + d.getDay() - 7;
    } else {
        return day + d.getDay();
    }
}
for (i = 0; i < 5; i ++) {
    document.getElementById("day" + (
        i + 1
    )).innerHTML = weekday[Checkday(i)];
}