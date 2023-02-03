<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230202100608 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE articles_media (articles_id INT NOT NULL, media_id INT NOT NULL, INDEX IDX_82CE89F81EBAF6CC (articles_id), INDEX IDX_82CE89F8EA9FDD75 (media_id), PRIMARY KEY(articles_id, media_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE articles_media ADD CONSTRAINT FK_82CE89F81EBAF6CC FOREIGN KEY (articles_id) REFERENCES articles (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE articles_media ADD CONSTRAINT FK_82CE89F8EA9FDD75 FOREIGN KEY (media_id) REFERENCES media (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE articles_media DROP FOREIGN KEY FK_82CE89F81EBAF6CC');
        $this->addSql('ALTER TABLE articles_media DROP FOREIGN KEY FK_82CE89F8EA9FDD75');
        $this->addSql('DROP TABLE articles_media');
    }
}
