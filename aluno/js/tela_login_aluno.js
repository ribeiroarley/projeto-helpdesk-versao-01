// Função para exibir mensagens de erro no formulário
function showError(message) {
    let errorDiv = document.querySelector(".error-message");
    if (!errorDiv) {
        errorDiv = document.createElement("div"); // Cria uma nova div se não existir
        errorDiv.className = "error-message";
        document.querySelector(".login-form").prepend(errorDiv); // Adiciona ao início do formulário
    }
    errorDiv.textContent = message;
    errorDiv.style.display = "block"; // Exibe a mensagem
}

// Adiciona um ouvinte de evento ao formulário de login quando ele é enviado
document.getElementById("loginAlunoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário (não recarrega a página)

    // Obtém os valores dos campos e o botão
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const button = document.querySelector(".login-button");

    // Regex para validar o formato básico do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Valida o formato do e-mail e o domínio específico
    if (!emailRegex.test(email) || !email.endsWith("@edu.df.senac.br")) {
        showError("Por favor, insira um e-mail válido do Senac (@edu.df.senac.br).");
        return;
    }

    // Valida se a senha tem pelo menos 6 caracteres
    if (senha.length < 6) {
        showError("A senha deve ter pelo menos 6 caracteres.");
        return;
    }

    // Desabilita o botão e exibe feedback visual
    button.disabled = true;
    button.textContent = "Carregando...";

    // Simula um delay de autenticação (substituir por chamada real ao backend em produção)
    setTimeout(() => {
        // Salva o nome do usuário (parte antes do @) e o status de login no localStorage
        localStorage.setItem("userName", email.split("@")[0]);
        localStorage.setItem("userLoggedIn", "true");
        // Redireciona para o painel de serviços
        window.location.href = "painel_servicos.html";
    }, 1000); // Delay de 1 segundo para simular processamento
});