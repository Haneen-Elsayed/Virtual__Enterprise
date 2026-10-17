import mongoose from "mongoose";

export const genderEnum = {
    MALE: "MALE",
    FEMALE: "FEMALE",
};

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: [2, "name must be at least 2 characters"],
        maxlength: [50, "name must be at most 50 characters"]
    },
    role: {
        type: String,
        required: true,
        enum: ["Admin", "Manager", "Employee", "Security_Team"],
        default: "Employee",
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    department_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Department",
    },
    password: {
        type: String,
        required: true,  
    },
    gender: {
        type: String,
        enum: {
            values: Object.values(genderEnum),
            message: "{VALUE} is not a valid gender"
        },
        default: genderEnum.MALE
    },
    status: {
        type: String,
        enum: ["active", "suspended"],
        default: "active"
    },
    freezedAt: Date,
    freezedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    restoredAt: Date,
    restoredBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    phonenumber: String,
    confirmemail: Date,
    confirmemailotp: String,
    forgetpasswordOtp: String,
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

const userModel = mongoose.models.User || mongoose.model("User", userSchema);
export default userModel;