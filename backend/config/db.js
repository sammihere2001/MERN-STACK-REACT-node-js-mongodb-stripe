import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://saimazam126:mynameiskhan@cluster0.axj1m.mongodb.net/').then(()=>console.log("DB Connected"));
}