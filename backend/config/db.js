import mongoose from 'mongoose'; 
import colors from 'colors';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://parmar1jan1983:v71YusEWIfwjo8Y6@cluster0.jxoln.mongodb.net/expocon-db?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected to the database".bgMagenta);

    } catch (error) {

        console.error(`Error connecting to the database: ${error.message}`.bgRed);
    }
};

export default connectDB;