import React, { useState } from "react";
import './CommissionForm.css';
import '../Wrapper/Wrapper.css'

const CommissionForm = () => {
  const [name, setName] = useState("");
  const [money, setMoney] = useState("");
  const [want, setWant] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", name, money, want, email);
  };

  return (
    <div className="wrapper">
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="money">Money:</label>
          <input type="text" id="money" value={money} onChange={(e) => setMoney(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="want">Want:</label>
          <input type="text" id="want" value={want} onChange={(e) => setWant(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default CommissionForm;