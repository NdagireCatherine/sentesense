import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [preferredUserName, setPreferredUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          firstName, 
          lastName, 
          preferredUserName, 
          email, 
          password 
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to sign up');
      }

      const data = await response.json();
      setSuccess('Sign up successful! Please log in.');
      // Redirect or update state as needed
      navigate("/login"); // Redirect to login page after successful signup
    } catch (error) {
      setError(error.message);
    }
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundImage: "url('https://via.placeholder.com/1920x1080')", // Replace with your image URL
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    formContainer: {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      padding: "2rem",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
      maxWidth: "400px",
      width: "100%",
      animation: "fadeIn 1.5s ease-in-out",
    },
    header: {
      textAlign: "center",
      marginBottom: "1.5rem",
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "#333",
      animation: "slideDown 1s ease-in-out",
    },
    input: {
      display: "block",
      width: "100%",
      padding: "0.8rem",
      margin: "0.5rem 0",
      fontSize: "1rem",
      fontWeight: "bold",
      borderRadius: "5px",
      border: "1px solid #ccc",
      outline: "none",
      boxSizing: "border-box",
      transition: "all 0.3s ease",
    },
    inputFocus: {
      border: "1px solid #007BFF",
      boxShadow: "0 0 5px rgba(0, 123, 255, 0.5)",
    },
    button: {
      display: "block",
      width: "100%",
      padding: "0.8rem",
      fontSize: "1rem",
      fontWeight: "bold",
      color: "#fff",
      backgroundColor: "#28a745",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      animation: "bounce 1s infinite alternate",
    },
    buttonHover: {
      backgroundColor: "#218838",
    },
    "@keyframes fadeIn": {
      "0%": { opacity: 0 },
      "100%": { opacity: 1 },
    },
    "@keyframes slideDown": {
      "0%": { transform: "translateY(-20px)", opacity: 0 },
      "100%": { transform: "translateY(0)", opacity: 1 },
    },
    "@keyframes bounce": {
      "0%": { transform: "translateY(0)" },
      "100%": { transform: "translateY(-10px)" },
    },
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes fadeIn { 
            ${styles["@keyframes fadeIn"]["0%"]} 
            ${styles["@keyframes fadeIn"]["100%"]}
          }
          @keyframes slideDown { 
            ${styles["@keyframes slideDown"]["0%"]} 
            ${styles["@keyframes slideDown"]["100%"]}
          }
          @keyframes bounce { 
            ${styles["@keyframes bounce"]["0%"]} 
            ${styles["@keyframes bounce"]["100%"]}
          }
        `}
      </style>
      <div style={styles.formContainer}>
        <h1 style={styles.header}>Sign Up</h1>
        <form>
          <input
            type="text"
            placeholder="First Name"
            style={styles.input}
            onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
            onBlur={(e) => Object.assign(e.target.style, styles.input)}
          />
          <input
            type="text"
            placeholder="Last Name"
            style={styles.input}
            onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
            onBlur={(e) => Object.assign(e.target.style, styles.input)}
          />
          <input
            type="text"
            placeholder="Preferred Username"
            style={styles.input}
            onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
            onBlur={(e) => Object.assign(e.target.style, styles.input)}
          />
          <input
            type="email"
            placeholder="Email"
            style={styles.input}
            onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
            onBlur={(e) => Object.assign(e.target.style, styles.input)}
          />
          <input
            type="text"
            placeholder="Password"
            style={styles.input}
            onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
            onBlur={(e) => Object.assign(e.target.style, styles.input)}
          />
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = styles.button.backgroundColor)
            }
            onClick={() => navigate("/Dashboard")}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
