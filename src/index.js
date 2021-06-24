console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', onLoad)

function onLoad(){
    fetchBreeds()
    fetchImages()
    const breedDropdown = document.getElementById("breed-dropdown")
    breedDropdown.addEventListener("change", filterBreeds)
}


function fetchImages(){
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(results => {
        results.message.forEach(dogPic => {
            addImage(dogPic)
        })
    })  
} 

function addImage(dogPic){
    const dogContainer = document.getElementById("dog-image-container")
    const dogImage = document.createElement("img")
    dogImage.src = dogPic
    dogContainer.append(dogImage)
    
    console.log(dogPic)
}

function fetchBreeds(){
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(results => {
        //debugger
        const breeds = Object.keys(results.message)
        addBreed(breeds)
    }) 
}

function addBreed(dogBreed){
    const breedUl = document.getElementById("dog-breeds")
    dogBreed.forEach(dogBreed => {
        const li = document.createElement("li")
        li.innerText = dogBreed
        breedUl.appendChild(li)
        li.addEventListener("click", function(event){
        event.target.style.color = "pink";
        })
    })
}


function filterBreeds(event){
    
    const userSelection = event.target.value
    breedList = document.getElementsByTagName("li")
    for (const breed of breedList){
        if (breed.innerText.startsWith(userSelection)){
            breed.style.display = ''
        } else {
            breed.style.display = 'none'
        }
    }  
}
