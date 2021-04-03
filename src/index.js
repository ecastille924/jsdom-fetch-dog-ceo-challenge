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





// Challenge 2
// - on page load, fetches all the dog breeds using the url above ⬆️
// - adds the breeds to the page in the `<ul>` provided in `index.html`

// ## Challenge 3

// Once all of the breeds are rendered in the `<ul>`, add JavaScript so that, when
// the user clicks on any one of the `<li>`s, the font color of that `<li>`
// changes. This can be a color of your choosing.

// ---

// ## Challenge 4

// Once we are able to load _all_ of the dog breeds onto the page, add JavaScript
// so that the user can filter breeds that start with a particular letter using a
// dropdown.

// For example, if the user selects 'a' in the dropdown, only show the breeds with
// names that start with the letter a. For simplicity, the dropdown only includes
// the letters a-d. However, we can imagine expanding this to include the entire
// alphabet.
