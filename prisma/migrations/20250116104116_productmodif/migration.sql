/*
  Warnings:

  - You are about to alter the column `review` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "reference" TEXT,
    "description" TEXT,
    "image" TEXT,
    "price" INTEGER,
    "review" INTEGER,
    "brand" TEXT
);
INSERT INTO "new_Product" ("brand", "description", "id", "image", "price", "reference", "review", "title") SELECT "brand", "description", "id", "image", "price", "reference", "review", "title" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
