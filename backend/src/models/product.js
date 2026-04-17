import mongoose from "mongoose";
import { create } from "node:domain";
import { type } from "node:os";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlegth: 2,
        },
        description: {
            type: String,
            required: true,
            trim: true,
            maxlegth: 500, 
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        stock: {
            type: Number,
            required: true,
            min: 0,
        },
        Image: {
            type: String,
            default: "",
        },
        createBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        }
    },
    {timestamps: true}
);

const Product = mongoose.model("Product", productSchema);

export default Product;