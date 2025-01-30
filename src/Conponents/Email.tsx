import { useState } from "react";
import axios from 'axios';
import "./Email.css";

function Email() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const addEmail = async () => {
    try {
      const newEmail = { email: email };
      const response = await axios.post('http://localhost:5000/api/emails', newEmail);
      console.log('Email added:', response.data);
    } catch (error) {  // Fixed error handling
      console.error('Error adding email:', error);
    }
  };

  const handleSubmit = async () => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("Thank you for subscribing!");
    addEmail(); // Calls addEmail after validation
  };

  return (
    <div className="email-system">
      <input
        type="email"
        placeholder="Email"
        className="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="submit" onClick={handleSubmit}>
        Submit
      </button>
      {message && <p className="result-message">{message}</p>}
    </div>
  );
}

export default Email;
