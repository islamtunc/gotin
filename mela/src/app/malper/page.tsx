// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah ve ala alihi ve sahbihi ecma'in
// Allahu Ekber velilahi'lhamd
"use client";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";

const categories = [
  { id: 1, name: "Emlak", icon: "🏠", link: "/malper/mmavahi" },
  // Sadece mmavahi kategorisini bırakın, diğerlerini kaldırın
];

function Page() {
  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Kategoriler</h1>
      <Row>
        {categories.map((category) => (
          <Col key={category.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Link href={category.link} style={{ textDecoration: "none" }}>
              <Card
                className="h-100 text-center shadow-sm category-card"
                style={{ cursor: "pointer", borderRadius: 18, transition: 'box-shadow 0.2s', minHeight: 140 }}
              >
                <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
                  <div className="fs-1" style={{ fontSize: 44 }}>{category.icon}</div>
                  <Card.Title className="mt-3" style={{ fontSize: 18 }}>{category.name}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <style jsx global>{`
        @media (max-width: 576px) {
          .category-card {
            min-height: 110px;
            font-size: 16px;
          }
        }
        .category-card:hover {
          box-shadow: 0 4px 24px rgba(0,0,0,0.10);
        }
      `}</style>
    </Container>
  );
}

export default Page;