import mongoose from "mongoose";

const auditLogsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    action: {
        type: String,
        required: true,
        trim: true,
    },
    ipAddress: {
        type: String,
        trim: true,
    },
    severity: {
        type: String,
        enum: ["Low", "Medium", "High", "Critical"],
        default: "Low",
    },
    details: {
        type: String,
        trim: true,
    },
}, { timestamps: true });

const auditLogsModel = mongoose.models.AuditLog || mongoose.model("AuditLog", auditLogsSchema);
export default auditLogsModel;