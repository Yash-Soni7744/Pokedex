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
        document.querySelector('.information-block').style.background = '#0D1D45'
        document.querySelector('.type-box').style.background = '#0D1D45'

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
        document.querySelector('.information-block').style.background = '#303D5E'
        document.querySelector('.type-box').style.background = '#303D5E'
    }
    isDarkTheme = !isDarkTheme
})

let searchButton = document.querySelector('.search-button')

// Event listener for the search button click
function main(){
  let input = document.querySelector('.search-area').value;
  let url = `https://api.pokemon.project.projectrexa.dedyn.io/pokeapi/${input}`;
  
  fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((value) => {
    let loweredInput = input.toLowerCase()
    console.log(loweredInput)
    
    if (input == value.id || loweredInput === value.name) {
      let firstCapitalizedChar = value.name.charAt(0).toUpperCase();
      document.querySelector('#pokemon-name').innerHTML = firstCapitalizedChar + value.name.slice(1);
      document.getElementById('pokemon-image').src = value.image;
      document.querySelector('.type-box').querySelector('p').innerHTML = value.primary_type;
      document.querySelector('.description').querySelector('p').innerHTML = value.description;
      
    }else {
      alert('No Pokemon Found');
    }
    const height = value.height
    const weight = value.weight
    const HP = value.hp
    const attack = value.attack
    const sp_attack = value.special_attack
    const defence = value.defence
    const sp_defence = value.special_defence
    const speed = value.speed

    
  })
}
searchButton.addEventListener('click', function(e) {
    main()
});
document.querySelector('.search-area').addEventListener('keyup', function(e) {
    if (e.keyCode == 13) {
        main(); // Call the main function when Enter is pressed
    }
});
  
  // Event listener for the Enter key press
  