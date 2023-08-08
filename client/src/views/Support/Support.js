import React, { useState } from 'react';
import './Support.css';
import '../../components/Wrapper/Wrapper.css'

const Support = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [issue, setIssue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className='wrapper'>
      <h2>Need Tech Help?</h2>
      <p>
        For any tech related questions please fill out the form provided below.
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="issue">Issue:</label>
          <textarea
            id="issue"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            rows="4"
            required
          />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Support;