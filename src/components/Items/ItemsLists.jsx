import { useState, useContext } from "react";
import Items from "./Items";
import Balance from "./Balance";
import TransactionContext from "../context/TransactionContext";
import { motion, AnimatePresence } from "framer-motion";

const ItemsList = () => {
  const { transaction } = useContext(TransactionContext);
  const [heading, setHeading] = useState(new Date().toDateString());

  if (!transaction || transaction.length === 0) {
    return (
      <p
        style={{
          marginTop: "100px",
          fontWeight: "bold",
          fontSize: "30px",
          color: "grey",
        }}
      >
        No Transactions made
      </p>
    );
  }

  return (
    <>
      <div id="items">
        <Balance transaction={transaction} />
        <h6 style={{ marginTop: "50px" }}>{heading}</h6>
        <AnimatePresence>
          {transaction.map((transaction) => (
            <motion.div
              key={transaction.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Items transaction={transaction} key={transaction.id} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ItemsList;
