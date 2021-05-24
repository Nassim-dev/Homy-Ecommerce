
const nameCat = document.querySelector(".name-category")

const listContainer = document.querySelector(".list-item")

const card = document.querySelector(".card")



let globalMobilier = false
console.log("hello world")




function getData() {
    fetch('script/data.json')
    .then(response => {
        return response.json()
    })
    .then(response=> { resolve (response)})
    
}

const data = getData()

console.log(data)

