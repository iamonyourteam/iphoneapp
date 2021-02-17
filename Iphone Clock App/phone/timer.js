

// // hour scroll part 1
var h = 4
let up = function scrollup() {

    if (h < 23) {
        for (i = 0; i < 7; i++) {
            document.querySelector(`#p${i}`).innerHTML = (parseInt(document.querySelector(`#p${i}`).innerHTML) + 1)

            if ((parseInt(document.querySelector(`#p${i}`).innerHTML) < 0) || (parseInt(document.querySelector(`#p${i}`).innerHTML) > 23)) {
                document.querySelector(`#p${i}`).style.visibility = "hidden"
            } else { document.querySelector(`#p${i}`).style.visibility = "visible" }
        }
        h++
    }

}
let down = function scrolldown() {
    if (h > 0) {
        for (i = 0; i < 7; i++) {
            document.querySelector(`#p${i}`).innerHTML = (parseInt(document.querySelector(`#p${i}`).innerHTML) - 1)
            if ((parseInt(document.querySelector(`#p${i}`).innerHTML) < 0) || (parseInt(document.querySelector(`#p${i}`).innerHTML) > 23)) {
                document.querySelector(`#p${i}`).style.visibility = "hidden"
            } else { document.querySelector(`#p${i}`).style.visibility = "visible" }
        }
        h--
    }

}

// minutscroll part 1
var m = 4
let upmin = function scrollupmin() {
    if (m < 59) {
        for (i = 0; i < 7; i++) {
            document.querySelector(`#q${i}`).innerHTML = (parseInt(document.querySelector(`#q${i}`).innerHTML) + 1)

            if ((parseInt(document.querySelector(`#q${i}`).innerHTML) < 0) || (parseInt(document.querySelector(`#q${i}`).innerHTML) > 59)) {
                document.querySelector(`#q${i}`).style.visibility = "hidden"
            } else { document.querySelector(`#q${i}`).style.visibility = "visible" }
        }
        m++
    }

}
let downmin = function scrolldownmin() {
    if (m > 0) {
        for (i = 0; i < 7; i++) {
            document.querySelector(`#q${i}`).innerHTML = (parseInt(document.querySelector(`#q${i}`).innerHTML) - 1)
            if ((parseInt(document.querySelector(`#q${i}`).innerHTML) < 0) || (parseInt(document.querySelector(`#q${i}`).innerHTML) > 59)) {
                document.querySelector(`#q${i}`).style.visibility = "hidden"
            } else { document.querySelector(`#q${i}`).style.visibility = "visible" }
        }
        m--
    }

}

// sec scroll part 1
var s = 4
let upsec = function scrollupsec() {
    if (s < 59) {
        for (i = 0; i < 7; i++) {
            document.querySelector(`#r${i}`).innerHTML = (parseInt(document.querySelector(`#r${i}`).innerHTML) + 1)

            if ((parseInt(document.querySelector(`#r${i}`).innerHTML) < 0) || (parseInt(document.querySelector(`#r${i}`).innerHTML) > 59)) {
                document.querySelector(`#r${i}`).style.visibility = "hidden"
            } else { document.querySelector(`#r${i}`).style.visibility = "visible" }
        }
        s++
    }

}
let downsec = function scrolldownsec() {
    if (s > 0) {
        for (i = 0; i < 7; i++) {
            document.querySelector(`#r${i}`).innerHTML = (parseInt(document.querySelector(`#r${i}`).innerHTML) - 1)
            if ((parseInt(document.querySelector(`#r${i}`).innerHTML) < 0) || (parseInt(document.querySelector(`#r${i}`).innerHTML) > 59)) {
                document.querySelector(`#r${i}`).style.visibility = "hidden"
            } else { document.querySelector(`#r${i}`).style.visibility = "visible" }
        }
        s--
    }

}






var scollelem = document.querySelector("#hr");
var scollelemmin = document.querySelector("#min");
var scollelemsec = document.querySelector("#sec");


scollelem.addEventListener('wheel', checkScrollDirection);

function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
        up();
    } else {
        down();
    }
}
function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
        return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
}
var isdown = false;
var isup = true
var ismoved = false;
let checkmousedown = () => {
    isup = false
    listenmouse()
    scollelem.style.cursor = "grabbing";
}
let checkmouseup = () => {
    isdown = false
    scollelem.removeEventListener('mousemove', checkmousemove);
    scollelem.style.cursor = "grab";
}
ymove = 0
let checkmousemove = (event) => {
    isdown = false
    ymove = ymove + (event.movementY)
    if (ymove < -5) {
        up()
        ymove = 0
    }
    else if (ymove > 5) {
        down()
        ymove = 0
    }
}

document.querySelector(".phone").addEventListener('mouseup', checkmouseup);
scollelem.addEventListener('mousedown', checkmousedown);

function listenmouse() {
    scollelem.addEventListener('mousemove', checkmousemove);
}


////

scollelemmin.addEventListener('wheel', checkScrollDirectionmin);
function checkScrollDirectionmin(event) {
    if (checkScrollDirectionIsUpmin(event)) {
        upmin();
    } else {
        downmin();
    }
}
function checkScrollDirectionIsUpmin(event) {
    if (event.wheelDelta) {
        return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
}
var isdownmin = false;
var isupmin = true
var ismovedmin = false;
let checkmousedownmin = () => {
    isupmin = false
    listenmousemin()
    scollelemmin.style.cursor = "grabbing";
}
let checkmouseupmin = () => {
    isdown = false
    scollelemmin.removeEventListener('mousemove', checkmousemovemin);
    scollelemmin.style.cursor = "grab";
}
ymove = 0
let checkmousemovemin = (event) => {
    isdownmin = false
    ymove = ymove + (event.movementY)
    if (ymove < -5) {
        upmin()
        ymove = 0
    }
    else if (ymove > 5) {
        downmin()
        ymove = 0
    }
}

document.querySelector(".phone").addEventListener('mouseup', checkmouseupmin);
scollelemmin.addEventListener('mousedown', checkmousedownmin);

function listenmousemin() {
    scollelemmin.addEventListener('mousemove', checkmousemovemin);
}

///sec

scollelemsec.addEventListener('wheel', checkScrollDirectionsec);
function checkScrollDirectionsec(event) {
    if (checkScrollDirectionIsUpsec(event)) {
        upsec();
    } else {
        downsec();
    }
}
function checkScrollDirectionIsUpsec(event) {
    if (event.wheelDelta) {
        return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
}
var isdownsec = false;
var isupsec = true
var ismovedsec = false;
let checkmousedownsec = () => {
    isupsec = false
    listenmousesec()
    scollelemsec.style.cursor = "grabbing";
}
let checkmouseupsec = () => {
    isdown = false
    scollelemsec.removeEventListener('mousemove', checkmousemovesec);
    scollelemsec.style.cursor = "grab";
}
ymove = 0
let checkmousemovesec = (event) => {
    isdownsec = false
    ymove = ymove + (event.movementY)
    if (ymove < -5) {
        upsec()
        ymove = 0
    }
    else if (ymove > 5) {
        downsec()
        ymove = 0
    }
}

document.querySelector(".phone").addEventListener('mouseup', checkmouseupsec);
scollelemsec.addEventListener('mousedown', checkmousedownsec);

function listenmousesec() {
    scollelemsec.addEventListener('mousemove', checkmousemovesec);
}



///


// Button Controll//
var isTimerPaused = true
function start_Timer() {
    if (document.querySelector("#start_Timer") !== null) {
        document.querySelector('#cancel_Timer').style.opacity = "1"
        document.querySelector('#start_Timer').innerHTML = "Pause"
        document.querySelector('#start_Timer').id = "pause_Timer"
        document.querySelector('#myCanvas').style.visibility = "visible"
        document.querySelector('#myCanvas2').style.visibility = "visible"
        document.querySelector('#estTime').style.visibility = "visible"
        document.querySelector('#bell').style.visibility = "visible"
        document.querySelector('#selectorContainer').style.display = "none"
        document.querySelector('#timerCount').style.display = "inline"
        isTimerPaused = false

        document.querySelector('#estTime').innerHTML = futureTimef()
        countDownf()



    } else if (document.querySelector("#pause_Timer") !== null) {
        isTimerPaused = true
        document.querySelector('#estcont').style.opacity = ".2"
        document.querySelector("#pause_Timer").innerHTML = "Resume"
        document.querySelector("#pause_Timer").id = "resume_Timer"
        pausecountdownf()
    } else if (document.querySelector("#resume_Timer") !== null) {
        isTimerPaused = false
        document.querySelector('#estcont').style.opacity = "1"
        document.querySelector('#resume_Timer').innerHTML = "Pause"
        document.querySelector('#resume_Timer').id = "pause_Timer"
        resumecountdownf()
    }
}

function cancel_Timer() {
    if (document.querySelector("#start_Timer") === null) {
        document.querySelector('#cancel_Timer').style.opacity = ".3"
        document.querySelector('#myCanvas').style.visibility = "hidden"
        document.querySelector('#myCanvas2').style.visibility = "hidden"
        document.querySelector('#estTime').style.visibility = "hidden"
        document.querySelector('#bell').style.visibility = "hidden"
        document.querySelector('#selectorContainer').style.display = "unset"
        document.querySelector('#timerCount').style.display = "none"


        if (document.querySelector("#pause_Timer") !== null) {
            document.querySelector("#pause_Timer").innerHTML = "Start"
            document.querySelector("#pause_Timer").id = "start_Timer"
        } else if (document.querySelector("#resume_Timer") !== null) {
            document.querySelector("#resume_Timer").innerHTML = "Start"
            document.querySelector("#resume_Timer").id = "start_Timer"
        }
    }
}






//countdown 





//-1.6 = 100%   4.7 = 0% total distance = pi



twonumber = function digit(num) {
    if (num < 10) {
        return (`0${num}`)
    } else return (num)
}

var futureTime = 0
var currentStartTime = 0
var pauseStart = 0
var pauseEnd = 0
var pauseTotal = 0

function futureTimef() {

    let sd = new Date
    currentStartTime = sd.getTime()
    futureTime = ((h * 3600000) + (m * 60000) + (s * 1000)) + currentStartTime + pauseTotal

    let futureDate = new Date(futureTime);
    futureDate.toString();
    return `${twonumber(futureDate.getHours())}:${twonumber(futureDate.getMinutes())} ${futureDate.toLocaleString().split(" ")[2]}`
}

let countDown = 1

function drawarc(arcper) {


    var c2 = document.querySelector("#myCanvas2");
    var ctx2 = c2.getContext("2d");
    c2.width = window.innerHeight * .40;
    c2.height = window.innerHeight / 2;
    c2.width = window.innerHeight * .40;
    c2.height = window.innerHeight / 2;
    ctx2.beginPath();
    ctx2.lineWidth = 5;
    ctx2.strokeStyle = "rgba(110, 110, 110, 0.185)";
    ctx2.arc(c2.width / 2, c2.height / 2, 150, 0, 2 * Math.PI);
    ctx2.stroke();




    let percent = arcper
    let arcpercent = percent / 100
    let arclen = 4.7 - (Math.PI * arcpercent) * 2
    var c = document.querySelector("#myCanvas");
    var ctx = c.getContext("2d");
    c.width = window.innerHeight * .40;
    c.height = window.innerHeight / 2;
    c.width = window.innerHeight * .40;
    c.height = window.innerHeight / 2;
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "rgb(255, 145, 0)";
    ctx.lineCap = "round";
    ctx.arc(c.width / 2, c.height / 2, 150, arclen, 1.5 * Math.PI);
    ctx.stroke();





}
function updateToneName() {
    if (toneName === "radar") {
        toneName = "Radar(Default)"
    } else if (toneName === "seaside") {
        toneName = "By The Sea Side"
    } else { toneName = toneName.charAt(0).toUpperCase() + toneName.slice(1) }
}



var toneName = "Radar(Default)"
var toneNameOrg = "radar"

var toneNameSelected = "radar"
var toneNameOrgSelected = updateToneName(toneNameSelected)

function countDownf() {

    var timeint = setInterval(timeintf, 50)
    function stoptimeint() {
        clearInterval(timeint);
    }
    function timeintf() {




        if (countDown > 0 && isTimerPaused === false) {

            let sd = new Date
            let currentTimeUpdate = sd.getTime()
            let timeLeft = ((futureTime - currentTimeUpdate) + pauseTotal);
            countDown = timeLeft
            let timeLefth = Math.floor(timeLeft / 3600000);
            let timeLeftm = Math.floor((timeLeft - (timeLefth * 3600000)) / 60000)
            let timeLefts = Math.floor((timeLeft - ((timeLefth * 3600000) + (timeLeftm * 60000))) / 1000)


            // arc


            // console.log(countDown)
            // console.log(`${futureTime - currentStartTime} ---`)
            drawarc((countDown / (futureTime - currentStartTime)) * 100)

            // (countdown / totaltime)*100 floor 




            if (countDown < 0) {
                document.querySelector('#timerCount').innerHTML = "00:00:00"
                stoptimeint()
                countDown = 1
                futureTime = 0
                currentStartTime = 0


                document.querySelector('#cancel_Timer').style.opacity = ".3"
                document.querySelector('#myCanvas').style.visibility = "hidden"
                document.querySelector('#myCanvas2').style.visibility = "hidden"
                document.querySelector('#estTime').style.visibility = "hidden"
                document.querySelector('#bell').style.visibility = "hidden"
                document.querySelector('#selectorContainer').style.display = "unset"
                document.querySelector('#timerCount').style.display = "none"
                document.querySelector("#pause_Timer").innerHTML = "Start"
                document.querySelector("#pause_Timer").id = "start_Timer"
                let compleatedAudio = document.querySelector(`#${toneNameSelected}Audio`)
                compleatedAudio.currentTime = 0
                compleatedAudio.play()


                // document.querySelector(`#${toneNameSelected}Audio`).play()
            } else {
                document.querySelector('#timerCount').innerHTML = `${twonumber(timeLefth)}:${twonumber(timeLeftm)}:${twonumber(timeLefts)}`
            }
        } else if (isTimerPaused === true) {
            stoptimeint()
        }
    }

}


////pause and resume functions
function pausecountdownf() {
    let ps = new Date
    pauseStart = ps.getTime()

}

function resumecountdownf() {

    let pe = new Date
    pauseEnd = pe.getTime()
    pauseTotal += (pauseEnd - pauseStart)


    countDownf()
}


// When Timer Ends Pop-Up
function stopToneSounds() {
    let sounds = document.querySelectorAll('.toneAudio');
    for (i = 0; i < sounds.length; i++) {
        sounds[i].pause();
    }
}


document.querySelector("#toneName").innerText = toneName


function changeTone() {


    document.querySelector("#selTonePage").style.top = '7vh'


}

function changeToneClose() {

    document.querySelector("#selTonePage").style.top = '100vh'
    stopToneSounds()
}

function toggleCheckButton(buttonName) {
    let clickedButton = buttonName.querySelector(".toneCheck, .toneUnCheck")
    toneName = (buttonName.attributes.id.textContent)
    toneNameOrg = (buttonName.attributes.id.textContent)

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

function setTone() {



    stopToneSounds()
    document.querySelector("#selTonePage").style.top = '100vh'
    document.querySelector("#toneName").innerText = toneName

    console.log(toneNameOrg)
    console.log(toneName)

    toneNameSelected = toneNameOrg
    console.log(toneNameSelected)

}



