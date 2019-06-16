import {MigrationInterface, QueryRunner} from "typeorm";

export class Phase31560679538175 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "state" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, CONSTRAINT "PK_549ffd046ebab1336c3a8030a12" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "city" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "state_id" int, CONSTRAINT "PK_b222f51ce26f7e5ca86944a6739" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rating" ("id" int NOT NULL IDENTITY(1,1), "score" nvarchar(255) NOT NULL, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL, "reviewsId" int, CONSTRAINT "PK_ecda8ad32645327e4765b43649e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comment" ("id" int NOT NULL IDENTITY(1,1), "description" nvarchar(255) NOT NULL, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL, "reviewsId" int, CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "review" ("id" int NOT NULL IDENTITY(1,1), "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL, "property_id" int, "user_id" int, CONSTRAINT "PK_2e4299a343a81574217255c00ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_b6f6e746b9e87e1fc58760ede4" ON "review" ("property_id") WHERE "property_id" IS NOT NULL`);
        await queryRunner.query(`ALTER TABLE "property" ADD "city_id" int`);
        await queryRunner.query(`ALTER TABLE "city" ADD CONSTRAINT "FK_37ecd8addf395545dcb0242a593" FOREIGN KEY ("state_id") REFERENCES "state"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "property" ADD CONSTRAINT "FK_f083653643470b968b44dd50c97" FOREIGN KEY ("city_id") REFERENCES "city"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rating" ADD CONSTRAINT "FK_f0c17f17d0eba98ea3245923b27" FOREIGN KEY ("reviewsId") REFERENCES "review"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_1dec3befdfdc0349b49bedbfaca" FOREIGN KEY ("reviewsId") REFERENCES "review"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_b6f6e746b9e87e1fc58760ede4c" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_81446f2ee100305f42645d4d6c2" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_81446f2ee100305f42645d4d6c2"`);
        await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_b6f6e746b9e87e1fc58760ede4c"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_1dec3befdfdc0349b49bedbfaca"`);
        await queryRunner.query(`ALTER TABLE "rating" DROP CONSTRAINT "FK_f0c17f17d0eba98ea3245923b27"`);
        await queryRunner.query(`ALTER TABLE "property" DROP CONSTRAINT "FK_f083653643470b968b44dd50c97"`);
        await queryRunner.query(`ALTER TABLE "city" DROP CONSTRAINT "FK_37ecd8addf395545dcb0242a593"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "city_id"`);
        await queryRunner.query(`DROP INDEX "REL_b6f6e746b9e87e1fc58760ede4" ON "review"`);
        await queryRunner.query(`DROP TABLE "review"`);
        await queryRunner.query(`DROP TABLE "comment"`);
        await queryRunner.query(`DROP TABLE "rating"`);
        await queryRunner.query(`DROP TABLE "city"`);
        await queryRunner.query(`DROP TABLE "state"`);
    }

}
