import React, { useState } from "react";
import "./stylesheets/Contact.css";

import Zoom from "react-reveal/Zoom";
import * as assets from "../assets";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const handleButtonClick = (url) => {
    var win = window.open(url, "_blank");
    win.focus();
  };
  return (
    <Zoom>
      <div className="contactInnerContainer">
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <h2 id="contact" className="sectionHeading">
          {assets.strings.txt_get_in_touch}
        </h2>
        <div className="contact-box">
          <div className="linkContainer">
            <div
              className="btn"
              onClick={() =>
                handleButtonClick("mailto: thakurnitin2684@gmail.com")
              }
            >
              <img className="btnImg" src={assets.images.gmail} />
            </div>
            <div
              className="btn"
              onClick={() => handleButtonClick(assets.url.linkedIn)}
            >
              <img className="btnImg" src={assets.images.linkedIn} />
            </div>

            <div
              className="btn"
              onClick={() => {
                navigator.clipboard.writeText("+917807807445");
                toast.success("Copied to clipboard !");
              }}
            >
              <img className="btnImg" src={assets.images.call} />
            </div>
            <div
              className="btn"
              onClick={() => {
                navigator.clipboard.writeText("+917807807445");
                toast.success("Copied to clipboard !");
              }}
            >
              <img className="btnImg" src={assets.images.whatsapp} />
            </div>
          </div>
        </div>
      </div>
    </Zoom>
  );
}

export default Contact;
