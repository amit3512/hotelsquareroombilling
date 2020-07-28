import React from "react";
import ExpenseItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md";

const ExpenseList = ({expenses,clearItems,handleEdit,handleDelete}) => {
  return (
    <>
      <ul className="list">
        {expenses.map(expense => {
          return (
            <ExpenseItem key={expense.id} 
            expense={expense}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            />
             
             );

              
              
            
            
            
          
        })}

        {expenses.length > 0 && (
        <button className="btn" onClick={clearItems}>
          <MdDelete className="btn-icon" />
          clear expenses
        </button>
      )}
      </ul>
      
    </>
  );
};

export default ExpenseList;
