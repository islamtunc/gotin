// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim

"use client";
import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const products = [
	{
		id: "p1",
		title: "Sevgili Temalı Duvar Takvimi",
		category: "for-you",
		price: 110,
		img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
		desc: "Romantik illüstrasyonlar, parlak baskı, A2/A3 seçenekleri.",
	},
	{
		id: "p2",
		title: "Anneler Günü Özel Takvim",
		category: "dayik",
		price: 120,
		img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=900&q=80",
		desc: "Kişiselleştirilebilir fotoğraf alanı, hediye paketi seçeneği.",
	},
	{
		id: "p3",
		title: "Babalar Günü Takvimi",
		category: "bav",
		price: 95,
		img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
		desc: "Şık ve sade tasarım, A3 baskı.",
	},
	{
		id: "p4",
		title: "Öğretmenler Günü Takvimi",
		category: "mamoste",
		price: 100,
		img: "https://images.unsplash.com/photo-1505575967457-43174fbf4f12?auto=format&fit=crop&w=900&q=80",
		desc: "Eğitim temalı illüstrasyonlar, toplu siparişlerde indirim.",
	},
	{
		id: "p5",
		title: "Doğum Günü Temalı Takvim",
		category: "rojbun",
		price: 85,
		img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=80",
		desc: "Renkli ve eğlenceli sayfalar, sticker ile birlikte.",
	},
];

// derive categories (preserve order of first appearance)
const categories = Array.from(new Set(products.map((p) => p.category))).filter(Boolean);
const categoryLabels: Record<string, string> = {
	"for-you": "Sana Özel",
	dayik: "Anneler Günü",
	bav: "Babalar Günü",
	mamoste: "Öğretmenler Günü",
	rojbun: "Doğum Günü",
};

function renderProductGrid(tabValue: string) {
	const list = products.filter((p) => p.category === tabValue);
	return (
		<Row className="g-4">
			{list.map((p) => (
				<Col key={p.id} xs={12} md={6} lg={6}>
					<Card className="h-100">
						<div style={{ padding: 0 }}>
							<Image
								src={p.img}
								alt={p.title}
								fluid
								className="w-100"
								style={{ height: 180, objectFit: "cover" }}
							/>
						</div>
						<Card.Body className="d-flex flex-column">
							<Card.Title className="mb-1" style={{ fontSize: 18 }}>
								{p.title}
							</Card.Title>
							<Card.Text className="text-muted small mb-3" style={{ flex: 1 }}>
								{p.desc}
							</Card.Text>
							<div className="d-flex justify-content-between align-items-center">
								<div>
									<div className="fw-bold">{p.price} TL</div>
									<div className="text-muted small">Boyutlar: A3, A2</div>
								</div>
								<div className="d-flex flex-column">
									<Button
										variant="outline-primary"
										size="sm"
										className="mb-2"
										onClick={() => alert("Ürün eklendi: " + p.title)}
									>
										Sepete Ekle
									</Button>
									<Button
										variant="primary"
										size="sm"
										onClick={() =>
											(window.location.href =
												"mailto:satis@duvartakvimi.com?subject=" +
												encodeURIComponent(p.title))
										}
									>
										Sipariş
									</Button>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			))}
			{list.length === 0 && (
				<Col>
					<div className="p-4 text-muted">Bu kategoride ürün bulunamadı.</div>
				</Col>
			)}
		</Row>
	);
}

function page() {
	return (
		<main className="flex w-full min-w-0 gap-5 p-0">
			<div className="w-full min-w-0 space-y-6">
				<style>{`
          .category-section { background: #fff; padding: 14px; border-radius: 8px; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
          .category-title { font-size: 1.125rem; font-weight: 700; margin-bottom: 12px; display:flex; justify-content:space-between; align-items:center; gap:12px; }
          .category-sub { color:#6b7280; font-size:0.9rem; }
        `}</style>

				{categories.length === 0 && (
					<div className="p-6 bg-white rounded shadow text-center text-muted">
						Henüz gösterilecek kategori/ürün yok.
					</div>
				)}

				{categories.map((cat) => (
					<section key={cat} className="category-section">
						<div className="category-title">
							<span>{categoryLabels[cat] ?? cat}</span>
							<span className="category-sub">
								{products.filter((p) => p.category === cat).length} ürün
							</span>
						</div>
						{renderProductGrid(cat)}
					</section>
				))}
			</div>
		</main>
	);
}

export default page;