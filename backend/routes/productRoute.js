const express = require("express");
const { is } = require("express/lib/request");

const router = express.Router();

const {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/authMiddleware");

router.get("/products", getProducts);
router.get("/product/:id", getSingleProduct);

router.post("/admin/product/new", isAuthenticatedUser, authorizeRoles("admin"), newProduct);
router.put("/admin/product/:id", isAuthenticatedUser, authorizeRoles("admin"), updateProduct);
router.delete("/admin/product/:id", isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

module.exports = router;
