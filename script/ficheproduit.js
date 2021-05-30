
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
localStorage.setItem("panier", JSON.stringify(panier))
jsonPanier = JSON.parse(localStorage.getItem("panier"))

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

// Init le panier est vide donc 0
getNumberPanier = panier.length


document.querySelector(".number span").innerHTML = getNumberPanier


buttonAjoutAuPanier.addEventListener('click', function(e) {
    console.log("click")
    // Vérifier que le produit est déjà dans le panier ou non
    // SI non:
    //   Ajouter [inx,i] dans la liste panier dans le session storage 

    panier.push([index,i])
    console.log(panier)

    localStorage.setItem("panier", JSON.stringify(panier))
    jsonPanier = JSON.parse(localStorage.getItem("panier"))

    // On vérifie l'incrémentation
    getNumberPanier = panier.length
    console.log(panier.length)
    localStorage.setItem("numberPanier", getNumberPanier)

    document.querySelector(".number span").innerHTML = getNumberPanier

    // //////// (J'ai eu un enorme problème, mon local_Storage se reinitialise à chaque fois, je n'ai pzs trouvé la solution et je serai ravie d'en discuter ultérieurement)
    // J'ai perdu bcp de temps à comprendre la raison, cela me bloque pour la partie panier
})





