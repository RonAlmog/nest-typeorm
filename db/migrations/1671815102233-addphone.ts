import { MigrationInterface, QueryRunner } from 'typeorm';

export class addphone1671815102233 implements MigrationInterface {
  name = 'addphone1671815102233';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "phone" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone"`);
  }
}
