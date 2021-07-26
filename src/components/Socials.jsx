import React from "react";
import email from "../images/new-email.png";

export default function Socials() {
  return (
    <div className="socials-outer">
      {" "}
      <div className="socials">
        <a target="_blank" href="contact@meaghans.wedding">
          <img src={email} alt="Email" />
        </a>
      </div>
    </div>
  );
}
