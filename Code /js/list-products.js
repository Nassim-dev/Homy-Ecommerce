

const listContainer = document.querySelector(".list-item")
let value = document.querySelector("#mobilier").value
const nameCat = document.querySelector(".name-category")
console.log("hello")
const myList = document.querySelector(".liste");
const categorie = document.querySelector(".categorie")
const app = document.querySelector(".app")

let globalMobilier = false


window.addEventListener("load", function(e) {
    console.log("click")
    nameCat.innerHTML = "hello"
})



fetch('json.json').then(response => {
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    return response.json();
}).then(function(json) {
    
    for(var i = 0; i < Object.keys(json.Categories[0])[0].length; i++) {

        // https://stackoverflow.com/questions/44096494/getting-using-json-object-key-names

        var keyB = Object.keys(json.Categories[0])[0]
        var listItem = document.createElement('li');
        const bota = json.Categories[0].Botanique
        var pic = json.Categories[0].Botanique[0].Image


        categorie.innerHTML = keyB
        var oh = json.Categories["Botanique"]
        console.log("Oh"+oh)

        listItem.innerHTML = json.Categories[0].Botanique[i].Nom;
        
        
        console.log("==>"+bota[1].Nom)
      
        myList.appendChild(listItem);
    
    }
    const find = json.Categories[0].Botanique.find(item => item.ID === "BO3")
    console.log("find = "+find)

    var img = '<img src="'+pic+'" alt=""></img>'
    app.innerHTML = img
})
