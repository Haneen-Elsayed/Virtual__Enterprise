import mongoose from "mongoose";

const documentsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    fileUrl: {
        type: String,
        required: true,
        trim: true,
    },
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    departmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department",
    },
    accessLevel: {
        type: String,
        enum: ["Public", "Internal", "Confidential", "Restricted"],
        default: "Internal",
    },
}, { timestamps: true });

const documentsModel = mongoose.models.Document || mongoose.model("Document", documentsSchema);
export default documentsModel;