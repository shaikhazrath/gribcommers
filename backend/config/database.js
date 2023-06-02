import mongoose from "mongoose";
import chalk from 'chalk';

const connectDB = async () => {
  try {
    // Replace "your_mongodb_uri" with your actual MongoDB connection URI
    await mongoose.connect(process.env.DB);
    console.log(chalk.yellowBright('Connected to MongoDB'));
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB
