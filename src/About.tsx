import "./About.css";
import Navbar from "./Conponents/NavBar";
function About() {
  return (
    <div className="about-container">
      <div className="background-color"></div>
      <Navbar />
      <div className="form-countainer">
        <div className="border">
          <div className="form-img"></div>
          <h4>CONTACT FORM</h4>
          <div className="form-inputs">
            <div className="name-email-group">
              <input placeholder="Name" className="name-form"></input>
              <input placeholder="Email" className="email-form"></input>
            </div>
            <input placeholder="Phone Number" className="phone-form"></input>
            <textarea className="input-wrap" placeholder="Comment"></textarea>
            <button className="submit-form">SEND MESSAGE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
