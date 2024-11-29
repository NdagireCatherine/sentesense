DROP DATABASE EXPENSE_TRACKERS;

CREATE DATABASE EXPENSE_TRACKERS;

USE EXPENSE_TRACKERS ;

CREATE TABLE USERS(
    User_id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) ,
    Email VARCHAR(255),
    Password VARCHAR(255)
    
);

CREATE TABLE INCOME(
    Income_Id INT AUTO_INCREMENT PRIMARY KEY,
    User_Id    INT NOT NULL,
    Source_of_Income VARCHAR (255),
    frequency VARCHAR(255),
    Amount_Earned  INT NOT NULL,
    Income_Date  DATE NOT NULL,
    is_recurring BOOLEAN DEFAULT FALSE,
    FOREIGN KEY(User_Id) REFERENCES USERS(User_Id)
);

CREATE TABLE expenses (
    id INT AUTO_INCREMENT PRIMARY KEY,      
    Expense_Id INT NOT NULL,                 
    User_Id INT NOT NULL,                   
    Category VARCHAR(100),          
    Amount DECIMAL(10, 2),          
    Expense_date DATE,              
    Type VARCHAR(50),                       
    is_recurring BOOLEAN DEFAULT FALSE,     
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
);

CREATE TABLE budgets (
    Budget_id INT PRIMARY KEY,
    User_Id INT NOT NULL,
    Time_Frame VARCHAR(50) NOT NULL,
    Tution_limit DECIMAL(10, 2) NOT NULL,
    Rent_limit DECIMAL(10, 2) NOT NULL,
    Groderies_limit DECIMAL(10, 2) NOT NULL,
    Transport_Limit DECIMAL(10, 2) NOT NULL,
    Entertainment_Limit DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE NOTIFICATION(
    Notification_id INT AUTO_INCREMENT PRIMARY KEY,
    User_Id INT NOT NULL,
    Type VARCHAR (50),
    Message TEXT,
    Created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    FOREIGN KEY(User_Id) REFERENCES USERS(User_Id)
);


CREATE TABLE REPORTS(
    Report_id INT PRIMARY KEY,
    User_Id INT,
    Report_type VARCHAR(255),
    Information INT NOT NULL,
    Generated_at TIMESTAMP DEFAULT (CURRENT_TIMESTAMP),
    FOREIGN KEY(User_ID) REFERENCES USERS(User_Id)
);



CREATE INDEX Expense_Date
ON EXPENSES (Expense_date);

CREATE INDEX Expense_category
ON EXPENSES(User_Id);

SHOW TABLES;

INSERT INTO USERS (User_Id, Name, Email, Password)
VALUES (001,'Emmanuel Magomu','ehmahmagomu7@gmail.com',24680),
       (002,'Uwase Shantel','shantel@gmail.com','f00d'),
       (003,'Cathy Nasikye','cathy@gmail.com','c@thy');


SELECT * FROM users;

INSERT INTO income (Income_Id, User_Id, Source_of_Income, frequency, Amount_Earned, Income_Date ) VALUES (NULL, 3, 'Salary', 'Monthly', 2000, '2023-11-28')

ALTER TABLE income DROP CONSTRAINT check_frequency;