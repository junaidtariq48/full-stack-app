import express from "express";
import itemController from "../controllers/itemController";

const router = express.Router();

router.get("/", itemController.getItems);
router.post("/", itemController.addItem);
router.delete("/:id", itemController.deleteItem);

export default router;
