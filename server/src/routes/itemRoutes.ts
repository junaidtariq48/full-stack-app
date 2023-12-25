import express from "express";
import itemController from "../controllers/itemController";

const router = express.Router();

/**
 * Route handler for GET requests to the root path ("/").
 * Retrieves all items from the database and sends them as a response.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns None
 */
router.get("/", itemController.getItems);

/**
 * Route handler for adding an item.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns None
 */
router.post("/", itemController.addItem);

/**
 * Deletes an item with the specified ID.
 * @param {string} id - The ID of the item to delete.
 * @returns None
 */
router.delete("/:id", itemController.deleteItem);

export default router;
