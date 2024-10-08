import React from "react";
import "./Contact.css"; 

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-container">
        <h1>Reach out to us </h1>
        <br></br>
        <br></br>
        <h3>
          Phone No: <span className="contact-info">56478456168</span>
        </h3>
        <br></br>
        <br></br>
        <h3>
          Email: <span className="contact-info">sfit.ac.in</span>
        </h3>
        <br></br>
        <br></br>
        <h3>
          Location:{" "}
          <span className="contact-info">
            St. Francis Institute of Technology, Mount Poinsur, S.V.P. Road,
            Borivali (West), Mumbai 400103
          </span>
        </h3>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default Contact;
