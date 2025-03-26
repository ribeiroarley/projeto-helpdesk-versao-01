// Verifica se há um administrador logado ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o status de login do administrador do localStorage
    const adminLoggedIn = localStorage.getItem("adminLoggedIn");

    // Se não houver administrador logado ou o status não for "true", redireciona para o login
    if (!adminLoggedIn || adminLoggedIn !== "true") {
        window.location.href = "tela_login_admin.html";
        return;
    }
});

// Função para exibir mensagens de sucesso ou erro
function showMessage(message, type) {
    // Seleciona o elemento onde a mensagem será exibida
    const messageDiv = document.getElementById("admin-message");
    // Define o texto da mensagem
    messageDiv.textContent = message;
    // Define a classe da mensagem (success ou error) para estilização
    messageDiv.className = `admin-message ${type}`;
}

// Adiciona um evento de submit ao formulário de cadastro
document.getElementById("cadastroAdminForm").addEventListener("submit", function(event) {
    // Impede o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();

    // Obtém os valores dos campos do formulário e remove espaços em branco
    const nome = document.getElementById("admin-nome").value.trim();
    const email = document.getElementById("admin-email").value.trim();
    const senha = document.getElementById("admin-senha").value.trim();
    // Seleciona o botão de cadastro para feedback visual
    const button = document.querySelector(".register-button");

    // Regex para validar o formato básico do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Regex para validar o nome (mínimo 3 caracteres, apenas letras e espaços)
    const nomeRegex = /^[A-Za-z\s]{3,}$/;

    // Valida o nome
    if (!nomeRegex.test(nome)) {
        showMessage("O nome deve ter pelo menos 3 caracteres e conter apenas letras.", "error");
        return;
    }
    // Valida o formato do e-mail e verifica se termina com "@edu.df.senac.br"
    if (!emailRegex.test(email) || !email.endsWith("@edu.df.senac.br")) {
        showMessage("Por favor, use um e-mail válido do Senac (@edu.df.senac.br).", "error");
        return;
    }
    // Valida o tamanho mínimo da senha
    if (senha.length < 6) {
        showMessage("A senha deve ter pelo menos 6 caracteres.", "error");
        return;
    }

    // Carrega os administradores existentes do localStorage
    const admins = JSON.parse(localStorage.getItem("admins")) || [];
    // Verifica se o e-mail já está cadastrado
    if (admins.some(admin => admin.email === email)) {
        showMessage("Este e-mail já está cadastrado.", "error");
        return;
    }

    // Adiciona o novo administrador ao array
    admins.push({ nome, email, senha });
    // Salva o array atualizado no localStorage
    localStorage.setItem("admins", JSON.stringify(admins));

    // Desabilita o botão para evitar cliques múltiplos
    button.disabled = true;
    // Altera o texto do botão para indicar processamento
    button.textContent = "Cadastrando...";

    // Simula um delay de 1 segundo para feedback visual
    setTimeout(() => {
        // Exibe mensagem de sucesso
        showMessage(`Administrador ${nome} cadastrado com sucesso!`, "success");
        // Reabilita o botão
        button.disabled = false;
        // Restaura o texto original do botão
        button.textContent = "Cadastrar";
        // Limpa o formulário após o cadastro
        document.getElementById("cadastroAdminForm").reset();
        // Redireciona para o painel após 2 segundos
        setTimeout(() => {
            window.location.href = "painel_admin.html";
        }, 2000);
    }, 1000);
});