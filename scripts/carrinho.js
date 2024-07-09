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
const valorSubtotalProdutoPrimeiro = document.getElementById("valor-subtotal-produto-primeiro");
const valorPrimeiro = document.getElementById("valor-primeiro");

//VARIAVEIS DA CAIXA DE RESUMO DE COMPRAS
const subtotalResumo = document.getElementById("subtotal");
const total = document.getElementById("valor");

function subtotalResumoCompras() {
  const subtotal = Number ( valorSubtotalProdutoSegundo.innerText.replace("R$ ","")) + Number(valorSubtotalProdutoPrimeiro.innerText.replace("R$ ",""));
  subtotalResumo.innerText = "R$ " + subtotal;
}

function totalCompras() {
  debugger;
const comprasTotal = Number (subtotalResumo.innerText.replace("R$ ",""));
total.innerText = "R$ " + comprasTotal;
}


btnSubtrairProduto.addEventListener("click", function() {
subtrairUm();
atualizarSubtotalPrimeiroProduto();
subtotalResumoCompras();
totalCompras();

})

function subtrairUm(){
const subtrair = Number(btnContador.innerText) -1; 
btnContador.innerText = subtrair;
}


//CODIGO DO BOTAO DE ADICIONAR  UM PRODUTO
const btnAdicionarProduto = document.getElementById("adicionar");

btnAdicionarProduto.addEventListener("click", function()  {
  adicionarUm();
  atualizarSubtotalPrimeiroProduto();
  subtotalResumoCompras();
  totalCompras();

})

function adicionarUm() {
  const adicionar = Number(btnContador.innerText) + 1;
  btnContador.innerText = adicionar;
}

//(variavel.replace('valor', 'substituicao')

// ATUALIZA O VALOR QUANDO O USUARIO ACRESCENTA OU DIMINUI A QUANTIDADE DE PRODUTO
function atualizarSubtotalPrimeiroProduto() {
  const valorPrimeiroConvertido = Number(valorPrimeiro.innerText.replace("R$ ",""));
  const novoSubtotal = Number(btnContador.innerText) * valorPrimeiroConvertido; 
  valorSubtotalProdutoPrimeiro.innerText = "R$ " + novoSubtotal;
}



//----------------------------------------------------------------

//VARIAVEIS DO CODIGO DO BOTAO DE DIMINUIR DO SEGUNDO PRODUTO
const btnSubtrairProduto1 = document.getElementById("subtrair1");
var btnContador1 = document.getElementById("contador1");
const valorSubtotalProdutoSegundo = document.getElementById("valor-subtotal-produto-segundo");
const valorSegundo = document.getElementById("valor-segundo");


btnSubtrairProduto1.addEventListener("click", function() {
subtrair1();
atualizarSubtotalSegundoProduto();
subtotalResumoCompras();
totalCompras();
})

function subtrair1(){
const subtrair1 = Number(btnContador1.innerText) -1; 
btnContador1.innerText = subtrair1;
}

//CODIGO DO BOTAO DE ADICIONAR DO SEGUNDO PRODUTO
const btnAdicionarProduto1 = document.getElementById("adicionar1");

btnAdicionarProduto1.addEventListener("click", function()  {
  adicionar1();
  atualizarSubtotalSegundoProduto();
  subtotalResumoCompras();
  totalCompras();
})

function adicionar1() {
  const adicionar1 = Number(btnContador1.innerText) + 1;
  btnContador1.innerText = adicionar1;
}

//ATUALIZA O VALOR QUANDO O USUARIO ACRESCENTA OU DIMINUI A QUANTIDADE DE ITENS 
function atualizarSubtotalSegundoProduto() {
  const valorSegundoConvertido = Number(valorSegundo.innerText.replace("R$ ", ""));
  const novoSubtotal1 = Number(btnContador1.innerText) * valorSegundoConvertido;
  valorSubtotalProdutoSegundo.innerText = "R$ " + novoSubtotal1;
}

