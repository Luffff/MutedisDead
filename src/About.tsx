import "./About.css";
import Navbar from "./Conponents/NavBar";
import { useState } from "react";

function About() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  const hasLetters = (str: string): boolean => /[A-Za-z]/.test(str);

  const handlePhoneCheck = () => {
    if (!hasLetters(phone)) {
      if (phone.includes("-")) {
        setPhone(phone.replace("-", ""));
      }
    } else {
      alert("Please enter a valid phone number");
    }
  };

  const handleSubmit = () => {
    handlePhoneCheck();

    if (name === "" || email === "" || phone === "" || comment === "") {
      alert("Please fill out all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Process the form data
    const prep_phone = phone.toLowerCase();
    const prep_name = name.toLowerCase();
    const prep_comment = comment.toLowerCase();
    const prep_email = email.toLowerCase();

    console.log("Processed Data:", {
      prep_phone,
      prep_name,
      prep_comment,
      prep_email,
    });
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
                  onChange={(a) => setName(a.target.value)}
                />
                <input
                  placeholder="Email"
                  className="email-form"
                  onChange={(a) => setEmail(a.target.value)}
                />
              </div>
              <input
                placeholder="Phone Number"
                className="phone-form"
                onChange={(a) => setPhone(a.target.value)}
              />
              <textarea
                className="input-wrap"
                placeholder="Comment"
                onChange={(a) => setComment(a.target.value)}
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
