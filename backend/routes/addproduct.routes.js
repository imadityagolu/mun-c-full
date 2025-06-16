import { Router } from "express";
import addproductController from '../controllers/addproduct.controller.js';

const router = Router();

router.post("/munc/api/addproduct", addproductController.addproduct);

export default router;