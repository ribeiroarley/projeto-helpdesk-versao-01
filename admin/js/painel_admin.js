// Verifica se há um administrador logado ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o status de login do administrador do localStorage
    const adminLoggedIn = localStorage.getItem("adminLoggedIn");
    // Obtém o nome do administrador ou usa "Administrador" como padrão
    const adminName = localStorage.getItem("adminName") || "Administrador";

    // Se não houver administrador logado ou o status não for "true", redireciona para o login
    if (!adminLoggedIn || adminLoggedIn !== "true") {
        window.location.href = "tela_login_admin.html";
        return;
    }

    // Exibe o nome do administrador no cabeçalho
    document.getElementById("admin-nome").textContent = `Bem-vindo(a), ${adminName}`;
    // Carrega os chamados ao iniciar a página
    carregarChamados();
});

// Função para realizar logout
function logout() {
    // Remove o status de login do administrador do localStorage
    localStorage.removeItem("adminLoggedIn");
    // Remove o nome do administrador do localStorage
    localStorage.removeItem("adminName");
    // Remove o e-mail do administrador do localStorage
    localStorage.removeItem("adminEmail");
    // Redireciona para a tela de login
    window.location.href = "tela_login_admin.html";
}

// Função para carregar e exibir os chamados
function carregarChamados() {
    // Carrega os chamados do localStorage ou retorna um array vazio se não houver
    const chamados = JSON.parse(localStorage.getItem("chamados")) || [];
    // Seleciona o elemento onde os chamados serão exibidos
    const listaChamados = document.getElementById("lista-chamados");
    // Limpa o conteúdo atual da lista
    listaChamados.innerHTML = "";

    // Se não houver chamados, exibe uma mensagem
    if (chamados.length === 0) {
        listaChamados.innerHTML = '<p class="no-chamados">Nenhum chamado encontrado.</p>';
        return;
    }

    // Obtém os valores dos filtros
    const statusFilter = document.getElementById("filter-status").value;
    const serviceFilter = document.getElementById("filter-service").value;
    const sortDate = document.getElementById("sort-date").value;

    // Cria uma cópia do array de chamados para evitar alterar o original
    let filteredChamados = [...chamados];

    // Aplica filtro por status, se não for "todos"
    if (statusFilter !== "todos") {
        filteredChamados = filteredChamados.filter(chamado => chamado.status === statusFilter);
    }
    // Aplica filtro por serviço, se não for "todos"
    if (serviceFilter !== "todos") {
        filteredChamados = filteredChamados.filter(chamado => chamado.servico === serviceFilter);
    }
    // Ordena os chamados por data
    filteredChamados.sort((a, b) => {
        const dateA = new Date(a.data); // Converte a data do chamado A
        const dateB = new Date(b.data); // Converte a data do chamado B
        return sortDate === "desc" ? dateB - dateA : dateA - dateB; // Ordem descendente ou ascendente
    });

    // Se não houver chamados após os filtros, exibe uma mensagem
    if (filteredChamados.length === 0) {
        listaChamados.innerHTML = '<p class="no-chamados">Nenhum chamado encontrado com os filtros selecionados.</p>';
        return;
    }

    // Itera sobre os chamados filtrados para exibi-los
    filteredChamados.forEach((chamado, index) => {
        // Cria um elemento div para cada chamado
        const chamadoDiv = document.createElement("div");
        chamadoDiv.className = "chamado-item"; // Define a classe para estilização

        // Cria um div para as informações do chamado
        const infoDiv = document.createElement("div");
        infoDiv.className = "chamado-info"; // Define a classe para estilização
        // Define o conteúdo HTML com as informações do chamado
        infoDiv.innerHTML = `
            <strong>Protocolo:</strong> ${chamado.protocolo} | 
            <strong>Aluno:</strong> ${chamado.nome} (${chamado.aluno_email}) | 
            <strong>WhatsApp:</strong> ${chamado.whatsapp} | 
            <strong>Serviço:</strong> ${chamado.servico || "Não especificado"} | 
            <strong>Descrição:</strong> ${chamado.descricao} | 
            <strong>Data:</strong> ${chamado.data} | 
            <strong>Status:</strong> ${chamado.status}
        `;
        chamadoDiv.appendChild(infoDiv); // Adiciona as informações ao div do chamado

        // Cria um div para as ações do chamado
        const actionsDiv = document.createElement("div");
        actionsDiv.className = "chamado-actions"; // Define a classe para estilização

        // Cria um select para alterar o status do chamado
        const statusSelect = document.createElement("select");
        // Adiciona as opções de status ao select
        ["Aberto", "Em Andamento", "Concluído"].forEach(status => {
            const option = document.createElement("option");
            option.value = status; // Define o valor da opção
            option.textContent = status; // Define o texto visível
            if (status === chamado.status) option.selected = true; // Marca o status atual como selecionado
            statusSelect.appendChild(option); // Adiciona a opção ao select
        });

        // Cria um campo de texto para observações
        const obsInput = document.createElement("input");
        obsInput.type = "text"; // Define o tipo como texto
        obsInput.placeholder = "Adicionar observação"; // Texto de placeholder
        obsInput.value = chamado.observacao || ""; // Preenche com a observação existente ou vazio

        // Cria o botão de atualizar o chamado
        const updateButton = document.createElement("button");
        updateButton.className = "update-button"; // Define a classe para estilização
        updateButton.textContent = "Atualizar"; // Define o texto do botão
        updateButton.onclick = () => { // Define a ação ao clicar
            chamados[index].status = statusSelect.value; // Atualiza o status no array
            chamados[index].observacao = obsInput.value.trim(); // Atualiza a observação no array
            localStorage.setItem("chamados", JSON.stringify(chamados)); // Salva no localStorage
            carregarChamados(); // Recarrega a lista de chamados
        };

        // Cria o botão de enviar mensagem via WhatsApp
        const whatsappButton = document.createElement("button");
        whatsappButton.className = "whatsapp-button"; // Define a classe para estilização
        whatsappButton.textContent = "Enviar Mensagem via WhatsApp"; // Define o texto do botão
        whatsappButton.onclick = () => { // Define a ação ao clicar
            const servico = chamado.servico || "Não especificado"; // Define o serviço ou padrão
            const observacao = obsInput.value.trim() || "Nenhuma observação."; // Define a observação ou padrão
            // Cria a mensagem personalizada
            const message = `Olá ${chamado.nome}, sobre o chamado #${chamado.protocolo} (${servico}): Status atualizado para "${statusSelect.value}". Observação: ${observacao}`;
            // Gera o URL do WhatsApp com a mensagem codificada
            const whatsappUrl = `https://wa.me/55${chamado.whatsapp}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, "_blank"); // Abre o WhatsApp em uma nova aba
        };

        // Adiciona os elementos de ação ao div de ações
        actionsDiv.appendChild(statusSelect);
        actionsDiv.appendChild(obsInput);
        actionsDiv.appendChild(updateButton);
        actionsDiv.appendChild(whatsappButton);

        // Adiciona o div de ações ao div do chamado
        chamadoDiv.appendChild(actionsDiv);
        // Adiciona o chamado à lista de chamados
        listaChamados.appendChild(chamadoDiv);
    });
}

// Função para filtrar chamados ao alterar os filtros
function filtrarChamados() {
    carregarChamados(); // Recarrega os chamados com os filtros aplicados
}