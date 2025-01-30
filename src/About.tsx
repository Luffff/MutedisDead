import "./About.css";
import Navbar from "./Conponents/NavBar";
import { useState } from "react";
import axios from "axios";

function About() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  const hasLetters = (str: string): boolean => /[A-Za-z]/.test(str);

  const handlePhoneCheck = (rawPhone: string) => {
    if (!hasLetters(rawPhone)) {
      return rawPhone.replace(/[^0-9]/g, ""); // Removes all non-numeric characters
    } else {
      alert("Please enter a valid phone number");
      return phone; // Keep the previous valid state
    }
  };

  const addContact = async () => {
    try {
      const newContact = { email, name, phoneNumber: phone, comment };
      const response = await axios.post("http://localhost:5000/api/contact", newContact);
      console.log("Contact added:", response.data);
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  const handleSubmit = async () => {
    if (name === "" || email === "" || phone === "" || comment === "") {
      alert("Please fill out all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    await addContact();
    console.log("Processed Data:", { name, email, phone, comment });
  };

  return (
    <>
      <div className="about-container">
        <Navbar />
        <div className="background-color"></div>
        <div className="form-container">
          <div className="border">
            <div className="form-img"></div>
            <h4 className="contact-name">CONTACT FORM</h4>
            <div className="form-inputs">
              <div className="name-email-group">
                <input
                  placeholder="Name"
                  className="name-form"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  placeholder="Email"
                  className="email-form"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                placeholder="Phone Number"
                className="phone-form"
                value={phone}
                onChange={(e) => setPhone(handlePhoneCheck(e.target.value))}
              />
              <textarea
                className="input-wrap"
                placeholder="Comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button className="submit-form" onClick={handleSubmit}>
                SEND MESSAGE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
