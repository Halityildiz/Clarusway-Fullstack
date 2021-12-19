import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MyCard = (props) => {
  const navigate = useNavigate();
  const { img, link, text, name } = props.course;
  return (
    <div>
      <Card
        style={{
          width: "18rem",
          height: "580px",
          borderRadius: "30px",
          border: "3px solid #0B5ED8",
        }}
      >
        <Card.Img
          variant="top"
          src={img}
          style={{
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button variant="primary" onClick={() => navigate(`/${link}`)}>
            Details
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyCard;
