import mongoose from "mongoose";

const { Schema } = mongoose;

const newMember = new Schema(
    {
       nome: {
        type: String,
        required: true
       },
       cargo: {
        type: String,
        required: true
       },
       role: {
        type: String,
        required: true
       },
       image: {
        type: String,
        required: true
       }
    },
);

export default mongoose.models.Member || mongoose.model("Member", newMember);
