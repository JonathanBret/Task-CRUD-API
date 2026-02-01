import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createTask = (data) => {
  return prisma.task.create({ data });
};

export const getAllTasks = () => {
  return prisma.task.findMany();
};

export const getTaskById = (id) => {
  return prisma.task.findUnique({ where: { id } });
};

export const updateTask = (id, data) => {
  return prisma.task.update({
    where: { id },
    data,
  });
};

export const deleteTask = (id) => {
  return prisma.task.delete({ where: { id } });
};
