import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Mock a send request here
    setTimeout(() => alert("Message sent successfully!"), 1000);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Contact Us</h2>
      {formSubmitted ? (
        <p style={styles.successMessage}>Thank you for reaching out!</p>
      ) : (
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            required
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            required
            style={styles.input}
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            required
            style={styles.textarea}
          ></textarea>
          <button type="submit" style={styles.submitButton}>
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#2e3038",
    color: "#f5f5f5",
    padding: "20px",
    margin: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  },
  title: {
    color: "#ccc",
    fontSize: "24px",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #444",
    backgroundColor: "#333",
    color: "#f5f5f5",
    fontSize: "16px",
  },
  textarea: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #444",
    backgroundColor: "#333",
    color: "#f5f5f5",
    fontSize: "16px",
    minHeight: "120px",
  },
  submitButton: {
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },
  successMessage: {
    color: "green",
    fontSize: "18px",
  },
};

export default ContactPage;
