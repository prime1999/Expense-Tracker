import { useState, useContext } from "react";
import GuildLines from "../Items/GuildLines";
import Select from "../Select";
import TransactionContext from "../context/TransactionContext";

function NewExpense() {
  const { addTransaction } = useContext(TransactionContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Other");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "" || amount === "" || date === "") {
      alert("Please state a transaction");
    } else {
      const newTransaction = {
        text,
        amount: +amount,
        date,
        category,
      };
      addTransaction(newTransaction);
    }
    setText("");
    setAmount("");
    setDate("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Select select={(category) => setCategory(category)} />
        <div className="form">
          <label>Text</label>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            className="form-control"
            placeholder="Enter what you paid or been paid for.."
          />
          <label>Amount</label>
          <input
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            className="form-control"
            placeholder="Enter Amount (US dollars)"
          />
          <label className="sr-only">Date</label>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            className="form-control mb-4 mr-sm-2"
            placeholder="Enter today's Date"
          />
          <div className="submit">
            <input
              style={{ backgroundColor: "rgb(1, 116, 238)" }}
              type="submit"
              value="Save"
            />
          </div>
        </div>
      </form>
      <GuildLines />
    </>
  );
}

export default NewExpense;
