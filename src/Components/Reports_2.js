import React, { useState } from "react";

const Repo = () => {
  const initialData = {
    weekly: { income: 1000000, expenses: { Tuition: 200000, Rent: 150000, Groceries: 100000, Transport: 120000, Entertainment: 200000 } },
    monthly: { income: 4000000, expenses: { Tuition: 800000, Rent: 600000, Groceries: 200000, Transport: 150000, Entertainment: 180000 } },
    term: { income: 12000000, expenses: { Tuition: 2400000, Rent: 1800000, Groceries: 18500000, Transport: 650000, Entertainment: 21000000 } },
  };

  const [data, setData] = useState(initialData);
  const [period, setPeriod] = useState("weekly");

  const calculateTotalExpenses = () => {
    const expenses = data[period].expenses;
    return Object.values(expenses).reduce((acc, expense) => acc + expense, 0);
  };

  const totalExpenses = calculateTotalExpenses();
  const remainingBudget = data[period].income - totalExpenses;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [selectedPeriod, category] = name.split("-");
    setData((prevData) => ({
      ...prevData,
      [selectedPeriod]: {
        ...prevData[selectedPeriod],
        expenses: {
          ...prevData[selectedPeriod].expenses,
          [category]: parseInt(value) || 0,
        },
      },
    }));
  };

  const periodOptions = ["weekly", "monthly", "term"];

  const styles = {
    appContainer: {
      fontFamily: "Arial, sans-serif",
      maxWidth: "800px",
      margin: "30px auto",
      padding: "20px",
      background: "#f5f5f5",
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    header: {
      textAlign: "center",
      color: "#4CAF50",
      marginBottom: "20px",
    },
    periodSelector: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "20px",
    },
    periodButton: {
      margin: "0 10px",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontWeight: "bold",
      backgroundColor: "#2196F3",
      color: "white",
      transition: "background-color 0.3s",
    },
    activeButton: {
      backgroundColor: "#4CAF50",
    },
    summary: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      marginBottom: "20px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    },
    sectionTitle: {
      textAlign: "center",
      color: "#333",
      marginBottom: "15px",
      fontSize: "1.5rem",
    },
    expenses: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    },
    expenseInputs: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    expenseItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    input: {
      padding: "10px",
      width: "150px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
  };

  return (
    <div style={styles.appContainer}>
      <h1 style={styles.header}>Financial Tracker</h1>

      {/* Period Selector */}
      <div style={styles.periodSelector}>
        {periodOptions.map((option) => (
          <button
            key={option}
            style={{
              ...styles.periodButton,
              ...(option === period ? styles.activeButton : {}),
            }}
            onClick={() => setPeriod(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>

      {/* Financial Summary */}
      <div style={styles.summary}>
        <h2 style={styles.sectionTitle}>Financial Summary</h2>
        <p><strong>Income:</strong> UGX {data[period].income}</p>
        <p><strong>Total Expenses:</strong> UGX {totalExpenses}</p>
        <p><strong>Remaining Budget:</strong> UGX {remainingBudget}</p>
      </div>

      {/* Expense Inputs */}
      <div style={styles.expenses}>
        <h2 style={styles.sectionTitle}>Edit Expenses</h2>
        <div style={styles.expenseInputs}>
          {Object.keys(data[period].expenses).map((category) => (
            <div key={category} style={styles.expenseItem}>
              <label>{category.charAt(0).toUpperCase() + category.slice(1)}:</label>
              <input
                type="number"
                name={`${period}-${category}`}
                value={data[period].expenses[category]}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Repo;



