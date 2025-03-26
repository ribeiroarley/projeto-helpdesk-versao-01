// Verifica se o usuário está logado ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    const userLoggedIn = localStorage.getItem("userLoggedIn");
    const userName = localStorage.getItem("userName");

    // Se não estiver logado, redireciona para a tela de login
    if (!userLoggedIn || userLoggedIn !== "true") {
        window.location.href = "tela_login_aluno.html";
        return;
    }

    // Exibe o nome do usuário na mensagem de boas-vindas
    if (userName) {
        document.getElementById("userName").textContent = userName;
    }
});

// Função para selecionar um serviço e redirecionar para o formulário
function selecionarServico(servico) {
    // Salva o serviço selecionado no localStorage
    localStorage.setItem("selectedService", servico);
    // Log para depuração (pode ser removido em produção)
    console.log("Serviço salvo no localStorage:", localStorage.getItem("selectedService"));
    // Redireciona para o formulário de chamado
    window.location.href = "formulario_chamado.html";
}

// Função para logout
function logout() {
    // Remove os dados do usuário do localStorage
    localStorage.removeItem("userName");
    localStorage.removeItem("userLoggedIn");
    localStorage.removeItem("selectedService"); // Opcional: limpa o serviço selecionado
    // Redireciona para a tela de login
    window.location.href = "tela_login_aluno.html";
}