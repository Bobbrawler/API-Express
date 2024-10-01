import { connect, connection } from "mongoose";

export default class MongoConnection {
    private mongoURL;

    constructor(mongoURL: string) {
        this.mongoURL = mongoURL;
    }

    public async connectToDatabase(): Promise<void> {
        try {
            await connect(this.mongoURL);
        } catch (err) {
            throw err;
        }
    }

    public async closeDbConnection(): Promise<void> {
        try {
            await connection.close();
        } catch (err) {
            throw err;
        }
    }
}
