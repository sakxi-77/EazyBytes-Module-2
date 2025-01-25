import React from "react";

const Home = () => {
  return (
    <section id="home" className="section" style={styles.container}>
      <h2 style={styles.title}>Welcome to the Stock Market Dashboard</h2>
      <p style={styles.paragraph}>
        Track your stocks, manage your portfolio, and stay updated with the
        latest trends in the stock market.
      </p>
      <button style={styles.button} className="cta-button">
        Get Started
      </button>
    </section>
  );
};

// Inline styles
const styles = {
  container: {
    backgroundColor: "#fff",
    color: "#333",
    textAlign: "center",
    padding: "50px 20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "20px 0",
  },
  title: {
    color: "#333",
    fontWeight: "bold",
    fontSize: "32px",
    marginBottom: "20px",
  },
  paragraph: {
    color: "#555",
    fontSize: "18px",
    marginBottom: "30px",
  },
  button: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "15px 30px",
    fontSize: "18px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Home;
