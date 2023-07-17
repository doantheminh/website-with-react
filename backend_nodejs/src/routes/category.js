import express from "express";
import { create, get, getAll, remove, update } from "../controllers/category";
import { checkPrermission } from "../middlewares/checkPermission";
const router = express.Router();

router.get("/categorys", getAll);
router.get("/categorys/:id", get);
router.post("/categorys", checkPrermission, create);
router.put("/categorys/:id", checkPrermission, update);
router.delete("/categorys/:id", checkPrermission, remove);

export default router;
