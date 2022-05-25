import "../UI/ExpenseDate.css";
import React from "react";

interface ExpenseDateProps {
  date: Date;
}

const ExpenseDate: React.FC<ExpenseDateProps> = ({ date }) => {
  const month = date.toLocaleString("en-FI", { month: "long" });
  const day = date.toLocaleString("en-FI", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
