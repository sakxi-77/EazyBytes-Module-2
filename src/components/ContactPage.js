import React from "react";

function ContactPage() {
  return (
    <div style={styles.contactPage}>
      <h2 style={styles.header}>Contact Us</h2>
      <p style={styles.paragraph}>
        For any inquiries, support, or feedback, feel free to get in touch with our customer care team. We’re here to help you 24/7.
      </p>
      <div style={styles.contactDetails}>
        <h3 style={styles.subHeader}>Customer Care Information:</h3>
        <ul style={styles.contactList}>
          <li style={styles.contactItem}><strong>Email:</strong> support@stockmarketdashboard.com</li>
          <li style={styles.contactItem}><strong>Phone:</strong> +1 800 123 4567</li>
          <li style={styles.contactItem}><strong>Address:</strong> 123 Finance Street, Market City, USA</li>
        </ul>
      </div>
      <div style={styles.contactForm}>
        <h3 style={styles.subHeader}>Send Us a Message:</h3>
        <form>
          <input type="text" placeholder="Your Name" style={styles.input} required />
          <input type="email" placeholder="Your Email" style={styles.input} required />
          <textarea placeholder="Your Message" rows="5" style={styles.textarea} required></textarea>
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  contactPage: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
    color: "black" // Text color for header
  },
  paragraph: {
    textAlign: "center",
    marginBottom: "20px",
    color: "black" // Text color for paragraph
  },
  contactDetails: {
    marginBottom: "20px"
  },
  contactList: {
    listStyle: "none",
    padding: "0"
  },
  contactItem: {
    marginBottom: "10px",
    color: "black" // Text color for contact items
  },
  contactForm: {
    marginTop: "20px"
  },
  input: {
    width: "100%",
    marginBottom: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px"
  },
  textarea: {
    width: "100%",
    marginBottom: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px"
  },
  button: {
    padding: "10px 20px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  },
  subHeader: {
    color: "black" // Text color for subheader
  }
};

export default ContactPage;
