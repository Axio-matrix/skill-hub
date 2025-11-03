import { MigrationInterface, QueryRunner } from 'typeorm';

export class ContentFieldToText1761590639076 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "content" TYPE TEXT;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "content" TYPE VARCHAR;`,
    );
  }
}
