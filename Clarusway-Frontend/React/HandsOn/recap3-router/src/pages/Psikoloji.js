import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import psiko from "../img/psikoloji.jpg";

const Psikoloji = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <img
              src={psiko}
              alt=""
              className="w-100 mt-3"
              style={{
                borderRadius: "30px",
                border: "5px solid #a2c6fd",
              }}
            />
          </Col>
          <Col className="mt-2">
            <h1>Çocuk ve Ergen Psikiyatrisi</h1>
            <h2>Gelişim Testleri</h2>
            <p style={{ textIndent: "30px", textAlign: "justify" }}>
              Sağlıklı bir yetişkinlik dönemi için çocukluk ve ergenlik
              döneminde psikolojik sorunların oluşmadan önlenmesi, psikiyatrik
              hastalık var ise doğru şekilde tedavi edilmesi gerekir. Çocuk ve
              Ergen Psikiyatrisi, bireyin yetişkinlik dönemine ulaştığında
              sağlıklı bir yaşam sürebilmesi, öz güven sahibi bir kişi
              olabilmesi, daha büyük ve tedavisi zor olan kalıcı psikiyatrik
              hastalıkların erken dönemde tedavi edilebilmesi için oldukça
              kritik bir öneme sahiptir.
            </p>
            <p style={{ textIndent: "30px", textAlign: "justify" }}>
              Geçmiş döneme oranla günümüzde Çocuk ve Ergen Psikiyatrisi
              alanının kapsamı, toplumsal etkinliği ve gereksinimleri ülkemizde
              ve dünyada oldukça hızlı bir şekilde genişlemektedir. Oldukça
              geniş kapsamlı bir alan olması nedeniyle tüm biyolojik, sosyolojik
              ve psikolojik bilim dalları ile de doğrudan etkileşim
              içerisindedir.
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

export default Psikoloji;
