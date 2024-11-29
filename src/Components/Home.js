import React from 'react';

const HomePage = () => {
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
          }
          
          .carousel-container {
            overflow-x: scroll;
            display: flex;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            padding: 0 10px;
          }
          
          .carousel {
            display: flex;
            gap: 20px;
            width: 100%;
          }
          
          .carousel-item {
            flex: 0 0 80%;
            text-align: center;
            padding: 20px;
            background: hsla(235, 23%, 54%, 0.941);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            scroll-snap-align: start;
          }
          
          .carousel-item h2 {
            font-size: 2em;
            color: #111213;
          }
          
          .carousel-item p {
            font-size: 1.2em;
            margin-top: 10px;
            color: #555;
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
              <h2>💰 Budgeting</h2>
              <p>Plan your finances effectively.</p>
            </div>
            <div className="carousel-item">
              <h2>📊 Expenses</h2>
              <p>Track your daily expenses seamlessly.</p>
            </div>
            <div className="carousel-item">
              <h2>💼 Income tracking</h2>
              <p>Track your income rates.</p>
            </div>
          </div>
        </div>
      </section>
      

      {/* Footer Section */}
      <footer className="footer-section">
        <h3>About Us</h3>
        
        <p>
          Sente Sense is here to simplify personal finance management. Stay in control 
          of your budget, expenses, and savings — all in one app.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;