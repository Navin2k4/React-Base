import jwt from "jsonwebtoken";
import { errorHandler } from "./globalerrorHandler";

export const verifyUser = (req, res, next) => {
  const token = req.cookies?.accessToken;
  if (!token) {
    return next(errorHandler(401, "Access token not found", "TokenNotFound"));
  }
  jwt.verify(token, process.env.ACCESS_SECRET, (err, decodedUser) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return next(errorHandler(401, "Token expired", "TokenExpired"));
      }
      return next(errorHandler(401, "Invalid token", "InvalidToken"));
    }
    req.user = decodedUser;
    next();
  });
};