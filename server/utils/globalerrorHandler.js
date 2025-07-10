import { STATUS_CODES } from '../../shared/constants/statusCodes.js';

/**
 * Base class for all custom application errors.
 * Extends the built-in Error object to support status codes and additional details.
 */
export class AppError extends Error {
  constructor(statusCode, message, name = "ApplicationError", details = null) {
    super(message);
    this.statusCode = statusCode;
    this.name = name;
    this.details = details;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Shorthand helper to create a new AppError.
 *
 * @param {number} statusCode - HTTP status code
 * @param {string} message - Error message
 * @param {string} [name="ApplicationError"] - Name/type of error
 * @param {object|null} [details=null] - Additional details (optional)
 * @returns {AppError}
 */
export const errorHandler = (
  statusCode,
  message,
  name = "ApplicationError",
  details = null
) => new AppError(statusCode, message, name, details);

// Specific error subclasses

/** Represents a generic 500 Internal Server Error. */
export class InternalServerError extends AppError {
  constructor(details = null) {
    super(STATUS_CODES.INTERNAL, "Internal Server Error", "ServerError", details);
  }
}

/** Represents a 400 Bad Request due to validation failure. */
export class ValidationError extends AppError {
  constructor(details = null) {
    super(STATUS_CODES.BAD_REQUEST, "Validation Error", "ValidationError", details);
  }
}

/** Represents a 401 Unauthorized error due to bad credentials or missing token. */
export class AuthenticationError extends AppError {
  constructor(details = null) {
    super(STATUS_CODES.UNAUTHORIZED, "Invalid Credentials", "AuthenticationError", details);
  }
}

/** Represents a 403 Forbidden error when user lacks access rights. */
export class AuthorizationError extends AppError {
  constructor(details = null) {
    super(STATUS_CODES.FORBIDDEN, "You do not have permission to perform this action", "AuthorizationError", details);
  }
}

/** Represents a 409 Conflict error, typically for duplicates or state mismatches. */
export class ConflictError extends AppError {
  constructor(message = "Conflict", details = null) {
    super(STATUS_CODES.CONFLICT, message, "ConflictError", details);
  }
}