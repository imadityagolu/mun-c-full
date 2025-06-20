import listproducts from "../models/showProduct.models.js";

const listingproduct = async (req, res) => {
    try {
    const product = await listproducts.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
};

const showProductController = {
    listingproduct
};

export default showProductController;