import { RequestHandler, Request, Response, NextFunction } from "express";
import { logger } from "../logger";

export const relogRequestHandler =
    (handler: RequestHandler): RequestHandler =>
    async (req: Request, res: Response, next: NextFunction) => {
        logger.log({
            level: "info",
            message: req.url,
        });

        return handler(req, res, next);
    };
