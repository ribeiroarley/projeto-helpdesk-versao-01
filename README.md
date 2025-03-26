============================================================
          Help Desk - Comunidade Senac
          Sistema de Gerenciamento de Chamados Técnicos
============================================================

1. VISÃO GERAL
------------------------------------------------------------
O "Help Desk - Comunidade Senac" é um sistema web desenvolvido para facilitar o atendimento e gerenciamento de chamados técnicos para alunos e professores do Senac. O sistema permite que alunos abram chamados para serviços técnicos (como manutenção de notebooks, computadores, redes e programação) e que administradores gerenciem esses chamados, atualizando status, adicionando observações e enviando mensagens via WhatsApp.

Este projeto foi desenvolvido como parte do curso Técnico em Informática, Turma 2023.07.303, e utiliza tecnologias web básicas (HTML, CSS e JavaScript) com armazenamento local (localStorage) para gerenciar dados.

2. FUNCIONALIDADES PRINCIPAIS
------------------------------------------------------------
- Tela Inicial: Interface inicial com opções para alunos e administradores.
- Cadastro de Alunos: Alunos podem se cadastrar no sistema para abrir chamados.
- Login de Alunos: Alunos podem fazer login para acessar suas funcionalidades.
- Abertura de Chamados: Alunos podem abrir chamados técnicos, informando detalhes como tipo de serviço, descrição e contato via WhatsApp.
- Acompanhamento de Chamados: Alunos podem acompanhar o status de seus chamados.
- Painel de Serviços: Alunos podem visualizar os serviços disponíveis.
- Recuperação de Senha (Alunos): Simulação de recuperação de senha para alunos.
- Login de Administradores: Administradores podem fazer login com e-mail e senha para acessar o painel administrativo.
- Gerenciamento de Chamados: No painel administrativo, os administradores podem:
  - Visualizar todos os chamados abertos.
  - Filtrar chamados por status, tipo de serviço e data.
  - Atualizar o status dos chamados (Aberto, Em Andamento, Concluído).
  - Adicionar observações aos chamados.
  - Enviar mensagens personalizadas via WhatsApp para os alunos.
- Cadastro de Novos Administradores: Administradores logados podem cadastrar novos administradores no sistema.
- Recuperação de Senha (Administradores): Simulação de recuperação de senha para administradores.

3. REQUISITOS PARA USO
------------------------------------------------------------
- Um navegador web moderno (Google Chrome, Firefox, Edge, etc.).
- JavaScript deve estar habilitado no navegador.
- Para melhor experiência, execute o projeto em um servidor local (ex.: Live Server no VS Code ou `http-server` via Node.js), pois abrir diretamente no navegador (via `file:/`) pode causar problemas com o carregamento de arquivos CSS e JS.
- Não é necessário servidor backend, pois o sistema utiliza localStorage para armazenamento de dados.

4. INSTRUÇÕES DE USO
------------------------------------------------------------

4.1. Acessando o Sistema
1. Clone o repositório do GitHub:
Substitua `seu-usuario` pelo seu nome de usuário do GitHub.

2. Navegue até o diretório do projeto:

3. Execute o projeto:
- **Opção 1: Servidor Local (Recomendado)**:
  - Se usar o VS Code, instale a extensão Live Server, clique com o botão direito em `index.html` e selecione "Open with Live Server".
  - Ou use o Node.js:

Acesse `http://127.0.0.1:8080/index.html` no navegador.
- **Opção 2: Diretamente no Navegador**:
- Abra o arquivo `index.html` no navegador. **Nota**: Isso pode causar problemas com o carregamento do CSS devido a restrições de segurança (`file://`). Use um servidor local para evitar isso.
4. Alternativamente, acesse a versão online no GitHub Pages (se configurado):


4.2. Para Alunos
1. Na tela inicial (`boas-vindas/html/index.html`), clique no botão "Sou Aluno".
2. Você será redirecionado para a página de login/cadastro de alunos (`aluno/html/tela_login_aluno.html`).
3. Clique em "Cadastrar" para criar uma conta de aluno (preencha nome, e-mail Senac, WhatsApp e senha).
4. Após o cadastro, faça login com seu e-mail e senha.
5. Na tela principal, você pode:
- Clicar em "Abrir Chamado" (`aluno/html/formulario_chamado.html`) para criar um novo chamado técnico.
- Clicar em "Acompanhar Chamados" (`aluno/html/acompanhar_chamados.html`) para visualizar o status de seus chamados.
- Acessar o "Painel de Serviços" (`aluno/html/painel_servicos.html`) para ver os serviços disponíveis.
6. Para abrir um chamado:
- Preencha os detalhes do chamado (tipo de serviço, descrição, etc.) e envie.
- Você receberá um número de protocolo para acompanhar o chamado.
7. Para recuperar a senha:
- Na tela de login, clique em "Esqueceu sua senha? Obtenha ajuda" para acessar a página de recuperação (`aluno/html/recuperar_senha_aluno.html`).
- Insira seu e-mail e clique em "Enviar" (simulação).

4.3. Para Administradores
1. Na tela inicial (`boas-vindas/html/index.html`), clique no botão "Sou Administrador".
2. Você será redirecionado para a página de login de administradores (`admin/html/tela_login_admin.html`).
3. Faça login com um e-mail e senha de administrador (exemplo padrão: e-mail "admin@edu.df.senac.br", senha "admin123").
4. No painel administrativo (`admin/html/painel_admin.html`), você verá a lista de chamados abertos.
5. Use os filtros para organizar os chamados por status, serviço ou data.
6. Para cada chamado, você pode:
- Alterar o status (Aberto, Em Andamento, Concluído).
- Adicionar uma observação.
- Clicar em "Atualizar" para salvar as alterações.
- Clicar em "Enviar Mensagem via WhatsApp" para enviar uma mensagem ao aluno.
7. Para cadastrar um novo administrador:
- No painel, clique no botão "Cadastrar Novo Administrador" (localizado na parte superior).
- Você será redirecionado para a página de cadastro (`admin/html/cadastro_admin.html`).
- Preencha os dados do novo administrador (nome, e-mail Senac, senha) e clique em "Cadastrar".
- Após o cadastro, você será redirecionado de volta ao painel.
8. Para sair, clique no botão "Sair" no canto superior direito.

4.4. Recuperação de Senha (Administradores)
1. Na tela de login do administrador (`admin/html/tela_login_admin.html`), clique em "Esqueceu sua senha? Obtenha ajuda".
2. Você será redirecionado para a página de recuperação (`admin/html/recuperar_senha_admin.html`).
3. Insira o e-mail do administrador e clique em "Enviar".
4. Você verá uma mensagem simulando o envio de um e-mail com a senha (a senha será exibida na tela para fins de teste).

5. ESTRUTURA DE ARQUIVOS
------------------------------------------------------------

- /index.html
Arquivo de redirecionamento para a tela inicial (`boas-vindas/html/index.html`).

- /boas-vindas/
- /html/
 - index.html: Página inicial do sistema, com opções para alunos e administradores.
- /css/
 - welcome.css: Estilos para a página inicial do sistema.
- /js/
 - welcome.js: Lógica para a página inicial (redirecionamento para áreas de alunos e administradores).

- /admin/
- /html/
 - tela_login_admin.html: Página de login para administradores.
 - painel_admin.html: Painel administrativo para gerenciamento de chamados.
 - cadastro_admin.html: Página para cadastro de novos administradores.
 - recuperar_senha_admin.html: Página para recuperação de senha de administradores (simulação).
- /css/
 - tela_login_admin.css: Estilos para a página de login de administradores.
 - painel_admin.css: Estilos para o painel administrativo.
 - cadastro_admin.css: Estilos para a página de cadastro de novos administradores.
 - recuperar_senha_admin.css: Estilos para a página de recuperação de senha.
- /js/
 - tela_login_admin.js: Lógica para login de administradores.
 - painel_admin.js: Lógica para o painel administrativo (gerenciamento de chamados).
 - cadastro_admin.js: Lógica para cadastro de novos administradores.
 - recuperar_senha_admin.js: Lógica para recuperação de senha (simulação).

- /aluno/
- /html/
 - tela_login_aluno.html: Página de login para alunos.
 - cadastro_aluno.html: Página para cadastro de alunos.
 - formulario_chamado.html: Página para abertura de novos chamados.
 - acompanhar_chamados.html: Página para acompanhamento de chamados.
 - painel_servicos.html: Painel de serviços disponíveis para alunos.
 - recuperar_senha_aluno.html: Página para recuperação de senha de alunos (simulação).
- /css/
 - tela_login_aluno.css: Estilos para a página de login de alunos.
 - cadastro_aluno.css: Estilos para a página de cadastro de alunos.
 - formulario_chamado.css: Estilos para a página de abertura de chamados.
 - acompanhar_chamados.css: Estilos para a página de acompanhamento de chamados.
 - painel_servicos.css: Estilos para o painel de serviços.
 - recuperar_senha_aluno.css: Estilos para a página de recuperação de senha.
- /js/
 - tela_login_aluno.js: Lógica para login de alunos.
 - cadastro_aluno.js: Lógica para cadastro de alunos.
 - formulario_chamado.js: Lógica para abertura de novos chamados.
 - acompanhar_chamados.js: Lógica para acompanhamento de chamados.
 - painel_servicos.js: Lógica para o painel de serviços.
 - recuperar_senha_aluno.js: Lógica para recuperação de senha (simulação).

- /assets/
- /img/
 - logoportal.png: Logo do Senac usada nas páginas.

6. DADOS DE TESTE
------------------------------------------------------------
- Administrador Padrão:
E-mail: admin@edu.df.senac.br
Senha: admin123

- Aluno de Teste:
E-mail: aluno@edu.df.senac.br
Senha: aluno123

Você pode usar esses dados para testar o sistema. Novos administradores e alunos podem ser cadastrados conforme necessário.

7. LIMITAÇÕES
------------------------------------------------------------
- O sistema usa localStorage para armazenar dados, o que significa que os dados são salvos apenas no navegador do usuário. Se o cache do navegador for limpo, os dados serão perdidos.
- A recuperação de senha é uma simulação e não envia e-mails reais.
- O sistema não possui backend ou banco de dados, sendo indicado para uso local.

8. DESENVOLVEDORES
------------------------------------------------------------
Este projeto foi desenvolvido pelos seguintes alunos do curso Técnico em Informática, Turma 2023.07.303, do Senac:

- Antonio Roni
- Arley Ribeiro
- Lucas Praça
- Francisco Edimar

9. CONTATO
------------------------------------------------------------
Para dúvidas, sugestões ou suporte, entre em contato com a equipe de desenvolvimento pelo e-mail: [inserir e-mail de contato, se aplicável].

============================================================
Fim do README
============================================================