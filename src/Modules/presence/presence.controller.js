import PresenceEvent from '../../DB/models/presenceEvents.model.js';

//Controller to log a new presence event
export const logPresence = async (req, res) => {
    try {
        const { userId, eventType, confidenceScore, location } = req.body;

        // Create new presence event in the database
        const newEvent = await PresenceEvent.create({
            userId,
            eventType,
            confidenceScore,
            location
        });

        return res.status(201).json({
            success: true,
            message: 'Presence event logged successfully',
            data: newEvent
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'An error occurred while logging presence event',
            error: error.message
        });
    }
};