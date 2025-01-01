import "./About.css";
import Navbar from "./Conponents/NavBar";
function About() {
  return (
    <div className="about-container">
      <Navbar />
      <div className="form-countainer">
        <div className="border">
          <div className="form-img"></div>
          <h4>CONNECT FORM</h4>
          <div className="form-inputs">
            <div className="name-email-group">
              <input placeholder="Name" className="name-form"></input>
              <input placeholder="Email" className="email-form"></input>
            </div>
            <input placeholder="Phone Number" className="phone-form"></input>
            <input placeholder="Comment" className="comment-form"></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
