import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import cerrahi from "../img/cerrahi.jpg";

const Cerrahi = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <img
              src={cerrahi}
              alt=""
              className="w-100 mt-3"
              style={{
                borderRadius: "30px",
                border: "5px solid #a2c6fd",
              }}
            />
          </Col>
          <Col className="mt-2">
            <h1>Çocuk Cerrahisi Servisi</h1>
            <h2>Çocuk Cerrahisi Nedir?</h2>
            <p style={{ textIndent: "30px", textAlign: "justify" }}>
              Çocuk cerrahisi, doğumdan 16 yaşına kadar çocukların cerrahi ve
              ürolojik problemlerinin tanı ve tedavisi ile uğraşan cerrahi bir
              bilim dalıdır. Tüm sindirim ve solunum sistemi, çocuk
              jinekolojisi, kalp hariç olmak üzere göğüs, baş boyun, onkolojik,
              travma ve endokrin cerrahisi ile ilgilenir. Tanısal ve girişimsel
              anlamda endoskopik uygulamaların yanı sıra laparoskopik ve
              torakoskopik cerrahi müdahaleleri de kapsayan çocuk cerrahisi,
              doğum öncesi bilinen ya da doğumdan sonra meydana gelen
              anomalilerin cerrahi operasyonlar ile giderildiği branştır.
            </p>
            <p style={{ textIndent: "30px", textAlign: "justify" }}>
              Normal cerrahiden farklı olarak çocuk hastalıkları üzerine
              uzmanlaşan bu bölüm; yeni doğan ünitesi, yoğun bakım, onkoloji ve
              travma gibi pek çok bölüm ile birlikte çalışır. Bu alanda
              uzmanlaşan hekimler 6 yıl tıp fakültesi okuduktan sonra 6 yıl da
              çocuk cerrahisi üzerine uzmanlık eğitimi alır.
            </p>
            <Col>
              <button className="btn btn-danger">Contact</button>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cerrahi;
