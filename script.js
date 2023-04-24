const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

cards.forEach(card => {
  card.addEventListener('dragstart', dragstart)
  card.addEventListener('drag', drag)
  card.addEventListener('dragend', dragend)
})

function dragstart() {
  dropzones.forEach( dropzone => dropzone.classList.add('highlight') )
}

function drag() {
  // console.log('Card:Is dragging')
}

function dragend() {
  // console.log('Card: Stop drag')
}

dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragenter', dragenter)
  dropzone.addEventListener('dragover', dragover)
  dropzone.addEventListener('dragleave', dragleave)
  dropzone.addEventListener('drop', drop)
})

function dragenter() {
  console.log('Dropzone: Enter in zone')
}

function dragover() {
  console.log('Dropzone: Over')
}

function dragleave() {
  console.log('Dropzone: Leave')
}

function drop() {
  console.log('Dropzone: Dropped in the zone')
}