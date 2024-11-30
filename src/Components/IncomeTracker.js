import React, { useState, useEffect } from "react";
import { fetchIncomeData,AddIncomeData } from "../api/api";
const IncomeTracker = () => {
  const [incomeSources, setIncomeSources] = useState([]);
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");
  const [frequency, setFrequency] = useState("");
  const [totalIncome, setTotalIncome] = useState(0);
  useEffect(() => {
    const loadIncomeData = async () => {
      try {
        const data = await fetchIncomeData();
        setIncomeSources(data);
        const total = data.reduce((sum, income) => sum + income.amount, 0);
        setTotalIncome(total);
      } catch (error) {
        console.error("Failed to load income data:", error);
      }
    };

    loadIncomeData();
  }, []);

  const AddIncome = (newIncome) => {
    console.log("New income", newIncome);
    AddIncomeData(newIncome)
      .then((response) => {
        console.log("Response", response);
      })
      .catch((error) => {
        console.error("Failed to add income:", error);
      });
  };
  // Add a new income source
  const handleAddIncome = () => {
    if (!source || !amount) {
      alert("Please provide both source and amount.");
      return;
    }

    const newIncome = {
      id: Date.now(),
      source,
      amount: parseFloat(amount),
      frequency: frequency || "One-time",
      date: new Date(),
    };

    setIncomeSources([...incomeSources, newIncome]);
    setTotalIncome(totalIncome + parseFloat(amount));
    AddIncome(newIncome);
    setSource("");
    setAmount("");
    setFrequency("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Income Tracker (UGX)</h1>

      {/* Form for adding income */}
      <div style={styles.form}>
        <input
          type="text"
          placeholder="Income Source (e.g., Scholarship)"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Amount (UGX)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={styles.input}
        />
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          style={styles.input}
        >
          <option value="">One-time</option>
          <option value="Recurring">Recurring</option>
        </select>
        <button onClick={handleAddIncome} style={styles.button}>
          Add Income
        </button>
      </div>

      {/* Income Summary */}
      <div style={styles.summary}>
        <h2 style={styles.subtitle}>Financial Summary</h2>
        <p style={styles.total}>
          Total Income:{" "}
          <span style={styles.totalValue}>
            UGX {totalIncome.toLocaleString("en-UG")}
          </span>
        </p>
        <ul style={styles.incomeList}>
          {incomeSources.map((income) => (
            <li key={income.id} style={styles.incomeItem}>
              <span style={styles.incomeSource}>{income.source}</span>
              <span style={styles.incomeAmount}>
                UGX {income.amount.toLocaleString("en-UG")}
              </span>
              <span style={styles.incomeFrequency}>({income.frequency})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "700px",
    margin: "2rem auto",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fefefe",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    fontSize: "2.5rem",
    color: "#444",
    marginBottom: "1.5rem",
    borderBottom: "2px solid #28a745",
    paddingBottom: "0.5rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginBottom: "2rem",
  },
  input: {
    padding: "0.8rem",
    fontSize: "1rem",
    border: "1px solid #ddd",
    borderRadius: "6px",
  },
  button: {
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "0.8rem",
    fontSize: "1rem",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#218838",
  },
  summary: {
    marginTop: "2rem",
    padding: "1.5rem",
    borderRadius: "8px",
    backgroundColor: "#f8f9fa",
  },
  subtitle: {
    fontSize: "1.5rem",
    color: "#555",
    marginBottom: "1rem",
    borderBottom: "1px solid #ddd",
    paddingBottom: "0.5rem",
  },
  total: {
    fontSize: "1.2rem",
    color: "#333",
    marginBottom: "1rem",
  },
  totalValue: {
    fontWeight: "bold",
    color: "#28a745",
  },
  incomeList: {
    listStyleType: "none",
    padding: "0",
  },
  incomeItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0.5rem 0",
    borderBottom: "1px solid #ddd",
  },
  incomeSource: {
    color: "#555",
    fontWeight: "bold",
  },
  incomeAmount: {
    color: "#007bff",
  },
  incomeFrequency: {
    color: "#6c757d",
    fontStyle: "italic",
  },
};

export default IncomeTracker;
