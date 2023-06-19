const { Router } = require("express");
const UserController = require("../controllers/UserController/user");
const SessionController = require("../controllers/Login/login");
const ProductsControler = require("../controllers/productsController/products");
const cartController = require("../controllers/cartController/cart");
const { authenticate } = require("../middlewares/account");

// rotas
const routes = Router();

// Main
routes.get("/", (req, res) => {
  res.send("Bem vindos a E-StoreX");
});

// Criar Usuarios
routes.post("/users", UserController.createUser);
routes.get("/users", UserController.getUsers);

// Listar Usuarios
routes.get("/users/:user_id", UserController.getUserById);

// Login
routes.post("/session", SessionController.createSession);

// Produtos
// Criando Produtos
routes.post(
  "/products/:user_id",
  authenticate,
  ProductsControler.createProduct
);
// listando Produtos
routes.get(
  "/:user_id/products",
  authenticate,
  ProductsControler.getUsersProduct
);
// Deletando Produtos
routes.delete(
  "/products/:user_id/:products_id",
  ProductsControler.deleteProduct
);
// Editando Produtos
routes.put(
  "/products/:user_id/:products_id",
  authenticate,
  ProductsControler.getProductById
);
// Buscando um produto expecifico
routes.get(
  "/products/:products_id",
  authenticate,
  ProductsControler.getProductById
);
// Atualizando Produtos
routes.patch(
  "/products/:user_id/:products_id",
  authenticate,
  ProductsControler.updateProduct
);
// listando todos os Produtos
routes.get("/products", authenticate, ProductsControler.getProduct);

// Cart
routes.post("/carts/:user_id", cartController.createCart);
// varificando carrinho
routes.get("/carts/:user_id", cartController.getUserCarts);
// itens no carrinho do usuario
routes.get("/carts/:user_id/:cart_id", cartController.getCart);

module.exports = routes;
