import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <style>
        {`
          /* General Styles */
          .home-page {
            font-family: 'Arial, sans-serif';
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }
          
          /* Welcome Section */
          .welcome-section {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: url('https://unsplash.com/photos/6MePtA9EVDA/download'); /* Replace with downloaded image URL */
            background-size: cover;
            background-position: center;
            color: white;
            text-align: center;
          }
          
          .welcome-content h1 {
            font-size: 4em;
          }
          
          .welcome-content p {
            font-size: 1.5em;
            margin-top: 20px;
          }
          
          /* Services Introduction */
          .services-intro {
            text-align: center;
            padding: 50px 20px;
            background: #f9f9f9;
          }
          
          .services-intro h2 {
            font-size: 2.5em;
            color: #395e85;
          }
          
          .services-intro p {
            font-size: 1.2em;
            color: #555;
          }
          
          /* Trackers Section */
          .trackers-section {
            padding: 50px 0;
            background-color: #f9f9f9;
            position: relative;
          }

          .carousel-container {
            position: relative;
            max-width: 800px;
            margin: 0 auto;
            overflow: hidden;
          }

          .carousel {
            display: flex;
            transition: transform 0.8s ease-in-out;
            animation: slide 10s infinite;
          }

          .carousel-item {
            flex: 0 0 100%;
            text-align: center;
            padding: 20px;
            background: linear-gradient(135deg, #4a90e2, #9013fe);
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            color: white;
            transform: scale(0.9);
            transition: transform 0.5s ease-in-out;
          }

          .carousel-item h2 {
            font-size: 2em;
            color: #ffffff;
            margin-bottom: 10px;
            animation: fadeIn 1s ease-in-out;
          }

          .carousel-item p {
            font-size: 1.2em;
            margin-top: 10px;
            color: #eaeaea;
            animation: fadeIn 1.5s ease-in-out;
          }

          .carousel-item.active {
            transform: scale(1);
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slide {
            0% {
              transform: translateX(0%);
            }
            33% {
              transform: translateX(-100%);
            }
            66% {
              transform: translateX(-200%);
            }
            100% {
              transform: translateX(0%);
            }
          }

          .carousel-navigation {
            position: absolute;
            top: 50%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            transform: translateY(-50%);
          }

          .carousel-button {
            background: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            padding: 10px 15px;
            font-size: 1.5em;
            cursor: pointer;
            border-radius: 50%;
            transition: background 0.3s;
          }

          .carousel-button:hover {
            background: rgba(0, 0, 0, 0.8);
          }

          .carousel-indicators {
            display: flex;
            justify-content: center;
            margin-top: 20px;
          }

          .carousel-indicator {
            width: 10px;
            height: 10px;
            margin: 0 5px;
            background: #ddd;
            border-radius: 50%;
            transition: background 0.3s;
          }

          .carousel-indicator.active {
            background: #4a90e2;
          }

          
          /* Get Started Section */
          .get-started-section {
            text-align: center;
            margin: 50px 0;
          }
          
          .get-started-btn {
            background-color: #007BFF;
            color: white;
            border: none;
            padding: 15px 30px;
            font-size: 1.2em;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s;
          }
          
          .get-started-btn:hover {
            background-color: #0056b3;
          }
          
          /* Footer Section */
          .footer-section {
            text-align: center;
            padding: 20px;
            background: rgba(0, 0, 0, 0.7);
            color: white;
          }
          
          .footer-section h3 {
            margin-bottom: 10px;
            font-size: 1.5em;
          }
          
          .footer-section p {
            font-size: 1em;
          }
          
          /* Responsive Design */
          @media (max-width: 768px) {
            .welcome-content h1 {
              font-size: 2.5em;
            }
          
            .welcome-content p,
            .services-intro p {
              font-size: 1em;
            }
          
            .carousel-item {
              flex: 0 0 90%;
            }
          }
        `}
      </style>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-content">
          <h1>Welcome to Sente Sense</h1>
          <p>Your personal finance assistant.</p>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="services-intro">
        <h2>Exciting Services Await!</h2>
        <p>
          Discover tools to manage your finances effectively. Let us help you 
          achieve your budgeting, expense tracking, and savings goals!
        </p>
      </section>

      {/* Trackers Section */}
      <section className="trackers-section">
        <div className="carousel-container">
          <div className="carousel">
            <div className="carousel-item">
              <h2>💰 Budget Planning</h2>
              <p>Set realistic financial goals and stick to them.</p>
            </div>
            <div className="carousel-item">
              <h2>📊 Expense Insights</h2>
              <p>Understand where your money goes at a glance.</p>
            </div>
            <div className="carousel-item">
              <h2>💼 Income Management</h2>
              <p>Track earnings and make informed decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="get-started-section">
        <button
          className="get-started-btn"
          onClick={() => navigate("/signup")}
        >
          Get Started
        </button>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <h3>About Us</h3>
        <p>
          Sente Sense is here to simplify personal finance management. Stay in control 
          of your budget, expenses, and savings — all in one app.
        </p>
        <h3>Contact Us</h3>
        <p>Email: support@sentesense.com</p>
        <p>Phone: +1 (555) 123-4567</p>
      </footer>
    </div>
  );
};

export default Home;

