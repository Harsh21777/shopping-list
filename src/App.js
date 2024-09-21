
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import DataTable from './components/DataTable';
import Footer from './components/Footer';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('shoppingList'));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div style={styles.app}>
      <Navbar title="Shopping List" />
      <Form addItem={addItem} />
      <DataTable items={items} deleteItem={deleteItem} />
      <Footer />
    </div>
  );
};

const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#f5f5dc',
  },
  navbar: {
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  form: {
    margin: '10px 0',
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'flex-start', 
  },
  input: {
    padding: '10px',
    marginRight: '10px',
    width: '300px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    backgroundColor: '#fff',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
  },
  th: {
    padding: '12px',
    borderBottom: '2px solid #ddd',
    backgroundColor: '#f4f4f9',
    textAlign: 'left',
    color: '#333',
  },
  td: {
    padding: '12px',
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
  },
  footer: {
    marginTop: '20px',
    padding: '10px 0',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
  },
};


export default App;

