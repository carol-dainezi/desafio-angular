# DesafioAngular - Go!Pub

Por Caroline de Souza Dainezi

## Ferramentas utilizadas
* Angular CLI versão 15.0.3
* Node versão 18.12.1
* NPM versão 9.2.0
* IDE: VSCode

## Sobre o projeto
O produto apresentado é o Go!Pub, uma plataforma de gerenciamento de bares, pubs e tudo relacionado a eles. Foi desenvolvido durante o treinamento de Angular do Programa GFT Start de 2022.

No Go!Pub, você pode:
* Criar uma conta
* Ver os usuários cadastrados, editá-los e excluí-los
* Cadastrar, editar, visualizar e excluir funcionários
* Ver, editar, excluir e criar comidas e bebidas disponíveis no seu pub
* Criar, alterar, listar e excluir eventos no seu pub, com horários e datas inclusos
* Visualizar, editar, criar e excluir seus fornecedores
* Agendar e excluir presenças de usuários em seus eventos
* Ver agendamentos de um evento específico ou de um usuário específico

## Como rodar o projeto
* Primeiramente, garanta que as versões do Node, Angular e NPM sejam compatíveis com as apresentadas neste projeto.
* Clone este projeto e a [API Node](https://git.gft.com/cogv/pub/-/tree/master) neste link.
* Durante o desenvolvimento, a API foi conectada ao banco de dados utilizando a versão gratuita do [Atlas DB](https://www.mongodb.com/atlas/database). Conexões com outros bancos não foram testadas.

> Para conectar sua API Node no banco de dados Atlas, crie um projeto na plataforma [acessível por este link](https://www.mongodb.com/atlas/database), crie um Cluster e clique em Connect. Escolha a opção "Connect your application", escolha Node.js como driver e a respectiva versão. Copie o link que aparecer.

> Aba sua API Node, vá para a pasta database e então para o arquivo dbConnect.ts Na linha escrita `mongoose.connect()`, troque a URL pela que você copiou do Atlas.

> Importante: Lembre-se de trocar o campo `<password>` para a sua senha de verdade.

> Exemplo:
`mongodb+srv://root:root@cluster`...


* Rode a API Node com o comando `npm run dev`

* Rode o projeto Angular com o comando:
`ng serve`

* A partir daí, a navegação pelas páginas já está liberada.

## Informações adicionais
1. As páginas não possuem responsividade completa, porém foram testadas e se apresentam bem nas resoluções de:
* 1920x1080
* 1366x768
* 1280x720

2. O sistema de login realmente se comunica com a API, porém não é criada nenhuma sessão. As páginas são de acesso aberto.

3. Mesmo que a senha venha encriptada do banco de dados, é possível editá-la normalmente.

4. Para poder editar um usuário, é necessário sempre modificar seu email. Este é um problema com a API.

5. A parte visual da edição de agendamentos existe, porém não pôde ser implementada pois a API não possui um endpoint para busca de agendamento pelo próprio ID e eu não soube como implementar a edição sem ele.

6. Como a API aceita imagens como strings e sua documentação faz uso de URLs para enviá-las, os inputs de imagens foram feitos no formato de URL.