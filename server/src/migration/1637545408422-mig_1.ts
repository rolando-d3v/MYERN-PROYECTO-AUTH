import {MigrationInterface, QueryRunner} from "typeorm";

export class mig11637545408422 implements MigrationInterface {
    name = 'mig11637545408422'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `role` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `estado` enum ('true', 'false') NOT NULL DEFAULT 'true', PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `user` CHANGE `email` `email` varchar(255) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `email` `email` varchar(255) NULL DEFAULT 'NULL'");
        await queryRunner.query("DROP TABLE `role`");
    }

}
