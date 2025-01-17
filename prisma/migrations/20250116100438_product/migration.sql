/*
  Warnings:

  - You are about to drop the column `images` on the `Product` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "ref" TEXT,
    "description" TEXT,
    "image" TEXT,
    "price" INTEGER,
    "review" TEXT,
    "brand" TEXT
);
INSERT INTO "new_Product" ("brand", "id", "price", "review", "title") SELECT "brand", "id", "price", "review", "title" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
