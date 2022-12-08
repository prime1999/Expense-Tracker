import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function GuildLines() {
  return (
    <div className="container">
      <AnimatePresence>
        <div id="guildline" className="shadow-sm p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <h1>GUILDLINES TO ADD A TRANSACTION</h1>
            <div className="top-guild">
              <p>
                INCOME:
                <span>
                  Make positive numbers represent your INCOME when inputing the
                  amount
                </span>
              </p>
              <p>
                EXPENSE:
                <span>
                  Make negative numbers represent your EXPENSE when inputing the
                  amount
                </span>
              </p>
            </div>
            <h4 className="text-center mt-5">
              CHOOSE THE NUMBERS ACCORDING TO THEIR BELOW CATEGORIES
            </h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Car
                <span className="badge text-danger">1</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Clothing/Fashion
                <span className="badge text-danger">2</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Payment
                <span className="badge text-danger">3</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Service
                <span className="badge text-danger">4</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Tax
                <span className="badge text-danger">5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Rent
                <span className="badge text-danger">6</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Internet Bills
                <span className="badge text-danger">7</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Transportation
                <span className="badge text-danger">8</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Miscelleneous
                <span className="badge text-danger">9</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Other
                <span className="badge text-danger">10</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
}

export default GuildLines;
