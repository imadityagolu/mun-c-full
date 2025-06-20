import { Router } from "express";
import showProductController from '../controllers/showProduct.controller.js';

const router = Router();

router.post("/api/product/:id", showProductController.listingproduct);

export default router;