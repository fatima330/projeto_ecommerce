// Função para validar o formulário de pagamento
function validarFormularioDePagamento() {
    var form = document.getElementById('paymentForm');
    form.addEventListener('submit', function(event) {
        var cartao = document.getElementById('cartao').value;
        var validade = document.getElementById('validade').value;
        var cvv = document.getElementById('cvv').value;

        // Validação simples para campos não vazios
        if (cartao.trim() === '' || validade.trim() === '' || cvv.trim() === '') {
            alert('Por favor, preencha todos os campos do formulário de pagamento.');
            event.preventDefault(); // Impede o envio do formulário se houver campos vazios
        } else {
            alert('Compra finalizada com sucesso!');
            // Aqui podemos redirecionar para uma pagina
        }
    });
}
