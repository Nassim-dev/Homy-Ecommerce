
const nameCat = document.querySelector(".name-category")

const listContainer = document.querySelector(".list-item")

const card = document.querySelector(".card")



let globalMobilier = false
console.log("hello world")




function getData() {
    fetch('./js/data.json')
    .then(response => {
       console.log("HElllo TEST")
        console.log(response.json())
    })
    
}

getData()
