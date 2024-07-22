import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import caseRoutes from "./interface/routes/CaseRoutes";
import setupSwagger from "./utils/swagger";
import dotenv from "dotenv";

dotenv.config();

console.log("Database Host:", process.env.DB_HOST);
console.log("Database User:", process.env.DB_USER);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api", caseRoutes);

setupSwagger(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
