import { useState } from 'react';

const useTransactions = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, paidBy: 'Sachin', amount: 1000, description: 'Lunch', splitAmong: ['Rajneesh', 'Harsit'] },
    { id: 2, paidBy: 'Ankit', amount: 1500, description: 'Cab Fare', splitAmong: ['Nistha', 'Ankesh', 'Rajneesh'] },
    { id: 3, paidBy: 'Ankit', amount: 500, description: 'Coffee', splitAmong: ['Ankesh', 'Nistha'] },
    { id: 4, paidBy: 'Mehak', amount: 2000, description: 'Dinner', splitAmong: ['Harsit', 'Nistha', 'Rajneesh', 'Ankesh'] },
    { id: 5, paidBy: 'Ajit', amount: 1200, description: 'Movie Tickets', splitAmong: ['Nistha', 'Rajneesh'] },
    { id: 6, paidBy: 'Sachin', amount: 800, description: 'Snacks', splitAmong: ['Rajneesh', 'Harsit', 'Ankesh'] },
  ]);

  const addTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
  };

  const settleUp = () => {
    setTransactions([]);
  };

  return {
    transactions,
    addTransaction,
    settleUp,
  };
};

export default useTransactions;
