import React from "react";
import "./Contact.css";
import GMAIL from "../images/gmail.png";
import CALL from "../images/call.png";
import WHATSAPP from "../images/whatsapp.png";

const Contact = () => {
  return (
    <div>
      <p className="text-anim">Contact Details</p>
      <div className="contact-box">
        <div className="contact-item">
          <img class="contact-img" src={GMAIL} alt="mail" />
          <p>LinkedIn/thakurnitin2684</p>
        </div>
        <div className="contact-item">
          <img class="contact-img" src={GMAIL} alt="mail" />
          <p>GitHub/thakurnitin2684</p>
        </div>
        <div className="contact-item">
          <img class="contact-img" src={GMAIL} alt="mail" />
          <a className="contact-text" href="mailto: thakurnitin2684.com">
            thakurnitin2684@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <img class="contact-img" src={CALL} alt="mail" />
          <p>(+91)7807807445</p>
        </div>
        <div className="contact-item">
          <img class="contact-img" src={WHATSAPP} alt="mail" />
          <p>(+91)7807807445</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
