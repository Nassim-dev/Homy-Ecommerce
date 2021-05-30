
let productname = document.querySelector(".header_article h1")
let picture = document.querySelector(".image_article")
let mainArticle = document.querySelector(".main_article")
let starFav = document.querySelector(".favorite_article p")

// On essaie de savoir quel produit a été choisi 
var queryString = location.search.substring(1)
var a = queryString.split("/")
index = parseInt(a[0])
i = parseInt(a[1])
data = getData(index)

////////<PANIER>
/////// Ajout à la page panier
// On créer une liste accessible et qui ne disparait pas lors du rafraichissement

panier = []
sessionStorage.setItem("panier", JSON.stringify(panier))
jsonPanier = JSON.parse(sessionStorage.getItem("panier"))

/////////</PANIER>


function getData(indx) {

    console.log("getDATA")
    
    fetch('script/data.json')
    .then(response => {
        return response.json()
    })
    .then(function(json) {

        function listing(cat) {
           
            let nameProduct = Object.values(cat)[i].Nom
            let price = Object.values(cat)[i].Prix
            let description = Object.values(cat)[i].Description
            let pic =  Object.values(cat)[i].Image
            let myList = document.querySelector(".list-item")
            let star =  Object.values(cat)[i].Avis
                
            productname.innerHTML = nameProduct
            picture.innerHTML = '<img src= '+pic+'>'
            mainArticle.innerHTML = '<p>'+description+'</p><h2>'+price+'</h2>'
            starFav.innerHTML = star
            
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

let buttonAjoutAuPanier = document.querySelector(".paniershop")
var getNumberPanier = parseInt(sessionStorage.getItem("numberPanier"))
    
document.querySelector(".number span").innerHTML = getNumberPanier

buttonAjoutAuPanier.addEventListener('click', function(e) {
    console.log("click")
    // Vérifier que le produit est déjà dans le panier ou non
    // SI non:
    //   Incrémenter de 1 le panier
    var getNumberPanier = parseInt(sessionStorage.getItem("numberPanier"))
    
    sessionStorage.setItem("numberPanier", ++getNumberPanier)
    console.log(getNumberPanier)
    document.querySelector(".number span").innerHTML = getNumberPanier
    //   Ajouter [inx,i] dans la liste panier dans le session storage 
})





