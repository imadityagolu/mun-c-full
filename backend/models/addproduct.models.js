import mongoose from "mongoose";

const addProductSchema = mongoose.Schema({
    itemType: {
        type: String,
    },
    productName: {
        type: String,
    },
    sku: {
        type: String,
    },
    barcode: {
        type: String,
    },
    ean: {
        type: String,
    },
    category: {
        type: String,
    },
    subCategory: {
        type: String,
    },
    branchManuf: {
        type: String,
    },
    productType: {
        type: String,
    },
    supplier: {
        type: String,
    },
    suppliersku: {
        type: String,
    },
    warehouselocation: {
        type: String,
    },
    leadtime: {
        type: String,
    },
    recorderLevel: {
        type: String,
    },
    initialStock: {
        type: Number,
    },
    trackNo: {
        type: String,
    },
    status: {
        type: String,
    },
    purchasePrice: {
        type: Number,
    },
    sellingPrice: {
        type: Number,
    },
    wholesalePrice: {
        type: Number,
    },
    quantity: {
        type: Number,
    },
    unit: {
        type: Number,
    },
    discountPricefrom: {
        type: Date,
    },
    discountPriceTo: {
        type: String,
    },
    taxRate: {
        type: Number,
    },
    hsnsac: {
        type: String,
    },
    gstRate: {
        type: Number,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    seometatitle: {
        type: String,
    },
    seometadesc: {
        type: String,
    },
    keywords: {
        type: [String],
    },
    variants: {
        type: {String},
    }
});

const addproductModel = mongoose.model("products", addProductSchema);

export default addproductModel;