import "../UI/ExpenseForm.css";
import { useState } from "react";
import React from "react";
import { ExpenseInterface } from "../models/ExpenseInterface";

interface ExpenseFormProps {
  onSaveNewExpenseData: (newExpenseData: ExpenseInterface) => void;
  onStopEditing: () => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({
  onSaveNewExpenseData,
  onStopEditing,
}) => {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const amountChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewAmount(e.target.value);
  };

  const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDate(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newExpenseData = {
      id: Math.random().toString(),
      title: newTitle,
      amount: +newAmount,
      date: new Date(newDate),
    };

    onSaveNewExpenseData(newExpenseData);

    setNewTitle("");
    setNewAmount("");
    setNewDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={newTitle} onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={newAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2022-12-31"
            value={newDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={onStopEditing}>
          CANCEL
        </button>

        <button type="submit">ADD NEW EXPENSE</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
