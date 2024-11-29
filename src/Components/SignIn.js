import React from "react";

const SignIn = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundImage: "url('https://via.placeholder.com/1920x1080')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    formContainer: {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      padding: "2rem",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      maxWidth: "400px",
      width: "100%",
    },
    header: {
      textAlign: "center",
      marginBottom: "1.5rem",
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#333",
    },
    input: {
      display: "block",
      width: "100%",
      padding: "0.8rem",
      margin: "0.5rem 0",
      fontSize: "1rem",
      borderRadius: "5px",
      border: "1px solid #ccc",
      outline: "none",
      boxSizing: "border-box",
    },
    button: {
      display: "block",
      width: "100%",
      padding: "0.8rem",
      fontSize: "1rem",
      fontWeight: "bold",
      color: "#fff",
      backgroundColor: "#007BFF",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.header}>Sign In</h1>
        <form>
          <input
            type="text"
            placeholder="Username or Email"
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            style={styles.input}
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
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
