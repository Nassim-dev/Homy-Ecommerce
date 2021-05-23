// Afficher tous les éléments de la suggestions dans la barre de recherche 
let searchWrapper = document.querySelector(".search-input");
let inputBox = searchWrapper.querySelector("input");
let suggestionBox = searchWrapper.querySelector(".suggestion");

// Lorsque l'utilisateur tape les lettres correspondantes de l'objet voulu
inputBox = (letter)=>{
    let userData = letter.target.value;
    let emptyArray = [];
    if(userData){
        emptyArray = suggestion.filter((data) => {
            //Filtrer les mots en fonction des lettres tapé par l'utilisateur
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            return data = '<li>'+ data +'</li>';
        });
        console.log(emptyArray);
        searchWrapper.classList.add("active");
    } else {

    }
    showSuggestion(emptyArray);
}

function showSuggestion(list) {
    let listData;
    if(!list.lenght){

    }else{
        listData = list.join('');
    }
    suggestionBox.innerHTML(listData);
}

function OpenCategory(cat) {
    
}