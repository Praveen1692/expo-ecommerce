import { Router } from "express";
import { createProduct } from "../controller/admin.controller.js";
import { adminOnly, protectRoute } from "../middleware/auth.middleware.js"
import { multerMiddleware } from "../middleware/multer.middleware.js";
const router = Router();



router.use(protectRoute, adminOnly)

router.post("/products/", multerMiddleware.array("images", 3), createProduct)

router.get("/products/", getAllProducts);

router.get("/products/:id", getProductById);

router.put("/products/:id", multerMiddleware.array("images", 3), updateProduct);

router.delete("/products/:id", deleteProduct);







export default router;

