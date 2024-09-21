import React from 'react';

const Navbar = ({ title }) => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.titleContainer}>
        <h1 style={styles.title}>{title}</h1>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  titleContainer: {
    backgroundColor: '#444',
    padding: '20px 40px',
    borderRadius: '15px',
    boxShadow: `
      4px 4px 10px rgba(0, 0, 0, 0.3),
      -4px -4px 10px rgba(255, 255, 255, 0.1)
    `,
    position: 'relative',
  },
  title: {
    fontSize: '36px',
    margin: '0',
    color: '#fff',
    textShadow: `
      1px 1px 0px #aaa,
      2px 2px 0px #999,
      3px 3px 0px #888,
      4px 4px 0px #777,
      5px 5px 0px #666,
      6px 6px 0px #555
    `,
  },
};

export default Navbar;





