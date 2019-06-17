import {MigrationInterface, QueryRunner} from "typeorm";

export class Phase3ChangeRelationshipForRatingComments1560771544679 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_95f093aedad4d0fe6901890a645"`);
        await queryRunner.query(`EXEC sp_rename "comment.review_id", "rating_id"`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_e4c743311e0b0179bbdbd7cc19" ON "comment" ("rating_id") WHERE "rating_id" IS NOT NULL`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_e4c743311e0b0179bbdbd7cc190" FOREIGN KEY ("rating_id") REFERENCES "rating"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_e4c743311e0b0179bbdbd7cc190"`);
        await queryRunner.query(`DROP INDEX "REL_e4c743311e0b0179bbdbd7cc19" ON "comment"`);
        await queryRunner.query(`EXEC sp_rename "comment.rating_id", "review_id"`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_95f093aedad4d0fe6901890a645" FOREIGN KEY ("review_id") REFERENCES "review"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
