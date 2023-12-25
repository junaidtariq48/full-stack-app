import mongoose, { Schema, Document } from "mongoose";

/**
 * Represents an item with a name and quantity.
 */
export interface IItem extends Document {
  name: string;
  quantity: Number;
}

/**
 * Defines the schema for an item in a collection.
 * @type {Schema}
 * @property {string} name - The name of the item.
 * @property {number} quantity - The quantity of the item.
 */
const ItemSchema: Schema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
});

/**
 * Creates a new Mongoose model for the 'Item' collection using the provided ItemSchema.
 * @param {IItem} - The interface representing the structure of the 'Item' collection.
 * @param {string} - The name of the collection.
 * @param {ItemSchema} - The schema definition for the 'Item' collection.
 * @returns The newly created Mongoose model for the 'Item' collection.
 */
export default mongoose.model<IItem>("Item", ItemSchema);
