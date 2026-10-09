import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../css/Contact.css";
import contactBanner from "../images/contact-banner.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // ==========================================
  // EMAILJS CONFIGURATION
  // ==========================================

  const EMAILJS_SERVICE_ID = "s";
  const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
  const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

  // ==========================================
  // HANDLE INPUT CHANGE
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==========================================
  // SEND EMAIL
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (
      EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" ||
      EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
      EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY"
    ) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      console.log("Email sent successfully:", response.status);

      setSubmitStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      console.error("Status:", error?.status);
      console.error("Details:", error?.text);

      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* HERO BANNER */}

      <section className="contact-hero">
        <div className="contact-hero-bg">
          <img
            src={contactBanner}
            alt="Contact Intela Group LLC"
            className="contact-hero-img"
          />

          <div className="contact-hero-overlay"></div>
        </div>

        <div className="contact-hero-container">
          <div className="contact-hero-content">
            <div className="contact-hero-tag">
              <i className="fa-solid fa-envelope"></i>
              <span>Contact Us</span>
            </div>

            <h1>
              Let's Build What's Next.{" "}
              <span>Let's Connect.</span>
            </h1>

            <p>
              Whether you're looking for technology solutions, IT consulting,
              staffing services, or a business partnership, Intela Group LLC
              is ready to hear from you. Tell us about your goals, project
              requirements, and how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}

      <section className="contact-section-new">
        <div className="contact-section-new-container">
          {/* LEFT SIDE */}

          <div className="contact-left-new">
            {/* MAP */}

            <div className="contact-map-new">
              <div className="contact-map-new-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.798449523124!2d-95.4368429!3d29.5222335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640eda74f34e719%3A0xec06c4c0e48add5c!2s4322%20Annandale%20Ln%2C%20Arcola%2C%20TX%2077583%2C%20USA!5e0!3m2!1sen!2sin!4v1787803722583!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />

                <div className="contact-map-new-overlay">
                  <i className="fa-solid fa-location-dot"></i>
                  <span>Find Us Here</span>
                </div>
              </div>
            </div>

            {/* CONTACT DETAILS */}

            <div className="contact-details-new">
              <div className="contact-details-new-header">
                <span className="contact-details-new-tag">
                  ✦ Get in Touch
                </span>

                <h2>
                  Let's Start a <span>Conversation</span>
                </h2>
              </div>

              <div className="contact-details-new-grid">
                {/* EMAIL */}

                <div className="contact-details-new-item">
                  <div className="contact-details-new-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>

                  <div>
                    <span className="contact-details-new-label">
                      Email
                    </span>

                    {/* Replace with your verified Intela email address */}
                    <a href="mailto:YOUR_CONTACT_EMAIL">
                      YOUR_CONTACT_EMAIL
                    </a>
                  </div>
                </div>

                {/* PHONE */}

                <div className="contact-details-new-item">
                  <div className="contact-details-new-icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>

                  <div>
                    <span className="contact-details-new-label">
                      Phone
                    </span>

                    {/* Replace with your verified Intela phone number */}
                    <a href="tel:YOUR_CONTACT_PHONE">
                      YOUR_CONTACT_PHONE
                    </a>
                  </div>
                </div>

                {/* OFFICE */}

                <div className="contact-details-new-item">
                  <div className="contact-details-new-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>

                  <div>
                    <span className="contact-details-new-label">
                      Office
                    </span>

                    {/* Replace with your verified office address */}
                    <address>
                      Intela Group LLC
                      <br />
                      YOUR_OFFICE_ADDRESS
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - CONTACT FORM */}

          <div className="contact-form-new">
            {/* FORM HEADER */}

            <div className="contact-form-new-header">
              <span className="contact-form-new-tag">
                ✦ Send a Message
              </span>

              <h3>
                We'd love to <span>hear from you</span>
              </h3>

              <p>
                Fill in the details and we'll get back to you as soon as
                possible.
              </p>
            </div>

            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="contact-form-new-form"
            >
              {/* NAME + EMAIL */}

              <div className="contact-form-new-row">
                {/* NAME */}

                <div className="form-group-new">
                  <label htmlFor="name">
                    <i className="fa-regular fa-user"></i>
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    autoComplete="name"
                    maxLength={120}
                    required
                  />
                </div>

                {/* EMAIL */}

                <div className="form-group-new">
                  <label htmlFor="email">
                    <i className="fa-regular fa-envelope"></i>
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    autoComplete="email"
                    maxLength={254}
                    required
                  />
                </div>
              </div>

              {/* SUBJECT */}

              <div className="form-group-new">
                <label htmlFor="subject">
                  <i className="fa-regular fa-pen-to-square"></i>
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can Intela Group help you?"
                  maxLength={200}
                  required
                />
              </div>

              {/* MESSAGE */}

              <div className="form-group-new">
                <label htmlFor="message">
                  <i className="fa-regular fa-message"></i>
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, business requirements, or questions..."
                  rows={5}
                  maxLength={5000}
                  required
                />
              </div>

              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                className="contact-submit-btn-new"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <i className="fa-solid fa-paper-plane"></i>
                  </>
                )}
              </button>

              {/* SUCCESS MESSAGE */}

              {submitStatus === "success" && (
                <div className="form-success-new" role="status">
                  <i className="fa-solid fa-circle-check"></i>
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {/* ERROR MESSAGE */}

              {submitStatus === "error" && (
                <div className="form-error-new" role="alert">
                  <i className="fa-solid fa-circle-exclamation"></i>
                  Your message could not be sent. Please check your EmailJS
                  configuration and try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;