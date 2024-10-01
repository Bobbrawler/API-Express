import { Document, Model, Schema, model } from "mongoose";

export interface ICloth extends Document {
    id: string,
    name: string,
    price: string,
    imageSrcIntro: string,
    imageSrc2: string,
    imageSrc3: string,
    brand: string,
    size: string,
    color: string,
    material: string,
    gender: string,
    fit?: string,
    pocketCount?: string,
    embellishments?: string,
    laces?: string,
    soleMaterial?: string,
    designType?: string,
    sleeveLength?: string,
    closureType?: string,
    hoodType?: string,
}

interface IClothModel extends Model<ICloth> {}

const schema  = new Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    imageSrcIntro: { type: String, required: true },
    imageSrc2: { type: String, required: true },
    imageSrc3: { type: String, required: true },
    brand: { type: String, required: true },
    size: { type: String, required: true },
    color: { type: String, required: true },
    material: { type: String, required: true },
    gender: { type: String, required: true },
    fit: { type: String, required: false },
    pocketCount: { type: String, required: false },
    embellishments: { type: String, required: false },
    laces: { type: String, required: false },
    soleMaterial: { type: String, required: false },
    designType: { type: String, required: false },
    sleeveLength: { type: String, required: false },
    closureType: { type: String, required: false },
    hoodType: { type: String, required: false },
})

export const Cloth: IClothModel = model<ICloth, IClothModel>("Cloth", schema);

