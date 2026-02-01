import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createTask = async (req, res) => {
  try {
    if (!req.body.title || !req.body.description) {
      return res.status(400).json({ error: "Title and description required" });
    }

    const task = await prisma.task.create({
      data: req.body,
    });

    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const getTaskById = async (req, res) => {
    try {
      const task = await prisma.task.findUnique({
        where: { id: Number(req.params.id) },
      });
      if (!task) return res.status(404).json({ error: "Task not found" });
      res.json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
    }
  };
  
  export const updateTask = async (req, res) => {
    try {
      const task = await prisma.task.update({
        where: { id: Number(req.params.id) },
        data: req.body,
      });
      res.json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
    }
  };
  
  export const deleteTask = async (req, res) => {
    try {
      await prisma.task.delete({
        where: { id: Number(req.params.id) },
      });
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
    }
  };
  