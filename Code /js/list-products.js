
const nameCat = document.querySelector(".name-category")

const listContainer = document.querySelector(".list-item")

const card = document.querySelector(".card")



let globalMobilier = false
console.log("hello world")

fetch("json.json").then(response => {
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    return response.json();
}).then(function(json) {
    
    for(var i = 0; i < Object.keys(json.Categories[0])[0].length; i++) {

        console.log(Object.keys(json.Categories[0])[0].length)
    
    }
   
})
