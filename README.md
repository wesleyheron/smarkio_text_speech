<h1>Smarkio DevTeste</h1>

<p>Teste desenvolvido como desafio para seletivo de desenvolvedor da Smarkio</p>
<p>Stack usada: Server(<strong>Nodejs + Express + Sequelize (MySQL)</strong>) + Front-end(<strong>AngularJS</strong>)</p>
<p>Para execurar o projeto:</p>
<p>Você precisará instalar o MySQL Server. Configurar um usuário e senha para utilizar-lo.</p>
<p>Execute o seguinte script no <strong>MySQL</strong>: <code>create database smarkio_test;</code></p>

<ul>
  <li>Clonar o repositório em sua máquina: <code>git clone https://github.com/wesleyheron/smarkio_text_speech.git</code></li>
  <li>Navegue até o diretório root do projeto: <code>cd smarkio_text_speech/</code></li>
  <li>Baixe as dependências do projeto em sua máquina: <code>npm install</code></li>
  <li>Alterar as informações de conexão com o <strong>MySQL</strong> (username, password): <code>app/config/database-config</code></li>
  <li>Execute o seguinte comando para gerar as migrations: <code>npx sequelize-cli db:migrate</code></li>
  <li>Alterar as configurações de credenciais do IBM Watson: <code>app/config/global-config</code></li>
  <li>Executar o projeto: <code>npm server.js</code></li>
</ul>
