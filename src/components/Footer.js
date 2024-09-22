import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 Stylish App. All rights reserved.</p>
      <nav>
        <a href="/">Home</a> | 
        <a href="/about">About</a> | 
        <a href="/contact">Contact</a> | 
        <a href="/privacy">Privacy Policy</a> | 
        <a href="/terms">Terms of Service</a> | 
        <a href="https://github.com/Harsh21777/shopping-list" target="_blank" rel="noopener noreferrer">GitHub Repository</a> | 
        <a href="/feedback">Feedback</a>
      </nav>
    </footer>
  );
};


const styles = {
  footer: {
    width: '100%',
    padding: '20px',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    borderRadius: '0', 
    bottom: 0,
    left: 0,
  },
};


export default Footer;




