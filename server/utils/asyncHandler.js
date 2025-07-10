/**
 * Wraps an asynchronous Express route handler to catch errors and pass them to next().
 *
 * This eliminates the need for explicit try/catch blocks in each async controller.
 *
 * @param {Function} fn - An async function (req, res, next) => Promise
 * @returns {Function} A function that handles errors and passes them to Express middleware chain
 */
export const asyncHandler = (fn) => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);
  