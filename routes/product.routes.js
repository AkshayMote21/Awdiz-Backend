import { Router } from "express";
import { GetAllProduct, CreateNewProduct } from "../controllers/product.controller.js";

const router = Router();

router.get('/get-all-product', GetAllProduct);
router.post('/create-new-product', CreateNewProduct);

export default router;