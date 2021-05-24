

const listContainer = document.querySelector(".list-item")
let value = document.querySelector("#mobilier").value
const nameCat = document.querySelector(".name-category")

let globalMobilier = false


window.addEventListener("load", function(e) {
    console.log("click")
    nameCat.innerHTML = "hello"
})

function OpenJSON_Category(cat) {
    console.log("open")
    fetch('json.json').then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    }).then(function(json) {

        if (cat == "Botanique"){
            cat = json.Categories[0].Botanique
        return cat
        }
        if (cat == "Luminaire"){
            cat = json.Categories[1].Luminaire
        return cat
        }
        if (cat == "Mobilier"){
            console.log("open MOB")
            cat = json.Categories[2].Mobilier
            nameCat.innerHTML = "Mobilier"
        return cat
        }

    })
}

class Products {
    async getProducts(){
        try {
            let json = await fetch('json.json')
            let data = await json.json()
             
        } catch (error) {
            console.log("Erreur !!")
        }
    }
}