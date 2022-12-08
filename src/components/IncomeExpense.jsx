import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function IncomeExpense({ transaction }) {
  const amounts = transaction.map((item) => item.amount);
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, amount) => (acc += amount), 0);

  const expense = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, amount) => (acc += amount), 0);
  return (
    <>
      <div className="transaction">
        <div className="item1">
          <span>
            <FaArrowDown />
          </span>
          <h1>Income</h1>
          <p>${income}</p>
        </div>
        <div className="item2">
          <span>
            <FaArrowUp />
          </span>
          <h1>Expense</h1>
          <p>${expense}</p>
        </div>
      </div>
    </>
  );
}

export default IncomeExpense;
