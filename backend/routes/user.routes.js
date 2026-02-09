import { Router } from "express";
import { addAddress } from "../controller/user.controller";
const router = Router();

router.use(protectRoute)


router.post("/address", addAddress);
router.get("/address", getAddress);
router.put("/address/:addressId", updateAddress);
router.delete("/address/:addressId", deleteAddress);

router.get("/customers", getAllCustomer)



// wishlist routes

router.post("/wishlist", addToWishlist);
router.get("/wishlist", getWishlist);
router.delete("/wishlist/:productId", removeFromWishlist);










export default router;