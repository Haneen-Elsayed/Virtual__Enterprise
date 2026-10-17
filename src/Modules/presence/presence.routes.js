import express from 'express';
import { logPresence } from './presence.controller.js';

const router = express.Router();

// Route to log a presence event
router.post('/log', logPresence);

export default router;