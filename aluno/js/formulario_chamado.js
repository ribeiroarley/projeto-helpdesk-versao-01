// Função para voltar ao painel de serviços
function goBack() {
    window.location.href = "painel_servicos.html";
}

// Verifica autenticação e preenche dados ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    // Verifica se o usuário está logado
    const userLoggedIn = localStorage.getItem("userLoggedIn");
    if (!userLoggedIn || userLoggedIn !== "true") {
        window.location.href = "tela_login_aluno.html";
        return;
    }

    // Recupera o serviço do localStorage
    const serviceName = localStorage.getItem("selectedService") || "Serviço não especificado";
    console.log("Serviço recuperado do localStorage:", serviceName);
    document.getElementById("serviceName").textContent = serviceName;

    // Preenche o nome do aluno automaticamente, se disponível
    const userName = localStorage.getItem("userName");
    if (userName) {
        const userNameField = document.getElementById("userName");
        userNameField.value = userName;
        userNameField.setAttribute("readonly", "readonly"); // Campo somente leitura
    }
});

// Adiciona um evento de submit ao formulário de chamado
document.getElementById("chamadoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    // Obtém o botão de envio
    const submitButton = document.querySelector(".submit-button");
    const responseMessage = document.getElementById("responseMessage");

    // Obtém os valores dos campos do formulário
    const userName = document.getElementById("userName").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();
    const descricao = document.getElementById("descricao").value.trim();
    const prioridade = document.getElementById("prioridade").value;
    const servico = localStorage.getItem("selectedService") || "Serviço não especificado";

    // Validação adicional para o WhatsApp
    const whatsappRegex = /^[0-9]{11}$/;
    if (!whatsappRegex.test(whatsapp)) {
        responseMessage.textContent = "Por favor, insira um número de WhatsApp válido com 11 dígitos (ex.: 61987654321).";
        responseMessage.className = "response-message error";
        return;
    }

    // Gera um protocolo único (baseado no timestamp)
    const protocolo = Date.now().toString().slice(-6);

    // Usa o userName como identificador do aluno (sem depender de JSON.parse)
    const alunoEmail = `${userName.toLowerCase().replace(/\s/g, "")}@edu.df.senac.br`;

    // Cria o objeto do chamado
    const chamado = {
        protocolo: protocolo,
        aluno_email: alunoEmail,
        nome: userName,
        whatsapp: whatsapp,
        servico: servico,
        descricao: descricao,
        prioridade: prioridade,
        data: new Date().toLocaleString("pt-BR"),
        status: "Aberto"
    };

    // Salva o chamado no localStorage
    const chamados = JSON.parse(localStorage.getItem("chamados")) || [];
    chamados.push(chamado);
    localStorage.setItem("chamados", JSON.stringify(chamados));

    // Limpa o selectedService do localStorage após o uso
    localStorage.removeItem("selectedService");

    // Desabilita o botão e exibe feedback visual
    submitButton.disabled = true;
    submitButton.textContent = "Enviando...";

    // Exibe mensagem de sucesso após simulação de envio
    setTimeout(() => {
        responseMessage.textContent = `Chamado enviado com sucesso! Protocolo: ${protocolo}`;
        responseMessage.className = "response-message success";

        // Limpa o formulário (exceto o campo readonly)
        document.getElementById("whatsapp").value = "";
        document.getElementById("descricao").value = "";
        document.getElementById("prioridade").selectedIndex = 0;

        // Redireciona para a tela de acompanhamento após 2 segundos
        setTimeout(() => {
            window.location.href = "acompanhar_chamados.html";
        }, 2000);
    }, 1000); // Simula delay de envio
});