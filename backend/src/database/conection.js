import mongoose from 'mongoose';

const connectDB = async (mongoUri) => {
    if(!mongoUri) {
        throw new Error('MongoDB URI is not defined');
    }

    mongoose.set('strictQuery', true);
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected successfully');
};

export default connectDB;