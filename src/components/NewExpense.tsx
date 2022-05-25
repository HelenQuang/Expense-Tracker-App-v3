import "../UI/NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import React from "react";
import { ExpenseInterface } from "../models/ExpenseInterface";

interface NewExpenseProps {
  onAddNewExpense: (expense: ExpenseInterface) => void;
}

const NewExpense: React.FC<NewExpenseProps> = ({ onAddNewExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveNewExpenseDataHandler = (newExpenseData: ExpenseInterface) => {
    const expenseData = { ...newExpenseData };

    onAddNewExpense(expenseData);
  };

  const showExpenseForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={showExpenseForm}>ADD NEW EXPENSE</button>}

      {isEditing && (
        <ExpenseForm
          onSaveNewExpenseData={saveNewExpenseDataHandler}
          onStopEditing={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
