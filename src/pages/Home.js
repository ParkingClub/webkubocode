import Lottie from 'lottie-react';
import logo from '../assets/logoR.png';
import rubikAnimation from '../assets/rubik-cube.json';
import { Globe, Smartphone, Code, Lock, Users, Shield } from 'lucide-react';

function Home() {
  return (
    <div className="page-container">
      {/* Header Fijo */}
      <header className="header">
        <div className="header-content">
          <img src={logo} alt="KuboCode Logo" className="logo" />
          <h1 className="header-title">KuboCode</h1>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#home" className="nav-link">Inicio</a></li>
            <li><a href="#services" className="nav-link">Servicios</a></li>
            <li><a href="#contact" className="nav-link">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-overlay">
          <h6 className="hero-title typewriter">Resuelve el Futuro con KuboCode</h6>
          <p className="hero-subtitle">Transformamos ideas en soluciones tecnológicas innovadoras</p>
          <button className="hero-button">Explora Nuestros Servicios</button>
        </div>
        <Lottie 
          animationData={rubikAnimation} 
          loop={true}
          className="rubik-lottie"
        />
      </section>

      {/* Servicios Section */}
      <section id="services" className="services">
        <h3 className="services-title">Nuestros Servicios</h3>
        <div className="services-grid">
          {/* Desarrollo Web */}
          <div className="service-card">
            <Globe className="service-icon" />
            <h4 className="service-card-title">Desarrollo Web</h4>
            <p className="service-card-text">Sitios web modernos, rápidos y optimizados para destacar tu presencia digital.</p>
          </div>
          {/* Desarrollo Móvil */}
          <div className="service-card">
            <Smartphone className="service-icon" />
            <h4 className="service-card-title">Desarrollo Móvil</h4>
            <p className="service-card-text">Apps móviles personalizadas para iOS y Android que conectan con tus usuarios.</p>
          </div>
          {/* Software a la Medida */}
          <div className="service-card">
            <Code className="service-icon" />
            <h4 className="service-card-title">Software a la Medida</h4>
            <p className="service-card-text">Soluciones únicas adaptadas a tus necesidades para impulsar tu negocio.</p>
          </div>
          {/* Certificación Let's Encrypt */}
          <div className="service-card">
            <Lock className="service-icon" />
            <h4 className="service-card-title">Certificación Let's Encrypt</h4>
            <p className="service-card-text">Asegura tu sitio con certificados SSL gratuitos, confiables y fáciles de implementar.</p>
          </div>
          {/* Asesorías Personalizadas */}
          <div className="service-card">
            <Users className="service-icon" />
            <h4 className="service-card-title">Asesorías Personalizadas</h4>
            <p className="service-card-text">Estrategias tecnológicas a medida con un equipo de expertos a tu lado.</p>
          </div>
          {/* Ciberseguridad */}
          <div className="service-card">
            <Shield className="service-icon" />
            <h4 className="service-card-title">Ciberseguridad</h4>
            <p className="service-card-text">Protege tus datos y sistemas con soluciones avanzadas contra amenazas digitales.</p>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contact" className="contact">
        <h3 className="contact-title">Contáctanos</h3>
        <form className="contact-form">
          <input type="text" placeholder="Nombre" className="contact-input" />
          <input type="email" placeholder="Email" className="contact-input" />
          <textarea placeholder="Mensaje" className="contact-textarea"></textarea>
          <button type="submit" className="contact-button">Enviar</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <img src={logo} alt="KuboCode Logo" className="footer-logo" />
          <p>© 2025 KuboCode. Todos los derechos reservados.</p>
        </div>
        <p className="footer-contact">Contáctanos: kubocode@gmail.com | Tel: +593 987671975</p>
      </footer>
    </div>
  );
}

export default Home;