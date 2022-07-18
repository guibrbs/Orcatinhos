# Orcatinhos

## Configuração

### Mongo Atlas
Crie uma clusther e faça a conexão do banco de dados com a API, seguindo o arquivo .env.example.
OBS.: O nome do arquivo necessita estar como .env.

Exemplo:
```
DB_CONNECTION = mongodb+srv://SeuUsuario:SuaSenha@NomeDoClusther.l29a3o8.mongodb.net/?retryWrites=true&w=majority
```
### Instalar NPM
Para rodar o frontend e backend, é necessário ter o NodeJs instalado, para isso você pode frequentar esse [link](https://nodejs.org/pt-br/download/package-manager/)

## Executando o projeto
Entre na pasta do backend e rode npm i, logo após, rode a aplicação do backend, que irá rodar na porta http://localhost:3001
```
cd backend
npm i
npm start
```
Entre na pasta do frontend e rode npm i, logo após, rode a aplicação do frontend, que irá rodar na porta http://localhost:3000
```
cd frontend
npm i
npm start
```
