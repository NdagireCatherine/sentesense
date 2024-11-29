const db = require('../Models/db');

// Add Budget
const addBudget = (req, res) => {
    const { Budget_id, User_Id, Time_Frame, Tution_limit,Rent_limit, Groderies_limit, Transport_Limit, Entertainment_Limit } = req.body;
    const query = 'INSERT INTO budgets (Budget_id, User_Id, Time_Frame, Tution_limit,Rent_limit, Groderies_limit, Transport_Limit, Entertainment_Limit  ) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [ Budget_id, User_Id, Time_Frame, Tution_limit,Rent_limit, Groderies_limit, Transport_Limit, Entertainment_Limit ], (err, results) => {
        if (err) {return res.status(500).json({ message: 'Database error', error: err });
    }else {res.status(201).json({ message: 'Budget added successfully' });}
    });
};

// Get Budgets
const getBudgets = (req, res) => {
    const { user_id } = req.query;
    const query = 'SELECT * FROM budgets WHERE user_id = ?';
    db.query(query, [user_id], (err, results) => {
        if (err) return res.status(500).json({ message: 'Database error', error: err });
        res.status(200).json(results);
    });
};

// Update Budget
const updateBudget = (req, res) => {
    const { id, category, budget_limit, start_date, end_date } = req.body;
    const query = 'UPDATE budgets SET category = ?, budget_limit = ?, start_date = ?, end_date = ? WHERE id = ?';
    db.query(query, [category, budget_limit, start_date, end_date, id], (err, results) => {
        if (err) return res.status(500).json({ message: 'Database error', error: err });
        res.status(200).json({ message: 'Budget updated successfully' });
    });
};

// Delete Budget
const deleteBudget = (req, res) => {
    const { Budget_id } = req.body;
    const query = 'DELETE FROM budgets WHERE id = ?';
    db.query(query, [Budget_id], (err, results) => {
        if (err) return res.status(500).json({ message: 'Database error', error: err });
        res.status(200).json({ message: 'Budget deleted successfully' });
    });
};

module.exports = { addBudget, getBudgets, updateBudget, deleteBudget }