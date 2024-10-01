import dotenv from "dotenv";

const result = dotenv.config();
if (result.error) {
    dotenv.config({ path: ".env" });
}

import { app } from "./app";
import { logger } from "./logger";
import { error } from "winston";
import MongoConnection from "./mongo-connection";

if (process.env.MONGO_URL == null) {
    logger.log({
        level: "error",
        message: "Mongo Url not specified in environment",
    });
} else {
    const mongoConnection = new MongoConnection(process.env.MONGO_URL);
    mongoConnection
        .connectToDatabase()
        .then(() => {
            logger.log({
                level: "info",
                message: "Connect to MongoDB",
            });
            app.listen(app.get("port"), (): void => {
                console.log(
                    `Server listening http://localhost:${app.get("port")}`
                );
            });
        })
        .catch((err) => {
            logger.log({
                level: "error",
                message: "Could not connect to MongoDB",
                error
            });
        });

        // Close the Mongoose connection, when receiving SIGINT
        process.on('SIGINT', () => {
            logger.info('Gracefully shutting down');
            mongoConnection.closeDbConnection().then(() => { }).catch(error => {
                logger.log({
                    level: 'error',
                    message: 'Error shutting closing mongo connection',
                    error: error
                });
            });
            process.exit(0);
        });
}
