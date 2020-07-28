import React from "react"; 
import { MdSend } from "react-icons/md";

const ExpenseForm = ({
      charge,
      plate,
	  amount,
	  handleCharge,
	  handlePlate,
	  handleAmount,
	  handleSubmit,
	  edit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        
        <div className="container">
  		<div className="row">
    		<div className="col-sm-12">
      					<div className="form-group">
					          <label htmlFor="expense">charge</label>
					          <input
					            type="text"
					            className="form-control"
					            id="charge"
					            name="charge"
					            placeholder="e.g. rent"
					            value={charge}
					            onChange={handleCharge}
					          />
       				    </div>
    		</div>
    		<div className="col-sm-12">
                             <div className="form-group">
					          <label htmlFor="expense">plate</label>
					          <input
					            type="number"
					            className="form-control"
					            id="plate"
					            name="plate"
					            placeholder="e.g. 1"
					            value={plate}
					            onChange={handlePlate}
					          />
        					 </div>
    		</div>
    		<div className="col-sm-12">
                               <div className="form-group">
						          <label htmlFor="amount">Rate</label>
						          <input
						            type="number"
						            className="form-control"
						            id="amount"
						            name="amount"
						            placeholder="e.g. 100"
						            value={amount}
						            onChange={handleAmount}
						          />
        					   </div>
    		</div>
  		</div>
	 </div>
        

        

        
      </div>
      <button type="submit" className="btn">
        {edit ? "edit" : "submit"}
        {/* submit  */}
        <MdSend className="btn-icon" />
      </button>
    </form>
     

     
  );
};

export default ExpenseForm;
