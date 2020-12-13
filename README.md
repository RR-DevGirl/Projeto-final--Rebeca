# Projeto-final--Rebeca

API usada como Projeto Final para concluir o bootcamp de Back-end na [Reprograma](https://reprograma.com.br/index.html)

## Diário de senhas

#### Uma API que vai te ajudar a armazenar e organizar suas senhas para você nunca mais se preocupar em esquecer. A única senha que você vai precisar lembrar é a do seu diário de senhas.

  

![enter image description here](https://github.com/Rebeca-desen/Projeto-final--Rebeca/blob/main/public/imagens/Logo%20Rebeca.png)

  

## Funcionalidades

- Você vai poder se cadastrar

- A pessoa vai poder pesquisar pelo nome do site ou app, fazendo ele retornar as informações daquela conta

- Você pode armazenar todo tipo de senha ou conta

- Pastas de contas para facilitar ainda mais sua busca

  

## De onde surgiu a ideia?

Tanto eu como muitas pessoas ao meu redor já tiveram inúmeros problemas por não se lembrar dos dados que colocou em alguma conta, isso pode ser porque deixou para anotar depois, ou anotou em qualquer papel e perdeu, ou anota num grupo que só tem você no celular e acontece algo e você perde aquela conversa. E sabemos o quão é importante algumas senhas e contas serem bem armazenadas principalmente na comunidade DEV

  

## Tecnologias usadas

:heavy_check_mark: [NodeJS](https://nodejs.org/pt-br/)

  

:heavy_check_mark: [MongoDB](https://account.mongodb.com/account/login?n=%2Fv2%2F5fce5088817dde0f054de1f4&nextHash=%23metrics%2FreplicaSet%2F5fce512aace4e83e93eba4e3%2Fexplorer%2FDi%25C3%25A1riodeSenhas%2Fusuarios%2Ffind)

  

:heavy_check_mark: [JavaScript]()

  

:heavy_check_mark: [Heroku](dashboard.heroku.com/)

  

:heavy_check_mark: [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=pt-BR)

  

## Instalação

- Faça um _fork_ no repositório

- Depois execute no terminal:

  

```
git clone https://github.com/Rebeca-desen/Projeto-final--Rebeca.git

cd Projeto-final--Rebeca

npm install
```

## Rodando o código

- Para rodar o código basta executar no terminal:

```
npm start
```

  

## Acessando as rotas

### Do usuário
| Rota | Método | Ação 
|---------|--------|------|
| `/usuario/cadastro` |  Post| Adiciona um novo usuário, cadastra o cliente
| `/usuario` | Get | Visualiza todos os usuários cadastrados
|`/usuario/login`|Post| Colocando o email e senha no body e ele vai gerar um _token_ que vai servir para poder acessar as outras rotas. A configuração vai ficar mais ou menos assim:



![enter image description here](https://github.com/Rebeca-desen/Projeto-final--Rebeca/blob/main/public/imagens/Postlogin.PNG)




| Rota | Método | Ação
|---------|-----------|-------
| `/usuario/contas/:_id` | Get | Acessa o perfil do usuário, com todas as contas armazenadas e dados do usuário cadastrado. Essa rota e as próximas vão precisar do _token_. Para liberar o acesso faça como o ilustrado a seguir:




![enter image description here](https://github.com/Rebeca-desen/Projeto-final--Rebeca/blob/main/public/imagens/getIdAutentica%C3%A7%C3%A3o.PNG)




| Rota | Método | Ação
|---------|-----------|-------
| `/usuario/:_id` | Delete | Exclui o cadastro do usuário
|  `/usuario/:_id`| Patch | Atualiza o cadastro do usuário



### Das contas armazenadas

| Rota | Método | Ação
|-------------|-----------|-------
| `/contas/:_id(do usuario)` | Post | Adiciona uma conta para armazenamento no perfil do usuário
|  `/contas/minhaconta/:conta`| Get | Retorna a conta que o usuário está buscando
|`/contas/:TipoDeConta`  |Get | Acessar pasta de contas do usuário
| `/contas/:_id(usuario)` | Get | Acessa apenas as contas do usuário
|`/contas/_id(da conta)`  | Delete | Apaga a conta determinada pelo _id
|`/contas/:_id(usuario)/:Id(da conta)`  | Patch| Atualiza os dados da conta determinada pelos _id's

### Rotas teste
Rotas para ver o funcionamento das aplicações no banco de dados
| Rota |  Método| Ação
|-----|----|---
|`/contas/dev`  | Get | Retorna todas as contas do banco de dados
|`/usuario/all`  | Get | Retorna todos os usuários e suas contas armazenadas

## Futuras melhorias
Como essa é a primeira versão dessa API é bem provável que ainda sofra algumas melhorias como
- Criptografar os dados das contas armazenadas pelos usuários no banco de dados e descriptografar para o cliente
- Atualizar e melhorar algumas rotas como a de deletar o cadastro do cliente que não está apagando as contas deles do banco de dados
-  Fazer um Front-end
- Sofisticar algumas rotas (como as de buscas)
