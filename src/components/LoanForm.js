import "./componentsStyle.css";
import Modal from "./Modal";
import { useState } from "react";

export default function LoanForm() {
  const [errMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });

  function handleFormSubmit(event) {
    event.preventDefault();
    setShowModal(true);

    setErrorMessage(null);
    const { age, phoneNumber } = loanInputs;
    if (age < 18 || age > 100) {
      setErrorMessage("The Age Is Not Allowed");
    } else if (phoneNumber.length > 12 || phoneNumber.length < 11) {
      setErrorMessage("Please Enter Valid Number");
    }
  }

  function handleDivClicked() {
    if (showModal) {
      setShowModal(false);
      loanInputs.name = "";
      loanInputs.phoneNumber = "";
      loanInputs.age = "";
      loanInputs.isEmployee = "";
    }
  }
  const btnIsDisabled =
    loanInputs.name == "" ||
    loanInputs.phoneNumber == "" ||
    loanInputs.age == "";

  return (
    <div onClick={handleDivClicked} className="container">
      <form className="loan-form">
        <h1>Requesting a Loan</h1>
        <hr></hr>
        <label>name :</label>
        <input
          type="text"
          value={loanInputs.name}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, name: event.target.value });
          }}
        />

        <label>phone number:</label>
        <input
          type="text"
          value={loanInputs.phoneNumber}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, phoneNumber: event.target.value });
          }}
        />

        <label>age :</label>
        <input
          type="text"
          value={loanInputs.age}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, age: event.target.value });
          }}
        />

        <label>Are you an employee?</label>
        <input
          type="checkbox"
          checked={loanInputs.isEmployee}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, isEmployee: event.target.checked });
          }}
        />

        <label>Salary:</label>
        <select
          value={loanInputs.salaryRange}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, salaryRange: event.target.value });
          }}
        >
          <option>less than 500$</option>
          <option>500$</option>
          <option>more than 500$</option>
        </select>

        <button
          disabled={btnIsDisabled}
          id="submit"
          className={btnIsDisabled ? "disabled" : ""}
          type="submit"
          onClick={handleFormSubmit}
        >
          submit
        </button>
      </form>
      <Modal errorMessage={errMessage} isVisible={showModal} />
    </div>
  );
}
