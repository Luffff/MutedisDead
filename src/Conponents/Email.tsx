import { useState } from "react";
import "./Email.css";

function Email() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async () => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    } else {
      setMessage("Thank you for subscribing!");
    }

    return;
  };

  return (
    <div className="email-system">
      <input
        type="email"
        placeholder="E-Mail List"
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
