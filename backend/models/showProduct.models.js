import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  itemType: { type: String, enum: ['goods', 'services'], default: '' },
  productName: { type: String, default: '' },
  sku: { type: String, default: '' },
  barcode: { type: String, default: '' },
  category: { type: String, default: '' },
  subCategory: { type: String, default: '' },
  brand: { type: String, default: '' },
  productType: { type: String, enum: ['simple', 'variant', 'bundle'], default: '' },
  supplier: { type: String, default: '' },
  supplierSKU: { type: String, default: '' },
  warehouse: { type: String, default: '' },
  leadTime: { type: String, default: '' },
  reorderLevel: { type: String, default: '' },
  initialStock: { type: String, default: '' },
  track: { type: String, enum: ['serialno', 'batchno', ''], default: '' },
  status: { type: Boolean, default: false },
  purchasePrice: { type: String, default: '' },
  sellingPrice: { type: String, default: '' },
  wholesalePrice: { type: String, default: '' },
  quantity: { type: String, default: '' },
  unit: { type: String, default: '' },
  discountPrice: { type: String, default: '' },
  discountPeriodfrom: { type: String, default: '' },
  discountPeriodto: { type: String, default: '' },
  taxRate: { type: String, default: '' },
  hsnSac: { type: String, default: '' },
  gstRate: { type: String, default: '' },
  description: { type: String, default: '' },
  seoTitle: { type: String, default: '' },
  seoDescription: { type: String, default: '' },
  keywords: { type: [String], default: [] },
  variants: { type: Object, default: {} },
  isDraft: { type: Boolean, default: false }
}, { timestamps: true });

const showproductModel = mongoose.model("list", productSchema);

export default showproductModel;