import { STATUS_CODES } from '../../shared/constants/statusCodes.js'
/**
 * Standardized success response formatter for API responses.
 *
 * @param {import('express').Response} res - Express response object
 * @param {number} [statusCode=200] - HTTP status code
 * @param {string} [message="Success"] - Descriptive success message
 * @param {object} [data={}] - Payload or result data
 * @param {object|null} [meta=null] - Optional metadata (e.g., pagination info)
 * @returns {import('express').Response} JSON response with consistent structure
 */
export const responseHandler = (
  res,
  statusCode = STATUS_CODES.CREATED,
  message = "Success",
  data = {},
  meta = null
) => {
  const response = {
    success: true,
    message,
    data,
  };
  if (meta) {
    response.meta = meta;
  }
  return res.status(statusCode).json(response);
};