import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import hasta from "../img/hastalik.jpg";

const Hastalik = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <img
              src={hasta}
              alt=""
              className="w-100 mt-3"
              style={{
                borderRadius: "30px",
                border: "5px solid #a2c6fd",
              }}
            />
          </Col>
          <Col className="mt-2">
            <h1>Çocuk Sağlığı ve Hastalıkları</h1>
            <h2>Pediatri Nedir?</h2>
            <p style={{ textIndent: "30px", textAlign: "justify" }}>
              Pediatri olarak da bilinen çocuk sağlığı ve hastalıkları bölümü,
              doğumdan ergenliğe kadar uzanan süreç içinde yer alan bireylerin
              tanı, takip ve tedavisi ile ilgilenen bilim dalıdır. 0 ile 18 yaş
              arasında, çocuk olarak tanımlanan kişilerin doğumsal hastalıkları,
              doğum sonrası düzenli olarak uygulanması gereken aşı takibi,
              mental, fiziksel ve motor gelişimi pediatri hekimlerince takip
              edilir. Bu süreçte yapılan rutin muayenelerde bebeklerin boy,
              kilo, beslenme ve benzeri gelişiminin yanı sıra günlük yaşam
              becerilerinin, ifade ve anlamalarının gelişimi, nörolojik ve
              psikolojik gelişimleri gibi pek çok süreç kontrol ve takip edilir.
              Henüz iletişim becerisi gelişmemiş bebeklerin hastalıklarının
              zorlu tanı ve tedavisi ile ilgilenen hekimler, çocukluk döneminde
              bulunan bireylerin muayenelerini ise onların psikolojilerini göz
              önünde bulundurularak yapar.
            </p>
            <p style={{ textIndent: "30px", textAlign: "justify" }}>
              Çocuk sağlığı ve hastalıkları hekimleri 6 yıl tıp fakültesi
              eğitimi aldıktan sonra 4 yıl da pediatri bölümünde ihtisas
              yaparlar. Çocuk sağlığı ve hastalıkları bölümünün pek çok yan dalı
              da mevcuttur. Bu dallarda uzmanlaşan pediatristler, ek eğitim
              sürecinden geçerler.
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

export default Hastalik;
