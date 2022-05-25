import "../UI/ExpenseFilter.css";
import React from "react";

interface ExpenseFilterProps {
  selected: string;
  onChangeFilter: (selectedYear: string) => void;
}

const ExpenseFilter: React.FC<ExpenseFilterProps> = ({
  selected,
  onChangeFilter,
}) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeFilter(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selected} onChange={onChangeHandler}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
