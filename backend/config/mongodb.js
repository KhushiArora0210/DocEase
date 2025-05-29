import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on('connected', () => console.log('Database Connected'))
  await mongoose.connect(`mongodb+srv://khushiarora:jaiguruji@cluster0.pxkyfpw.mongodb.net/docease`)
}

export default connectDB