export class ApplicationError extends Error {
    public message: string = "ApplicationError";

    public status: number = 500;
    
    constructor(message?: string, status?: number) {
        super();
        this.message = message;
        this.status = status;
    }
}