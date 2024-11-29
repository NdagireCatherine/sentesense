import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [frequency, setFrequency] = useState("");
  const [view, setView] = useState("daily");

  const categories = ["Tuition", "Rent", "Groceries", "Transport", "Entertainment"];
  const userId = 1;
  
  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await fetch(`/api/expenses?user_id=${userId}`);
        const data = await response.json();
        setExpenses(data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };

    fetchExpenses();
  }, []);


  // Add new expense
  const handleAddExpense = () => {
    if (!category || !amount) {
      alert("Please select a category and enter an amount.");
      return;
    }

    const newExpense = {
      id: Date.now(),
      category,
      amount: parseFloat(amount),
      frequency: frequency || "One-time",
      date: new Date(),
    };

    setExpenses([...expenses, newExpense]);
    setCategory("");
    setAmount("");
    setFrequency("");
  };

  // Filter expenses based on the selected time frame
  const getFilteredExpenses = () => {
    const now = new Date();
    return expenses.filter((expense) => {
      const diff = (now - expense.date) / (1000 * 60 * 60 * 24); // Days difference
      return view === "daily"
        ? diff < 1
        : view === "weekly"
        ? diff < 7
        : diff < 30;
    });
  };

  // Data for the chart
  const chartData = {
    labels: categories,
    datasets: [
      {
        label: "Expenses",
        data: categories.map(
          (cat) =>
            getFilteredExpenses().filter((expense) => expense.category === cat).reduce((sum, exp) => sum + exp.amount, 0)
        ),
        backgroundColor: ["#007bff", "#28a745", "#ffc107", "#17a2b8", "#6c757d"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Expense Tracker</h1>

      {/* Form */}
      <div style={styles.form}>
        <select value={category} onChange={(e) => setCategory(e.target.value)} style={styles.input}>
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={styles.input}
        />
        <select value={frequency} onChange={(e) => setFrequency(e.target.value)} style={styles.input}>
          <option value="">One-time</option>
          <option value="Recurring">Recurring</option>
        </select>
        <button onClick={handleAddExpense} style={styles.button}>
          Add Expense
        </button>
      </div>

      {/* Summary */}
      <div style={styles.summary}>
        <button onClick={() => setView("daily")} style={view === "daily" ? styles.activeButton : styles.summaryButton}>
          Daily
        </button>
        <button onClick={() => setView("weekly")} style={view === "weekly" ? styles.activeButton : styles.summaryButton}>
          Weekly
        </button>
        <button onClick={() => setView("monthly")} style={view === "monthly" ? styles.activeButton : styles.summaryButton}>
          Monthly
        </button>
      </div>

      {/* Chart */}
      <div style={styles.chartContainer}>
        <Bar data={chartData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "2rem auto",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    color: "#333",
    marginBottom: "1.5rem",
    borderBottom: "2px solid #007bff",
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
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "0.8rem",
    fontSize: "1rem",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  summary: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "2rem",
  },
  summaryButton: {
    backgroundColor: "#f8f9fa",
    color: "#333",
    padding: "0.5rem 1rem",
    border: "1px solid #ddd",
    borderRadius: "6px",
    cursor: "pointer",
  },
  activeButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  chartContainer: {
    marginTop: "2rem",
  },
};

export default ExpenseTracker;
