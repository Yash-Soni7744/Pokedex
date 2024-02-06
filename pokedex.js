let theme = document.querySelector(".theme-changer")
let theme_button = document.querySelector('.theme-button')
let search_block = document.querySelector('.search-area')
var isDarkTheme = false;
document.querySelector('.type-box2').style.display = "none"
theme.addEventListener('click', function () {

  isDarkTheme = !isDarkTheme
  if (isDarkTheme) {
    theme.style.justifyContent = 'flex-start'
    // theme_button.style.left = '3%'
    theme_button.style.background = 'white'
    theme_button.style.marginLeft = '3px'
    theme.style.background = '#0D1D45'
    document.body.style.background = 'white'
    document.getElementById('welcome_text').style.color = 'black'
    search_block.style.background = '#D9D9D9'
    search_block.style.color = "#0D1D45"
    document.querySelector('.search-button').style.background = "#0D1D45"
    document.querySelector('#svg').style.fill = "white"
    theme.style.transition = "justify-content 0.4s ease-in-out"
    theme_button.style.transition = 'all 0.4s ease-in-out'
    document.querySelector('.information-block').style.background = '#0D1D45'
    document.querySelector('.type-box').style.background = '#0D1D45'

  }
  else {
    theme.style.justifyContent = 'flex-end'
    // theme_button.style.left = '65%'
    theme_button.style.marginRight = '3px'
    theme_button.style.background = '#0D1D45'
    theme.style.background = '#FFCB04'
    document.body.style.background = '#0D1D45'
    document.getElementById('welcome_text').style.color = 'white'
    search_block.style.background = '#303D5E'
    search_block.style.color = "#FFCB04"
    document.querySelector('.search-button').style.background = "#FFCB04"
    document.querySelector('#svg').style.fill = "black"
    theme_button.style.transition = 'all 0.4s ease-in-out'
    theme.style.transition = "justify-content 0.4s ease-in-out"
    document.querySelector('.information-block').style.background = '#303D5E'
    document.querySelector('.type-box').style.background = '#303D5E'
  }
})

let searchButton = document.querySelector('.search-button')

// Event listener for the search button click
function main() {
  let input = document.querySelector('.search-area').value;
  let url = `https://api.pokemon.project.projectrexa.dedyn.io/pokeapi/${input.toLowerCase()}`;

  fetch(url , {
    method: "GET",
    headers: {
      "Authorization": "E11C11FAF4381CA98479597E887C8"
    }
  })
    .then((response) => {
      if(response.status===404){
        alert('No pokemon found')
      }
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
        document.querySelector('#pokemon-image').src = value.image;

        document.querySelector('.type-box1').querySelector('p').innerHTML = value.primary_type.toUpperCase();
        if(value.secondary_type !==null){
          document.querySelector('.type-box2').style.display = "flex"
          document.querySelector('.type-box2').querySelector('p').innerHTML = value.secondary_type.toUpperCase();
        }
        else{
          document.querySelector('.type-box2').style.display = "none"
        }
        
        document.querySelector('.description').querySelector('p').innerHTML = value.description;

        //height calcualtion
        const height = value.height
        const maxHeight = 210
        const heightPercent = (height / maxHeight) * 100

        //weight calculation
        const weight = value.weight
        const maxWeight = 10000
        const weightPercent = (weight / maxWeight) * 100

        //hp calculation
        const HP = value.hp
        const maxHP = 255
        const HPPercent = (HP / maxHP) * 100

        //attack calculation
        const attack = value.attack
        const maxAttack = 190
        const attackPercent = (attack / maxAttack) * 100

        //sp-attack calculation
        const sp_Attack = value.special_attack
        const maxsp_Attack = 195
        const sp_AttackPercent = (sp_Attack / maxsp_Attack) * 100

        //defence calculation
        const defence = value.defence
        const maxDefence = 230
        const defencePercent = (defence / maxDefence) * 100

        //sp-defence calculation
        const sp_defence = value.special_defence
        const maxsp_Defence = 230
        const sp_defencePercent = (sp_defence / maxsp_Defence) * 100

        //speed calculation
        const speed = value.speed
        const maxSpeed = 180
        const speedPercent = (speed / maxSpeed) * 100

        //blinker position setting
        const updateBlinker = (attribute, percent) => {

          const progressBars = document.getElementById(attribute)

          progressBars.style.animation = "none"
          void progressBars.offsetWidth;

          progressBars.style.animation = `${attribute} 1.3s linear forwards`
          progressBars.style.width = percent + "%"


        }
        const progressBlinkers = document.querySelectorAll(".progress-bar-div")
        progressBlinkers.forEach((progressBlinker) => {
          // const id = progressBlinker.parentElement.id;

          // Position the blinker at the end of the progress bar
          const blinker = progressBlinker.parentElement.querySelector(".blinker");

          blinker.style.left = '95%'; // Position at the end



          setInterval(function () {
            blinker.style.opacity = 1
            blinker.style.transition = '0.7s ease-out'
          }, 800)
          setInterval(function () {
            blinker.style.opacity = 0
            blinker.style.transition = '0.7s ease-in'
          }, 1600)

        })

        updateBlinker('height', heightPercent)
        updateBlinker('weight', weightPercent)
        updateBlinker('HP', HPPercent)
        updateBlinker('attack', attackPercent)
        updateBlinker('special-attack', sp_AttackPercent)
        updateBlinker('defence', defencePercent)
        updateBlinker('special-defence', sp_defencePercent)
        updateBlinker('speed', speedPercent)

        // scrolling the page
        // Get the element you want to scroll to by its ID or any other method.
        const targetElement = document.getElementById("pokemon-image");
        // Scroll to the target element.
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });

      }
      
    })
    .catch((err)=>{
      alert('server down for maintenance ',err)
      console.log(new Error("Error because of the server issue"))
    })

}
searchButton.addEventListener('click', function (e) {
  e.preventDefault()
  main()
});
// search_block.addEventListener('keyup', function(e) {
//     if (e.keyCode == 13) {  // 13 for enter key
//         main(); 
//     }
// });

window.addEventListener('load', (e) => {
  window.scrollTo(0, 0);
});

