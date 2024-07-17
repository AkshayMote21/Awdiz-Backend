import { Router } from "express";
import { LoginAdmin } from "../controllers/admin.controller.js";

const router = Router();

router.post('/login-admin', LoginAdmin);

export default router ;
