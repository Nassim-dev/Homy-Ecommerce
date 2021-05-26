
let nameCat = document.querySelector(".name-category")

const listContainer = document.querySelector(".list-item")

const card = document.querySelector(".card")

let globalMobilier = false

console.log("hello world")

function getData(indx) {

    console.log("getDATA")
    
    fetch('script/data.json')
    .then(response => {
        return response.json()
    })
    .then(function(json) {

        var catName = Object.keys(json.Categories[indx])[0]
        nameCat.innerHTML = catName

        function listing(Cat) {

            for(var i = 0; i < Object.values(json.Categories[indx])[0].length; i++) {
        
                listItem = Object.values(Cat)[i].Nom
                console.log(listItem)
            }
            
        }

        if (indx == 0) {
            
        var cat = json.Categories[0].Botanique
        const ls = listing(cat)
    
        }
        if (indx == 1) {
            var cat = json.Categories[1].Luminaire
            const ls = listing(cat)
        }
        if (indx == 2) {
            var cat = json.Categories[2].Mobilier
            const ls = listing(cat)
        }

        
    })
}

// Mafonction getData fonctionne très bien lorsque je suis sur le fichier JS. dès lors que je fais appel à la fonction coté HTML rien ne fonctionne.
// Comment faire en sorte d'entrer en paramètre le bon parametre en fonction de la catégorie cliqué precedement sur l'index ?

// J'ai essayé ca sans succès >
// var x = document.getElementById("2").itemid

// data = getData(x)




