
const nameCat = document.querySelector(".name-category")

const listContainer = document.querySelector(".list-item")

const card = document.querySelector(".card")



let globalMobilier = false
console.log("hello world")


class DATA {

    GetData() {
        let json = fetch('DATA.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            let data = response.json()
            return data;
        })
        return json;
    }
}

data = new DATA();
data = data.GetData();

console.log(data)


