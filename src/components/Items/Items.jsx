import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import TransactionContext from "../context/TransactionContext";

function Items({ transaction }) {
  const { handleDelete } = useContext(TransactionContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <>
      <div className={`item-1 ${transaction.amount < 0 ? "minus" : "plus"}`}>
        <div id="item">
          <h5>
            {transaction.text}
            <span>
              {sign}${Math.abs(transaction.amount)}
            </span>
          </h5>
        </div>
        <div id="category">
          <p>
            {transaction.category}
            <a onClick={() => handleDelete(transaction.id)} id="delete">
              <FaTrash />
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Items;
