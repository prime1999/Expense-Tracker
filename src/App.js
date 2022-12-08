import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ItemsLists from "./components/Items/ItemsLists";
import About from "./components/pages/About";
import NewExpense from "./components/pages/NewExpense";
import PagesLinks from "./components/PagesLinks";
import { TransactionProvider } from "./components/context/TransactionContext";

function App() {
  return (
    <TransactionProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <ItemsLists />
                  <PagesLinks />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/addTransaction" element={<NewExpense />} />
          </Routes>
        </div>
      </Router>
    </TransactionProvider>
  );
}

export default App;
