
![Logo](https://pbs.twimg.com/media/FzAPXwLWAAcKQBh?format=png&name=small)


# E-StoreX

E-StoreX é uma API de comércio eletrônico desenvolvida com Node.js e MongoDB, projetada para fornecer uma plataforma escalável e flexível para a criação e gerenciamento de lojas online. Com recursos avançados de criação de usuários, autenticação de login, listagem de produtos e carrinho de compras, o E-StoreX simplifica o processo de construção de uma loja virtual completa. Com suporte a imagens de produtos, descrições detalhadas, preços e estoques, os usuários podem navegar facilmente pelos produtos disponíveis e adicionar itens ao carrinho para uma experiência de compra perfeita. Combinando a robustez do Node.js e a flexibilidade do MongoDB, o E-StoreX oferece uma solução confiável e escalável para empreendedores e desenvolvedores interessados em criar uma presença online no mercado de comércio eletrônico.


## Pré-requisitos

- Node.js (versão 18.12.1)
- MongoDB (versão 5.6.0)
- cors  (versão 2.8.5 )
- dotenv (16.1.4)
- express (4.18.2),
- mogoose (0.0.1-security)
- mongoose (7.3.0),

## Configuração

1 - Clone o repositório:
```bash
 https://github.com/MarshallLiu-Dev/E-comerce-Api-Node

 npm install
```
 2 - Instale as dependências:   

 ```bash

 npm install
```

3- Configure as variáveis de ambiente:

##### Crie um arquivo .env na raiz do projeto e defina as seguintes variáveis:

Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

 ```bash
` MONGO_URI =  ''             `

```

4 - Inicie o servidor:


 ```bash
npm run dev 

```
## Endpoints
Aqui estão os principais endpoints da API:

- GET /: Rota principal que retorna uma mensagem de boas-vindas.
- POST /users: Cria um novo usuário.
- GET /users: Retorna a lista de usuários.
- GET /users/:user_id: Retorna os detalhes de um usuário específico.
- POST /session: Cria uma sessão de login.
- POST /products/:user_id: Cria um novo produto.
- GET /:user_id/products: Retorna a lista de produtos de um usuário específico.
- DELETE /products/:user_id/:products_id: Remove um produto.
- PUT /products/:user_id/:products_id: Atualiza um produto.
- GET /products/:products_id: Retorna os detalhes de um produto específico.
- PATCH /products/:user_id/:products_id: Atualiza parcialmente um produto.
- GET /products: Retorna a lista de todos os produtos.
- POST /carts/:user_id: Cria um novo carrinho para um usuário.
- GET /carts/:user_id: Retorna os carrinhos de um usuário.
- GET /carts/:user_id/:cart_id: Retorna os itens de um carrinho específico.
## Autores

-  [@MarshallLiu-Dev](https://www.github.com/MarshallLiu-Dev)


## Stack utilizada

**Back-end:** Node, Express


## Feedback

Se você tiver algum feedback, por favor nos deixe saber por meio Twitter  [@MarshallLiu_](https://twitter.com/MarshallLiu_) Intagrem  [@Marshall.Liu_](https://www.instagram.com/marshall.liu_/)

