-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "images" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "review" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false
);
