import React from 'react';

const TransactionList = ({ transactions }) => (
<div className="mt-24 md:mt-6">
    <h2 className="text-xl font-semibold text-white text-center">Transactions</h2>
    <ul className="space-y-4 mt-4">
      {transactions.map((txn, idx) => (
        <li key={idx} className="p-4 bg-gray-100 rounded-lg shadow-md">
          <p className="text-lg font-medium text-gray-900"><strong>{txn.description}</strong></p>
          <p className="text-gray-700">Paid by: {txn.paidBy} | Amount: ₹{txn.amount}</p>
          <p className="text-gray-700">Split among: {txn.splitAmong.join(', ')}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default TransactionList;
