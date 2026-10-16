import express from "express";
import bootstrap from "./src/app.controller.js";
import dotenv from "dotenv";
import chalk from "chalk";

dotenv.config({ path: "./src/DB/config/.env.dev" });

const app = express();
const port = process.env.PORT || 5000;

console.log("DB_URI from env:", process.env.DB_URI);

await bootstrap(app, express);

app.listen(port, () => {
  console.log(chalk.bgGreen(chalk.black(`server is running http://localhost:${port}`)));
});
console.log("Hello from Node!");