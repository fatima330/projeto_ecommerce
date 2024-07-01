const removeProductButtons = document.getElementsByClassName("delete");
console.log(removeProductButtons)

for (var i = 0; i < removeProductButtons.length; i++) {
  removeProductButtons[i].addEventListener("click", function() {
    event.target.parentElement.parentElement.remove()
  })
}