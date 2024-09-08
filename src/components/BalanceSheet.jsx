import React from 'react';
import { calculateBalances } from '../utils/splitLogic';

const BalanceSheet = ({ transactions ,settleUp}) => {
  const balances = calculateBalances(transactions);

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-3xl font-semibold mb-4 text-gray-100 text-center">Balance Sheet</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-900 text-gray-200 rounded-lg shadow">
          <thead>
            <tr>
              <th className="py-3 px-6 text-left text-gray-400">Person</th>
              <th className="py-3 px-6 text-left text-gray-400">Net Balance</th>
              <th className="py-3 px-6 text-left text-gray-400">Details</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(balances).map((person) => (
              <tr key={person} className="hover:bg-gray-700 transition duration-150">
                <td className="py-4 px-6 font-medium">{person}</td>
                <td
                  className={`py-4 px-6 font-medium ${
                    balances[person] < 0 ? 'text-red-500' : 'text-green-500'
                  }`}
                >
                  {typeof balances[person] === 'number'
                    ? balances[person] < 0
                      ? `Owes ₹${Math.abs(balances[person]).toFixed(2)}`
                      : `Gets ₹${balances[person].toFixed(2)}`
                    : 'No data'}
                </td>
                <td className="py-4 px-6">
                  {transactions
                    .filter((t) => t.splitAmong.includes(person))
                    .map((t, index) => {
                      const totalAmount = parseFloat(t.amount);
                      const splitAmount = totalAmount / t.splitAmong.length;
                      const amountOwed = person === t.paidBy ? splitAmount : -splitAmount;

                      return (
                        <div key={index} className="mb-2">
                          <p>{t.description} - ₹{totalAmount.toFixed(2)} (Paid by {t.paidBy})</p>
                          <p className={`${amountOwed >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                            Split - ₹{Math.abs(amountOwed).toFixed(2)}
                          </p>
                        </div>
                      );
                    })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={settleUp} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mt-4">
    Settle Up
  </button>
    </div>
  );
};

export default BalanceSheet;
