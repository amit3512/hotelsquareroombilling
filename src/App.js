import React,{ useState, useEffect } from 'react';
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseList from "./Components/ExpenseList";

import Alert from "./Components/Alert";
import './App.css';
import { uuid } from 'uuidv4';



// const initialExpenses = [
//   { id: uuid(), charge: "rent", amount: 1600 },
//   { id: uuid(), charge: "car payment", amount: 400 },
//   {
//     id: uuid(),
//     charge: "credit card bill ",
//     amount: 1200
//   }
// ];

const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];


function App() {
	// all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);
  // single expense
  const [charge, setCharge] = useState("");

  const [plate, setPlate] = useState("");
  // single amount
  const [amount, setAmount] = useState("");
  // alert
  const [alert, setAlert] = useState({ show: false });
  // edit
  const [edit, setEdit] = useState(false);
  // id
  const [id, setId] = useState(0);
  
  useEffect(() => {
    console.log("called");

    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);


  const handleCharge = e => {
    setCharge(e.target.value);
  };

  const handlePlate = e => {
    setPlate(e.target.value);
  };
  // add amount
  const handleAmount = e => {
    setAmount(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 1500);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        let tempExpenses = expenses.map(item => {
          return item.id === id ? { ...item, charge, plate, amount } : item;
        });
        setExpenses(tempExpenses);
        handleAlert({ type: "success", text: "item edited" });
        setEdit(false);
      } else {

        const singleExpense = { id: uuid(), charge, plate,  amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "item added" });
      }
      // set charge back to empty string
      setCharge("");
      setPlate("");
      // set amount back to zero
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: `charge can't be empty value and amount value has to be bigger than zero`
      });
    }
  };

  

  const clearItems = () =>{
    setExpenses([]);
  }

  const handleDelete = id => {
    let tempExpenses = expenses.filter(item => item.id !== id);
    setExpenses(tempExpenses);
    handleAlert({ type: "danger", text: "item deleted" });
  };

  const handleEdit = id => {
    let expense = expenses.find(item => item.id === id);
    let { charge, plate, amount } = expense;
    setCharge(charge);
    setPlate(plate);
    setAmount(amount);
    setEdit(true);
    setId(id);
    handleAlert({ type: "danger", text: "item edited" });
  };

  const printReceipt = () =>{
    window.print();
  }
    
  return (
  <div className="App">
      
      
   
    
      <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="hide-on-print">
                  <h2>Hotel Square </h2>
                  <p>Buspark,9812778378</p>

                  {alert.show && <Alert type={alert.type} text={alert.text} />}
                      <ExpenseForm
                          handleSubmit={handleSubmit}
                          charge={charge}
                          handleCharge={handleCharge}
                          plate={plate}
                          handlePlate={handlePlate}
                          amount={amount}
                          handleAmount={handleAmount}
                          edit={edit}
                        />
                    </div>
                </div>
               
                  <div className="col-md-8 show-on-print">
                                <h2>Hotel Square </h2>
                                <p>Buspark,9812778378</p>
                                <ExpenseList 
                                expenses={expenses} 
                                clearItems={clearItems} 
                                handleDelete={handleDelete} 
                                handleEdit={handleEdit}
                                />
                          <h4 className="mt-5">Total :{""}<span className="ml-4">Rs.{expenses.reduce((acc,curr)=>{return (acc +=parseInt(curr.amount*curr.plate))},0)}</span></h4>
                          <button className="hide-on-print print btn" onClick={printReceipt}>Print</button>
                  </div>
                
              </div>
      </div>
</div>
    
  );
}

export default App;
