-- CreateTable
CREATE TABLE "Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "priority" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Task_id_key" ON "Task"("id");
