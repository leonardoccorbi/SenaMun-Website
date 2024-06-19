import mongoose from "mongoose";

const { Schema } = mongoose;

const newCommittees = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        language: {
            type: String, 
            required: true
        },
        format: {
            type: String, 
            required: true
        },
        classroom: {
            type: String, 
            required: true
        },
        image: {
            type: String,
            required: true
        }
    },
);

export default mongoose.models.Committees || mongoose.model("Committees", newCommittees);
