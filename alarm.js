

//// Variables ////
var setAlarmTime = "0000"
var setAlarmAMPM = "AM"
var setAlarmRepeat = "Never"
var setAlarmLabel = "Alarm"
var setAlarmSound = "Radar"
var setAlarmSnooze = true



var numpadentry = []
var alarmConfigTemp = []
var alarmConfig =
    [{}

    ]








//// Main Page ////
function alarmAddPage() {
    if (document.querySelector("#alarmEdit").innerHTML === "Done") {
        editAlarms()
    }

    document.querySelector("#selAlarmPage").style.top = '5vh'
    document.querySelector("#numpad").style.top = '50vh'
    console.log("Hello ")
}

function editAlarms() {

    if (document.querySelector("#alarmEdit").innerHTML === "Edit") {


        for (i = 0; i < alarmConfig.length; i++) {

            if (document.querySelector(`#alarm${i}`) === null) { }

            else {
                document.querySelector(`#alarm${i}`).style.marginLeft = "10vw"
                document.querySelector(`#alarm${i}`).style.animationDuration = ".5s"
                document.querySelector(`#alarm${i}`).style.animationName = "alarmContAnamateRight";

                //del button
                document.querySelector(`#editAlarmTimeContainer${i}`).style.visibility = "visible"
                document.querySelector(`#editAlarmTimeContainer${i}`).style.opacity = "100%"
                document.querySelector(`#editAlarmTimeContainer${i}`).style.animationDuration = "1s"
                document.querySelector(`#editAlarmTimeContainer${i}`).style.animationName = "alarmButtonRight"

                //toggle button remove

                document.querySelector(`#mtoggle${i}`).style.background = "transparent"
                document.querySelector(`#mtoggle${i}`).style.animationDuration = "12s"
                document.querySelector(`#mtoggle${i}`).style.animationName = "easeout"


                document.querySelector(`#toggle${i}`).style.background = "transparent"
                document.querySelector(`#toggle${i}`).innerText = ">"
                document.querySelector(`#toggle${i}`).style.color = "white"
                document.querySelector(`#toggle${i}`).style.marginRight = "-40px"



            }



        }

        document.querySelector("#alarmEdit").innerHTML = "Done"
    }
    else {

        for (var i = 0; i < alarmConfig.length; i++) {
            if (document.querySelector(`#alarm${i}`) === null) { }
            else {
                document.querySelector(`#alarm${i}`).style.marginLeft = "0vw"
                document.querySelector(`#alarm${i}`).style.animationDuration = ".5s"
                document.querySelector(`#alarm${i}`).style.animationName = "alarmContAnamateLeft";


                document.querySelector(`#editAlarmTimeContainer${i}`).style.visibility = "hidden"
                document.querySelector(`#editAlarmTimeContainer${i}`).style.opacity = "0%"
                document.querySelector(`#editAlarmTimeContainer${i}`).style.animationDuration = "1s"
                document.querySelector(`#editAlarmTimeContainer${i}`).style.animationName = "alarmButtonLeft"

                document.querySelector(`#mtoggle${i}`).style.removeProperty("background")
                document.querySelector(`#mtoggle${i}`).style.animationDuration = ".5s"
                document.querySelector(`#mtoggle${i}`).style.animationName = "easein"


                document.querySelector(`#toggle${i}`).style.removeProperty("background")
                document.querySelector(`#toggle${i}`).innerText = ""
                document.querySelector(`#toggle${i}`).style.removeProperty("color")
                document.querySelector(`#toggle${i}`).style.removeProperty("margin-right")
            }


        }

        document.querySelector("#alarmEdit").innerHTML = "Edit"
    }


}

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





    // Creating new slot in alarm times

    let creatNeweditAlarmTimeContainer = document.createElement("button")
    creatNeweditAlarmTimeContainer.setAttribute("class", "editAlarmTimeContainer")
    creatNeweditAlarmTimeContainer.setAttribute("id", `editAlarmTimeContainer${alarmConfig.length}`)
    creatNeweditAlarmTimeContainer.setAttribute("onClick", `editAlarmButton(${alarmConfig.length})`)
    creatNeweditAlarmTimeContainer.textContent = "_"
    document.getElementById("alarmTimeCont").appendChild(creatNeweditAlarmTimeContainer)

    let creatNewAlarmCont = document.createElement("div");
    creatNewAlarmCont.setAttribute("class", "alarmCont")
    creatNewAlarmCont.setAttribute("id", `alarm${alarmConfig.length}`)
    document.getElementById("alarmTimeCont").appendChild(creatNewAlarmCont)

    let creatNewAlarmTopCont = document.createElement("div");
    creatNewAlarmTopCont.setAttribute("class", "alarmTopCont")
    creatNewAlarmCont.appendChild(creatNewAlarmTopCont)

    let creatNewAlarmTime = document.createElement("span")
    creatNewAlarmTime.setAttribute("class", "alarmtime")
    creatNewAlarmTopCont.appendChild(creatNewAlarmTime)

    let creatNewAlarmNumTime = document.createElement("span")
    creatNewAlarmNumTime.setAttribute("class", "alarmNumTime")
    creatNewAlarmNumTime.textContent = "9:00"
    creatNewAlarmTime.appendChild(creatNewAlarmNumTime)

    let creatNewAlarmAmPm = document.createElement("span")
    creatNewAlarmAmPm.setAttribute("class", "alarmAmPm")
    creatNewAlarmAmPm.textContent = "AM"
    creatNewAlarmTime.appendChild(creatNewAlarmAmPm)

    let creatNewButtonSpan = document.createElement("span")
    creatNewAlarmTopCont.appendChild(creatNewButtonSpan)

    let creatNewAlarmToggle = document.createElement("button")
    creatNewAlarmToggle.setAttribute("onclick", `alarmToggle(${alarmConfig.length})`)
    creatNewAlarmToggle.setAttribute("class", "alarmToggleOn")
    creatNewAlarmToggle.setAttribute("id", `mtoggle${alarmConfig.length}`)
    creatNewButtonSpan.appendChild(creatNewAlarmToggle)

    let creatNewToggleNum = document.createElement("div")
    creatNewToggleNum.setAttribute("class", "alarmToggleBallOn")
    creatNewToggleNum.setAttribute("id", `toggle${alarmConfig.length}`)
    creatNewAlarmToggle.appendChild(creatNewToggleNum)

    let creatNewAlarmTimerbottom = document.createElement("div");
    creatNewAlarmTimerbottom.setAttribute("class", "alarmTimerbottom")
    creatNewAlarmTimerbottom.textContent = "Timer"
    creatNewAlarmCont.appendChild(creatNewAlarmTimerbottom)
    ////
    alarmConfig.push(
        { alarmNumTime: `${setAlarmTime}`, alarmAmPm: `${setAlarmAMPM}`, alarmTimerbottom: `${setAlarmLabel}` }
    )




    document.querySelector("#selAlarmPage").style.top = '100vh'
    document.querySelector("#numpad").style.top = '100vh'
    UpdateAlarmConfig()


    console.log(setAlarmTime)
    console.log(setAlarmAMPM)
    console.log(setAlarmRepeat)
    console.log(setAlarmLabel)
    console.log(setAlarmSound)
    console.log(setAlarmSnooze)

}

//removing alarm times
function editAlarmButton(alarm) {
    document.querySelector(`#alarm${alarm}`).remove()
    document.querySelector(`#editAlarmTimeContainer${alarm}`).remove()
    alarmConfig.splice(alarm, 1)
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

if (alarmConfig > 0) {
    alarmConfig = alarmConfig.sort((a, b) => (parseInt(a.alarmNumTime.split(":").join("")) > parseInt(b.alarmNumTime.split(":").join(""))) ? 1 : -1)
    console.table(alarmConfig)
}


function UpdateAlarmConfig() {
    if (alarmConfig > 0) {
        alarmConfig = alarmConfig.sort((a, b) => (parseInt(a.alarmNumTime.split(":").join("")) > parseInt(b.alarmNumTime.split(":").join(""))) ? 1 : -1)
        console.table(alarmConfig)
    }

    for (let i = 0; i < alarmConfig.length; i++) {
        if (document.querySelector(`#alarm${i}`) !== null) {
            try {
                document.querySelector(`#alarm${i}`).childNodes[1].childNodes[1].childNodes[1].innerText = alarmConfig[i].alarmNumTime
                document.querySelector(`#alarm${i}`).childNodes[1].childNodes[1].childNodes[3].innerText = alarmConfig[i].alarmAmPm
                console.log(document.querySelector(`#alarm${i}`).childNodes[3].innerText = alarmConfig[i].alarmTimerbottom)
            }

            catch {
                document.querySelector(`#alarm${i}`).childNodes[0].childNodes[0].childNodes[0].innerText = alarmConfig[i].alarmNumTime
                document.querySelector(`#alarm${i}`).childNodes[0].childNodes[0].childNodes[1].innerText = alarmConfig[i].alarmAmPm
                console.log(document.querySelector(`#alarm${i}`).childNodes[1].innerText = alarmConfig[i].alarmTimerbottom)
            }
        }
    }


}




UpdateAlarmConfig()

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


    updatenumpress()
    setAlarmTime =
        `${parseInt(document.querySelector("#timeSelectHr").innerText)}:${document.querySelector("#timeSelectMin").innerText}`
}

function erase() {
    numpadentry.pop()
    console.log(numpadentry)
    updatenumpress()
}

document.querySelector("#AM").className = "AMPMON"


function AOSPBack() {
    document.querySelector(".alarmOptionSelectPage").style.left = '100vw'
    document.querySelector(".AOSPContenet").innerHTML = ""
}


// 0 = Repeat
// 1 = Label
// 2 = Sound
function updateLabel() {
    console.log("UPDATE")
    // setTimeout(function () { console.log(document.querySelector("#lableInput").value) }, 100);
    setTimeout(function () {
        setAlarmLabel = document.querySelector("#lableInput").value
        console.log(setAlarmLabel)
        document.querySelectorAll(".optionValue")[1].innerText = setAlarmLabel
    }, 100);

}


//Toggles Alarm Sound Checkbox When Clicked - Acts Like A Radio Button and plays sound//
function toggleCheckButtonAlarm(buttonName) {
    let clickedButton = buttonName.querySelector(".toneCheck, .toneUnCheck")
    toneName = (buttonName.attributes.id.textContent)
    toneNameOrg = (buttonName.attributes.id.textContent)
    setAlarmSound = buttonName.id

    function updateToneNameAlarm() {
        if (setAlarmSound === "radar") {
            setAlarmSound = "Radar(Default)"
        } else if (setAlarmSound === "seaside") {
            setAlarmSound = "By The Sea Side"
        } else { setAlarmSound = setAlarmSound.charAt(0).toUpperCase() + setAlarmSound.slice(1) }
    }
    updateToneNameAlarm()

    document.querySelectorAll(".optionValue")[2].innerText = setAlarmSound




    updateToneName()
    let otherButton = document.querySelectorAll(".toneCheck, .toneUnCheck")
    let otherButtonLength = (otherButton.length)
    let name = buttonName.id
    let audio = document.querySelectorAll(".toneAudio")

    stopToneSounds()

    audio = document.querySelector(`#${name}Audio`);
    audio.play()
    audio.currentTime = 0




    for (i = 0; i < otherButtonLength; i++) {
        otherButton[i].className = "toneUnCheck"
    }
    clickedButton.className = "toneCheck"

}

function alarmOptionSelectPage(page) {
    document.querySelector(".alarmOptionSelectPage").style.left = '0'
    let pagename = ""
    if (page === 0) {
        pagename = "Repeat"

        document.querySelector(".AOSPContenet").innerHTML = ""

        let repeatDayContainer = document.createElement("div")
        repeatDayContainer.setAttribute('class', 'dayContainer')
        document.querySelector(".AOSPContenet").appendChild(repeatDayContainer);


        /////Sunday/////




        let repeatSunday = document.createElement("div")
        repeatSunday.setAttribute('class', 'dayOfWeek')
        repeatSunday.innerText = "Every Sunday"
        document.querySelector(".dayContainer").appendChild(repeatSunday);

        let daySelectSunday = document.createElement("div")
        daySelectSunday.setAttribute('class', 'daySelectTrue')
        daySelectSunday.innerText = "✔"
        document.querySelectorAll(".dayOfWeek")[0].appendChild(daySelectSunday);

        // /////Monday/////
        let repeatMonday = document.createElement("div")
        repeatMonday.setAttribute('class', 'dayOfWeek')
        repeatMonday.innerText = "Every Monday"
        document.querySelector(".dayContainer").appendChild(repeatMonday);

        let daySelectMonday = document.createElement("div")
        daySelectMonday.setAttribute('class', 'daySelectTrue')
        daySelectMonday.innerText = "✔"
        document.querySelectorAll(".dayOfWeek")[1].appendChild(daySelectMonday);

        // Tuesday/////
        let repeatTuesday = document.createElement("div")
        repeatTuesday.setAttribute('class', 'dayOfWeek')
        repeatTuesday.innerText = "Every Tuesday"
        document.querySelector(".dayContainer").appendChild(repeatTuesday);

        let daySelectTuesday = document.createElement("div")
        daySelectTuesday.setAttribute('class', 'daySelectTrue')
        daySelectTuesday.innerText = "✔"
        document.querySelectorAll(".dayOfWeek")[2].appendChild(daySelectTuesday);

        // Wednesday/////
        let repeatWednesday = document.createElement("div")
        repeatWednesday.setAttribute('class', 'dayOfWeek')
        repeatWednesday.innerText = "Every Wednesday"
        document.querySelector(".dayContainer").appendChild(repeatWednesday);

        let daySelectWednesday = document.createElement("div")
        daySelectWednesday.setAttribute('class', 'daySelectTrue')
        daySelectWednesday.innerText = "✔"
        document.querySelectorAll(".dayOfWeek")[3].appendChild(daySelectWednesday);

        // Thursday/////
        let repeatThursday = document.createElement("div")
        repeatThursday.setAttribute('class', 'dayOfWeek')
        repeatThursday.innerText = "Every Thursday"
        document.querySelector(".dayContainer").appendChild(repeatThursday);

        let daySelectThursday = document.createElement("div")
        daySelectThursday.setAttribute('class', 'daySelectTrue')
        daySelectThursday.innerText = "✔"
        document.querySelectorAll(".dayOfWeek")[4].appendChild(daySelectThursday);

        // Friday/////
        let repeatFriday = document.createElement("div")
        repeatFriday.setAttribute('class', 'dayOfWeek')
        repeatFriday.innerText = "Every Friday"
        document.querySelector(".dayContainer").appendChild(repeatFriday);

        let daySelectFriday = document.createElement("div")
        daySelectFriday.setAttribute('class', 'daySelectTrue')
        daySelectFriday.innerText = "✔"
        document.querySelectorAll(".dayOfWeek")[5].appendChild(daySelectFriday);

        // Saturday/////
        let repeatSaturday = document.createElement("div")
        repeatSaturday.setAttribute('class', 'dayOfWeek')
        repeatSaturday.innerText = "Every Saturday"
        document.querySelector(".dayContainer").appendChild(repeatSaturday);

        let daySelectSaturday = document.createElement("div")
        daySelectSaturday.setAttribute('class', 'daySelectTrue')
        daySelectSaturday.innerText = "✔"
        document.querySelectorAll(".dayOfWeek")[6].appendChild(daySelectSaturday);



    }
    else if (page === 1) {
        pagename = "Label"

        let lableForm = document.createElement("form");
        lableForm.setAttribute("autocomplete", "off");
        lableForm.setAttribute("id", "formlableInput");
        let labeInput = document.createElement("input");
        labeInput.setAttribute("id", "lableInput");
        labeInput.setAttribute("type", "text");
        labeInput.setAttribute("name", "Label");
        labeInput.setAttribute("placeholder", setAlarmLabel);
        labeInput.setAttribute("onkeydown", "updateLabel()");
        lableForm.appendChild(labeInput);
        document.querySelector(".AOSPContenet").innerHTML = ""
        document.querySelector(".AOSPContenet").appendChild(lableForm);

        //Prevents submiting form on enter
        document.querySelector('#formlableInput').addEventListener('submit', event => {
            event.preventDefault();
        });


    }
    else if (page === 2) {
        pagename = "Sound"





        let AOSPSound = `
        <div id="toneSelectCont">
                            <div class="toneSelect" id="radar">
                                <span>
                                    <button class="toneCheck" onclick="toggleCheckButtonAlarm(radar)">✓</button>
                                    <audio class="toneAudio" id="radarAudio" src="alarm/radar.mp3"></audio>
                                </span>
                                <div class="toneName">Radar (Default)</div>
                            </div>
                            <div class="toneSelect" id="apex">
                                <span>
                                    <button class="toneUnCheck" onclick="toggleCheckButtonAlarm(apex)">✓</button>
                                    <audio class="toneAudio" id="apexAudio" src="alarm/apex.mp3"></audio>
                                </span>
                                <div class="toneName">Apex</div>
                            </div>
                            <div class="toneSelect" id="beacon">
                                <span>
                                    <button class="toneUnCheck" onclick="toggleCheckButtonAlarm(beacon)">✓</button>
                                    <audio class="toneAudio" id="beaconAudio" src="alarm/beacon.mp3"></audio>
                                </span>
                                <div class="toneName">Beacon</div>
                            </div>
                            <div class="toneSelect" id="bulletin">
                                <span>
                                    <button class="toneUnCheck" onclick="toggleCheckButtonAlarm(bulletin)">✓</button>
                                    <audio class="toneAudio" id="bulletinAudio" src="alarm/bulletin.mp3"></audio>
                                </span>
                                <div class="toneName">Bulletin</div>
                            </div>
                            <div class="toneSelect" id="seaside">
                                <span>
                                    <button class="toneUnCheck" onclick="toggleCheckButtonAlarm(seaside)">✓</button>
                                    <audio class="toneAudio" id="seasideAudio" src="alarm/by_the_seaside.mp3"></audio>
                                </span>
                                <div class="toneName">By The Seaside
                                </div>
                            </div>
                            <div class="toneSelect" id="chimes">
                                <span>
                                    <button class="toneUnCheck" onclick="toggleCheckButtonAlarm(chimes)">✓</button>
                                    <audio class="toneAudio" id="chimesAudio" src="alarm/chimes.mp3"></audio>
                                </span>
                                <div class="toneName">Chimes</div>
                            </div>
                            <div class="toneSelect" id="circuit">
                                <span>
                                    <button class="toneUnCheck" onclick="toggleCheckButtonAlarm(circuit)">✓</button>
                                    <audio class="toneAudio" id="circuitAudio" src="alarm/circuit.mp3"></audio>
                                </span>
                                <div class="toneName">Circuit</div>
                            </div>
                            <div class="toneSelect" id="constellation">
                                <span>
                                    <button class="toneUnCheck" onclick="toggleCheckButtonAlarm(constellation)">✓</button>
                                    <audio class="toneAudio" id="constellationAudio"
                                        src="alarm/constellation.mp3"></audio>
                                </span>
                                <div class="toneName">Constellation</div>
                            </div>
                            <div class="toneSelect" id="cosmic">
                                <span>
                                    <button class="toneUnCheck" onclick="toggleCheckButtonAlarm(cosmic)">✓</button>
                                    <audio class="toneAudio" id="cosmicAudio" src="alarm/cosmic.mp3"></audio>
                                </span>
                                <div class="toneName">Cosmic</div>
                            </div>
                        </div>`
        document.querySelector(".AOSPContenet").innerHTML = AOSPSound


    }
    document.querySelector("#AOSPTitle").innerText = pagename
}




//Snooze
function AOSPSnooze() {
    if (document.querySelector("#AOSPSnooze.alarmToggleOn") !== null) {
        setAlarmSnooze = false
        console.log(document.querySelector("#AOSPSnooze.alarmToggleOn"))
        document.querySelector("#AOSPSnooze.alarmToggleOn").className = "alarmToggleOff"
        document.querySelector("#AOSPSnoozeBall.alarmToggleBallOn").className = "alarmToggleBallOff"

    } else if (document.querySelector("#AOSPSnooze.alarmToggleOff") !== null) {
        setAlarmSnooze = true
        document.querySelector("#AOSPSnooze.alarmToggleOff").className = "alarmToggleOn"
        document.querySelector("#AOSPSnoozeBall.alarmToggleBallOff").className = "alarmToggleBallOn"
    }

}