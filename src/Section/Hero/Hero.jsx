import React from "react";
import "./style.css";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../Components/Button/Button";
import ScrollReveal from "scrollreveal";


const initializeScrollReveal = (selector, options) => {
  const sr = ScrollReveal();
  sr.reveal(selector, {
    origin: "bottom",
    easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    distance: "40px",
    duration: 1200,
    reset: true,
    ...options,
  });
};



const Hero = () => {
  useEffect(() => {
    // Inisialisasi ScrollReveal untuk elemen-elemen yang ingin Anda animasikan
    initializeScrollReveal(".wrapQuotes", { delay: 200 });
    initializeScrollReveal(".introWrap", { delay: 500 });
    initializeScrollReveal(".sosmed", { delay: 800 });
  }, []);

  return (
    <section id="Hero">
      <Container>
        <Row>
          <Col xl={8}>
            <div className="wrapQuotes">
              <h2 className="quotes">
                The best <span id="Design">Design</span> is the <br />{" "}
                <span id="Simple">Simplest</span> one that works.
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="introWrap mt-5">
              <Button style="primary" desc="Allow Me to Introduce Myself 🖐️" />
              <h1 className="mt-4">I Gusti Agung Gede Ary Mahayasa</h1>
              <p className="mt-2 job">I am UI & UX Designer</p>
              <p>
                Halo, perkenalkan nama saya I Gusti Agung Gede Ary Mahayasa, biasa dipanggil Gung Ary.
                Saya merupakan seorang UIUX Designer dan saat ini saya mahasiswa semester 5 yang berkuliah di Universitas Udayana.
              </p>
            </div>
            <div className="sosmed">
              <p>My Social Media :</p>
              <div className="sosmedWrap">
                <Button style="kartun" desc="Instagram  " />
                <Button style="kartun2" desc="Linkedin" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
