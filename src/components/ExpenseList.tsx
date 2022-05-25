import ExpenseItem from "./ExpenseItem";
import "../UI/ExpenseList.css";
import React from "react";
import { ExpenseInterface } from "../models/ExpenseInterface";

const ExpenseList: React.FC<{
  filteredExpenses: ExpenseInterface[];
}> = ({ filteredExpenses }) => {
  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }

  return (
    <ul className="expenses-list">
      {filteredExpenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
