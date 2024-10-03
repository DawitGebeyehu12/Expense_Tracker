import React, { useState } from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import Footer from './components/Footer'; 
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  return (
    <div className="app-container">
      <Header />
      <Balance transactions={transactions} />
      <IncomeExpenses transactions={transactions} />
      <div className="transaction-card"> {/* Card wrapper for transactions */}
        <h2>History</h2> {/* Static header */}
        <ul className="list">
          <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
        </ul>
      </div>
      <AddTransaction addTransaction={addTransaction} />
      <Footer /> {/* Add Footer here */}
    </div>
  );
}

export default App;
