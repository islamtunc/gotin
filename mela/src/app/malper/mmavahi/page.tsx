// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim

"use client";
import React, { useState, useEffect } from "react";
import { Card, Row, Col, Button, Modal, Form, Badge } from "react-bootstrap";

function formatKey(y: number, m: number, d: number) {
  const mm = String(m + 1).padStart(2, "0");
  const dd = String(d).padStart(2, "0");
  return `${y}-${mm}-${dd}`;
}

function buildMonthMatrix(year: number, month: number) {
  // month: 0-11
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const startDay = first.getDay(); // 0-6 (Sun-Sat)
  const weeks: (Date | null)[][] = [];
  let week: (Date | null)[] = new Array(7).fill(null);
  // Fill first week
  let day = 1;
  for (let i = startDay; i < 7; i++) {
    week[i] = new Date(year, month, day++);
  }
  weeks.push(week);
  // Following weeks
  while (day <= last.getDate()) {
    week = new Array(7).fill(null);
    for (let i = 0; i < 7 && day <= last.getDate(); i++) {
      week[i] = new Date(year, month, day++);
    }
    weeks.push(week);
  }
  return weeks;
}

type EventItem = {
  id: string;
  title: string;
  time?: string;
  color?: string;
};

export default function page() {
  const today = new Date();
  const [viewYear, setViewYear] = useState<number>(today.getFullYear());
  const [viewMonth, setViewMonth] = useState<number>(today.getMonth());
  const [events, setEvents] = useState<Record<string, EventItem[]>>({});
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [color, setColor] = useState("#0d6efd");

  useEffect(() => {
    try {
      const raw = localStorage.getItem("wall-agent-events");
      if (raw) setEvents(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("wall-agent-events", JSON.stringify(events));
    } catch {}
  }, [events]);

  function prevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else setViewMonth((m) => m - 1);
  }
  function nextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else setViewMonth((m) => m + 1);
  }

  function toggleFullscreen() {
    const doc = document as any;
    if (!doc.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }

  function printCalendar() {
    window.print();
  }

  function clearAll() {
    if (confirm("Tüm kayıtlı etkinlikleri temizlemek istiyor musunuz?")) {
      setEvents({});
    }
  }

  const matrix = buildMonthMatrix(viewYear, viewMonth);
  const monthNames = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  const dayNames = ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"];

  function openAddModal(dateKey: string) {
    setSelectedDate(dateKey);
    setTitle("");
    setTime("");
    setColor("#0d6efd");
    setShowModal(true);
  }

  function addEvent() {
    if (!selectedDate || !title.trim()) {
      setShowModal(false);
      return;
    }
    const ev: EventItem = {
      id: String(Date.now()),
      title: title.trim(),
      time: time || undefined,
      color,
    };
    setEvents((prev) => {
      const list = prev[selectedDate] ? [...prev[selectedDate], ev] : [ev];
      return { ...prev, [selectedDate]: list };
    });
    setShowModal(false);
  }

  function removeEvent(dateKey: string, id: string) {
    setEvents((prev) => {
      const list = (prev[dateKey] || []).filter((e) => e.id !== id);
      const copy = { ...prev };
      if (list.length) copy[dateKey] = list;
      else delete copy[dateKey];
      return copy;
    });
  }

  return (
    <div
      style={{
        backgroundColor: "#f8fafb",
        minHeight: "100vh",
        padding: 20,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <style>{`
        /* Print-friendly and wall-calendar style */
        .wall-card { width: 100%; max-width: 1100px; }
        .calendar-table td, .calendar-table th { vertical-align: top; border: 1px solid #e9ecef; padding: 8px; }
        .calendar-table td { height: 160px; cursor: pointer; background: #fff; }
        .date-number { font-size: 20px; font-weight: 700; }
        .event-dot { width: 12px; height: 12px; border-radius: 3px; display: inline-block; }
        .no-print { display: inline-block; }
        @media print {
          body * { visibility: hidden; }
          .print-area, .print-area * { visibility: visible; }
          .no-print { display: none !important; }
          .calendar-table td, .calendar-table th { border: 1px solid #000; }
          .calendar-table td { height: 240px; }
        }
      `}</style>

      <Card className="wall-card print-area">
        <Card.Body>
          <Row className="align-items-center mb-3">
            <Col xs="auto">
              <h3 style={{ margin: 0 }}>Duvar Takvimi</h3>
              <small className="text-muted">Wall Agent — Duvar takvimine uygun görünüm</small>
            </Col>
            <Col className="text-end">
              <Button variant="outline-secondary" size="sm" onClick={prevMonth} className="me-2 no-print">
                ◀
              </Button>
              <strong style={{ marginRight: 8 }}>
                {monthNames[viewMonth]} {viewYear}
              </strong>
              <Button variant="outline-secondary" size="sm" onClick={nextMonth} className="me-2 no-print">
                ▶
              </Button>
              <Button variant="secondary" size="sm" onClick={toggleFullscreen} className="me-2 no-print">
                Tam Ekran
              </Button>
              <Button variant="primary" size="sm" onClick={printCalendar} className="me-2 no-print">
                Yazdır
              </Button>
              <Button variant="danger" size="sm" onClick={clearAll} className="no-print">
                Temizle
              </Button>
            </Col>
          </Row>

          <div style={{ overflowX: "auto" }}>
            <table className="table table-sm calendar-table">
              <thead>
                <tr>
                  {dayNames.map((d) => (
                    <th key={d} className="text-center">
                      {d}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrix.map((week, wi) => (
                  <tr key={wi}>
                    {week.map((dt, di) => {
                      if (!dt) return <td key={di} style={{ height: 160 }} />;
                      const key = formatKey(dt.getFullYear(), dt.getMonth(), dt.getDate());
                      const list = events[key] || [];
                      const isToday =
                        dt.getFullYear() === today.getFullYear() &&
                        dt.getMonth() === today.getMonth() &&
                        dt.getDate() === today.getDate();
                      return (
                        <td
                          key={di}
                          style={{
                            background: isToday ? "#fff8d6" : undefined,
                          }}
                          onClick={() => openAddModal(key)}
                        >
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span className="date-number">{dt.getDate()}</span>
                            <small className="text-muted">
                              {list.length ? <Badge bg="info">{list.length}</Badge> : null}
                            </small>
                          </div>

                          <div style={{ marginTop: 8, maxHeight: 120, overflowY: "auto" }}>
                            {list.map((ev) => (
                              <div
                                key={ev.id}
                                className="d-flex justify-content-between align-items-center mb-1"
                                title={ev.title + (ev.time ? " — " + ev.time : "")}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                                  <span className="event-dot" style={{ background: ev.color || "#0d6efd" }} />
                                  <small style={{ maxWidth: 220, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                    {ev.title} {ev.time ? <span className="text-muted">({ev.time})</span> : null}
                                  </small>
                                </div>
                                <Button variant="link" size="sm" onClick={() => removeEvent(key, ev.id)} className="no-print">
                                  ✕
                                </Button>
                              </div>
                            ))}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Yeni etkinlik</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Tarih</Form.Label>
              <Form.Control type="text" value={selectedDate || ""} readOnly />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Başlık</Form.Label>
              <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Etkinlik başlığı" />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Saat (opsiyonel)</Form.Label>
              <Form.Control type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Renk</Form.Label>
              <Form.Control type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            İptal
          </Button>
          <Button variant="primary" onClick={addEvent}>
            Kaydet
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}