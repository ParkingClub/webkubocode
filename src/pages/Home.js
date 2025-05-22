"use client"

import { useState, useEffect } from "react"
import Lottie from "lottie-react"
import rubikAnimation from "../assets/rubik-cube.json"
import {
  Globe,
  Smartphone,
  Code,
  Lock,
  Users,
  Shield,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Menu,
  X,
} from "lucide-react"
import logo from "../assets/logo.png"

function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Manejar el scroll para cambiar el estilo del header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Cerrar el menú al hacer clic en un enlace
  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div className="page-container">
      {/* Header Fijo */}
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="logo-container">
          <img src={logo || "/placeholder.svg"} alt="KC Logo" className="logo-image" />
          <h1 className="header-title">Soluciones</h1>
        </div>

        {/* Botón de menú para móviles */}
        <button className="mobile-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú principal">
          {menuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
        </button>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li>
              <a href="#home" className="nav-link" onClick={closeMenu}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#services" className="nav-link" onClick={closeMenu}>
                Servicios
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={closeMenu}>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-overlay-gradient"></div>
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <h2 className="hero-title">Construye el Futuro con KuboCode</h2>
            <p className="hero-subtitle">Transformamos tus ideas en tecnología que impulsa tu éxito</p>
            <div className="hero-buttons">
              <a href="#services" className="hero-button primary">
                Explora Nuestros Servicios
              </a>
              <a href="#contact" className="hero-button secondary">
                Contáctanos
              </a>
            </div>
          </div>
          <div className="animation-container">
            <Lottie animationData={rubikAnimation} loop={true} className="rubik-lottie" />
          </div>
        </div>
        <div className="scroll-indicator">
          <a href="#services">
            <ChevronDown className="scroll-icon" />
          </a>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="services" className="services">
        <div className="section-header">
          <h3 className="section-title">Nuestros Servicios</h3>
          <p className="section-subtitle">Soluciones tecnológicas adaptadas a tus necesidades específicas</p>
        </div>
        <div className="services-grid">
          {/* Desarrollo Web */}
          <div className="service-card">
            <div className="service-icon-container">
              <Globe className="service-icon" />
            </div>
            <h4 className="service-card-title">Desarrollo Web</h4>
            <p className="service-card-text">
              Sitios web modernos, rápidos y optimizados para destacar tu presencia digital.
            </p>
            <a href="#contact" className="service-link">
              Más información <ArrowRight className="link-icon" />
            </a>
          </div>
          {/* Desarrollo Móvil */}
          <div className="service-card">
            <div className="service-icon-container">
              <Smartphone className="service-icon" />
            </div>
            <h4 className="service-card-title">Desarrollo Móvil</h4>
            <p className="service-card-text">
              Apps móviles personalizadas para iOS y Android que conectan con tus usuarios.
            </p>
            <a href="#contact" className="service-link">
              Más información <ArrowRight className="link-icon" />
            </a>
          </div>
          {/* Software a la Medida */}
          <div className="service-card">
            <div className="service-icon-container">
              <Code className="service-icon" />
            </div>
            <h4 className="service-card-title">Software a la Medida</h4>
            <p className="service-card-text">Soluciones únicas adaptadas a tus necesidades para impulsar tu negocio.</p>
            <a href="#contact" className="service-link">
              Más información <ArrowRight className="link-icon" />
            </a>
          </div>
          {/* Certificación Let's Encrypt */}
          <div className="service-card">
            <div className="service-icon-container">
              <Lock className="service-icon" />
            </div>
            <h4 className="service-card-title">Certificación Let's Encrypt</h4>
            <p className="service-card-text">
              Asegura tu sitio con certificados SSL gratuitos, confiables y fáciles de implementar.
            </p>
            <a href="#contact" className="service-link">
              Más información <ArrowRight className="link-icon" />
            </a>
          </div>
          {/* Asesorías Personalizadas */}
          <div className="service-card">
            <div className="service-icon-container">
              <Users className="service-icon" />
            </div>
            <h4 className="service-card-title">Asesorías Personalizadas</h4>
            <p className="service-card-text">Estrategias tecnológicas a medida con un equipo de expertos a tu lado.</p>
            <a href="#contact" className="service-link">
              Más información <ArrowRight className="link-icon" />
            </a>
          </div>
          {/* Ciberseguridad */}
          <div className="service-card">
            <div className="service-icon-container">
              <Shield className="service-icon" />
            </div>
            <h4 className="service-card-title">Ciberseguridad</h4>
            <p className="service-card-text">
              Protege tus datos y sistemas con soluciones avanzadas contra amenazas digitales.
            </p>
            <a href="#contact" className="service-link">
              Más información <ArrowRight className="link-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contact" className="contact">
        <div className="contact-container">
          <div className="contact-info">
            {/* Badge eliminado */}
            <h3 className="contact-title">Contáctanos</h3>
            <p className="contact-description">
              Estamos listos para ayudarte a transformar tus ideas en soluciones tecnológicas innovadoras.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <Mail className="contact-icon" />
                <span>kubocode@gmail.com</span>
              </div>
              <div className="contact-detail">
                <Phone className="contact-icon" />
                <span>+593 987671975</span>
              </div>
              <div className="contact-detail">
                <MapPin className="contact-icon" />
                <span>Ecuador</span>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Nombre" className="contact-input" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" className="contact-input" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Mensaje" className="contact-textarea" required></textarea>
            </div>
            <button type="submit" className="contact-button">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="logo-container footer-logo-container">
              <img src={logo || "/placeholder.svg"} alt="KC Logo" className="logo-image" />
              <h3 className="footer-title">Soluciones</h3>
            </div>
            <p className="footer-tagline">Soluciones tecnológicas innovadoras</p>
          </div>
          <div className="footer-links">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li>
                <a href="#home">Inicio</a>
              </li>
              <li>
                <a href="#services">Servicios</a>
              </li>
              <li>
                <a href="#contact">Contacto</a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contacto</h4>
            <p>kubocode@gmail.com</p>
            <p>Tel: +593 987671975</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 KC Soluciones. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
