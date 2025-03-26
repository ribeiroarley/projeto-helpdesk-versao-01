// Função para exibir mensagens no formulário (erro ou sucesso)
function showMessage(message, type) {
    const form = document.querySelector(".register-form"); // Corrigido de .login-form para .register-form
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

// Adiciona um evento de submit ao formulário de cadastro
document.getElementById("cadastroAlunoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)

    // Obtém os valores dos campos e o botão
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const button = document.querySelector(".register-button");

    // Regex para validar o formato básico do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Valida o formato do e-mail e o domínio específico
    if (!emailRegex.test(email) || !email.endsWith("@edu.df.senac.br")) {
        showMessage("Por favor, use um e-mail válido do Senac (@edu.df.senac.br).", "error");
        return;
    }

    // Valida o tamanho mínimo da senha (mínimo 6 caracteres)
    if (senha.length < 6) {
        showMessage("A senha deve ter pelo menos 6 caracteres.", "error");
        return;
    }

    // Valida o nome (mínimo 3 caracteres e sem números)
    const nomeRegex = /^[A-Za-z\s]{3,}$/;
    if (!nomeRegex.test(nome)) {
        showMessage("O nome deve ter pelo menos 3 caracteres e conter apenas letras.", "error");
        return;
    }

    // Salva os dados do aluno no localStorage (simulação de cadastro)
    const alunos = JSON.parse(localStorage.getItem("alunos")) || [];
    // Verifica se o e-mail já está cadastrado
    if (alunos.some(aluno => aluno.email === email)) {
        showMessage("Este e-mail já está cadastrado.", "error");
        return;
    }

    // Adiciona o novo aluno ao array
    alunos.push({ nome, email, senha });
    localStorage.setItem("alunos", JSON.stringify(alunos));

    // Desabilita o botão e exibe feedback visual
    button.disabled = true;
    button.textContent = "Cadastrando...";

    // Simula o processamento do cadastro e exibe mensagem de sucesso
    setTimeout(() => {
        showMessage("Cadastro realizado com sucesso! Redirecionando para o login...", "success");

        // Redireciona para a tela de login após 3 segundos
        setTimeout(() => {
            window.location.href = "tela_login_aluno.html";
        }, 3000);
    }, 1000); // Delay de 1 segundo para simular processamento
});