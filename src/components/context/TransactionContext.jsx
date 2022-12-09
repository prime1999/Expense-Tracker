import { createContext, useState, useEffect } from "react";
import axios from "axios";
const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transaction, setTransaction] = useState([]);
  //const axios = require("axios");

  useEffect(() => {
    axios.get("/transaction").then(({ data }) => setTransaction(data));
  }, []);

  //Fetch Transaction

  //To delete a transaction
  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete transaction")) {
      axios.delete(`/transaction/${id}`);
      setTransaction(transaction.filter((item) => item.id !== id));
    }
  };
  //To add a transaction
  const addTransaction = (newTransaction) => {
    axios
      .post("/transaction", {
        text: newTransaction.text,
        amount: newTransaction.amount,
        date: newTransaction.date,
        category: newTransaction.category,
      })
      .then(({ data }) => setTransaction([data, ...transaction]));
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
