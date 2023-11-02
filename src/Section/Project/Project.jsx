import "./style.css";
import { Col, Container, Row } from "react-bootstrap";
import Projectsatu from "../../assets/project.png";
import UserJourney from "../../assets/userJourney.png";
import Information from "../../assets/infor.png";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../../Components/Button/Button";
import ScrollReveal from "scrollreveal";
import UserPersona from "../../assets/userpersona.png";
import Board1 from "../../assets/board1.png";
import Board2 from "../../assets/board2.png";
import Board3 from "../../assets/pain.png";
import before1 from "../../assets/before1.png";
import after1 from "../../assets/after1.png";
import before2 from "../../assets/before2.png";
import after2 from "../../assets/after2.png";
import after3 from "../../assets/after3.png";

const initializeScrollReveal = (selector, options) => {
  const sr = ScrollReveal();
  sr.reveal(selector, {
    origin: "bottom",
    easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    distance: "40px",
    duration: 2000,
    reset: true,
    ...options,
  });
};

const Project = () => {
  useEffect(() => {
    // Inisialisasi ScrollReveal untuk elemen-elemen yang ingin Anda animasikan
    initializeScrollReveal(".projectTitle", { delay: 200 });
    initializeScrollReveal(".wrapContentSatu", { delay: 400 });
    initializeScrollReveal(".imgProject", { delay: 600 });
    initializeScrollReveal(".ContentLeft", { delay: 800 });
    initializeScrollReveal(".ContentRight", { delay: 1000 });
    initializeScrollReveal(".btnSebelum", { delay: 400 });
  }, []);

  const [show, setShow] = useState("hide");
  const showHandle = () => {
    setShow(show === "hide" ? "show" : "hide");

    if (show === "hide") {
      initializeScrollReveal(".borderPrim", { delay: 200 });
      initializeScrollReveal(".wrapJourney", { delay: 200 });
      initializeScrollReveal(".wrapInformation", { delay: 200 });
      initializeScrollReveal(".btnSesudah", { delay: 200 });
    }
  };

  return (
    <section id="Project">
      <Container>
        <Row>
          <Col>
            <div className="projectTitle text-center">
              <h1>My Project</h1>
            </div>
          </Col>
        </Row>
        <Row className="projectWrap my-3">
          <Col xl={5}>
            <div className="borderPrim imgProject h-100">
              <img src={Projectsatu} width={"100%"} alt="" />
            </div>
          </Col>
          <Col xl={7}>
            {/* Contnet Satu */}
            <div className="wrapContentSatu borderPrim">
              <h2>SELL.ID</h2>
              <p>Sell Antiques at High Prices only On SELL.ID</p>
              <Button
                style="primary"
                desc="23 Oktober 2023 - 5 November 2023"
              />
              <p className="mt-3">
                Sell.id adalah sebuah aplikasi yang dirancang sebagai platform
                yang memungkinkan pengguna untuk memasarkan barang bekas dan
                secara signifikan meningkatkan nilai jual produk mereka. Dengan
                Sell.id, dapat dengan mudah mengunggah gambar dan deskripsi
                barang bekas yang ingin Anda jual, menjalani proses penjualan
                yang aman, serta memanfaatkan fitur-fitur pemasaran untuk
                menjangkau lebih banyak pembeli potensial.
              </p>
            </div>

            {/* Content Dua */}
            <div className="wrapContentDua mt-3">
              <div className="ContentLeft borderPrim">
                {/*  */}
                <h4>Case Study</h4>
                <p>
                  Penjual barang bekas yang ingin meningkatkan nilai jual dan
                  memasarkan produknya melalui sebuah aplikasi.
                </p>
              </div>
              <div className="ContentRight borderPrim">
                <h4>Solution</h4>
                <p>
                  Membuat suatu aplikasi yang dapat memasarkan produk dan juga
                  bisa meningkatkan nilai jual suatu produk tersebut.
                </p>
              </div>
            </div>
          </Col>

          {show === "hide"  && (
            <div className="mt-4 text-center btnSebelum">
              <button onClick={showHandle} className="kartun3">
                Lihat Selengkapnya
              </button>
            </div>
          )}

          <div className={show}>
            {/* userPersona */}
            <Col xl={12}>
              <div className="wrapJourney borderPrim p-3 mt-4">
                <div className="titleJourney">
                  <h2>User Persona</h2>
                  <p>
                    {" "}
                    Dalam membuat aplikasi "Sell.id" saya menargetkan khusus
                    aplikasi ini untuk memenuhi kebutuhan mahasiswa di Bali yang
                    sedang mencari aplikasi yang bisa memasarkan produk dan
                    meningkatkan nilai jual.
                  </p>
                </div>
                <div className="wrapJourney mt-4">
                  <img src={UserPersona} width={"100%"} alt="" />
                </div>
              </div>
            </Col>
            {/* journeyMap */}
            <Col xl={12}>
              <div className="wrapJourney borderPrim p-3 mt-4">
                <div className="titleJourney">
                  <h2>User Journey Map</h2>
                  <p>
                    {" "}
                    Journey Map ini adalah alat visual yang digunakan dalam
                    desain pengalaman pengguna (user experience design) untuk
                    menggambarkan perjalanan atau pengalaman seorang pengguna
                    saat berinteraksi dengan aplikasi "Sell.id" Ini membantu
                    dalam memahami tahap-tahap, emosi pengguna, titik-titik
                    kontak, dan peluang perbaikan dalam pengalaman pengguna.
                  </p>
                </div>
                <div className="wrapJourney mt-4">
                  <img src={UserJourney} width={"100%"} alt="" />
                </div>
              </div>
            </Col>
            {/* information architecture */}
            <Col xl={12}>
              <div className="wrapInformation borderPrim p-3 mt-4">
                <div className="titleInformation">
                  <h2>Information Architecture</h2>
                  <p>
                    {" "}
                    Dalam rangka perancangan aplikasi "Sell.id," Information
                    architecture (IA) memainkan peran kunci dalam mengembangkan
                    fondasi yang kuat dan terstruktur. IA menggambarkan cara
                    kami merancang dan mengorganisasi struktur informasi dalam
                    aplikasi ini. Ini mencakup pemikiran tentang hierarki
                    konten, navigasi, pencarian, dan arsitektur informasi.
                  </p>
                </div>
                <div className="wrapInformation mt-4">
                  <img src={Information} width={"100%"} alt="" />
                </div>
              </div>
            </Col>

            {/* Moodboard */}
            <Col xl={12}>
              <div className="wrapInformation borderPrim p-3 mt-4">
                <div className="titleInformation">
                  <h2>MoodBoard</h2>
                  <p>
                    {" "}
                    Moodboard adalah alat yang sangat berharga dalam proses
                    desain yang memungkinkan saya untuk mengumpulkan dan
                    merangkum berbagai referensi desain yang menjadi sumber
                    inspirasi dalam pengembangan ide-ide kreatif untuk proyek
                    desain saya. Dalam moodboard, saya dapat mencantumkan
                    elemen-elemen seperti gambar, warna, tipografi, tata letak,
                    dan gaya visual lainnya yang memikat dan relevan dengan visi
                    proyek. Moodboard memainkan peran penting dalam membentuk
                    pemahaman visual, mengatur perasaan, dan mengekspresikan
                    identitas merek atau konsep desain yang ingin saya
                    sampaikan. Ini membantu saya dalam merancang layouting yang
                    sesuai dan memilih palet warna yang memadai untuk
                    menciptakan pengalaman desain yang menarik dan kohesif bagi
                    pengguna. Dengan menggabungkan elemen-elemen ini, moodboard
                    menjadi panduan yang memberikan arah dan kesatuan dalam
                    setiap tahap pengembangan desain, memastikan hasil akhir
                    yang mencerminkan visi dan tujuan proyek secara efektif.
                  </p>
                </div>
                <div className="wrapInformation mt-4">
                  <img src={Board1} width={"100%"} alt="" />
                </div>
              </div>
            </Col>

            {/* Design System */}
            <Col xl={12}>
              <div className="wrapInformation borderPrim p-3 mt-4">
                <div className="titleInformation">
                  <h2>Design System</h2>
                  <p>
                    {" "}
                    Design system yang saya susun merupakan kerangka dasar yang
                    mencakup elemen-elemen kunci seperti font style, palet
                    warna, ikon, tombol, kartu, dan logo. Hal ini bertujuan
                    untuk mencapai konsistensi visual dalam aplikasi "Sell.id".
                    Dengan menggunakan panduan yang telah ditentukan, saya
                    memastikan bahwa elemen-elemen tersebut digunakan dengan
                    cara yang seragam dan menciptakan pengalaman pengguna yang
                    terstruktur, profesional, dan mudah diidentifikasi.
                  </p>
                </div>
                <div className="wrapInformation mt-4">
                  <img src={Board2} width={"100%"} alt="" />
                </div>
              </div>
            </Col>

            {/* PAIN POINts & ROOM FOR IMPROVMENT */}
            <Col xl={12}>
              <div className="wrapInformation borderPrim p-3 mt-4">
                <div className="titleInformation">
                  <h2>Pain Points & Room For Improvment</h2>
                  <p>
                    {" "}
                    Setelah melakukan Usability Testing, didapatkan beberapa
                    paint points yang diambil dari feedback responden yaitu
                    masalah fitur chat yang tiddak ditemukan, penambahan lokasi
                    pada saat mengisi detail information penjualan barang, dan
                    yang terakhir menambahkan kategori barang pada saat ingin
                    mengisi informasi penjualan barang.
                  </p>
                </div>
                <div className="wrapInformation mt-4">
                  <img src={Board3} width={"100%"} alt="" />
                </div>
              </div>
            </Col>

            {/* Redisgn */}
            <Col xl={12}>
              <div className="borderPrim mt-4 p-3">
                <div className="title">
                  <h2>Redesign</h2>
                  <p></p>
                </div>
                {/* Design 1 */}
                <div>
                  <div className="section">
                    <h2>1. Fitur Chat Tidak Ditemukan </h2>
                  </div>
                  <div className="designWrap">
                    <div className="gambar">
                      <img
                        src={before1}
                        className="borderPrim"
                        width={"100%"}
                        alt=""
                      />
                    </div>
                    <div className="gambar">
                      <img
                        className="borderPrim"
                        src={after1}
                        width={"100%"}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="wrapSeverity borderPrim mt-4 p-3">
                    <h2>
                      Severity : <span className="high">High</span>
                    </h2>
                    <p>
                      Responden tidak dapat menemukan session chat pada saat
                      menjelajahi aplikasi. Hal ini membuat pembeli tidak bisa
                      berkomunikasi kepada penjual terkait barang yang ingin
                      dibeli.
                    </p>
                  </div>
                </div>

                {/* Design 2 */}
                <div>
                  <div className="section mt-5">
                    <h2>2. Detail Information </h2>
                  </div>
                  <div className="designWrap">
                    <div className="gambar">
                      <img
                        src={before2}
                        className="borderPrim"
                        width={"100%"}
                        alt=""
                      />
                    </div>
                    <div className="gambar">
                      <img
                        className="borderPrim"
                        src={after2}
                        width={"100%"}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="wrapSeverity borderPrim mt-4 p-3">
                    <h2>
                      Severity : <span className="medium">Medium</span>
                    </h2>
                    <p>
                      Responden mengalami kesulitan pada saat mengisi detail
                      information terkait kategori barang yang akan diposting.
                      User berharap pada detail information berisi category
                      barang yang nantinya pada saat ingin memposting barang,
                      user bisa memilih terkait barang yang diposting. Apakah
                      itu barang elektronik, pakaian, lukisan, dll.
                    </p>
                  </div>
                </div>

                {/* Design 3 */}
                <div>
                  <div className="section mt-5">
                    <h2>3. Location </h2>
                  </div>
                  <div className="designWrap">
                    <div className="gambar">
                      <img
                        src={before2}
                        className="borderPrim"
                        width={"100%"}
                        alt=""
                      />
                    </div>
                    <div className="gambar">
                      <img
                        className="borderPrim"
                        src={after3}
                        width={"100%"}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="wrapSeverity borderPrim mt-4 p-3">
                    <h2>
                      Severity : <span className="high">High</span>
                    </h2>
                    <p>
                      Responden tidak dapat menambahkan lokasi pada barang yang
                      ingin di posting. Hal ini membuat beberapa user tidak
                      mengetahui lokasi barang yang ingin dibeli. Kelebihan
                      dengan adanya lokasi pada barang, user yang mungkin ingin
                      membeli barang dan kebetulan barang tersebut dekat dengan
                      daerah si pembeli, pembeli bisa langsung ketempat si
                      penjual untuk mengcek barang tersebut. Dan juga bisa
                      menghemat ongkos pengiriman dari pembeli.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </div>
          {show === "show" && (
            <div className="mt-4 text-center btnSesudah">
              <button onClick={showHandle} className="kartun3">
                Lihat Lebih Sedikit
              </button>
            </div>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Project;
