CREATE DATABASE IF NOT EXISTS Products;

USE Products;

CREATE TABLE IF NOT EXISTS Products (
    Id VARCHAR(100) PRIMARY KEY,
    Name VARCHAR(255) NULL
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS ProductUpdates (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    ProductId VARCHAR(100) NOT NULL,
    ActionType VARCHAR(50) NOT NULL,
    Quantity INT NOT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ProductId) REFERENCES Products(Id)
) ENGINE = InnoDB;

INSERT INTO Products (Id, Name) VALUES
('1', 'Product A'),
('2', 'Product B'),
('3', 'Product C');

INSERT INTO ProductUpdates (ProductId, ActionType, Quantity, CreatedAt) VALUES
('1', 'Compra', 10, '2024-10-01 10:00:00'),
('1', 'Venda', 5, '2024-10-02 11:00:00'),
('2', 'Compra', 20, '2024-10-03 12:00:00'),
('3', 'Compra', 2, '2024-10-04 13:00:00');