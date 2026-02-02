import express from "express";
import cors from "cors";
import type { Habit } from "../Interfaces/interface-habit";
import { readHabits, writeHabits } from "./habit-storage";

const habitApp = express();
habitApp.use(cors());
habitApp.use(express.json());

let habits: Habit[] = [];

habitApp.get("/habits", (req, res) => {
  habits = readHabits();
  res.json(habits);
  req;
});

habitApp.post("/habits", (req, res) => {
  const newHabit: Habit = req.body;
  habits.push(newHabit);
  writeHabits(habits);
  res.status(201).json(newHabit);
});

habitApp.put("/habits/:id", (req, res) => {
  const habitId = req.params.id;
  const updatedHabit: Habit = req.body;
  const index = habits.findIndex((habit) => habit.id === habitId);
  if (index !== -1) {
    habits[index] = updatedHabit;
    writeHabits(habits);
    res.json(updatedHabit);
  } else {
    res.status(404).json({ message: "Habit not found" });
  }
});

habitApp.delete("/habits/:id", (req, res) => {
  const habitId = req.params.id;
  habits = habits.filter((habit) => habit.id !== habitId);
  writeHabits(habits);
  res.status(204).send();
});

export default habitApp;
