
let nameCat = document.querySelector(".name-category")
const listContainer = document.querySelector(".list-item")
const card = document.querySelector(".card")



console.log("hello world")

function getData(indx) {

    console.log("getDATA")
    
    fetch('script/data.json')
    .then(response => {
        return response.json()
    })
    .then(function(json) {
        // NOM du Produit :
        var catName = Object.keys(json.Categories[indx])[0]
        nameCat.innerHTML = catName

        function listing(cat) {
            for(var i = 0; i < Object.values(json.Categories[indx])[0].length; i++) {
                var listItem = document.createElement('li')

                let nameProduct = Object.values(cat)[i].Nom
                let price = Object.values(cat)[i].Prix
                let description = Object.values(cat)[i].Description
                let pic =  Object.values(cat)[i].Image
                let myList = document.querySelector(".list-item")
                    
                let card = '<a class="pic" href="product.html"><img src= '+pic+' width="300" height="400px"></a><div class="containerUp"><h3 id="nom">'+nameProduct+'</h3><h3 id="price">'+price+'</h3></div><p class="information">'+description+'</p>'
                listItem.innerHTML = card

                console.log(nameProduct)
    
                myList.appendChild(listItem)
            }
        }

        if (indx == 0) {
            var cat = json.Categories[0].Botanique
            var ls = listing(cat)
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


// Accéder à l'index incrit en variable dans le lien

// https://lage.us/Javascript-Pass-Variables-to-Another-Page.html

var queryString = location.search.substring(1)
console.log(queryString)
data = getData(queryString)


