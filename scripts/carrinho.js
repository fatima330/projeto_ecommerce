const btnRemoverProduto = document.getElementsByClassName("delete");
console.log(btnRemoverProduto)

for (var i = 0; i <btnRemoverProduto.length; i++) {
  btnRemoverProduto[i].addEventListener("click", function() {
    event.target.parentElement.parentElement.remove()
  })
}

const btnSubtrairProduto = document.getElementsByClassName("bx bx-minus");
console.log(btnSubtrairProduto)

const btnAdicionarProduto = document.getElementsByClassName("bx bx-plus");
console.log(btnAdicionarProduto)


