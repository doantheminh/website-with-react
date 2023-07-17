import mongoose from "mongoose";
const { Schema } = mongoose;
const userSchema = new Schema({
    name: String,

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: "member"
    }
}, { timestamps: true, versionKey: false })
export default mongoose.model("User", userSchema);