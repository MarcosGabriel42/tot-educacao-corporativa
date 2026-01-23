import React, { useRef } from "react";
import "../styles/clientsCarousel.css";

import arcelorMittal from "../assets/logos/arcelormittal.png";
import bradesco from "../assets/logos/BancoBradesco.png";
import bancoPan from "../assets/logos/Bancopanlogo.png";
import bemol from "../assets/logos/Bemol.png";
import condor from "../assets/logos/condor.png";
import cotrijal from "../assets/logos/cotrijal.png";
import cresol from "../assets/logos/cresol.png";
import ailos from "../assets/logos/Ailos.png";
import sicredi from "../assets/logos/sicredi.png";

const logos = [
  arcelorMittal,
  bradesco,
  bancoPan,
  bemol,
  condor,
  cotrijal,
  cresol,
  ailos,
  sicredi,
];

// duplica pra manter continuidade
const duplicatedLogos = [...logos, ...logos];

export default function ClientsCarousel() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="clients">
      <h2>Nossos clientes</h2>
      <p>As empresas que geramos as experiências desejadas!</p>

      <div className="carousel-container">
        <button className="arrow left" onClick={scrollLeft}>
          ‹
        </button>

        <div className="carousel-wrapper" ref={carouselRef}>
          <div className="carousel-track">
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="logo-card">
                <img src={logo} alt="Logo cliente" />
              </div>
            ))}
          </div>
        </div>

        <button className="arrow right" onClick={scrollRight}>
          ›
        </button>
      </div>
    </section>
  );
}
