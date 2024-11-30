
CREATE DATABASE EXPENSE_TRACKERS;

USE EXPENSE_TRACKERS ;

CREATE TABLE Users (
    User_Id INT PRIMARY KEY, 
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    PreferredUserName VARCHAR(50) UNIQUE NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    Password VARCHAR(255)
);

CREATE TABLE INCOME (
    Income_Id INT AUTO_INCREMENT PRIMARY KEY,          
    User_Id INT NOT NULL,                               
    Source_of_Income VARCHAR(255) NOT NULL,
    Amount_Earned  DECIMAL(10, 2),            
    Frequency ENUM('One-time', 'Recurring'),  
    Income_Date DATE NOT NULL,                          
    Is_Recurring BOOLEAN DEFAULT FALSE,                 
    FOREIGN KEY (User_Id) REFERENCES USERS(User_Id)    
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

INSERT INTO Users (User_Id, FirstName, LastName, PreferredUserName, Email, Password)
VALUES 
    (1, 'Emmanuel', 'Magomu', 'emmagomu', 'ehmahmagomu7@gmail.com', 'hashed_password_1'),
    (2, 'Uwase', 'Shantel', 'uwaseshantel', 'shantel@gmail.com', 'hashed_password_2'),
    (3, 'Cathy', 'Nasikye', 'cathyn', 'cathy@gmail.com', 'hashed_password_3');


SELECT * FROM users;

INSERT INTO income (Income_Id, User_Id, Source_of_Income, Amount_Earned, frequency, Income_Date ) VALUES (NULL, 3, 'Salary', 2000, 'Recurring', '2023-11-28')





















































































