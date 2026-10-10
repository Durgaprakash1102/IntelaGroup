import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBullseye,
  FaEye,
  FaHandshake,
  FaLightbulb,
  FaShieldAlt,
  FaUsers,
  FaAward,
  FaQuoteLeft,
  FaCheck,
  FaStar,
  FaHeart,
  FaCompass,
} from "react-icons/fa";
import "../css/About.css";

const values = [
  {
    icon: <FaShieldAlt />,
    number: "01",
    title: "Integrity",
    description:
      "We value honest communication, professional conduct, and relationships built on trust.",
  },
  {
    icon: <FaLightbulb />,
    number: "02",
    title: "Innovation",
    description:
      "We encourage new ideas and practical thinking that help organizations adapt and move forward.",
  },
  {
    icon: <FaHandshake />,
    number: "03",
    title: "Collaboration",
    description:
      "We believe better outcomes begin when people share knowledge, align expectations, and work together.",
  },
  {
    icon: <FaAward />,
    number: "04",
    title: "Excellence",
    description:
      "We aim for dependable service, attention to detail, and continuous improvement in our work.",
  },
];

const principles = [
  {
    icon: <FaUsers />,
    title: "People come first",
    description:
      "We value the people behind every business relationship and the perspectives they bring.",
  },
  {
    icon: <FaCompass />,
    title: "Understand before acting",
    description:
      "We believe that understanding business goals and expectations is essential to meaningful collaboration.",
  },
  {
    icon: <FaStar />,
    title: "Consistency builds trust",
    description:
      "Clear communication, reliability, and professional conduct help create lasting relationships.",
  },
];

const teamMembers = [
  {
    name: "Leadership Name",
    role: "Leadership / Management",
    image: "/images/team/leader.jpg",
  },
  {
    name: "Team Member Name",
    role: "Team Designation",
    image: "/images/team/member-01.jpg",
  },
  {
    name: "Team Member Name",
    role: "Team Designation",
    image: "/images/team/member-02.jpg",
  },
];

const testimonials = [
  {
    quote:
      "Intela Group helped us quickly scale our development team with highly skilled professionals who integrated seamlessly with our internal team. Their responsiveness and quality of candidates were excellent.",
    name: "IT Director",
    role: "Midwest Healthcare Organization",
  },
  {
    quote:
      "We partnered with Intela Group for a critical application modernization project. Their team was proactive, knowledgeable, and focused on delivering real business value.",
    name: "CTO",
    role: "Financial Services Company",
  },
  {
    quote:
      "The Intela Group team understood our requirements and provided tailored staffing support. They consistently deliver professionals who are a great cultural and technical fit.",
    name: "VP of Technology",
    role: "Manufacturing Company",
  },
];

const partnerLogos = [
  "amazon",
  "ENERGY TRANSFER PARTNERS",
  "FedEx",
  "Fredil",
  "McKESSON",
  "MetLife",
];

function Heading({ eyebrow, title, highlight, description, centered = false }) {
  return (
    <div className={`about-heading ${centered ? "is-centered" : ""}`}>
      <span className="about-eyebrow">{eyebrow}</span>
      <h2>
        {title}
        {highlight && <span> {highlight}</span>}
      </h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function ImagePlaceholder({ label, icon = <FaUsers /> }) {
  return (
    <div className="about-image-placeholder">
      {icon}
      <span>{label}</span>
    </div>
  );
}

function About() {
  return (
    <main className="about-page">
      {/* 1. Hero – same style as Home (banner only) */}
      <section className="about-hero">
        <div className="about-hero-bg" />
        <div className="about-hero-overlay" />
        <div className="about-container about-hero-inner">
          <div className="about-hero-copy">
            <span className="about-eyebrow about-eyebrow-light">
              PEOPLE · PURPOSE · PROGRESS
            </span>

            <h1>
              People. Purpose.
              <span> Possibilities.</span>
            </h1>

            <p>
              We are Intela Group LLC — a team of IT professionals focused on
              service excellence, collaboration, and helping businesses move
              forward with confidence. Backed by{" "}
              <strong>10+ years of experience</strong>.
            </p>

            <div className="about-hero-buttons">
              <a href="#our-story" className="about-btn about-btn-orange">
                Discover Our Story <FaArrowRight />
              </a>
              <Link to="/contact" className="about-btn about-btn-outline-light">
                Let&apos;s Connect
              </Link>
            </div>

            <div className="about-hero-trust">
              <div className="about-hero-trust-item">
                <FaShieldAlt />
                <span>Trusted Partnerships</span>
              </div>
              <div className="about-hero-trust-item">
                <FaCheck />
                <span>Quality Delivery</span>
              </div>
              <div className="about-hero-trust-item">
                <FaHandshake />
                <span>Collaboration First</span>
              </div>
              <div className="about-hero-trust-item">
                <FaAward />
                <span>10+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Brand introduction */}
      <section className="about-intro section-space">
        <div className="about-container about-intro-grid">
          <div className="about-intro-label">
            <span className="about-eyebrow">WHO WE ARE</span>
            <h2>
              A team that believes in the power of{" "}
              <span>people and technology.</span>
            </h2>
          </div>

          <div className="about-intro-text">
            <p>
              Intela Group LLC brings together IT professionals with a shared
              focus on service delivery, business collaboration, and continuous
              improvement.
            </p>
            <p>
              We recognize that every organization has its own goals,
              challenges, and expectations. That is why we value listening,
              understanding requirements, and building professional
              relationships around shared objectives.
            </p>
            <p>
              Our identity is grounded in the belief that technology, talented
              people, and a collaborative mindset can help organizations create
              new possibilities.
            </p>
            <a href="#our-values" className="about-text-link">
              Explore what guides us <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* 3. Company story */}
      <section className="about-story section-space" id="our-story">
        <div className="about-container about-story-grid">
          <div className="about-story-visual">
            <div className="about-story-image">
              <img
                src="/images/about/our-story.jpg"
                alt="Intela Group workplace"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <ImagePlaceholder label="Company Story / Workplace Image" />
            </div>
            <div className="about-story-caption">
              <span>INTELA GROUP</span>
              <strong>Growing through collaboration</strong>
            </div>
          </div>

          <div className="about-story-copy">
            <span className="about-eyebrow">OUR STORY</span>
            <h2>
              Built around a simple idea: progress happens when people work
              together.
            </h2>
            <p>
              Businesses operate in a changing environment where technology,
              people, and business priorities must work together. We believe
              meaningful progress starts with understanding those priorities.
            </p>
            <p>
              Intela&apos;s approach is centered on professional relationships,
              thoughtful collaboration, and a commitment to service excellence.
              We aim to create an environment where communication is clear,
              expectations are understood, and people can work toward common
              goals.
            </p>
            <div className="about-story-highlight">
              <span className="about-highlight-bar" />
              <p>
                We see every relationship as an opportunity to learn,
                collaborate, and create meaningful value.
              </p>
            </div>
            <p className="about-editor-note">
              Add the verified company founding story and milestones here when
              those details are available.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Mission and vision */}
      <section className="about-mission section-space">
        <div className="about-container">
          <Heading
            eyebrow="OUR PURPOSE"
            title="What drives us"
            highlight="forward"
            description="Our purpose shapes the way we approach relationships, professional responsibilities, and future opportunities."
            centered
          />

          <div className="about-mission-grid">
            <article className="about-mission-card">
              <div className="about-mission-card-inner">
                <div className="about-mission-top">
                  <span className="about-mission-icon">
                    <FaBullseye />
                  </span>
                  <span className="about-mission-number">01</span>
                </div>
                <span className="about-card-eyebrow">OUR MISSION</span>
                <h3>Make collaboration meaningful.</h3>
                <p>
                  To support business objectives through professional
                  collaboration, service excellence, and a commitment to
                  understanding the needs of the organizations we work with.
                </p>
              </div>
            </article>

            <article className="about-mission-card about-mission-dark">
              <div className="about-mission-card-inner">
                <div className="about-mission-top">
                  <span className="about-mission-icon">
                    <FaEye />
                  </span>
                  <span className="about-mission-number">02</span>
                </div>
                <span className="about-card-eyebrow">OUR VISION</span>
                <h3>Build lasting possibilities.</h3>
                <p>
                  To continue growing as a collaborative organization that
                  values people, embraces progress, and builds lasting
                  professional relationships.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 5. Values */}
      <section className="about-values section-space" id="our-values">
        <div className="about-container">
          <Heading
            eyebrow="OUR CORE VALUES"
            title="The principles behind our"
            highlight="identity"
            description="Our values reflect the standards we strive to bring to our work, relationships, and everyday decisions."
            centered
          />

          <div className="about-values-grid">
            {values.map((value) => (
              <article className="about-value-card" key={value.number}>
                <div className="about-value-card-inner">
                  <div className="about-value-header">
                    <span className="about-value-icon">{value.icon}</span>
                    <span className="about-value-number">{value.number}</span>
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our philosophy – redesigned card grid */}
      <section className="about-philosophy section-space">
        <div className="about-container">
          <Heading
            eyebrow="OUR PHILOSOPHY"
            title="The way we work matters as much as the"
            highlight="work itself."
            description="Strong professional relationships grow through listening, consistency, shared understanding, and mutual respect."
            centered
          />

          <div className="about-principles-grid">
            {principles.map((item, index) => (
              <article className="about-principle-card" key={item.title}>
                <div className="about-principle-card-inner">
                  <div className="about-principle-top">
                    <span className="about-principle-icon">{item.icon}</span>
                    <span className="about-principle-num">0{index + 1}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="about-philosophy-cta">
            <Link to="/contact" className="about-btn about-btn-orange">
              Start a conversation <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Our people */}
      <section className="about-people section-space">
        <div className="about-container">
          <div className="about-people-heading">
            <Heading
              eyebrow="OUR PEOPLE"
              title="Meet the people behind"
              highlight="Intela"
              description="Showcase the individuals who help shape the organization, its culture, and its professional relationships."
            />
            <p className="about-people-side-note">
              People are at the center of every successful collaboration.
            </p>
          </div>

          <div className="about-marquee about-team-marquee">
            <div className="about-marquee-track">
              {[...teamMembers, ...teamMembers, ...teamMembers].map(
                (member, index) => (
                  <article
                    className="about-team-card"
                    key={`${member.role}-${index}`}
                  >
                    <div className="about-team-image">
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <ImagePlaceholder label="Team Photo Placeholder" />
                      <span className="about-team-index">
                        0{(index % teamMembers.length) + 1}
                      </span>
                    </div>
                    <div className="about-team-details">
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                      <span>Replace with verified team information</span>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
          <p className="about-placeholder-note">
            Add approved employee photographs, names, roles, and short
            biographies before publishing this section.
          </p>
        </div>
      </section>

      {/* 8. Partners – logo strip like ref */}
      <section className="about-partners section-space" id="our-clients">
        <div className="about-container">
          <div className="about-partners-header">
            <div>
              <span className="about-eyebrow">OUR PARTNERS</span>
              <h2>
                Trusted by <span>Leading Organizations</span>
              </h2>
            </div>
            <p>
              We are proud to work with respected organizations across
              industries.
            </p>
          </div>

          <div className="about-marquee about-partners-marquee">
            <div className="about-marquee-track">
              {[...partnerLogos, ...partnerLogos, ...partnerLogos].map(
                (name, i) => (
                  <div className="about-partner-logo" key={`${name}-${i}`}>
                    {name}
                  </div>
                )
              )}
            </div>
          </div>

          <p className="about-placeholder-note">
            Replace with approved partner logos. Verify relationships before
            publishing.
          </p>
        </div>
      </section>

      {/* 9. Testimonials – card grid like ref */}
      <section className="about-testimonials section-space">
        <div className="about-container">
          <Heading
            eyebrow="WHAT OUR CLIENTS SAY"
            title="Real Feedback,"
            highlight="Real Results"
            description="Here's what our clients have to say about working with Intela Group LLC."
            centered
          />

          <div className="about-marquee about-testimonial-marquee">
            <div className="about-marquee-track">
              {[...testimonials, ...testimonials, ...testimonials].map(
                (item, index) => (
                  <article
                    className="about-testimonial-card"
                    key={item.name + index}
                  >
                    <div className="about-testimonial-card-inner">
                      <FaQuoteLeft className="about-quote-icon" />
                      <p className="about-testimonial-quote">“{item.quote}”</p>
                      <div className="about-testimonial-person">
                        <span className="about-testimonial-avatar">
                          {item.name.charAt(0)}
                        </span>
                        <div>
                          <strong>{item.name}</strong>
                          <span>{item.role}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Culture and careers */}
      <section className="about-culture section-space">
        <div className="about-container about-culture-grid">
          <div className="about-culture-visual">
            <img
              src="/images/about/team-culture.jpg"
              alt="Intela Group team culture"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <ImagePlaceholder label="Team Culture Image" />
            <div className="about-culture-badge">
              <FaHeart />
              <span>People make the difference</span>
            </div>
          </div>

          <div className="about-culture-copy">
            <span className="about-eyebrow">LIFE AT INTELA</span>
            <h2>
              A culture shaped by people, learning, and{" "}
              <span>collaboration.</span>
            </h2>
            <p>
              We believe a positive professional environment encourages
              knowledge-sharing, respectful communication, and opportunities to
              learn from one another.
            </p>
            <p>
              Our people section is an opportunity to share the real
              experiences, stories, and achievements of the Intela team.
            </p>
            <Link to="/careers" className="about-btn about-btn-orange">
              Explore Careers <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. Closing CTA */}
      <section className="about-closing">
        <div className="about-container about-closing-inner">
          <div className="about-closing-copy">
            <span className="about-eyebrow about-eyebrow-light">
              LET&apos;S CONNECT
            </span>
            <h2>
              Good relationships begin with a{" "}
              <span>conversation.</span>
            </h2>
            <p>
              Discover more about Intela Group and start a conversation with our
              team.
            </p>
          </div>
          <Link to="/contact" className="about-btn about-btn-white">
            Contact Intela <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;