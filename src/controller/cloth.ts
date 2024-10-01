import { RequestHandler } from "express";
import { relogRequestHandler } from "../middleware/request-middleware";
import { Cloth } from "../models/Cloth";

const allWrapper: RequestHandler = async (req, res) => {
    try {

        const cloths = await Cloth.find();
        res.json(cloths);
    } catch (error) {
        res.status(500).json({message: "Error with get data."})
    }
}

export const getAllCloths = relogRequestHandler(allWrapper);