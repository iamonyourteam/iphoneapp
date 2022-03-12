
///Notes: 1st app created, would try and use querySelector and addEventLisner if redone.


////////////////////////////////
//     Timer / Counter       //
///////////////////////////////
var seconds = 1
var isRunning = true
var intervalId = null
var laps = []
let startTime = function sc() {
    if (intervalId === null) {
        intervalId = (setInterval(timer, 16));
    } else { }
}

function timer() {
    if (isRunning === true) {
        seconds += 1
        timeDOM(seconds)

    } else {
        clearInterval(intervalId)
        intervalId = null
    }
}


/// Changes DOM to show current secounds //
function timeDOM(seconds) {

    if (laps.length < 1) {
        document.getElementById("lap0t").innerHTML = (humanReadable(seconds))
    } else { document.getElementById("lap0t").innerHTML = humanReadable((parseInt(seconds - laps.reduce((a, b) => a + b, 0)))) }
    document.getElementById("counter").innerHTML = (humanReadable(seconds))

}

// TURNS TIME IN SECOUNDS  TO 00:00.00 //
function humanReadable(seconds) {
    function digit(num) {
        if (num < 10) {
            return (`0${num}`)
        } else return (num)
    }

    if (seconds < 100) {
        return (`00:00.${digit(seconds)}`)
    } else if (seconds < 3600) {
        return (`00:${digit(Math.floor(seconds / 60))}.${digit(seconds % 60)}`)
    } else { return (`${digit(Math.floor(seconds / 3600))}:${digit(Math.floor((seconds % 3600) / 60))}.${digit(seconds % 100)}`) }


}

////////////////////////////////////////
//  Start  // Stop  //  Reset // Lap //
//////////////////////////////////////
//When Right Button Is Pressed//
function changer() {
    if (document.getElementById("start") !== null) {
        let elem = document.getElementById("start");
        document.getElementById(`lap0n`).innerText = `Lap ${laps.length + 1}`
        if (document.getElementById("lap") !== null && seconds !== 0) {
            document.getElementById("lap").style.opacity = "1"

        }
        if (document.getElementById("reset") !== null) {
            document.getElementById("reset").innerText = "Lap"
            document.getElementById("reset").id = "lap"

        }
        elem.innerText = "Stop"
        elem.id = "stop";
        startTime()
        isRunning = true

    } else {
        let elem = document.getElementById("stop");
        if (document.getElementById("lap") !== null) {
            document.getElementById("lap").innerText = "Reset"
            document.getElementById("lap").id = "reset"
        }
        elem.innerText = "Start"
        elem.id = "start";
        isRunning = false

    }
}

var lapcount = 1
//When Left Button Is Pressed//
function changel() {
    if (document.getElementById("lap") !== null) {
        lapcount += 1
        laps.unshift(parseInt(seconds - laps.reduce((a, b) => a + b, 0)))
        // appending new div to html

        if (lapcount > 5) {
            let newlap = document.createElement('div')
            let newlapn = document.createElement('span')
            let newlapt = document.createElement('span')
            let elem = document.getElementById('lapssc').appendChild(newlap)
            elem.setAttribute('id', `lap${lapcount}`)
            elem.setAttribute('class', 'newlaps')


            span1elem = elem.appendChild(newlapn)
            span1elem.setAttribute('class', 'leftlap')
            span1elem.setAttribute('id', `lap${lapcount}n`)
            span2elem = elem.appendChild(newlapt)
            span2elem.setAttribute('class', 'rightlap')
            span2elem.setAttribute('id', `lap${lapcount}t`)





        }





        for (let i = 0; i < laps.length; i++) {
            document.getElementById(`lap0n`).innerText = `Lap ${laps.length + 1}`
            document.getElementById(`lap${i + 1}n`).innerText = `Lap ${(laps.length - (i))}`
            document.getElementById(`lap${i + 1}t`).innerText = `${humanReadable(laps[i])}`
            let max = Math.max(...laps)
            let min = Math.min(...laps)



            if (laps.length > 1) {
                if (laps[i] === min) {
                    document.getElementById(`lap${i + 1}n`).style.color = "green"
                    document.getElementById(`lap${i + 1}t`).style.color = "green"
                } else if (laps[i] === max) {
                    document.getElementById(`lap${i + 1}n`).style.color = "red"
                    document.getElementById(`lap${i + 1}t`).style.color = "red"
                }

            }
            for (let i = 0; i < laps.length; i++) {
                if (laps[i] !== min && laps[i] !== max) {
                    document.getElementById(`lap${i + 1}n`).style.color = "white"
                    document.getElementById(`lap${i + 1}t`).style.color = "white"
                }
            }


        }


    }





    else {
        let elem = document.getElementById("reset");

        document.getElementById("counter").innerHTML = (humanReadable(seconds))


        for (let i = 0; i < laps.length + 1; i++) {
            document.getElementById(`lap${i}n`).innerText = ""
            document.getElementById(`lap${i}t`).innerText = ""
        }


        let paras = document.getElementsByClassName('newlaps');
        while (paras[0]) {
            paras[0].parentNode.removeChild(paras[0]);
        }

        seconds = 0
        laps = []

        document.getElementById("counter").innerHTML = (humanReadable(seconds))

    }

}


