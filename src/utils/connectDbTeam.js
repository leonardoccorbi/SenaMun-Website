import mongoose from "mongoose";

const connectTeam = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL_TEAM)
        console.log("Mongo connection to Team sucessfully estabilished")
    } catch (error) {
        throw new Error("Error connecting to Mongoose: ", error)
    }
}

export default connectTeam
