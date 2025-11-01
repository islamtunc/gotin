// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// La ilahe illallah, Muhammedur Resulullah

"use client";
import React, { useState } from "react";
import { Card, Row, Col, Button, Badge } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import ForYouFeed from "./ForYouFeed";

export default function page() {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    {
      id: "nature",
      title: "Doğa Temalı Duvar Takvimi",
      subtitle: "Yüksek çözünürlük, parlak baskı",
      price: 90,
      sizes: ["A3", "A2"],
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80&auto=format&fit=crop",
      desc: "Her ay için farklı bir doğa fotoğrafı. Ofis ve ev için ideal, parlak kağıt.",
    },
    {
      id: "family",
      title: "Aile & Anı Takvimi",
      subtitle: "Kişiselleştirilebilir fotoğraf alanı",
      price: 120,
      sizes: ["A3", "A2", "A1"],
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80&auto=format&fit=crop",
      desc: "Aile fotoğraflarıyla özelleştirilebilir takvim. Hediye için mükemmel.",
    },
    {
      id: "islamic",
      title: "İslami Sanat Takvimi",
      subtitle: "Estetik desenler ve önemli gün işaretleri",
      price: 100,
      sizes: ["A3", "A2"],
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80&auto=format&fit=crop",
      desc: "Mimarî ve hat sanatından ilham alan tasarımlar, önemli dini günleri vurgular.",
    },
    {
      id: "kids",
      title: "Çocuklar İçin Duvar Takvimi",
      subtitle: "Renkli illüstrasyonlar ve sticker sayfası",
      price: 75,
      sizes: ["A3"],
      img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&q=80&auto=format&fit=crop",
      desc: "Eğlenceli aylık illüstrasyonlar, doğum günü ve etkinlik sticker'larıyla.",
    },
    {
      id: "minimal",
      title: "Minimal & Modern Takvim",
      subtitle: "Sade çizgiler, mat baskı",
      price: 85,
      sizes: ["A3", "A2"],
      img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1200&q=80&auto=format&fit=crop",
      desc: "Temiz tipografi ve geniş boşluklar. Ofis ve stüdyo için ideal.",
    },
  ];

  function addToCart(pId: string) {
    // Basit görsel sepete ekleme sayacı (gerçek ödeme / sepet entegrasyonu yok)
    setCartCount((c) => c + 1);
    // İsterseniz burada localStorage veya API çağrısı ekleyin
    alert("Sepete eklendi: " + pId);
  }

  return (
    <div
      style={{
        backgroundColor: "#fbfcfd",
        minHeight: "100vh",
        padding: 16,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <style>{`
        .catalog-card { max-width: 1100px; width: 100%; }
        .hero {
          background: linear-gradient(90deg, #ffffff 0%, #f3f6ff 100%);
          border-radius: 8px;
          padding: 18px;
          margin-bottom: 18px;
        }
        .product-img { border-radius: 6px; border: 6px solid white; box-shadow: 0 6px 18px rgba(0,0,0,0.08); }
        .price-badge { font-weight: 700; }
      `}</style>

      <Card className="catalog-card">
        <Card.Body>
          <Row className="align-items-center hero g-3">
            <Col xs={8}>
              <h3 style={{ margin: 0 }}>Duvar Takvimleri — Satış</h3>
              <p className="text-muted" style={{ marginBottom: 8 }}>
                Çeşitler: Doğa, Aile, İslami, Çocuk, Minimal. Baskı kalitesi yüksek, farklı boy seçenekleri.
              </p>
              <div>
                <Button variant="primary" size="sm" className="me-2" href="#products">
                  Katalogu Gör
                </Button>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => (window.location.href = "mailto:satis@duvartakvimi.com?subject=Takvim%20Siparişi")}
                >
                  Sipariş / Teklif Al
                </Button>
              </div>
            </Col>
            <Col xs={4} className="text-end">
              <div style={{ display: "inline-block", textAlign: "right" }}>
                <div style={{ fontSize: 14, color: "#6c757d" }}>Sepet</div>
                <div>
                  <Badge bg="danger" className="price-badge">{cartCount}</Badge>
                </div>
              </div>
            </Col>
          </Row>

          <hr />

          <h5 id="products">Ürünler</h5>
          <Row className="g-3">
            {products.map((p) => (
              <Col xs={12} md={6} lg={4} key={p.id}>
                <Card>
                  <div style={{ padding: 10, background: "#fff" }}>
                    <Image src={p.img} alt={p.title} fluid className="product-img" />
                  </div>
                  <Card.Body>
                    <Card.Title style={{ fontSize: "1rem" }}>{p.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "0.85rem" }}>
                      {p.subtitle}
                    </Card.Subtitle>
                    <Card.Text style={{ fontSize: "0.9rem", minHeight: 48 }}>{p.desc}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div style={{ fontSize: "1.05rem", fontWeight: 700 }}>{p.price} TL</div>
                        <div className="text-muted" style={{ fontSize: "0.8rem" }}>
                          Boyutlar: {p.sizes.join(", ")}
                        </div>
                      </div>
                      <div>
                        <Button variant="outline-primary" size="sm" className="me-2" onClick={() => addToCart(p.id)}>
                          Sepete Ekle
                        </Button>
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() =>
                            (window.location.href =
                              "mailto:satis@duvartakvimi.com?subject=Siparis%20" + encodeURIComponent(p.title))
                          }
                        >
                          Sipariş Ver
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <hr />

          <Row>
            <Col xs={12} md={8}>
              <h6>Ödeme & Teslimat</h6>
              <p className="text-muted" style={{ marginBottom: 6 }}>
                Üretim süresi: 2-5 iş günü. Kargo ve toplu siparişlerde özel fiyat. Kurumsal siparişler için iletişime geçin.
              </p>
            </Col>
            <Col xs={12} md={4} className="text-md-end">
              <div style={{ marginTop: 6 }}>
                <Button
                  variant="outline-success"
                  size="sm"
                  onClick={() => (window.location.href = "tel:+905551112233")}
                >
                  Bizi Ara: +90 555 111 22 33
                </Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}