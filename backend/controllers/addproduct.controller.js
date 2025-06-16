import addproductModel from "../models/addproduct.models.js";

const addproduct = async (req, res) => {
    
    await addproductModel.create(req.body);

    console.log("Add product - create api hit");
    res.status(200).json({
        success: true,
        message: "Product Added"
    });
};

const addproductController = {
    addproduct
};

export default addproductController;