import {MigrationInterface, QueryRunner} from "typeorm";

export class Phase11560674805788 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "user" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "email" nvarchar(255) NOT NULL, "contact_no" int NOT NULL, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "owner" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "email" nvarchar(255) NOT NULL, "contact_no" nvarchar(255) NOT NULL, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL, CONSTRAINT "PK_8e86b6b9f94aece7d12d465dc0c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "property" ("id" int NOT NULL IDENTITY(1,1), "address" nvarchar(255) NOT NULL, "owner_id" int, CONSTRAINT "PK_d80743e6191258a5003d5843b4f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "booking" ("id" int NOT NULL IDENTITY(1,1), "price" int NOT NULL, "booking_date" datetime NOT NULL, "check_in" datetime NOT NULL, "check_out" datetime NOT NULL, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL, "property_id" int, "user_id" int, CONSTRAINT "PK_49171efc69702ed84c812f33540" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "property" ADD CONSTRAINT "FK_2541d2fb798d385a0521553370d" FOREIGN KEY ("owner_id") REFERENCES "owner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_5597161ba02971a62c629fc5a44" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_276896d1a1a30be6de9d7d43f53" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_276896d1a1a30be6de9d7d43f53"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_5597161ba02971a62c629fc5a44"`);
        await queryRunner.query(`ALTER TABLE "property" DROP CONSTRAINT "FK_2541d2fb798d385a0521553370d"`);
        await queryRunner.query(`DROP TABLE "booking"`);
        await queryRunner.query(`DROP TABLE "property"`);
        await queryRunner.query(`DROP TABLE "owner"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
