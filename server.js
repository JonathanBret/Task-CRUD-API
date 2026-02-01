import express from "express";
import tasksRoutes from "./routes/tasks.js";

const app = express();

app.use(express.json());

app.use("/tasks", tasksRoutes);

app.get("/", (req, res) => res.send("Server is running"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
