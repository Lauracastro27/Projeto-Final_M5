![Logo](./ProjM5/src/assents/img/logo.png) 


## Descrição

Tudo que você precisa na hora fome em um só lugar! Conheça o APP TôComFome desenvolvido pelo **Grupo 01** da **Turma 15** da **[RESILIA](https://www.resilia.com.br/)**  


## Demonstração

  --


## Screenshots

  --


Com este App você consegue realizar um cadastro ou selecionar qualquer item nas seguintes categorias:
 
* [ESTABELECIMENTO]
* [PRODUTO]
* [CLIENTE]
* [PEDIDO]
* [ENTREGADOR]


## Funcionalidades

-  Qualquer ESTABELECIMENTO pode se cadastrar na plataforma enviando:

     - [x]  ID
     - [x]  NOME
     - [x]  TELEFONE
     - [x]   EMAIL
     - [x]   SENHA
     - [x]   ENDEREÇO

- Qualquer um pode cadastrar um PRODUTO na plataforma enviando:
    
     - [x]   ID
     - [x]   NOME
     - [x]   MARCA
     - [x]   INGREDIENTES
     - [x]   QUANTIDADE
     - [x]   PREÇO
     - [x]   VALIDADE

- Qualquer CLIENTE pode se cadastrar na plataforma enviando:

     - [x]   ID
     - [x]   NOME
     - [x]   IDADE
     - [x]   TELEFONE
     - [x]   EMAIL
     - [x]   SENHA
     - [x]   ENDEREÇO
     - [x]   FAVORITOS

- Qualquer um pode cadastrar um PEDIDO na plataforma enviando:
  
     - [x]   ID
     - [x]   NOME (CLIENTE)
     - [x]   NOME (ESTABELECIMENTO)
     - [x]   NOME (PRODUTOS)
     - [x]   NOME (ENTREGADOR)
     - [x]   QUANTIDADE (PRODUTOS)
     - [x]   PREÇO (PRODUTOS)

- Qualquer ENTREGADOR pode se cadastrar na plataforma enviando:
     
     - [x]   ID
     - [x]   NOME
     - [x]   CPF
     - [x]   TELEFONE
     - [x]   IDADE
     - [x]   LOCALIZAÇÃO
     - [x]   EMAIL
     - [x]   SENHA
     - [x]   MEIO DE TRANSPORTE

---


## Documentação da API

#### Retorna todos os Produtos

```http
  GET /produtos
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da API |


#### Retorna Produto por ID

```http
  GET /produtos/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string` | **Obrigatório**. O ID do item que você quer |


#### Cadastro de Produto

```http
  POST /produtos
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key`   | `string`   | **Obrigatório**. A chave da     API |


#### Atualizar Produto

```http
  PUT /produtos/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string` | **Obrigatório**. O ID do item que você quer  |


#### Deletar um Produto

```http
  DELETE /produtos/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |



## Deploy

Para fazer o deploy desse projeto rode

https://morning-scrubland-18153.herokuapp.com/

ou

```bash
  npm run deploy
```


## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm run test
```


## Uso/Exemplos

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```

## Documentação de cores

| Cor               | Hex                                                    |
| ----------------- | ---------------------------------------------------------------- |
| Azul              | #5ea8cd |
| Amarelo           | #fe30d0c|
| Dourado           | #d4af37 |


## Documentação de fontes

| Fonte             | Uso                                                              |
| ----------------- | ---------------------------------------------------------------- |
| Syne              | Tudo                                                             |
| Italiana          | Textos importantes                                               |


## Stack utilizada

**UI/UX Design:** Figma

**Front-end:** React, Html, CSS

**Back-end:** Node, Express

**API Test:** Insomnia

**Deploy:** Heroku

**Bibliotecas:** react-router-dom 

**Editor:** Visual Studio Code

**Comunicação:** Discord, WhatsApp

**Metodologias Ágeis:** Kanbam, Scrum

**Apresentação:** Canva Pro

**Readme:** Readme.so



## SoftSkills

O que você aprendeu construindo esse projeto? Quais desafios você enfrentou e como você superou-os?


## Autores

- [Breno Garduci](https://github.com/Garduciz)
- [Hugo Legramandi](https://www.github.com/hugolegramandi)
- [Laura Castro](https://github.com/Lauracastro27)
- [Luana Maximiano](https://github.com/Luana-Developer)
- [Rafael Silva](https://github.com/Rafael753)


## Referência

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)


## Licenças

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

