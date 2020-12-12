# Projeto-final--Rebeca

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
|`/usuario/login`|Post| Colocando o login e senha no body e ele vai gerar um _token_ que vai servir para poder acessar as outras rotas a configuração vai ficar mais ou menos assim:
![enter image description here](https://github.com/Rebeca-desen/Projeto-final--Rebeca/blob/main/public/imagens/Postlogin.PNG)

| Rota | Método | Ação
|---------|-----------|-------
| `/usuario/tudo/_id` | Get | Essa rota vai acessar todas as contas armazenadas e dados do usuário cadastrado. Essa rota e as próximas vão precisar do _token_. Para liberar o acesso faça como o ilustrado a seguir:
![enter image description here](https://github.com/Rebeca-desen/Projeto-final--Rebeca/blob/main/public/imagens/getIdAutentica%C3%A7%C3%A3o.PNG)

| Rota | Método | Ação
|---------|-----------|-------
| `/usuario/_id` | Delete | Exclui o cadastro do usuário
|  `/usuario/_id`| Patch | Atualiza o cadastro do usuário



