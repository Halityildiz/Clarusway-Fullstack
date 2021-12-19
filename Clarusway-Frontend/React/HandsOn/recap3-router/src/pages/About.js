import { Col, Row, Container } from "react-bootstrap";
import asset3 from "../img/aboutus.jpg";
const About = () => {
  return (
    <Container className="text-center mt-4">
      <Row>
        <Col className="d-flex align-item-center justify-content-center">
          <img style={{ width: "500px" }} src={asset3} alt="" />
        </Col>
        <Col>
          <h1>Who We are?</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
            voluptas fugit neque nam autem ipsum soluta dolorem temporibus quod
            at dolorum hic voluptatum sunt ad. Voluptatibus nemo illo a sunt
            aperiam, necessitatibus tenetur incidunt labore reprehenderit vel,
            sed iusto nostrum consectetur ratione, beatae dolores! Odio, sunt
            dolor quos velit iste magni eveniet minus incidunt sed impedit
            similique eaque porro in expedita, facere perspiciatis adipisci
            quibusdam at possimus enim ex, hic eum harum. Iure quaerat, rem et
            ratione aliquam magni enim, sequi tempora laudantium ipsa, maxime
            eligendi perferendis! Rem inventore corporis veritatis non ratione
            culpa delectus, temporibus consequuntur quae iure, dolorum quas
            exercitationem sunt ipsa? Quidem.
          </p>
          <h1>Our Purpose</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos, pariatur sunt asperiores id aspernatur error atque
            ullam rerum molestiae inventore cupiditate facere ipsam eius ducimus
            eum. Facilis iste velit tenetur. Deleniti placeat qui aperiam? Quia
            deleniti impedit optio. Similique facere aliquid, sit enim quibusdam
            distinctio debitis quis aspernatur. In accusamus repellendus
            necessitatibus quam maiores esse quidem ab, quia inventore
            voluptatum est. Ipsa molestias eum explicabo dicta accusamus aut
            voluptatibus totam.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
