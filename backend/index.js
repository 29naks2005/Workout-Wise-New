import express from "express";
import { PrismaClient } from "./generated/prisma/index.js";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

app.use(cors({ origin: "http://localhost:3001" })); // 👈 must be before routes
app.use(express.json());

app.get("/plans", async (req, res) => {
  const { level, goal, type } = req.query;
  try {
    const plans = await prisma.workoutPlan.findMany({
      where: {
        ...(level && { level }),
        ...(goal && { goal }),
        ...(type && { type }),
      },
    });
    res.json(plans);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching plans" });
  }
});

app.listen(3000, () => console.log("✅ API running on http://localhost:3000"));
