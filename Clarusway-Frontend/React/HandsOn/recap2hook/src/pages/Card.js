import React from "react";

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
      <div xs={1} md={2} className="g-4">
        {ulkeler.from({ length: 4 }).map((ulke) => (
          <div>
            <Card key={ulke.name.common}>
              <Card.Img
                variant="top"
                src={ulke.flags[0]}
                alt={ulke.name.common}
                width="30%"
              />
              <Card.Body>
                <Card.Title>{ulke.name.common}</Card.Title>
                <Card.Text>Capital:{ulke.capital}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
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
