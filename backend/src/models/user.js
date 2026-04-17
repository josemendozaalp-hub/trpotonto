import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import { kMaxLength } from 'node:buffer';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 50,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        }
    },
    { timestamps: true }
)

USERSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
})