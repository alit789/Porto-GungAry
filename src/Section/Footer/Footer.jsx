import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <section id="footer" className="mt-5">
      <Container className="pt-5">
        <Row className="footer">
          <Col
            style={{ textAlign: "justify", paddingTop: "20px" }}
            xl={5}
            md={12}
          >
            <h4>Gung Ary</h4>
            <p id="footerDescHima" className="mt-4">
              Halo, perkenalkan nama saya I Gusti Agung Gede Ary Mahayasa, biasa
              dipanggil Gung Ary. Saya merupakan seorang UIUX Designer dan saat
              ini saya mahasiswa semester 5 yang berkuliah di Universitas
              Udayana.
            </p>
          </Col>
          <Col
            style={{ paddingTop: "20px" }}
            xl={{ span: 3, offset: 1 }}
            md={12}
          >
            <h5>Sosial Media</h5>
            <a href="/divisi#inti">
              <p className="mt-4">Instagram</p>
            </a>
            <a href="/divisi#pendidikan">
              <p>Linkedin</p>
            </a>
          </Col>
          <Col style={{ paddingTop: "20px" }} xl={3} md={12}>
            <h5>Fitur</h5>
            <a href="/">
              <p className="mt-4">Beranda</p>
            </a>
            <a href="/#Project">
              <p className="mt-4">Project</p>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
