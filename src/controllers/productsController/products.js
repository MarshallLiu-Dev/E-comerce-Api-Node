const Products = require("../../modules/Products");
const ProductsControler = {
  // Criando Produtos
  async createProduct(req, res) {
    const bodyData = req.body;
    const { user_id } = req.params;

    try {
      const data = { username: user_id, ...bodyData };

      const newProduct = await Products.create(data);
      //                await newProduct.populate('username').execPopulate()

      return res.status(200).json(newProduct);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  // Listando produtos do Usuario
  async getUsersProduct(req, res) {
    const { user_id } = req.params;

    try {
      const productsOfUser = await Products.find({ username: user_id });

      return res.status(200).json(productsOfUser);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  // Atualizando um Produto
  async updateProduct(req, res) {
    const bodyData = req.body;
    const { products_id } = req.params;
    const { user_id } = req.params;

    try {
      const updateProduct = await Products.findByIdAndUpdate(
        products_id,
        bodyData,
        { new: true }
      );

      return res.status(200).json(updateProduct);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  // Deletando
  async deleteProduct(req, res) {
    const { products_id, user_id } = req.params;

    try {
      const deleteProduct = await Products.findByIdAndDelete(products_id);

      return res
        .status(200)
        .json({ deleteProduct, message: "delete successful" });
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  //Listando todos os produtos
  async getProduct(req, res) {
    try {
      const products = await Products.find();
      return res.status(200).json(products);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  //Listando Produtos pelo Id do Usuario
  async getProductById(req, res) {
    const { products_id } = req.params;

    try {
      const product = await Products.findById(products_id);
      return res.status(200).json(product);
    } catch (error) {
      return res
        .status(400)
        .json({
          error,
          message:
            "erro na requisição, verifique o id do produto e tente novamente",
        });
    }
  },
};

module.exports = ProductsControler;
