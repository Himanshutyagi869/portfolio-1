// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Himanshu@tyagi. </p>
    </footer>
  );
}

export default Footer;
