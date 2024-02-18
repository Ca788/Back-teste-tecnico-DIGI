import express from "express";
import cors from "cors";
import conn from "./db/conn.mjs";
import routes from "./routes/routes.mjs";

const app = express();

app.use(cors());
app.use(express.json());

(async () => {
  try {
    await conn();
    app.use(routes);

    app.listen(5000, () => {
      console.log("Server started on port 🔥 http://localhost:5000");
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
})();
