import mongoose from "mongoose";

const connectCommittees = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL_COMMITTEES)
        console.log("Mongo connection to Committees sucessfully estabilished")
    } catch (error) {
        throw new Error("Error connecting to Mongoose: ", error)
    }
}

export default connectCommittees
