/*
  Warnings:

  - You are about to drop the column `catID` on the `blog_list` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `blog_list` DROP FOREIGN KEY `blog_list_catID_fkey`;

-- AlterTable
ALTER TABLE `blog_list` DROP COLUMN `catID`;
