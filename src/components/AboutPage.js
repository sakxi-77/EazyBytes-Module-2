import React from 'react';

function AboutPage() {
  return (
    <div style={styles.aboutPage}>
      <h2 style={styles.header}>About Us</h2>
      <p style={styles.paragraph}>
        Welcome to the Stock Market Dashboard, your one-stop platform for tracking stocks, managing your portfolio, and staying informed about the latest market trends.
      </p>
      <div style={styles.aboutDetails}>
        <h3 style={styles.subHeader}>About the Website:</h3>
        <p style={styles.paragraph}>
          This website is designed to empower investors and traders with real-time stock data, intuitive portfolio management tools, and insightful analytics. Whether you're a beginner or an experienced trader, our platform caters to your needs with:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Real-time stock tracking and charting tools</li>
          <li style={styles.listItem}>Portfolio management and performance analytics</li>
          <li style={styles.listItem}>Educational resources to enhance your trading skills</li>
        </ul>
      </div>
      <div style={styles.aboutDevelopment}>
        <h3 style={styles.subHeader}>About the Development:</h3>
        <p style={styles.paragraph}>
          The Stock Market Dashboard was developed by a passionate team of developers using cutting-edge technologies:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Frontend:</strong> ReactJS for dynamic and interactive user interfaces</li>
          <li style={styles.listItem}><strong>Backend:</strong> Node.js for server-side operations and API integration</li>
          <li style={styles.listItem}><strong>Database:</strong> MySQL for efficient and secure data management</li>
          <li style={styles.listItem}><strong>API:</strong> Alpha Vantage API for reliable and comprehensive stock market data</li>
        </ul>
        <p style={styles.paragraph}>
          We are committed to continuously improving the platform to provide the best experience for our users.
        </p>
      </div>
    </div>
  );
};

const styles = {
  aboutPage: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    animation: "fadeIn 1s ease-out"
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
    color: "black",
    animation: "slideIn 1s ease-out"
  },
  paragraph: {
    textAlign: "center",
    marginBottom: "20px",
    color: "black",
    animation: "fadeIn 1.5s ease-out"
  },
  aboutDetails: {
    marginTop: "20px"
  },
  aboutDevelopment: {
    marginTop: "20px"
  },
  subHeader: {
    marginBottom: "10px",
    color: "black",
    animation: "fadeIn 2s ease-out"
  },
  list: {
    listStyle: "disc",
    paddingLeft: "20px",
    animation: "fadeIn 2.5s ease-out"
  },
  listItem: {
    marginBottom: "10px",
    color: "black",
    animation: "fadeIn 3s" }
  
};

export default AboutPage;
