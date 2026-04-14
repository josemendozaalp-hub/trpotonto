import dotend from 'dotenv';
import app from './src/app.js';
import connectDB from './src/database/conection.js'

dotend.config();

const PORT = Number(process.env.PORT) || 5000;

const startServer = async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error.message);
        process.exit(1);
    }
}