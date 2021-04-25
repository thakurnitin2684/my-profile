import React from "react";
import "./Contact.css";
import GMAIL from "../images/gmail.png";
import CALL from "../images/call.png";
import WHATSAPP from "../images/whatsapp.png";
import LINKEDIN from "../images/linkedIn.png";
import GITHUB from "../images/github.png";
import Zoom from "react-reveal/Zoom";

const Contact = () => {
  return (
    <Zoom>
      <div>
        <h2 id="contact" className="text-anim" style={{ paddingTop: "120px" }}>
          Contact Details
        </h2>
        <div className="contact-box">
          <Zoom>
            <div className="contact-item">
              <img class="contact-img" src={LINKEDIN} alt="mail" />
              <a
                className="contact-text2"
                href="https://www.linkedin.com/in/nitin-thakur-21b85217a/"
              >
                thakurnitin2684
              </a>{" "}
            </div>
          </Zoom>
          <Zoom>
            <div className="contact-item">
              <img class="contact-img" src={GITHUB} alt="mail" />
              <a
                className="contact-text2"
                href="https://github.com/thakurnitin2684"
              >
                thakurnitin2684
              </a>{" "}
            </div>
          </Zoom>
          <Zoom>
            <div className="contact-item">
              <img class="contact-img" src={GMAIL} alt="mail" />
              <a className="contact-text2" href="mailto: thakurnitin2684.com">
                thakurnitin2684@gmail.com
              </a>
            </div>
          </Zoom>
          <Zoom>
            <div className="contact-item">
              <img class="contact-img" src={CALL} alt="mail" />
              <p className="contact-text">+91-7807807445</p>
            </div>
          </Zoom>
          <Zoom>
            <div className="contact-item">
              <img class="contact-img" src={WHATSAPP} alt="mail" />
              <p className="contact-text">+91-7807807445</p>
            </div>
          </Zoom>
        </div>
      </div>
    </Zoom>
  );
};

export default Contact;
