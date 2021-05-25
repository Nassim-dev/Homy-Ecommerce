
const nameCat = document.querySelector(".name-category")

const listContainer = document.querySelector(".list-item")

const card = document.querySelector(".card")



let globalMobilier = false
console.log("hello world")




function getData(indx) {
    fetch('script/data.json')
    .then(response => {
        return response.json()
    })
    .then(function(json) { 
        console.log(json)
        for(var i = 0; i < Object.keys(json.Categories[0])[0].length; i++) {
        
            listItem = json.Categories[0].Botanique[i].Nom;
            console.log(listItem)
        }

        
    })
    
}

const data = getData()


