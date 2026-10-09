import { Link } from "react-router-dom";
import "../css/Footer.css";
import intelaLogo from "../images/intela-group-logo.png";

function Footer() {
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
    { label: "Contracting", path: "/contracting" },
  ];

  const services = [
    "Professional Services",
    "Staffing Solutions",
    "Application Development",
    "Application Maintenance",
    "Financial Services",
    "Contracting",
    "Onsite Recruitment",
    "Payroll – HR Services",
  ];

  return (
    <footer className="ig-footer">
      {/* ================= MAIN SECTION ================= */}
      <div className="footer-main">
        <div className="footer-main-inner">

          {/* BRAND + QUOTE */}
          <div className="footer-brand">
            <Link
              to="/"
              className="footer-brand-logo"
              aria-label="Intela Group LLC home"
            >
              <img
                src={intelaLogo}
                alt="Intela Group LLC"
                width="175"
                height="65"
                loading="lazy"
              />
            </Link>

            <p className="footer-quote">
              “We are a fast-growing team of highly skilled,
              passionate IT professionals with excellence in
              service delivery, enabling faster innovation and
              higher productivity. Our services are dynamic,
              scalable, resilient and responsive. We take a highly
              collaborative approach to align our services with
              your business goals.”
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-list">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="footer-col">
            <h3 className="footer-col-title">Services</h3>
            <ul className="footer-list">
              {services.map((service) => (
                <li key={service}>
                  <Link to="/services">{service}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-col footer-contact">
            <h3 className="footer-col-title">Contact us</h3>

            <ul className="footer-contact-list">
              <li>
                <span className="footer-icon" aria-hidden="true">
                  <i className="fa-solid fa-location-dot" />
                </span>
                <span>
                  2770 Main St, #241 Frisco, TX
                  <br />
                  75033
                </span>
              </li>

              <li>
                <span className="footer-icon" aria-hidden="true">
                  <i className="fa-solid fa-phone" />
                </span>
                <a href="tel:+12143770443">+1 (214) 377-0443</a>
              </li>

              <li>
                <span className="footer-icon" aria-hidden="true">
                  <i className="fa-solid fa-envelope" />
                </span>
                <a href="mailto:info@intelagroupllc.com">
                  info@intelagroupllc.com
                </a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="footer-social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a
                href="https://plus.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Plus"
              >
                <i className="fa-brands fa-google-plus-g" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
<div className="footer-bottom">
  <div className="footer-bottom-inner">
    <span>
      © {new Date().getFullYear()} Intela Group LLC All rights reserved.
    </span>
  </div>
</div>
    </footer>
  );
}

export default Footer;