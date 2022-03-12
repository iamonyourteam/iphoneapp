

function worldClockSearchPage() {
    document.querySelector(".cityNamesPage").style.top = "0vh"
}

function closeWorldClockSearchPage() {
    document.querySelector(".cityNamesPage").style.top = "100vh"

}



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
            alphabetLetter.setAttribute("id", `alphabetLetter${i}`)
            alphabetLetter.setAttribute("class", "alphabetLetter")
            alphabetLetter.innerText = ABC[i]
            document.querySelector(".cityNamesCont").appendChild(alphabetLetter)

            for (j = 0; j < data.length; j++) {
                if (ABC[i] == data[j].city.split("")[0]) {
                    let city = document.createElement("div");
                    city.setAttribute("id", `city${i}`)
                    city.setAttribute("class", "cityName")
                    city.innerText = data[j].city
                    cityNames.push(data[j].city)
                    document.querySelector(".cityNamesCont").appendChild(city)
                }
            }


        }
    })

///