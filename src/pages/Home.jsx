import React from 'react';
import TransactionList from '../components/TransactionList';
import { useNavigate } from 'react-router-dom';

const Home = ({ transactions }) => {
  const navigate = useNavigate()

  const handleNavigation = (data) => {
    data.length>2?navigate("/addTransaction"):navigate("/balancesheet")
  }

  return (
<div className="container mx-auto p-4 sm:p-8">
  <div className="relative bg-gray-800 p-6 rounded-lg shadow-lg">
    <h1 className="text-3xl font-bold mb-4 text-center text-white">Splitwise App</h1>
    
    <div className="absolute right-0 top-20 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 md:top-6">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 w-full sm:w-auto"
        onClick={() => handleNavigation("add")}
      >
        Add Transaction
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 w-full sm:w-auto"
        onClick={()=>handleNavigation("")}
      >
        Balance Sheet
      </button>
    </div>
  </div>




      <TransactionList transactions={transactions} />

    </div>
  )
}

export default Home