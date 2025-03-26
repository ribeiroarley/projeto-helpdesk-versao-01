// Função para exibir mensagens no formulário (erro ou sucesso)
function showMessage(message, type) {
    const form = document.querySelector(".login-form");
    let messageDiv = form.querySelector(`.${type}-message`);
    
    // Remove qualquer mensagem existente do mesmo tipo
    if (messageDiv) {
        messageDiv.remove();
    }
    
    // Cria e configura a nova mensagem
    messageDiv = document.createElement("div");
    messageDiv.className = `${type}-message`;
    messageDiv.textContent = message;
    form.prepend(messageDiv);
    messageDiv.style.display = "block";
}

// Adiciona um evento de submit ao formulário de recuperação de senha
document.getElementById("recuperarSenhaForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)

    // Obtém o valor do campo de e-mail e o botão
    const email = document.getElementById("email").value.trim();
    const button = document.querySelector(".recover-button");

    // Regex para validar o formato básico do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Remove mensagens anteriores
    const existingSuccess = document.querySelector(".success-message");
    const existingError = document.querySelector(".error-message");
    if (existingSuccess) existingSuccess.remove();
    if (existingError) existingError.remove();

    // Valida o formato do e-mail e o domínio específico
    if (!emailRegex.test(email) || !email.endsWith("@edu.df.senac.br")) {
        showMessage("Por favor, use um e-mail válido do Senac (@edu.df.senac.br).", "error");
        return;
    }

    // Desabilita o botão e exibe feedback visual
    button.disabled = true;
    button.textContent = "Enviando...";

    // Simula o envio do e-mail de recuperação (substituir por chamada ao backend em produção)
    setTimeout(() => {
        // Exibe mensagem de sucesso
        showMessage("Um link de recuperação foi enviado para seu e-mail!", "success");
        
        // Redireciona para a tela de login após 3 segundos
        setTimeout(() => {
            window.location.href = "tela_login_aluno.html";
        }, 3000);
    }, 1000); // Delay de 1 segundo para simular processamento
});