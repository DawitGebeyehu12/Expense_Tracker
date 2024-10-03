import React from 'react';
import { Transaction } from './Transaction';

export const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <div className="transaction-list">
      <ul className="list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction} />
        ))}
      </ul>
    </div>
  );
};
