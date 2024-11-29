import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <style>
        {`
          /* General Styles */
          .dashboard {
            font-family: 'Arial, sans-serif';
            background-color: #f9f9f9;
            padding: 20px;
            text-align: center;
            color: #333;
          }
          
          /* Header Styles */
          .header {
            background: linear-gradient(135deg, #4a90e2, #9013fe);
            color: white;
            padding: 30px 20px;
            border-radius: 10px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
            animation: slideIn 1s ease-out;
          }

          .header h1 {
            font-size: 2.8em;
            margin: 0;
          }

          .header p {
            font-size: 1.2em;
            margin-top: 10px;
          }

          /* Card Section */
          .card-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            margin-top: 30px;
          }

          .card {
            flex: 1 1 300px;
            max-width: 300px;
            background: white;
            border-radius: 10px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            text-align: center;
            transition: transform 0.3s, box-shadow 0.3s;
            animation: fadeIn 1.5s ease-out;
          }

          .card:hover {
            transform: scale(1.05);
            box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
          }

          .card h2 {
            font-size: 1.8em;
            color: #4a90e2;
            margin-bottom: 15px;
          }

          .card p {
            font-size: 1.2em;
            color: #666;
          }

          /* Footer */
          .footer {
            margin-top: 40px;
            font-size: 0.9em;
            color: #888;
          }

          /* Animations */
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideIn {
            from {
              transform: translateX(-100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>

      {/* Header */}
      <div className="header">
        <h1>Welcome to SenteSense</h1>
        <p>Your personalized dashboard for financial management</p>
      </div>

      {/* Cards Section */}
      <div className="card-container">
        <div className="card">
          <ul>
            <li>
                <a href="/Income">
                    <h2>💼 Income Tracking</h2>
                </a>
            </li>
          </ul>
          <p>Monitor your earnings with detailed insights.</p>
        </div>
        <div className="card">
            <ul>
                <li>
                    <a href="/Budgeting">
                        <h2>📊 Budget Planning</h2>
                    </a>
                </li>
            </ul>
          <p>Set and track your financial goals effectively.</p>
        </div>
        <div className="card">
          <ul>
            <li>
                <a href="/Expenses">
                    <h2>💵 Expenses Tracking</h2>
                </a>
            </li>
          </ul>
          <p>Understand your spending habits with clear analytics.</p>
        </div>
        <div className="card">
          <ul>
            <li>
                <a href="/Reports">
                    <h2>📈 Financial Report</h2>
                </a>
            </li>
          </ul>
          <p>Get a comprehensive view of your financial health.</p>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>© 2024 SenteSense | Empowering Financial Freedom</p>
      </div>
    </div>
  );
};

export default Dashboard;
