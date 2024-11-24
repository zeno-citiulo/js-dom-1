const buttonToggle = document.querySelector('.btn')
const closeButton = document.querySelector('.btn-a')

buttonToggle.addEventListener('click', () => {
  const buttonSpento = document.querySelector('.btn')
  buttonSpento.classList.add('active')
})

closeButton.addEventListener('click', () => {
  const buttonSpento = document.querySelector('.btn')
  buttonSpento.classList.remove('active')
})

const lampSpenta = document.querySelector('.lamp-spenta')
const spegniLamp = document.querySelector('.lamp-accesa')

lampSpenta.addEventListener('click', () => {
  const spentaLamp = document.querySelector('.lamp-spenta')
  lampSpenta.classList.add('active')
})

spegniLamp.addEventListener('click', () => {
  const lampSpegni = document.querySelector('.lamp-accesa')
  spegniLamp.classList.add('active')
})