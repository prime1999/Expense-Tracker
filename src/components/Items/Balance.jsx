import IncomeExpense from "../IncomeExpense";

function Balance({ transaction }) {
  const amounts = transaction.map((item) => item.amount);
  const balance = amounts.reduce((acc, item) => (acc += item), 0);
  const total = balance < 0 ? balance * -1 : balance;
  return (
    <>
      <div className="today">
        <h1>
          ${total}
          <span>today</span>
        </h1>
      </div>
      <IncomeExpense transaction={transaction} />
    </>
  );
}

export default Balance;
