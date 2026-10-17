import connectDB from "./DB/connection.js";
import presenceRouter from './Modules/presence/presence.routes.js';

const bootstrap = async (app, express) => {
  // Parse incoming JSON requests
  app.use(express.json());

  // Connect to database
  await connectDB();

  // Mount presence routes
  app.use('/api/v1/presence', presenceRouter);

  // Default welcome route
  app.get("/", (req, res) => {
    res.json({ message: "Welcome to Virtual Enterprise API!" });
  });

  // Handle invalid/unsupported endpoints
  app.use('{*splat}', (req, res) => {
    res.status(404).json({ message: "In-valid endpoint" });
  });
};

export default bootstrap;