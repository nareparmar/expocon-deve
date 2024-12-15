import mongoose from 'mongoose'; 
import colors from 'colors';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://vaibhavswellfounded:Admin123@expocon.ojs4ov4.mongodb.net/test?retryWrites=true&w=majority&appName=Expocon");
        console.log("Connected to the database".bgMagenta);

    } catch (error) {

        console.error(`Error connecting to the database: ${error.message}`.bgRed);
    }
};

export default connectDB;