const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

function dragstart(event) {
  event.target.classList.add("hold");
  setTimeout(() => {event.target.classList.add("hide")}, 0)
}

function dragend(event) {
  // event.target.className = "item";
  event.target.classList.remove('hold', 'hide')
}

for ( const placeholder of placeholders) {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", drop);
}

console.log(item.classList)

function dragover(event) {
  event.preventDefault();
}

function dragenter(event) {
  event.target.classList.add("hovered");
}

function dragleave(event) {
  event.target.classList.remove("hovered");
}

function drop(event) {

  event.target.classList.remove("hovered");
  event.target.append(item);
  if (placeholders[0].contains(item) == true) {

    item.classList.remove("mountain");
    
  } 
  else if (placeholders[1].contains(item) == true) {
   
    item.classList.add('mountain');
  }
}
