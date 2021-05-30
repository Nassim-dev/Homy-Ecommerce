// *** On va partir du principe qu'on a accès à la liste dans le localStorage ***
// On créer une pseudo liste de produits

whiteListe = [[1, 2],[1, 1],[0, 2]]
console.log(whiteListe)

let productname = document.querySelector(".header_article h1")
let picture = document.querySelector(".image_article")
let mainArticle = document.querySelector(".main_article")
let starFav = document.querySelector(".favorite_article p")

for (let index = 0; index < whiteListe.length; index++) {

    console.log(whiteListe[index][0])
    category = whiteListe[index][0]
    produit = whiteListe[index][1]

    getData(category)

    function getData(indx) {

        console.log("getDATA")
        
        fetch('script/data.json')
        .then(response => {
            return response.json()
        })
        .then(function(json) {
    
            function listing(cat) {
               
                let nameProduct = Object.values(cat)[produit].Nom
                let price = Object.values(cat)[produit].Prix
                let description = Object.values(cat)[produit].Description
                let pic =  Object.values(cat)[produit].Image
                let myList = document.querySelector(".list-item")
                let star =  Object.values(cat)[produit].Avis
                quantité = 1
                    
                document.querySelector(".infopanier").innerHTML = '<img src="'+pic+'" alt="produit" width="150px" height="150px"><h3>'+price+'</h3><div class="quantity"><h3>-</h3><h3>'+quantité+'</h3><h3>+</h3></div><h3>'+price+'</h3>'
                document.querySelector(".Montant_Total").innerHTML = price
        
                
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
    
    
}