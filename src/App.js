import React, { useState } from "react";
import Expenses from "./componenets/Expenses/Expenses";
import NewExpense from "./componenets/NewExpense/NewExpense";

const DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 289.67,
    date: new Date(2022, 10, 23),
  },
  {
    id: "e2",
    title: "Medical Bill",
    amount: 779.66,
    date: new Date(2022, 9, 28),
  },
  { id: "e3", title: "Petrol", amount: 100.57, date: new Date(2022, 7, 12) },
  {
    id: "e4",
    title: "Restaurant",
    amount: 875.88,
    date: new Date(2022, 6, 14),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expenses) => {
    setExpenses((prevExpense) => {
      return [expenses, ...expenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
