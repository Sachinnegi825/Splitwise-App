import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddTransaction = ({ onAdd }) => {
  const [transaction, setTransaction] = useState({
    paidBy: 'Sachin',
    amount: '',
    description: '',
    splitAmong: [],
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!transaction.amount || !transaction.description || transaction.splitAmong.length === 0) {
      toast.error('Please fill in all fields!');
      return;
    }
    onAdd(transaction);
    setTransaction({ paidBy: 'Sachin', amount: '', description: '', splitAmong: [] });
     toast.success("Transaction Added Successfully")
    navigate('/');
  };

  const participants = ['Sachin', 'Ankit', 'Mehak', 'Ajit'];

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-6 bg-gray-800 text-white shadow-lg rounded-md">
        <h1 className="text-3xl font-bold text-center mb-6">Add Transaction</h1>
        <form className="bg-gray-700 p-4 shadow rounded-md" onSubmit={handleSubmit}>
          <h2 className="text-lg font-semibold mb-4">Transaction Details</h2>
          <div className="mb-4">
            <label className="block text-gray-300">Paid By</label>
            <select
              value={transaction.paidBy}
              onChange={(e) => setTransaction({ ...transaction, paidBy: e.target.value })}
              className="mt-1 block w-full border border-gray-500 bg-gray-600 text-white rounded-md shadow-sm"
            >
              {participants.map((person) => (
                <option key={person} value={person}>
                  {person}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Amount</label>
            <input
              type="number"
              value={transaction.amount}
              onChange={(e) => setTransaction({ ...transaction, amount: e.target.value })}
              className="mt-1 block w-full border border-gray-500 bg-gray-600 text-white rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Description</label>
            <input
              type="text"
              value={transaction.description}
              onChange={(e) => setTransaction({ ...transaction, description: e.target.value })}
              className="mt-1 block w-full border border-gray-500 bg-gray-600 text-white rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Split Among</label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {participants.map((person) => (
                <div key={person}>
                  <input
                    type="checkbox"
                    value={person}
                    checked={transaction.splitAmong.includes(person)}
                    onChange={() => {
                      setTransaction((prev) => {
                        const updatedSplit = prev.splitAmong.includes(person)
                          ? prev.splitAmong.filter((p) => p !== person)
                          : [...prev.splitAmong, person];
                        return { ...prev, splitAmong: updatedSplit };
                      });
                    }}
                  />
                  <label className="ml-2">{person}</label>
                </div>
              ))}
            </div>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
