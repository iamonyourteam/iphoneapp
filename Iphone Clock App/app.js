////Curent time////

let d = new Date();
d.getHours();
d.getMinutes();

let mn = 0
let hr = 0

if (d.getHours() > 12) { hr = d.getHours() - 12 } else if (d.getHours() === 0) { hr = d.getHours() + 12 } else { hr = d.getHours() }


if (d.getMinutes() < 10) {
    mn = `0${d.getMinutes()}`
}
else { mn = d.getMinutes() }


let currentTime = `${hr}:${mn}`


document.getElementById("time").innerHTML = currentTime




function worldclocknav() {
    document.getElementById("worldclockpage").style.display = "inherit"
    document.getElementById("worldclockicon").style.fill = "rgb(255, 161, 19)"
    document.getElementById("worldclocktext").style.color = "rgb(255, 161, 19)"

    document.getElementById("alarmpage").style.display = "none"
    document.getElementById("alarmicon").style.fill = "rgb(179, 179, 179)"
    document.getElementById("alarmtext").style.color = "rgb(179, 179, 179)"

    document.getElementById("stopwatchpage").style.display = "none"
    document.getElementById("stopwatchicon").style.fill = "rgb(179, 179, 179)"
    document.getElementById("stopwatchtext").style.color = "rgb(179, 179, 179)"

    document.getElementById("timerpage").style.display = "none"
    document.getElementById("timericon").style.fill = "rgb(179, 179, 179)"
    document.getElementById("timertext").style.color = "rgb(179, 179, 179)"


}

function alarmnav() {
    document.getElementById("worldclockpage").style.display = "none"
    document.getElementById("worldclockicon").style.fill = "rgb(179, 179, 179)"
    document.getElementById("worldclocktext").style.color = "rgb(179, 179, 179)"

    document.getElementById("alarmpage").style.display = "inherit"
    document.getElementById("alarmicon").style.fill = "rgb(255, 161, 19)"
    document.getElementById("alarmtext").style.color = "rgb(255, 161, 19)"

    document.getElementById("stopwatchpage").style.display = "none"
    document.getElementById("stopwatchicon").style.fill = "rgb(179, 179, 179)"
    document.getElementById("stopwatchtext").style.color = "rgb(179, 179, 179)"

    document.getElementById("timerpage").style.display = "none"
    document.getElementById("timericon").style.fill = "rgb(179, 179, 179)"
    document.getElementById("timertext").style.color = "rgb(179, 179, 179)"

}
function stopwatchnav() {
    document.getElementById("worldclockpage").style.display = "none"
    document.getElementById("worldclockicon").style.fill = "rgb(179, 179, 179)"
    document.getElementById("worldclocktext").style.color = "rgb(179, 179, 179)"

    document.getElementById("alarmpage").style.display = "none"
    document.getElementById("alarmicon").style.fill = "rgb(179, 179, 179)"
    document.getElementById("alarmtext").style.color = "rgb(179, 179, 179)"

    document.getElementById("stopwatchpage").style.display = "inherit"
    document.getElementById("stopwatchicon").style.fill = "rgb(255, 161, 19)"
    document.getElementById("stopwatchtext").style.color = "rgb(255, 161, 19)"

    document.getElementById("timerpage").style.display = "none"
    document.getElementById("timericon").style.fill = "rgb(179, 179, 179)"
    document.getElementById("timertext").style.color = "rgb(179, 179, 179)"


}
function timernav() {
    document.getElementById("worldclockpage").style.display = "none"
    document.getElementById("worldclockicon").style.fill = "rgb(179, 179, 179)"
    document.getElementById("worldclocktext").style.color = "rgb(179, 179, 179)"

    document.getElementById("alarmpage").style.display = "none"
    document.getElementById("alarmicon").style.fill = "rgb(179, 179, 179)"
    document.getElementById("alarmtext").style.color = "rgb(179, 179, 179)"

    document.getElementById("stopwatchpage").style.display = "none"
    document.getElementById("stopwatchicon").style.fill = "rgb(179, 179, 179)"
    document.getElementById("stopwatchtext").style.color = "rgb(179, 179, 179)"

    document.getElementById("timerpage").style.display = "inherit"
    document.getElementById("timericon").style.fill = "rgb(255, 161, 19)"
    document.getElementById("timertext").style.color = "rgb(255, 161, 19)"


}


