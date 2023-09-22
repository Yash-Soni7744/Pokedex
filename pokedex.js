let theme = document.querySelector(".theme-changer")
let theme_button = document.querySelector('.theme-button')
let search_block = document.querySelector('.search-area')
var isDarkTheme = false;
theme_button.addEventListener('click',function(){

    if (isDarkTheme){
        theme_button.style.left = '3px'
        theme_button.style.background = 'white'
        theme.style.background = '#0D1D45'
        document.body.style.background = 'white'
        document.getElementById('welcome_text').style.color = 'black'
        search_block.style.background = '#D9D9D9'
        search_block.style.color ="#0D1D45"
        document.querySelector('.search-button').style.background = "#0D1D45"
        document.querySelector('#svg').style.fill = "white"
        theme_button.style.transition = '0.5s ease-in-out'
    }
    else{
        theme_button.style.left = '82px'
        theme_button.style.background = '#0D1D45'
        theme.style.background = '#FFCB04'
        document.body.style.background = '#0D1D45'
        document.getElementById('welcome_text').style.color = 'white'
        search_block.style.background = '#303D5E'
        search_block.style.color ="#FFCB04"
        document.querySelector('.search-button').style.background = "#FFCB04"
        document.querySelector('#svg').style.fill = "black"
        theme_button.style.transition = '0.5s ease-in-out'
    }
    isDarkTheme = !isDarkTheme
})

const id = NULL;let url = `https://api.pokemon.project.projectrexa.dedyn.io/pokeapi/${id}`

let response = fetch(url)
response.then((value)=>{
    return value.json()
}).then((value)=>{
    console.log(value)
})
let ID = document.querySelector('.search').value
let searchButton = document.querySelector('.search-button')

if (ID == id){
    console.log(value)
}
