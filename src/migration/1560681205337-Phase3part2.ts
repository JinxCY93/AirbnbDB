import {MigrationInterface, QueryRunner} from "typeorm";

export class Phase3part21560681205337 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "rating" DROP CONSTRAINT "FK_f0c17f17d0eba98ea3245923b27"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_1dec3befdfdc0349b49bedbfaca"`);
        await queryRunner.query(`EXEC sp_rename "rating.reviewsId", "review_id"`);
        await queryRunner.query(`EXEC sp_rename "comment.reviewsId", "review_id"`);
        await queryRunner.query(`ALTER TABLE "rating" ADD CONSTRAINT "FK_7db8368ffbfce8333eb34a4818a" FOREIGN KEY ("review_id") REFERENCES "review"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_95f093aedad4d0fe6901890a645" FOREIGN KEY ("review_id") REFERENCES "review"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_95f093aedad4d0fe6901890a645"`);
        await queryRunner.query(`ALTER TABLE "rating" DROP CONSTRAINT "FK_7db8368ffbfce8333eb34a4818a"`);
        await queryRunner.query(`EXEC sp_rename "comment.review_id", "reviewsId"`);
        await queryRunner.query(`EXEC sp_rename "rating.review_id", "reviewsId"`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_1dec3befdfdc0349b49bedbfaca" FOREIGN KEY ("reviewsId") REFERENCES "review"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rating" ADD CONSTRAINT "FK_f0c17f17d0eba98ea3245923b27" FOREIGN KEY ("reviewsId") REFERENCES "review"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
