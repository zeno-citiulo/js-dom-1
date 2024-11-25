const buttonToggle = document.getElementById('btn')
const lampSpenta = document.getElementById('lamp')
let isTurnOn = false

buttonToggle.addEventListener('click', () => {
  buttonToggle.classList.add('active')
  isTurnOn = ! isTurnOn
  if(isTurnOn){
    lampSpenta.src = 'img/yellow_lamp.png'
    buttonToggle.innerText = 'Spegni la lampadina'
  } else{
    lampSpenta.src = 'img/white_lamp.png'
    buttonToggle.innerText = 'Accendi la lampadina'
  }
} ) 