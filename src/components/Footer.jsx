import React from "react";

export const Footer = () => {
  return (
    <div className="footer" style={{ backgroundColor: "lightgreen" }}>
      <div className="contact-info">
        <p style={{ margin: 0, padding: 0, color: "Blue" }}>
          Email: E.commerce@gmail.com
        </p>
        <p style={{ margin: 0, padding: 0, color: "Blue" }}>
          Phone: (254) 456-7890
        </p>
        <p style={{ margin: 0, padding: 0, color: "Blue" }}>
          Address: 1234 Main Street, Moi Avenue, Nairobi
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "Blue" }}
        >
          Instagram
        </a>
      </div>
    </div>
  );
};

