import express from 'express'
import { asyncHandler } from '../utils/asyncHandler.js';

const router = express.Router();

// Enclose the asyncHandler for the functioncalls like signUp => asyncHandler(signUp) =>
// Thus no more try catch in the controllers just write the bussiness logic directly

export default router;