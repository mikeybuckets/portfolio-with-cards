import React from "react";
import { Button } from "react-bootstrap";
import Navbar from "./Navbar";
import Wave from "react-wavify";
import Socials from "./Socials";

function Home() {
  return (
    <div id="home">
      <Wave
        className="wave"
        fill="#1B1B1B"
        paused={false}
        options={{
          height: 23,
          amplitude: 45,
          speed: 0.21,
          points: 5
        }}
      />
      <div className="intro">
        <h1>
          We are getting <em className="highlight">Married!</em>
        </h1>
        <h1>
          <em className="highlight outline-light border-shadow:e64100">
            Robert
          </em>{" "}
          <span>{"&"}</span> <em variant="outline-light">Meaghan</em>
        </h1>
        >
        <h1>
          <em className="highlight">4000 East Palm St. Mesa, Arizona 85215</em>{" "}
        </h1>
        <Button variant="outline-light" id="action-btn">
          Learn More!
        </Button>
      </div>
    </div>
  );
}

export default Home;
