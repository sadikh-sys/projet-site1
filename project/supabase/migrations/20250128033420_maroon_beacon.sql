-- Création de la base de données
CREATE DATABASE IF NOT EXISTS jaaw_rice;
USE jaaw_rice;

-- Table des plats
CREATE TABLE IF NOT EXISTS dishes (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    image VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    is_daily_special BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des commandes
CREATE TABLE IF NOT EXISTS orders (
    id VARCHAR(36) PRIMARY KEY,
    dish_id VARCHAR(36),
    quantity INT NOT NULL,
    building VARCHAR(50) NOT NULL,
    room_number VARCHAR(20) NOT NULL,
    payment_method ENUM('cash', 'wave', 'om') NOT NULL,
    status ENUM('pending', 'confirmed', 'delivered') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (dish_id) REFERENCES dishes(id)
);

-- Insertion des plats de démonstration
INSERT INTO dishes (id, name, price, image, description) VALUES
('1', 'Thiebou Dieune Bou Weex', 900, 'https://images.unsplash.com/photo-1567282249-ce4e36fc2141?auto=format&fit=crop&w=800&q=80', 'Riz blanc au poisson frais accompagné de légumes variés'),
('2', 'Thiebou Dieune Bou Khonkou', 900, 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80', 'Riz rouge au poisson frais avec un assortiment de légumes'),
('3', 'Thiebou Niébé', 900, 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80', 'Riz aux haricots parfumé aux épices locales');