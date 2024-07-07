//CODIGO DO BOTAO REMOVER
const btnRemoverProduto = document.getElementsByClassName("delete");
console.log(btnRemoverProduto)

for (var i = 0; i < btnRemoverProduto.length; i++) {
  btnRemoverProduto[i].addEventListener("click", function() {
    event.target.parentElement.parentElement.remove()
  })
}

//CODIGO DO BOTAO DE DIMINUIR UM PRODUTO
const btnSubtrairProduto = document.getElementById("subtrair");
var btnContador = document.getElementById("contador");

btnSubtrairProduto.addEventListener("click", function() {
subtrairUm();
})

function subtrairUm(){
const subtrair = Number(btnContador.innerText) -1; 
btnContador.innerText = subtrair;
}

//CODIGO DO BOTAO DE ADICIONAR  UM PRODUTO
const btnAdicionarProduto = document.getElementById("adicionar");

btnAdicionarProduto.addEventListener("click", function()  {
  adicionarUm();
})

function adicionarUm() {
  const adicionar = Number(btnContador.innerText) + 1;
  btnContador.innerText = adicionar;
}

