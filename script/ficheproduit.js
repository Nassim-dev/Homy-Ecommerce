
let productname = document.querySelector(".header_article h1")
let picture = document.querySelector(".image_article")
let mainArticle = document.querySelector(".main_article")
let starFav = document.querySelector(".favorite_article p")

var queryString = location.search.substring(1)

var a = queryString.split("/")
console.log(a)
index = parseInt(a[0])
console.log(index)
i = parseInt(a[1])
console.log(i)
data = getData(index)


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
                

            console.log(nameProduct)

            productname.innerHTML = nameProduct
            picture.innerHTML = '<img src= '+pic+'>'

            mainArticle.innerHTML = '<p>'+description+'</p><h2>'+price+'</h2>'

            starFav.innerHTML = star

            myList.appendChild(listItem)
            
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






