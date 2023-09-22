let theme = document.querySelector(".theme-changer")
let theme_button = document.querySelector('.theme-button')
theme_button.addEventListener('click',function(){
    theme_button.style.left = '3px'
    theme_button.style.background = 'white'
    theme.style.background = '#0D1D45'
    document.body.style.background = 'white'
    document.getElementById('welcome_text').style.color = 'black'
})


let url = "https://api.pokemon.project.projectrexa.dedyn.io/pokeapi"
let response = fetch(url)
response.then((value)=>{
    return value.json()
}).then((value)=>{
    console.log(value)
})