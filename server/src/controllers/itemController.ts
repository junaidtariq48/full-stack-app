import { Request, Response } from "express";
import Item, { IItem } from "../models/Item";
import mongoose from "mongoose";

class ItemController {
  public getItems = async (req: Request, res: Response): Promise<void> => {
    try {
      const items: IItem[] = await Item.find();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  public addItem = async (req: Request, res: Response): Promise<void> => {
    try {
      const newItem: IItem = new Item(req.body);
      await newItem.save();
      res.status(201).json(newItem);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  public deleteItem = async (req: Request, res: Response): Promise<void> => {
    const itemId = req.params.id;

    try {
      const result = await Item.deleteOne({
        _id: new mongoose.Types.ObjectId(itemId),
      });

      if (result.deletedCount === 1) {
        res.status(201).json({ message: "Item deleted successfully." });
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
