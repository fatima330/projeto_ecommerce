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
const valorSubtotal = document.getElementById("valor-subtotal");

btnSubtrairProduto.addEventListener("click", function() {
subtrairUm();
atualizarSubtotal();
})

function subtrairUm(){
const subtrair = Number(btnContador.innerText) -1; 
btnContador.innerText = subtrair;
}


//CODIGO DO BOTAO DE ADICIONAR  UM PRODUTO
const btnAdicionarProduto = document.getElementById("adicionar");

btnAdicionarProduto.addEventListener("click", function()  {
  adicionarUm();
  atualizarSubtotal();
})

function adicionarUm() {
  const adicionar = Number(btnContador.innerText) + 1;
  btnContador.innerText = adicionar;
}

//SUBTOTAL DO PRODUTO ATUALIZADO
function atualizarSubtotal() {
  const valorAtual = Number(valorSubtotal.innerText.replace("R$ ", ""));
  const novoSubtotal = Number(btnContador.innerText) * 150; // 150 é o valor unitário
  valorSubtotal.innerText = "R$ " + novoSubtotal;
}



//----------------------------------------------------------------

//CODIGO DO BOTAO DE DIMINUIR DO SEGUNDO PRODUTO
const btnSubtrairProduto1 = document.getElementById("subtrair1");
var btnContador1 = document.getElementById("contador1");
const valorSubtotal1 = document.getElementById("valor-subtotal1");


btnSubtrairProduto1.addEventListener("click", function() {
subtrair1();
atualizarSubtotal1();
})

function subtrair1(){
const subtrair1 = Number(btnContador1.innerText) -1; 
btnContador1.innerText = subtrair1;
}

//CODIGO DO BOTAO DE ADICIONAR DO SEGUNDO PRODUTO
const btnAdicionarProduto1 = document.getElementById("adicionar1");

btnAdicionarProduto1.addEventListener("click", function()  {
  adicionar1();
  atualizarSubtotal1();
})

function adicionar1() {
  const adicionar1 = Number(btnContador1.innerText) + 1;
  btnContador1.innerText = adicionar1;
}

function atualizarSubtotal1() {
  const valorAtual1 = Number(valorSubtotal1.innerText.replace("R$ ", ""));
  const novoSubtotal1 = Number(btnContador1.innerText) * 170; // 170 é o valor unitário
  valorSubtotal1.innerText = "R$ " + novoSubtotal1;
}

const subtotalResumo = document.getElementById("subtotal")

const total = document.getElementById("total")

