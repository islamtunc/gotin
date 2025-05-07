// Bismillahirrahmanirahim

import React from "react";
import { Alert, Container, Row, Col, Card, Button } from "react-bootstrap";

function AdminPage() {
  return (
    <Container fluid style={{ background: "#f8f9fa", minHeight: "100vh", padding: "20px" }}>
      <Row>
        <Col>
          <Alert variant="success" style={{ textAlign: "center", fontSize: "18px" }}>
            Selam Aleykum dear Customer or Developer, Welcome to Admin Panel
          </Alert>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Alert
            style={{
              background: "green",
              color: "white",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            Sernameye name nameye Allah <br />
            Be namaye nameye kemi wi Wallah
          </Alert>
        </Col>
      </Row>

      <Row>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Products</Card.Title>
              <Card.Text>Access the main page of the admin panel.</Card.Text>
              <Button variant="primary" href="/mmavahi">
                Go
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Courses</Card.Title>
              <Card.Text>Edit or view the about page.</Card.Text>
              <Button variant="primary" href="/mmkinc">
                Go
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Services</Card.Title>
              <Card.Text>Manage nutrition programs.</Card.Text>
              <Button variant="primary" href="/mmkargeh">
                Go
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>For Developers</Card.Title>
              <Card.Text>Edit or view your programs.</Card.Text>
              <Button variant="primary" href="/mmwesayit">
                Go
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>References</Card.Title>
              <Card.Text>Manage and edit your blog posts.</Card.Text>
              <Button variant="primary" href="/mmkedkar">
                Go
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>The Website</Card.Title>
              <Card.Text>Edit or view the website settings.</Card.Text>
              <Button variant="primary" href="/malper">
                Go
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminPage;