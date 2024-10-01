import { Router } from "express";
import { getAllCloths } from "./controller/cloth";

export const router = Router();

router.get("/cloths", getAllCloths);