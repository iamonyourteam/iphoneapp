

//// Variables ////
var setAlarmTime = "0000"
var setAlarmAMPM = "AM"
var setAlarmRepeat = "Never"
var setAlarmLabel = "Alarm"
var setAlarmSound = "Radar"
var setAlarmSnooze = true

console.log(setAlarmTime)
console.log(setAlarmAMPM)
console.log(setAlarmRepeat)
console.log(setAlarmLabel)
console.log(setAlarmSound)
console.log(setAlarmSnooze)


var numpadentry = []
var alarmConfigTemp = []
var alarmConfig =
    [{ alarmNumTime: "19:00", alarmAmPm: "PM", alarmTimerbottom: "Timer1" },
    { alarmNumTime: "18:00", alarmAmPm: "PM", alarmTimerbottom: "Timer1" },
    { alarmNumTime: "8:40", alarmAmPm: "AM", alarmTimerbottom: "Bedtime" },
    { alarmNumTime: "8:30", alarmAmPm: "AM", alarmTimerbottom: "C" }]








//// Main Page ////
function alarmAddPage() {
    document.querySelector("#selAlarmPage").style.top = '5vh'
    document.querySelector("#numpad").style.top = '50vh'
    console.log("Hello ")
}

// NEED TO ADD EDIT BUTTON 

//y

////Add Alarm Page ////
// Header //
function alarmPageCancel() {
    document.querySelector("#selAlarmPage").style.top = '100vh'
    document.querySelector("#numpad").style.top = '100vh'
}


/// need to make one sigle object and then push to array
function alarmPageSave() {
    let tempTime = { alarmNumTime: (document.querySelector("#timeSelectNum").innerText) }
    let tempAMPM = { alarmAmPm: (document.querySelector(".AMPMON").innerText) }
    let tempRepeat = { alarmTimerRepeat: (document.querySelectorAll(".optionValue")[0].innerText) }
    let tempLabel = { alarmTimerbottom: (document.querySelectorAll(".optionValue")[1].innerText) }
    let tempSound = { alarmNumSound: (document.querySelectorAll(".optionValue")[2].innerText) }
    alarmConfigTemp.push(tempTime, tempAMPM, tempRepeat, tempLabel, tempSound)
    alarmConfig.push(alarmConfigTemp)
    console.log(alarmConfig)
    document.querySelector("#selAlarmPage").style.top = '100vh'
    document.querySelector("#numpad").style.top = '100vh'

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


alarmConfig = alarmConfig.sort((a, b) => (parseInt(a.alarmNumTime.split(":").join("")) > parseInt(b.alarmNumTime.split(":").join(""))) ? 1 : -1)
console.table(alarmConfig)

for (let i = 0; i < alarmConfig.length; i++) {
    document.querySelector(`#alarm${i}`).childNodes[1].childNodes[1].childNodes[1].innerText = alarmconfig[i].alarmNumTime
    document.querySelector(`#alarm${i}`).childNodes[1].childNodes[1].childNodes[3].innerText = alarmconfig[i].alarmAmPm
    console.log(document.querySelector(`#alarm${i}`).childNodes[3].innerText = alarmconfig[i].alarmTimerbottom)
}


function AMPMToggel(num) {
    if (num === 1) {
        if (document.querySelector("#AM").className !== "AMPMON") {

            document.querySelector("#AM").className = "AMPMON"
            document.querySelector("#PM").className = "AMPMOFF"
            setAlarmAMPM = "AM"
        }
    }
    else {
        if (document.querySelector("#PM").className !== "AMPMON") {
            document.querySelector("#PM").className = "AMPMON"
            document.querySelector("#AM").className = "AMPMOFF"
            setAlarmAMPM = "PM"
        }
    }
}





function updatenumpress() {
    if (numpadentry.length === 4) {
        document.querySelector("#timeSelectHr").innerText = `${numpadentry[0]}${numpadentry[1]}`
        document.querySelector("#timeSelectMin").innerText = `${numpadentry[2]}${numpadentry[3]}`
    } else if (numpadentry.length === 3) {
        document.querySelector("#timeSelectHr").innerText = `0${numpadentry[0]}`
        document.querySelector("#timeSelectMin").innerText = `${numpadentry[1]}${numpadentry[2]}`
    } else if (numpadentry.length === 2) {
        document.querySelector("#timeSelectHr").innerText = "00"
        document.querySelector("#timeSelectMin").innerText = `${numpadentry[0]}${numpadentry[1]}`
    } else if (numpadentry.length === 1) {
        document.querySelector("#timeSelectHr").innerText = "00"
        document.querySelector("#timeSelectMin").innerText = `0${numpadentry[0]}`
    } else if (numpadentry.length === 0) {
        document.querySelector("#timeSelectHr").innerText = "00"
        document.querySelector("#timeSelectMin").innerText = `00`
    }
}

function numpress(a) {

    console.log(a)
    numpadentry.push(a)
    console.log(numpadentry)
    while (numpadentry.join("") > 1259) {
        numpadentry.shift()

    }
    console.log(numpadentry)
    setAlarmTime = numpadentry.join("")

    updatenumpress()

}

function erase() {
    numpadentry.pop()
    console.log(numpadentry)
    updatenumpress()
}

document.querySelector("#AM").className = "AMPMON"


function AOSPBack() {
    document.querySelector(".alarmOptionSelectPage").style.left = '100vw'
    setAlarmLabel = document.querySelector("#lableInput").value
    document.querySelectorAll(".optionValue")[1].innerText = setAlarmLabel
}
// 0 = Repeat
// 1 = Label
// 2 = Sound
function updateLabel() {
    console.log("UPDATE")
    setTimeout(function () { console.log(document.querySelector("#lableInput").value) }, 10)

}
function submitLabel() {
    document.querySelector("#formInput").preventDefault();
}

function alarmOptionSelectPage(page) {
    document.querySelector(".alarmOptionSelectPage").style.left = '0'
    let pagename = ""
    if (page === 0) {
        pagename = "Repeat"

    }
    else if (page === 1) {
        pagename = "Label"

        let lableForm = document.createElement("form");

        lableForm.setAttribute("autocomplete", "off");

        let labeInput = document.createElement("input");
        labeInput.setAttribute("id", "lableInput");
        labeInput.setAttribute("type", "text");
        labeInput.setAttribute("name", "Label");
        labeInput.setAttribute("placeholder", setAlarmLabel);
        labeInput.setAttribute("onkeydown", "updateLabel()");
        lableForm.appendChild(labeInput);
        document.querySelector(".AOSPContenet").innerHTML = ""
        document.querySelector(".AOSPContenet").appendChild(lableForm);

    }
    else if (page === 2) {
        pagename = "Sound"

    }
    document.querySelector("#AOSPTitle").innerText = pagename
}
