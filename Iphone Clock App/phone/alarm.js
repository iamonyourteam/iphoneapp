let newTime = 0
let newRepeat = "Never"
let newLabel = "Alarm"
let newSound = "Radar"
let newSnooze = True


function alarmAddPage() {
    document.querySelector("#selAlarmPage").style.top = '5vh'
    console.log("Hello ")
}

function alarmPageCancel() {
    document.querySelector("#selAlarmPage").style.top = '100vh'
}
function alarmPageSave() {
    // add content of add alarm page to array of alarms 
}


function alarmToggle(n) {

    console.log(document.querySelector(`#toggle${n}`).parentElement.className = "alarmToggleOff")


    if (document.querySelector(`#toggle${n}`).className === "alarmToggleBallOn") {
        document.querySelector(`#toggle${n}`).className = "alarmToggleBallOff"
        document.querySelector(`#toggle${n}`).parentElement.className = "alarmToggleOff"
    }

    else {
        document.querySelector(`#toggle${n}`).className = "alarmToggleBallOn"
        document.querySelector(`#toggle${n}`).parentElement.className = "alarmToggleOn"
    }
}

let alarmconfig = [{ alarmNumTime: "19:00", alarmAmPm: "PM", alarmTimerbottom: "Timer1" }, { alarmNumTime: "18:00", alarmAmPm: "PM", alarmTimerbottom: "Timer1" }, { alarmNumTime: "8:40", alarmAmPm: "AM", alarmTimerbottom: "Bedtime" }, { alarmNumTime: "8:30", alarmAmPm: "AM", alarmTimerbottom: "C" }]
alarmconfig = alarmconfig.sort((a, b) => (parseInt(a.alarmNumTime.split(":").join("")) > parseInt(b.alarmNumTime.split(":").join(""))) ? 1 : -1)
console.table(alarmconfig)

for (let i = 0; i < alarmconfig.length; i++) {
    document.querySelector(`#alarm${i}`).childNodes[1].childNodes[1].childNodes[1].innerText = alarmconfig[i].alarmNumTime
    document.querySelector(`#alarm${i}`).childNodes[1].childNodes[1].childNodes[3].innerText = alarmconfig[i].alarmAmPm
    console.log(document.querySelector(`#alarm${i}`).childNodes[3].innerText = alarmconfig[i].alarmTimerbottom)
}
