import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const ExpenseItem = ({
  expense: { id, charge, plate, amount },
  handleDelete,
  handleEdit}) => {
   
  

  return (
    <li className="item">
      
        <div className='container'>
          <div className="info">
        	<div className='row'>
        	     
		        	<div className='col-sm-4'>
		        		<span className="expense">{charge}</span>
		        	</div>
		        	<div className='col-sm-4'>
		        		<span className="amount">Rs.{amount *  plate}/-</span>
		        	</div>
                  
                    <div className='col-sm-4 hide-on-print'>
				        <button
				          className="edit-btn"
				          aria-label="edit button"
				          onClick={() => handleEdit(id)}
				        >
				          <MdEdit />
				        </button>
				        <button
				          className="clear-btn"
				          aria-label="delete button"
				          onClick={() => handleDelete(id)}
				        >
				          <MdDelete />
				        </button>
				    </div>
		    </div>
		   </div>
      </div>
      
    </li>
  );
};

export default ExpenseItem;
