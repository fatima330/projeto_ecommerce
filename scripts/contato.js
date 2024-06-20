// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

// ---------- VALIDAÇÃO mensage ---------- //
let mensageInput = document.getElementById("mensage");
let mensageLabel = document.querySelector('label[for="mensage"]');
let mensageHelper = document.getElementById("mensage-helper");


function mostrarPopup(input, label){
    // Mostrar popup de campo obrigatório
input.addEventListener("focus", function(){
    label.classList.add("required-popup");
})

// Ocultar popup de campo obrigatório
input.addEventListener("blur", function(){
    label.classList.remove("required-popup");
})

}
mostrarPopup(usernameInput, usernameLabel);
mostrarPopup(emailInput, emailLabel)
mostrarPopup(mensageInput, mensageLabel)


// Validar valor do input
usernameInput.addEventListener("change", function(event){
    let valor = event.target.value;
    if(valor.length < 3){
// CASO O VALOR NÃO SEJA VÁLIDO        
        usernameInput.classList.remove("correct");
        usernameInput.classList.add("error");
        usernameHelper.classList.add("visible");
        usernameHelper.innerText = "Seu nome dever ter 3 ou mais caracteres!"
    }else{
        usernameInput.classList.remove("error");
        usernameInput.classList.add("correct");
        usernameHelper.classList.remove("visible");
    }
})




mensageInput.addEventListener("change", function(event){
    let valor = event.target.value;
    if(valor.length < 5){
// CASO O VALOR NÃO SEJA VÁLIDO        
        mensageInput.classList.remove("correct");
        mensageInput.classList.add("error");
        mensageHelper.classList.add("visible");
        mensageHelper.innerText = "Sua mensagem dever ter 5 ou mais caracteres!"
    }else{
        mensageInput.classList.remove("error");
        mensageInput.classList.add("correct");
        mensageHelper.classList.remove("visible");
    }
})

emailInput.addEventListener("change", function(event){
    let valor = event.target.value

    if(valor.includes("@") && valor.includes(".com")){
        emailInput.classList.remove("error");
        emailInput.classList.add("correct");
        emailHelper.classList.remove("visible");
    }else{
        emailInput.classList.remove("correct");
        emailInput.classList.add("error");
        emailHelper.classList.add("visible");
        emailHelper.innerText = "Email invalido."
    }

    })

