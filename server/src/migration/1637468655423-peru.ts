import {MigrationInterface, QueryRunner} from "typeorm";

export class peru1637468655423 implements MigrationInterface {
    name = 'peru1637468655423'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `address` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `city` varchar(255) NOT NULL, `distrito` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `product` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `precio` int NOT NULL, `stock` int NOT NULL, `estado` enum ('true', 'false') NOT NULL DEFAULT 'true', `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `email` varchar(255) NULL, `password` varchar(255) NOT NULL, `country` varchar(255) NOT NULL, `city` varchar(255) NOT NULL, `phone` varchar(255) NOT NULL, `codigo` varchar(255) NOT NULL, `estado` enum ('true', 'false') NOT NULL DEFAULT 'true', UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` ON `user`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `product`");
        await queryRunner.query("DROP TABLE `address`");
    }

}
