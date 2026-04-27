<<<<<<< HEAD
import dotend from 'dotenv';
import app from './src/app.js';
import connectDB from './src/database/conection.js'

dotend.config();
=======
import dotenv from 'dotenv';
import app from './src/app.js';
import connectDB from './src/database/connection.js';

dotenv.config();
>>>>>>> 6fbcdd14b38a1ef30ff4dfe9d00b3b243e6a2947

const PORT = Number(process.env.PORT) || 5000;

const startServer = async () => {
<<<<<<< HEAD
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
=======
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
};

startServer();
>>>>>>> 6fbcdd14b38a1ef30ff4dfe9d00b3b243e6a2947
