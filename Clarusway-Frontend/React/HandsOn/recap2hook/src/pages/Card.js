import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

function Card() {
  const [ulkeler, setUlkeler] = useState([]);
  const [hata, setHata] = useState(false);
  const [status, setStatus] = useState(200);

  useEffect(() => {
    fetch("https://restcountries.com/v3/all")
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setHata(true);
          setStatus(res.status);
        }
      })
      .then((data) => setUlkeler(data))
      .catch((error) => console.log(error));
  }, [hata]);
  if (!hata) {
    return (
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  } else {
    return (
      <>
        <h1 className="bg-danger text-center text-light mt-5">
          !!HATA VERİLER ÇEKİLEMEDİ-Code:{status}
        </h1>
        <button
          className="btn btn-outline-warning"
          onClick={() => setHata(false)}
        >
          Güncelle
        </button>
      </>
    );
  }
}
export default Card;
