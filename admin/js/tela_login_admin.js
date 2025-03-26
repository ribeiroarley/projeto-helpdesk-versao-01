// Função para exibir mensagens de erro no formulário
function showError(message) {
    const form = document.querySelector(".login-form");
    let errorDiv = document.querySelector(".error-message");
    
    // Remove qualquer mensagem de erro existente
    if (errorDiv) {
        errorDiv.remove();
    }
    
    // Cria e configura a nova mensagem de erro
    errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = message;
    form.prepend(errorDiv);
    errorDiv.style.display = "block";
}

// Adiciona um evento de submit ao formulário de login do administrador
document.getElementById("loginAdminForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)

    // Obtém os valores dos campos e o botão
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const button = document.querySelector(".login-button");

    // Regex para validar o formato básico do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Valida o formato do e-mail
    if (!emailRegex.test(email)) {
        showError("Por favor, insira um e-mail válido.");
        return;
    }

    // Carrega os administradores do localStorage
    const admins = JSON.parse(localStorage.getItem("admins")) || [];

    // Verifica se o e-mail e a senha correspondem a um administrador cadastrado
    const admin = admins.find(admin => admin.email === email && admin.senha === senha);

    if (!admin) {
        showError("E-mail ou senha inválidos.");
        return;
    }

    // Desabilita o botão e exibe feedback visual
    button.disabled = true;
    button.textContent = "Entrando...";

    // Salva o estado de login do administrador e redireciona após simulação
    setTimeout(() => {
        localStorage.setItem("adminLoggedIn", "true");
        localStorage.setItem("adminName", admin.nome); // Armazena o nome do admin
        localStorage.setItem("adminEmail", admin.email); // Armazena o e-mail do admin
        window.location.href = "painel_admin.html"; // Redireciona para o painel do administrador
    }, 1000); // Delay de 1 segundo para simular autenticação
});