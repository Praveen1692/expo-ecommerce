import { Router } from "express";
import { createProduct } from "../controller/admin.controller.js";

const router = Router();



router.post("/products/", createProduct)





export default router;

