import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 Stylish App. All rights reserved.</p>
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




