# 02 API Rest NodeJS

### pt-br 🇧🇷
Projeto criado no primeiro módulo do bootcamp Ignite (Trilha NodeJS) oferecido pela [Rocketseat 🚀](https://www.rocketseat.com.br/)

O projeto visa criar uma API com NodeJS utilizando o Fastify para a criação e gerenciamento das rotas e o KnexJS para realização de operações no banco de dados.

## Requisitos da aplicação

- Requisitos funcionais:
    - [x] O usuário deve poder criar uma nova transação;
    - [x] O usuário deve poder obter um resumo da sua conta;
    - [x] O usuário deve poder listar todas as transações que já ocorreram;
    - [x] O usuário deve poder visualizar uma transação única;

- Regras de negócio:
    - [x] A transação pode ser do tipo crédito que somará ao valor total ou débito que subtrariá o valor do total;
    - [ ] Deve ser possível identificar o usuário entre as requisições;
    - [ ] O usuário so pode visualizar transações na qual ele mesmo criou;

- Requisitos não funcionais:


## Conceitos aplicados
- O que é o Fastify:
    - Plugins;
- Query Builders:
    - O que é;
    - O que é o KnexJs;
- Conexão com banco de dados SQLite;
- Criação e validação de arquivos _.env_