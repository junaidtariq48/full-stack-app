import mongoose, { Schema, Document } from 'mongoose';

export interface IItem extends Document {
  name: string;
  quantity: Number; 
}

const ItemSchema: Schema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true }
});

export default mongoose.model<IItem>('Item', ItemSchema);