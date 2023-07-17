import express from "express";
import { create, get, getAll, remove, update } from "../controllers/product";
import { checkPrermission } from "../middlewares/checkPermission";
const router = express.Router();

router.get("/products", getAll);
router.get("/products/:id", get);
router.post("/products",checkPrermission, create);
router.put("/products/:id",checkPrermission, update);
router.delete("/products/:id",checkPrermission, remove);

export default router;
