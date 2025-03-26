// Função para redirecionar o usuário com base na escolha
// Parâmetro userType: string que indica o tipo de usuário ('aluno' ou 'admin')
function redirectTo(userType) {
    // Verifica se o usuário é um aluno
    if (userType === 'aluno') {
        // Redireciona para a página de login de alunos
        window.location.href = '../../aluno/html/tela_login_aluno.html';
    }
    // Verifica se o usuário é um administrador
    else if (userType === 'admin') {
        // Redireciona para a página de login do administrador
        window.location.href = '../../admin/html/tela_login_admin.html';
    }
}