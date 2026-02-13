import express from "express";
import tasksRoutes from "./routes/tasks.js";
import cors from "cors"

const app = express();

app.use(cors())
app.use(express.json());

app.use("/tasks", tasksRoutes);

app.get("/", (req, res) => res.send("Server is running"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong" });
  });
  