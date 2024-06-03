// Função para verificar o login e senha
function verificarLogin() {
    // Capturando os valores digitados nos campos de login e senha
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    // Condição para verificar se o login e a senha estão corretos
    if (login === "usuario@ring.com.br" && senha === "senha123") {
        // Se estiverem corretos, redirecionar para o dashboard
        window.location.href = "/HTML/dashboard.html";
    } else {
        // Caso contrário, exibir uma mensagem de erro
        alert("Login ou senha incorretos. Tente novamente.");
    }
}

// Evento de submissão do formulário de login
document.getElementById("login-form").addEventListener("submit", function(event){
    event.preventDefault(); // Evita que o formulário seja enviado automaticamente
    verificarLogin(); // Chama a função para verificar o login
});
