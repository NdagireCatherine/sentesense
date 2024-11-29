import React, { useState } from "react";
import { Pie, Line } from "react-chartjs-2";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { CSVLink } from "react-csv";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  );


const App = () => {
  const [financialData, setFinancialData] = useState({
    income: 2000000, 
    expenses: [
      { category: "Tuition", amount: 500000 },
      { category: "Rent", amount: 300000 },
      { category: "Groceries", amount: 200000 },
      { category: "Transport", amount: 400000 },
      { category: "Entertainment", amount: 600000 },
    ],
    periods: ["Week 1", "Week 2", "Week 3", "Week 4"],
    trends: [400000, 450000, 350000, 500000], 
  });

  const totalExpenses = financialData.expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );
  const remainingBudget = financialData.income - totalExpenses;

  const pieChartData = {
    labels: financialData.expenses.map((expense) => expense.category),
    datasets: [
      {
        data: financialData.expenses.map((expense) => expense.amount),
        backgroundColor: ["#4CAF50", "#2196F3", "#FFC107", "#FF5722"],
        hoverBackgroundColor: ["#66BB6A", "#42A5F5", "#FFD54F", "#FF7043"],
      },
    ],
  };

  const lineChartData = {
    labels: financialData.periods,
    datasets: [
      {
        label: "Spending Trends (UGX)",
        data: financialData.trends,
        fill: false,
        backgroundColor: "#2196F3",
        borderColor: "#2196F3",
      },
    ],
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Financial Report", 20, 10);
    doc.autoTable({
      head: [["Category", "Amount (UGX)"]],
      body: financialData.expenses.map((expense) => [
        expense.category,
        expense.amount,
      ]),
    });
    doc.text(`Income: UGX ${financialData.income}`, 14, doc.lastAutoTable.finalY + 10);
    doc.text(
      `Total Expenses: UGX ${totalExpenses}`,
      14,
      doc.lastAutoTable.finalY + 20
    );
    doc.text(
      `Remaining Budget: UGX ${remainingBudget}`,
      14,
      doc.lastAutoTable.finalY + 30
    );
    doc.save("Financial_Report.pdf");
  };

  const appStyle = {
    fontFamily: "Arial, sans-serif",
    maxWidth: "800px",
    margin: "20px auto",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  };

  const sectionStyle = {
    marginBottom: "30px",
    padding: "15px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
  };

  const headingStyle = {
    color: "#333",
    fontWeight: "bold",
    marginBottom: "15px",
    textAlign: "center",
  };

  const buttonStyle = {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    marginRight: "10px",
  };

  return (
    <div style={appStyle}>
      
      {/* Charts Section */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Spending Visualization</h2>
        <h3>Category-wise Spending</h3>
        <Pie data={pieChartData} />
        <h3>Weekly Spending Trends</h3>
        <Line data={lineChartData} />
      </div>

      {/* Export Section */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Export Data</h2>
        <button style={buttonStyle} onClick={exportPDF}>
          Export as PDF
        </button>
        <CSVLink
          data={financialData.expenses.map((expense) => ({
            Category: expense.category,
            Amount: expense.amount,
          }))}
          filename="Financial_Data.csv"
          style={{ ...buttonStyle, backgroundColor: "#2196F3" }}
        >
          Export as CSV
        </CSVLink>
      </div>
    </div>
  );
};

export default App;


