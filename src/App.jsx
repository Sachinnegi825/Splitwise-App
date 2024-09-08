import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import BalanceSheet from "./components/BalanceSheet";
import AddTransaction from "./components/AddTransaction";
import useTransactions from "./hooks/useTransactions";

const App = () => {
  const { transactions, addTransaction, settleUp } = useTransactions();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home transactions={transactions}/>}/>
        <Route path="/addTransaction" element={<AddTransaction onAdd={addTransaction} />}/>
        <Route path="/balancesheet" element={<BalanceSheet transactions={transactions} settleUp={settleUp}/>}/>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
