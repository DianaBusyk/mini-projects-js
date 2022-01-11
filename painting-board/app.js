const board = document.querySelector('#board')
const colors =[ 'rgb(255, 0, 149)', 'rgb(14, 247, 255)' , 'rgb(14, 255, 163)', 'rgb(255, 110, 110)', 'rgb(214, 110, 255)', 'rgb(255, 253, 110)']

const SQUARE_NUMBER = 810

for ( let i=0; i<SQUARE_NUMBER; i++){
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseleave', () => removeColor(square))


  board.append(square)
}

function setColor(element){
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow= `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
  element.style.backgroundColor ='rgb(29, 27, 27)'
  element.style.boxShadow='0 0 2px #000'
}

function getRandomColor(){
  const index = Math.floor(Math.random()*colors.length)
  return colors[index]
}