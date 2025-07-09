export class AppError extends Error {
    constructor(statusCode, message, name = "ApplicationError", details = null) {
        super(message);
        this.statusCode = statusCode;
        this.name = name;
        this.details = details;
        Error.captureStackTrace(this, this.constructor);
    }
}

export const errorHandler = (statusCode, message, name = "ApplicationError", details = null) => {
    return new AppError(statusCode, message, name, details);
}