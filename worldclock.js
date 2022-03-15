

function worldClockSearchPage() {
    document.querySelector(".cityNamesPage").style.top = "0vh"
}


let worldClockCities = []

// using Json data to creat list of city names 

let ABC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let cityNames = []
let cityNamesFilter = []
let removeFilterNodes = document.querySelector(".cityNamesFilterCont")

let citySearch = function () {
    cityNamesFilter = []

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    removeAllChildNodes(removeFilterNodes)

    let searchValue = document.getElementById("search").value.toLowerCase()



    if (searchValue != "") {
        document.querySelector(".cityNamesCont").style.visibility = "hidden"
        document.querySelector(".cityNamesFilterCont").style.visibility = "visible"

        for (i = 0; i < cityNames.length; i++) {
            if (cityNames[i].toLowerCase().includes(searchValue) === true) {
                cityNamesFilter.push(cityNames[i])
            }
        }

        for (j = 0; j < cityNamesFilter.length; j++) {

            let cityf = document.createElement("div");
            cityf.setAttribute("id", `cityf${j}`)
            cityf.setAttribute("class", "cityfName")
            cityf.setAttribute("onClick", `addCity( ${cityNames.indexOf(cityNamesFilter[j])}  )`)

            cityf.innerText = cityNamesFilter[j]
            document.querySelector(".cityNamesFilterCont").appendChild(cityf)
        }


    }
    else {
        document.querySelector(".cityNamesCont").style.visibility = "visible"
        document.querySelector(".cityNamesFilterCont").style.visibility = "hidden"


    }
}


fetch("./worldCities.json")
    .then(function (resp) {
        return resp.json();
    }
    )
    .then(function (data) {
        console.log(data);


        //Creating alphabetical breaks between city names//
        console.log(ABC)

        for (i = 0; i < 26; i++) {
            let alphabetLetter = document.createElement("div");
            alphabetLetter.setAttribute("id", `alphabetLetter${i} `)
            alphabetLetter.setAttribute("class", "alphabetLetter")
            alphabetLetter.innerText = ABC[i]
            document.querySelector(".cityNamesCont").appendChild(alphabetLetter)

            for (j = 0; j < data.length; j++) {
                if (ABC[i] == data[j].city.split("")[0]) {
                    let city = document.createElement("div");
                    city.setAttribute("id", `city${i} `)
                    city.setAttribute("class", "cityName")
                    city.setAttribute("onClick", `addCity(${j})`)
                    city.innerText = data[j].city
                    cityNames.push(data[j].city)
                    document.querySelector(".cityNamesCont").appendChild(city)
                }
            }


        }
    })

///
//CLoses City Search page, Clears search feild and reverts back to all cities// 
function closeWorldClockSearchPage() {
    document.querySelector(".cityNamesPage").style.top = "100vh"
    document.getElementById("search").value = ""
    citySearch()
}

function addCity(city) {
    closeWorldClockSearchPage()
    console.log(city)

    if (worldClockCities.includes(cityNames[city]) == false) {

        worldClockCities.push(cityNames[city])
        console.log(worldClockCities)


        let addWCWraperContainer = document.createElement("div")
        addWCWraperContainer.setAttribute("class", "WCWraperContainer")
        addWCWraperContainer.setAttribute("id", `WCWraperContainer${city}`)
        document.querySelector(".worldClockCities").appendChild(addWCWraperContainer)


        let addWCCityWrapper = document.createElement("div")
        addWCCityWrapper.setAttribute("class", "WCCityWrapper")
        addWCCityWrapper.setAttribute("id", `WCCityWrapper${city}`)

        document.querySelector(`#WCWraperContainer${city}`).appendChild(addWCCityWrapper)


        let addWCDay = document.createElement("div")
        addWCDay.setAttribute("class", "WCDay")
        addWCDay.setAttribute("id", `WCDay${city}`)
        document.querySelector(`#WCCityWrapper${city}`).appendChild(addWCDay)
        addWCDay.innerText = "Today"

        let addWCCity = document.createElement("div")
        addWCCity.setAttribute("class", "WCCity")
        addWCCity.setAttribute("id", `WCCity${city}`)
        addWCCity.innerText = cityNames[city]
        document.querySelector(`#WCCityWrapper${city}`).appendChild(addWCCity)


        let addWCTimeWrapper = document.createElement("div")
        addWCTimeWrapper.setAttribute("class", "WCTimeWrapper")
        addWCTimeWrapper.setAttribute("id", `WCTimeWrapper${city}`)
        document.querySelector(`#WCWraperContainer${city}`).appendChild(addWCTimeWrapper)

        let addWCTime = document.createElement("div")
        addWCTime.setAttribute("class", "WCTime")
        addWCTime.setAttribute("id", `WCTime${city}`)
        addWCTime.innerText = "9:99"
        document.querySelector(`#WCTimeWrapper${city}`).appendChild(addWCTime)


        let addWCAMPM = document.createElement("div")
        addWCAMPM.setAttribute("class", "WCAMPM")
        addWCAMPM.setAttribute("id", `WCAMPM${city}`)
        addWCAMPM.innerText = "AM"
        document.querySelector(`#WCTimeWrapper${city}`).appendChild(addWCAMPM)

    }
}

