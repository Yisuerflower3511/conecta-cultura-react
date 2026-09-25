import { Container, Row, Col } from "react-bootstrap";

export default function PieDePagina() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="gy-3">
          {/* Columna 1: Información de la app */}
          <Col md={4}>
            <h5 className="text-white">Conecta Cultura</h5>
            <p className="text-muted small">
              Plataforma para la difusión de talleres, eventos culturales y actividades comunitarias.
            </p>
          </Col>

          {/* Columna 2: Enlaces */}
          <Col md={4}>
            <h5 className="text-white">Secciones</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#cartelera" className="text-muted text-decoration-none small">
                  Cartelera
                </a>
              </li>
              <li>
                <a href="#inscripciones" className="text-muted text-decoration-none small">
                  Mis Inscripciones
                </a>
              </li>
            </ul>
          </Col>

          {/* Columna 3: Contacto */}
          <Col md={4}>
            <h5 className="text-white">Contacto</h5>
            <p className="text-muted small mb-1">Email: contacto@conectacultura.cl</p>
            <p className="text-muted small">Teléfono: +56 9 1234 5678</p>
          </Col>
        </Row>

        <hr className="my-3 border-secondary" />

        {/* Derechos de autor */}
        <Row>
          <Col className="text-center small text-muted">
            &copy; {new Date().getFullYear()} Conecta Cultura. Todos los derechos reservados.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}