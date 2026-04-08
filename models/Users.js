import e from 'express';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
    name: { type: String, required: true ,trim: true},
    age: { type: Number, min: 0 },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true }
    },
   {
    timestamps: true
   }

);



export default mongoose.model("User", userSchema);