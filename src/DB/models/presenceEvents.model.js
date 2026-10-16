import mongoose from "mongoose";

const presenceEventsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    eventType: {
        type: String,
        enum: ["CHECK_IN", "CHECK_OUT", "FACE_RECOGNIZED_SUCCESS", "FACE_RECOGNIZED_FAILED"],
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    confidenceScore: {
        type: Number, // نسبة الدقة للذكاء الاصطناعي في التعرف على الوجه
    },
    location: {
        type: String,
        trim: true,
        default: "Office Headquarters",
    },
}, { timestamps: true });

const presenceEventsModel = mongoose.models.PresenceEvent || mongoose.model("PresenceEvent", presenceEventsSchema);
export default presenceEventsModel;