import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://fooddeliveryapp:9010909505@cluster0.hsgutb4.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}