import express from "express";
import Question from "../models/question.mjs";
import User from "../models/user.mjs";

const router = express.Router();

// GET TODAS AS QUESTÕES
router.get("/questions", async (req, res) => {
  try {
    const questions = await Question.find();
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// GET QUESTIONS POR ID
router.get("/questions/:id", async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ error: "Pergunta não encontrada" });
    }
    return res.status(200).json(question);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// CREATE USER
router.post("/users", async (req, res) => {
  try {
    const { username } = req.body;
    const newUser = await User.create({ username });
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// CREATE QUESTIONS
router.post("/questions", async (req, res) => {
  try {
    const { description, alternatives } = req.body;
    const question = await Question.create({ description, alternatives });
    return res.status(201).json(question);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// UPDATE QUESTIONS
router.put("/questions/:id", async (req, res) => {
  try {
    const { description, alternatives } = req.body;
    const question = await Question.findByIdAndUpdate(
      req.params.id,
      { description, alternatives },
      { new: true }
    );
    if (!question) {
      return res.status(404).json({ error: "Pergunta não encontrada" });
    }
    return res.status(200).json(question);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// DELETE QUESTIONS
router.delete("/questions/:id", async (req, res) => {
  try {
    const question = await Question.findByIdAndDelete(req.params.id);
    if (!question) {
      return res.status(404).json({ error: "Pergunta não encontrada" });
    }
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get("/", (req, res) => {
  res.send("API 😁");
});

export default router;
