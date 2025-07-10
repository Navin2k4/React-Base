import mongoose from "mongoose";
const modelSchema = new mongoose.Schema({})

const Model = mongoose.model("Model", modelSchema);
export default Model;