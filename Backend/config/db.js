import mongoose from "mongoose";

// async coonect to things that take time to connect like database, api, etc
const connectDB = async() => {
    try {

        // used to connect to the database using mongoose.connect() method and passing the MONGO_URL from the env variables
        //await wait or connection finished before moving to the next line of code
        const conn = await mongoose.connect(process.env.MONGO_URL);


        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("❌ MongoDB Connection Failed");
        console.error(error.message);
        process.exit(1);
    }
};

export default connectDB;