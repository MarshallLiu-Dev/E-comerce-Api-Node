const Cart = require("../../modules/Cart");

const cartController = {
  // Criando Carrinho
  async createCart(req, res) {
    const bodyData = req.body;
    const { user_id } = req.params;

    try {
      const createdCart = await Cart.create({ ...bodyData, username: user_id });
      // await createdCart.populate('products').execPopulate()
      return res
        .status(200)
        .json({ createdCart, message: "Criando com Sucesso" });
    } catch (error) {
      return res
        .status(400)
        .json({
          error,
          message: "Erro na requisição, verifique e tente novamente",
        });
    }
  },
  // Pegando todos os Cart do Usuario
  async getUserCarts(req, res) {
    const { user_id } = req.params;

    try {
      const userCarts = await Cart.find({ username: user_id });
      return res.status(200).json({ userCarts, message: "Successful" });
    } catch (error) {
      return res
        .status(400)
        .json({
          error,
          message: "Erro na requisição, verifique  e tente novamente",
        });
    }
  },
  async getCart(req, res) {

    const {user_id, cart_id} = req.params;

    try {
        const cart = await Cart.findById(cart_id).populate('products')
        return res.status(200).json({ cart, message: 'Successful' })
    } catch (error) {
      return res
        .status(400)
        .json({
          error,
          message: "Erro na requisição, verifique  e tente novamente",
        });
    }
  },
};

module.exports = cartController;
