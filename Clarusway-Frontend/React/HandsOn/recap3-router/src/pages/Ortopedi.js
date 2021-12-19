import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import orto from "../img/ortopedi.jpg";

const Ortopedi = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <img
              src={orto}
              alt=""
              className="w-100 mt-3"
              style={{
                borderRadius: "30px",
                border: "5px solid #a2c6fd",
              }}
            />
          </Col>
          <Col className="mt-2">
            <h1>Pediatrik Ortopedi </h1>
            <h2>Ne Zaman Basvurmali?</h2>
            <p style={{ textIndent: "30px", textAlign: "justify" }}>
              Çocuklarda doğumdan erişkin yaş grubuna geçene kadar olan
              dönemdeki her türlü kas-iskelet sistemi (kemik, eklem, bağ kas ve
              tendon) problemlerinin cerrahi tedavisi ile ilgilenir. Erişkin
              ortopedi ve travmatolojiden ayıran en önemli fark, halihazırda
              büyümekte olan kas-iskelet sisteminin problemleri ile
              ilgilenmesidir.
            </p>
            <p style={{ textIndent: "30px", textAlign: "justify" }}>
              Çocuğunuzda yürüme bozukluğu, kalça eklemi problemi, aksama,
              bacaklarda eğrilik veya şekil bozukluğu, bacaklar arasında uzunluk
              farkı, ayak deformitesi, duruş bozukluğu, omurga deformitesi,
              kemik kırıkları, eklem çıkıkları, kemik ve eklem enfeksiyonları
              veya kas-kemik tümörü olduğundan şüphe duyuluyorsa pediatrik
              ortopediste başvurmak gerekir. Ayrıca gelişim geriliği,
              nöromusküler hastalıklar (Serebral palsi, spina bifida), iskelet
              displazisi, cam kemik hastalığı, kemik erimesi veya başka
              sendromlar bulunan çocuklarda da pediatrik ortopedist,
              multidisipliner takımın bir parçası olarak tedavide önemli rol
              üstlenir.
            </p>
            <Col>
              <button className="btn btn-danger ">Contact</button>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Ortopedi;
