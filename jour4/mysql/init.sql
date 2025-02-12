-- Créer l'utilisateur avec les privilèges
CREATE USER IF NOT EXISTS 'user'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON projetdb.* TO 'user'@'%';
FLUSH PRIVILEGES;

-- Créer la table de test
CREATE TABLE IF NOT EXISTS test_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insérer quelques données de test
INSERT INTO test_table (name) VALUES ('Test Entry 1');
INSERT INTO test_table (name) VALUES ('Test Entry 2'); 