import { Col, Row, Container } from "react-bootstrap";
import edu from "../img/4.jpg";
const Education = () => {
  return (
    <Container className="text-center mt-4">
      <Row>
        <Col className="d-flex align-item-center justify-content-center">
          <img style={{ width: "400px" }} src={edu} alt="" />
        </Col>
        <Col>
          <h1>Academic Excellence</h1>
          <p>
            At Mount Sinai Hospital, part of Sinai Health, we foster a culture
            where everyone is a learner. We are committed to providing
            outstanding education for a broad range of health professional
            education learners, leadership programs and ongoing continuing
            education for our interprofessional teams and staff. Our clinical
            programs support learning to care for patients and families through
            the entire life cycle, form birth through to care of the complex
            elderly person.
          </p>
          <h1>Our Vision in Education</h1>
          <p>
            We are an internationally recognized academic health science centre
            affiliated with the University of Toronto and several other
            postsecondary institutions. Our flagship programs support training
            in highly specialized areas of clinical expertise for trainees from
            around the world. Our simulation centres offer innovative skills
            based training and interprofessional team based training focused on
            improving patient outcomes and experience.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Education;
