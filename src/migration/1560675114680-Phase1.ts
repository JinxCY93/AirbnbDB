import {MigrationInterface, QueryRunner} from "typeorm";

export class Phase11560675114680 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "property" ADD "created_at" datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE "property" ADD "updated_at" datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "contact_no"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "contact_no" nvarchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "contact_no"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "contact_no" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "created_at"`);
    }

}
