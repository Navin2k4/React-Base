/**
 * Common HTTP status codes used across the application.
 *
 * @readonly
 * @enum {number}
 */
export const STATUS_CODES = {
    /** Request succeeded */
    OK: 200,
    /** Resource created successfully */
    CREATED: 201,
    /** Client sent an invalid request */
    BAD_REQUEST: 400,
    /** Request requires user authentication */
    UNAUTHORIZED: 401,
    /** Client is authenticated but not authorized to access the resource */
    FORBIDDEN: 403,
    /** The requested resource could not be found */
    NOT_FOUND: 404,
    /** Conflict in the request, such as duplicate data */
    CONFLICT: 409,
    /** Server encountered an internal error */
    INTERNAL: 500,
  };
  