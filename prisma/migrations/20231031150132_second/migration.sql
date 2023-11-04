/*
  Warnings:

  - You are about to alter the column `email` on the `register` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(50)`.
  - You are about to drop the column `firstName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `mobile` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `otp` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `users` table. All the data in the column will be lost.
  - Added the required column `name` to the `register` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `register` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `register` ADD COLUMN `name` VARCHAR(50) NOT NULL,
    ADD COLUMN `password` VARCHAR(50) NOT NULL,
    MODIFY `email` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `firstName`,
    DROP COLUMN `lastName`,
    DROP COLUMN `mobile`,
    DROP COLUMN `otp`,
    DROP COLUMN `password`,
    MODIFY `email` VARCHAR(100) NOT NULL;
