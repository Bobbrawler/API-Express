import express, { Request, Response, NextFunction } from "express";
import { ApplicationError } from "./errors/application-error";
import { router } from "./routes";
import cors from "cors";
import path from "path";

export const app = express();

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type"],
    })
);

app.use(express.json());

app.use("/clothsImages", express.static(path.join(__dirname, "../clothsImages")))

app.set("port", process.env.PORT || 3000);

app.use("/api", router);

app.use(
    (
        err: ApplicationError,
        req: Request,
        res: Response,
        next: NextFunction
    ): void => {
        if (res.headersSent) {
            return next(err);
        }

        res.status(err.status || 500).json({
            error: process.env.NODE_ENV === "development" ? err : undefined,
            message: err.message,
        });
    }
);

