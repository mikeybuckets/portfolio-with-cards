import React from "react";
import { experience } from "../projects.js";
import { Card, CardDeck, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function ExperienceCard(props) {
  return (
    <Col sm={6} md={6}>
      <Link style={{ textDecoration: "none" }} to={`/details/${props.id}`}>
        <Card className="exp-card">
          <div className="card-top">
            <Card.Img className="exp-img" variant="top" src={props.img} />
          </div>
          <Card.Body className="card-body">
            <div className="status">{props.status}</div>
            <h4 className="exp-title">{props.title}</h4>
            <Card.Text className="exp-role">{props.role}</Card.Text>
            <Card.Text className="exp-langs">{props.langs}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}
function Experience() {
  return (
    <div id="experience">
      <h1 variant="flex flex-grow content-justify background-color: var(--bg)">
        Scroll Gallery
      </h1>
      <CardDeck className="experience-cards">
        {experience.map((exp) => (
          <ExperienceCard
            key={exp.id}
            id={exp.id}
            img={exp.img}
            title={exp.title}
            role={exp.role}
            desc={exp.description}
            langs={exp.languages}
            status={exp.status}
          />
        ))}
      </CardDeck>
    </div>
  );
}

export default Experience;
