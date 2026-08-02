const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const connectionString = process.env.DB_STRING.replace('<db_password>', process.env.DB_PASSWORD).replace('<db_name>', process.env.DB_NAME);
        console.log('Connecting to MongoDB...');
        await mongoose.connect(connectionString);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

module.exports = connectDB;