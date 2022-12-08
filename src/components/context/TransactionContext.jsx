import { createContext, useState, useEffect } from "react";
import axios from "axios";
const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transaction, setTransaction] = useState([]);
  //const axios = require("axios");

  useEffect(() => {
    fetchData();
  }, []);

  //Fetch Transaction
  const fetchData = async () => {
    const response = await axios.get("/transaction");
    setTransaction(response.data);
  };

  //To delete a transaction
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete transaction")) {
      await axios.delete(`/transaction/${id}`);
      setTransaction(transaction.filter((item) => item.id !== id));
    }
  };
  //To add a transaction
  const addTransaction = async (newTransaction) => {
    const response = await axios.post("/transaction", {
      text: newTransaction.text,
      amount: newTransaction.amount,
      date: newTransaction.date,
      category: newTransaction.category,
    });
    setTransaction([response.data, ...transaction]);
  };

  return (
    <TransactionContext.Provider
      value={{
        transaction,
        handleDelete,
        addTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContext;
