import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";

const Register = () => {
  const [userType, setUserType] = useState("Personal");
  const [gender, setGender] = useState("Male");

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "400px", padding: "20px" }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Registration</Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Check
                    type="radio"
                    label="Personal"
                    name="userType"
                    value="Personal"
                    checked={userType === "Personal"}
                    onChange={(e) => setUserType(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="radio"
                    label="Company"
                    name="userType"
                    value="Company"
                    checked={userType === "Company"}
                    onChange={(e) => setUserType(e.target.value)}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Check
                    type="radio"
                    label="Male"
                    name="gender"
                    value="Male"
                    checked={gender === "Male"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="radio"
                    label="Female"
                    name="gender"
                    value="Female"
                    checked={gender === "Female"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3 text-center">
              <Form.Text>
                By clicking Register, you agree to our{" "}
                <a href="/privacy-policy">Privacy Policy</a>.
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;
