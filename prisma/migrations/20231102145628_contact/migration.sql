/*
  Warnings:

  - You are about to drop the column `img2` on the `blog_list` table. All the data in the column will be lost.
  - You are about to drop the column `img3` on the `blog_list` table. All the data in the column will be lost.
  - You are about to drop the column `img4` on the `blog_list` table. All the data in the column will be lost.
  - You are about to alter the column `img` on the `team` table. The data in that column could be lost. The data in that column will be cast from `VarChar(300)` to `VarChar(200)`.
  - You are about to alter the column `rank` on the `team` table. The data in that column could be lost. The data in that column will be cast from `VarChar(300)` to `VarChar(100)`.

*/
-- AlterTable
ALTER TABLE `blog_list` DROP COLUMN `img2`,
    DROP COLUMN `img3`,
    DROP COLUMN `img4`;

-- AlterTable
ALTER TABLE `team` MODIFY `img` VARCHAR(200) NOT NULL,
    MODIFY `rank` VARCHAR(100) NOT NULL;

-- CreateTable
CREATE TABLE `contact` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `message` VARCHAR(300) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
