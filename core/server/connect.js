import mongoose from "mongoose";

const MakeConnection = async () => {
    try {
        if (mongoose.connections[0].readyState) {
            console.log("Mongodb already is connected.")
            return;
        }

        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Mongodb connected successfully.")

    } catch (error) {
        console.log("Something went wrong while connecting to mongodb", error)
        return;
    }
}

export default MakeConnection
