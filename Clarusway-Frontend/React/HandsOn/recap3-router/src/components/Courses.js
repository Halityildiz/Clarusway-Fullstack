import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyCard from "./MyCard";

const Courses = ({ data }) => {
  return (
    <div>
      <Container className="text-center mt-4 height:500px">
        <Row className="d-flex justify-content-center">
          {data.map((course) => {
            return (
              <Col
                className="mb-3 d-flex justify-content-center"
                key={course.id}
                xs={10}
                md={6}
                lg={3}
              >
                <MyCard course={course} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
