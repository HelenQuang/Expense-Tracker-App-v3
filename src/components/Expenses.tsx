import "../UI/Expenses.css";
import { useState } from "react";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
import React from "react";
import { ExpenseInterface } from "../models/ExpenseInterface";

const Expenses: React.FC<{
  items: ExpenseInterface[];
}> = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterYearHandler = (selectedYear: string): void => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterYearHandler}
      />

      <ExpenseChart filteredExpenses={filteredExpenses} />

      <ExpenseList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
