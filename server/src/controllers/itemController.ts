import { Request, Response } from "express";
import Item, { IItem } from "../models/Item";
import mongoose from "mongoose";

/**
 * Controller class for managing items.
 */
class ItemController {
  /**
   * Retrieves all items from the database and sends them as a JSON response.
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   * @returns {Promise<void>} - A promise that resolves when the response is sent.
   * @throws {Error} - If there is an error retrieving the items from the database.
   */
  public getItems = async (req: Request, res: Response): Promise<void> => {
    try {
      const items: IItem[] = await Item.find();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  /**
   * Adds a new item to the database.
   * @param {Request} req - The request object containing the item data.
   * @param {Response} res - The response object to send the result.
   * @returns {Promise<void>} - A promise that resolves when the item is successfully added.
   * @throws {Error} - If there is an error while adding the item.
   */
  public addItem = async (req: Request, res: Response): Promise<void> => {
    try {
      const newItem: IItem = new Item(req.body);
      await newItem.save();
      res.status(201).json(newItem);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  /**
   * Deletes an item from the database based on the provided item ID.
   * @param {Request} req - The request object containing the item ID in the params.
   * @param {Response} res - The response object to send the result of the deletion.
   * @returns {Promise<void>} - A promise that resolves once the deletion is complete.
   */
  public deleteItem = async (req: Request, res: Response): Promise<void> => {
    const itemId = req.params.id;

    try {
      const result = await Item.deleteOne({
        _id: new mongoose.Types.ObjectId(itemId),
      });

      if (result.deletedCount === 1) {
        res.status(200).json({ message: "Item deleted successfully." });
      } else {
        res.status(404).json({ error: "Item not found." });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error." });
    }
  };
}

export default new ItemController();
