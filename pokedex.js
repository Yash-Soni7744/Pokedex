let theme = document.querySelector(".theme-changer")
let theme_button = document.querySelector('.theme-button')
let search_block = document.querySelector('.search-area')
var isDarkTheme = false;
theme.addEventListener('click',function(){

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
  let url = `https://api.pokemon.project.projectrexa.dedyn.io/pokeapi/${input.toLowerCase()}`;
  
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

      //height calcualtion
      const height = value.height
      const maxHeight = 210
      const heightPercent = (height/maxHeight)*100
  
      const heightProgress =  document.getElementById('height')
      heightProgress.style.width = heightPercent+'%'
      heightProgress.style.animation = 'height 1s linear forwards'

      //weight calculation
      const weight = value.weight
      const maxWeight = 10000
      const weightPercent = (weight/maxWeight)*100
  
      const weightProgress =  document.getElementById('weight')
      weightProgress.style.width = weightPercent+'%'

      // search_block.addEventListener('keyup',restartAnimation,false)

      // function restartAnimation(e){
      //   if(e.keyCode == 13){

      //     weightProgress.style.animationName = 'none'
      //     weightProgress.style.animation = 'weight 1s linear forwards'
          
      //     requestAnimationFrame(()=>{
      //       weightProgress.style.animationName = "weight"
            
      //     })
      //   }
      // }      
      //hp calculation
      const HP = value.hp
      const maxHP = 255
      const HPPercent = (HP/maxHP)*100
      
      const HPProgress =  document.getElementById('HP')
      HPProgress.style.width = HPPercent+'%'
      HPProgress.style.animation = 'HP 1s linear forwards'

      //attack calculation
      const attack = value.attack
      const maxAttack = 190
      const attackPercent = (attack/maxAttack)*100
  
      const attackProgress =  document.getElementById('attack')
      attackProgress.style.width = attackPercent+'%'
      attackProgress.style.animation = 'attack 1s linear forwards'
      
      //sp-attack calculation
      const sp_Attack = value.special_attack
      const maxsp_Attack = 195
      const sp_AttackPercent = (sp_Attack/maxsp_Attack)*100
      
      const sp_AttackProgress =  document.getElementById('special-attack')
      sp_AttackProgress.style.width = sp_AttackPercent+'%'
      sp_AttackProgress.style.animation = 'special-attack 1s linear forwards'
      
      //defence calculation
      const defence = value.defence
      const maxDefence = 230
      const defencePercent = (defence/maxDefence)*100
      
      const defenceProgress =  document.getElementById('defence')
      defenceProgress.style.width = defencePercent+'%'
      defenceProgress.style.animation = 'defence 1s linear forwards'

      //sp-defence calculation
      const sp_defence = value.special_defence
      const maxsp_Defence = 230
      const sp_defencePercent = (sp_defence/maxsp_Defence)*100
  
      const sp_defenceProgress =  document.getElementById('special-defence')
      sp_defenceProgress.style.width = sp_defencePercent+'%'
      sp_defenceProgress.style.animation = 'special-defence 1s linear forwards'

      //speed calculation
      const speed = value.speed
      const maxSpeed = 180
      const speedPercent = (speed/maxSpeed)*100
  
      const speedProgress =  document.getElementById('speed')

      speedProgress.style.width = speedPercent+'%'
      speedProgress.style.animation = 'speed 1s linear forwards'


    }else {
      alert('No Pokemon Found');
    }

  })
}
searchButton.addEventListener('click', function(e) {
    main()
});
search_block.addEventListener('keyup', function(e) {
    if (e.keyCode == 13) {  // 13 for enter key
        main(); 
    }
});
  
  