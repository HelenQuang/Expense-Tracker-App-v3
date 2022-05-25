import React from "react";
import "./App.css";
import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
import { ExpenseInterface } from "./models/ExpenseInterface";

const dummyData = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2022, 9, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 4, 28),
  },
  {
    id: "e5",
    title: "New Desk",
    amount: 450,
    date: new Date(2020, 12, 12),
  },
  {
    id: "e6",
    title: "Books & Materials",
    amount: 97.5,
    date: new Date(2020, 11, 19),
  },
  {
    id: "e7",
    title: "Dinner Out",
    amount: 72.3,
    date: new Date(2022, 2, 14),
  },
  {
    id: "e8",
    title: "Pet Care",
    amount: 213.9,
    date: new Date(2022, 5, 25),
  },
];

function App() {
  const [expenses, setExpenses] = useState<ExpenseInterface[]>(dummyData);

  const addNewExpenseHandler = (expense: ExpenseInterface) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpenseHandler} />

      <Expenses items={expenses} />
    </div>
  );
}

export default App;
