import React from 'react';

const DataTable = ({ items, deleteItem }) => {
  if (items.length === 0) {
    return <p style={styles.noItems}>No items to display.</p>;
  }

  return (
    <div style={styles.tableContainer}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Item</th>
            <th style={styles.th}>Quantity</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td style={styles.td}>{item.name}</td>
              <td style={styles.td}>{item.quantity}</td>
              <td style={styles.td}>
                <button style={styles.deleteButton} onClick={() => deleteItem(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  tableContainer: {
    marginTop: '20px',
    width: '100%',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    borderRadius: '10px', 
    overflow: 'hidden',    
  },
  th: {
    padding: '12px',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'left',
  },
  td: {
    padding: '12px',
    textAlign: 'left',
  },
  deleteButton: {
    padding: '6px 10px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  noItems: {
    color: '#777',
    fontSize: '16px',
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default DataTable;



