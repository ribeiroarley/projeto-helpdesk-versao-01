// Executa quando a página é carregada
document.addEventListener("DOMContentLoaded", function() {
    // Obtém os chamados do localStorage
    const chamados = JSON.parse(localStorage.getItem("chamados")) || [];
    const chamadosList = document.getElementById("chamadosList");
    const userName = localStorage.getItem("userName"); // Obtém o nome do usuário logado

    // Filtra os chamados para mostrar apenas os do usuário logado
    const chamadosDoAluno = chamados.filter(chamado => chamado.userName === userName);

    // Se não houver chamados, exibe uma mensagem
    if (chamadosDoAluno.length === 0) {
        chamadosList.innerHTML = "<li>Nenhum chamado encontrado.</li>";
        return;
    }

    // Itera sobre os chamados do aluno e exibe na lista
    chamadosDoAluno.forEach(chamado => {
        const serviceMap = {
            notebook: "Manutenção de Notebook",
            computador: "Manutenção de Computador",
            redes: "Serviços de Redes",
            programacao: "Serviços de Programação"
        };
        const displayService = serviceMap[chamado.service] || "Serviço Desconhecido";
        const li = document.createElement("li");
        li.innerHTML = `
            <span>Protocolo: ${chamado.protocolo} | Serviço: ${displayService} | Status: ${chamado.status}</span>
            <span>WhatsApp: ${chamado.whatsapp} | Data: ${chamado.data}</span>
        `;
        chamadosList.appendChild(li); // Adiciona o item à lista
    });
});