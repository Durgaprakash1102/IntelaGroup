import { Link } from "react-router-dom";

import {
  FaCode,
  FaLaptopCode,
  FaCloud,
  FaCogs,
  FaTools,
  FaUsers,
  FaArrowRight,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaBullseye,
  FaPuzzlePiece,
  FaShieldAlt,
  FaHandshake,
  FaSyncAlt,
  FaDatabase,
  FaGitAlt,
  FaChartLine,
  FaHospital,
  FaIndustry,
  FaLeaf,
  FaServer,
  FaBriefcase,
  FaLightbulb,
  FaSearch,
  FaDraftingCompass,
  FaVial,
  FaRocket,
} from "react-icons/fa";

import "../css/Home.css";

const services = [
  {
    icon: <FaCode />,
    title: "Custom Software Development",
    description:
      "Build scalable business applications, internal systems, portals, and tailored software designed around your workflows.",
    link: "/services",
  },
  {
    icon: <FaLaptopCode />,
    title: "Web & Application Development",
    description:
      "Create responsive websites, customer portals, enterprise applications, and intuitive digital experiences.",
    link: "/services",
  },
  {
    icon: <FaCloud />,
    title: "Cloud & DevOps Solutions",
    description:
      "Improve software delivery with CI/CD automation, deployment workflows, cloud infrastructure, and monitoring.",
    link: "/services",
  },
  {
    icon: <FaCogs />,
    title: "IT Consulting & Digital Transformation",
    description:
      "Modernize systems, improve business processes, and identify technology solutions aligned with business goals.",
    link: "/services",
  },
  {
    icon: <FaTools />,
    title: "Application Maintenance & Support",
    description:
      "Maintain dependable applications through troubleshooting, enhancements, performance improvements, and support.",
    link: "/services",
  },
  {
    icon: <FaUsers />,
    title: "IT Staffing & Talent Solutions",
    description:
      "Connect businesses with technology professionals for contract, contract-to-hire, and direct-hire requirements.",
    link: "/services",
  },
];

const capabilities = [
  {
    icon: <FaCode />,
    title: "Custom Software",
    description: "Purpose-built business applications",
  },
  {
    icon: <FaCloud />,
    title: "Cloud & DevOps",
    description: "Modern delivery and infrastructure",
  },
  {
    icon: <FaCogs />,
    title: "Workflow Automation",
    description: "Streamlined business processes",
  },
  {
    icon: <FaUsers />,
    title: "IT Talent Solutions",
    description: "Technology professionals for your team",
  },
];

const processSteps = [
  {
    number: "01",
    icon: <FaSearch />,
    title: "Discover & Plan",
    description:
      "Understand your business requirements, users, challenges, and desired outcomes.",
  },
  {
    number: "02",
    icon: <FaDraftingCompass />,
    title: "Design the Solution",
    description:
      "Define the architecture, user experience, integrations, and delivery roadmap.",
  },
  {
    number: "03",
    icon: <FaLaptopCode />,
    title: "Develop & Integrate",
    description:
      "Build features, connect systems, and implement maintainable software.",
  },
  {
    number: "04",
    icon: <FaVial />,
    title: "Test & Validate",
    description:
      "Validate functionality, performance, and user acceptance against requirements.",
  },
  {
    number: "05",
    icon: <FaRocket />,
    title: "Deploy & Improve",
    description:
      "Release the solution, monitor performance, and deliver ongoing improvements.",
  },
];

const technologies = [
  {
    icon: <FaLaptopCode />,
    title: "Frontend Development",
    description: "React, Angular, HTML, CSS, and JavaScript",
  },
  {
    icon: <FaCode />,
    title: "Backend Development",
    description: "Java, Spring, Python, Django, and REST APIs",
  },
  {
    icon: <FaDatabase />,
    title: "Data & Integration",
    description: "SQL databases, API integration, and connected systems",
  },
  {
    icon: <FaGitAlt />,
    title: "Cloud & Delivery",
    description: "Git, CI/CD pipelines, Docker, and deployment automation",
  },
];

const industries = [
  {
    icon: <FaChartLine />,
    title: "Banking & Financial Services",
    description:
      "Business applications, workflow improvements, and technology talent.",
    image: "", // placeholder – add your image path
    alt: "Banking & Financial Services",
  },
  {
    icon: <FaHospital />,
    title: "Healthcare & Life Sciences",
    description: "Operational software, data workflows, and IT support.",
    image: "", // placeholder – add your image path
    alt: "Healthcare & Life Sciences",
  },
  {
    icon: <FaIndustry />,
    title: "Manufacturing & Automotive",
    description:
      "Process digitization, system integration, and operational applications.",
    image: "", // placeholder – add your image path
    alt: "Manufacturing & Automotive",
  },
  {
    icon: <FaLeaf />,
    title: "Energy & Utilities",
    description: "Digital workflows, reporting solutions, and technology services.",
    image: "", // placeholder – add your image path
    alt: "Energy & Utilities",
  },
  {
    icon: <FaServer />,
    title: "Information Technology",
    description: "Software engineering, IT consulting, and specialist talent.",
    image: "", // placeholder – add your image path
    alt: "Information Technology",
  },
  {
    icon: <FaBriefcase />,
    title: "Professional Services",
    description:
      "Business applications, automation opportunities, and workforce solutions.",
    image: "", // placeholder – add your image path
    alt: "Professional Services",
  },
];

const benefits = [
  {
    icon: <FaBullseye />,
    title: "Business-Driven Engineering",
    description:
      "We start with your business goals and focus on solutions that address real challenges.",
  },
  {
    icon: <FaPuzzlePiece />,
    title: "Solutions Tailored to Your Needs",
    description:
      "We shape the scope, architecture, and implementation around your requirements.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Quality and Maintainability",
    description:
      "We emphasize clear requirements, testing, documentation, and maintainable software practices.",
  },
  {
    icon: <FaUsers />,
    title: "Technology and Talent Together",
    description:
      "Combine project delivery with access to technology professionals when your business needs additional expertise.",
  },
  {
    icon: <FaHandshake />,
    title: "Long-Term Partnership",
    description:
      "Support continuous improvement as applications, teams, and business needs evolve.",
  },
];

const projectHighlights = [
  {
    icon: <FaLaptopCode />,
    title: "Business Application Development",
    description:
      "Custom portals and applications designed to streamline workflows, organize information, and improve user experience.",
    category: "APPLICATION ENGINEERING",
  },
  {
    icon: <FaGitAlt />,
    title: "Development & Deployment Automation",
    description:
      "Repeatable build, test, and deployment workflows that help improve software delivery.",
    category: "CLOUD & DEVOPS",
  },
  {
    icon: <FaCogs />,
    title: "Process Digitization & Integration",
    description:
      "Connect business systems and improve repetitive processes through integrations and workflow automation.",
    category: "DIGITAL TRANSFORMATION",
  },
];

const engagementModels = [
  {
    icon: <FaLaptopCode />,
    title: "Project-Based Development",
    description:
      "Define project scope, milestones, deliverables, and an implementation plan.",
  },
  {
    icon: <FaUsers />,
    title: "Dedicated Development Teams",
    description:
      "Add engineering capacity for ongoing product development and technical initiatives.",
  },
  {
    icon: <FaTools />,
    title: "Managed Support & Maintenance",
    description:
      "Arrange ongoing application support and maintenance based on agreed service needs.",
  },
  {
    icon: <FaBriefcase />,
    title: "IT Staffing & Recruitment",
    description:
      "Source technology professionals for contract, contract-to-hire, and direct-hire requirements.",
  },
];

const commitments = [
  {
    icon: <FaHandshake />,
    title: "Clear Communication",
    description:
      "Keep stakeholders aligned through transparent communication and shared expectations.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Quality-Driven Delivery",
    description:
      "Focus on maintainable solutions, thoughtful implementation, and appropriate testing.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Continuous Improvement",
    description:
      "Adapt solutions as technology, business needs, and priorities evolve.",
  },
];

function SectionHeading({ eyebrow, title, highlight, description }) {
  return (
    <div className="home-section-heading">
      <span className="home-eyebrow">{eyebrow}</span>
      <h2>
        {title} {highlight && <span>{highlight}</span>}
      </h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Home() {
  return (
    <main className="intela-home">
      {/* HERO – banner background only */}
      <section className="home-hero" id="home">
        <div className="home-hero-bg" />
        <div className="home-hero-overlay" />
        <div className="home-container home-hero-inner">
          <div className="home-hero-content">
            <span className="home-eyebrow home-eyebrow-light">
              PEOPLE <i /> TECHNOLOGY <i /> PROGRESS
            </span>

            <h1>
              Technology Solutions
              <span> for a Stronger Tomorrow</span>
            </h1>

            <p>
              Intela Group LLC helps businesses turn ideas into reliable
              digital solutions through custom software development,
              application modernization, cloud technologies, intelligent
              automation, and expert IT services — backed by{" "}
              <strong>10+ years of experience</strong>.
            </p>

            <div className="home-hero-actions">
              <Link to="/contact" className="home-btn home-btn-primary">
                Discuss Your Needs <FaArrowRight />
              </Link>
              <Link to="/services" className="home-btn home-btn-outline-light">
                Explore Services
              </Link>
            </div>

            <div className="home-hero-trust">
              <div className="home-hero-trust-item">
                <FaShieldAlt />
                <span>Trusted Partnerships</span>
              </div>
              <div className="home-hero-trust-item">
                <FaCheckCircle />
                <span>Quality Delivery</span>
              </div>
              <div className="home-hero-trust-item">
                <FaBullseye />
                <span>Business Focused</span>
              </div>
              <div className="home-hero-trust-item">
                <FaBriefcase />
                <span>10+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES BAR */}
      <section className="home-capabilities">
        <div className="home-container home-capabilities-grid">
          {capabilities.map((item) => (
            <div className="home-capability" key={item.title}>
              <span className="home-capability-icon">{item.icon}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="home-section home-services" id="services">
        <div className="home-container">
          <SectionHeading
            eyebrow="WHAT WE DO"
            title="Technology Services That"
            highlight="Move Your Business Forward"
            description="We combine software engineering expertise, modern technology practices, and business-focused IT services to help organizations build better products, improve operations, and adapt to changing needs."
          />

          <div className="home-services-grid">
            {services.map((service, index) => (
              <article className="home-service-card" key={service.title}>
                <div className="home-service-card-inner">
                  <div className="home-service-card-top">
                    <span
                      className={`home-service-icon home-service-icon-${index % 2}`}
                    >
                      {service.icon}
                    </span>
                    <span className="home-card-arrow">
                      <FaExternalLinkAlt />
                    </span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <Link to={service.link} className="home-text-link">
                    Learn More <FaArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="home-centered-action">
            <Link to="/services" className="home-btn home-btn-primary">
              View All Services <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="home-section home-process" id="process">
        <div className="home-container">
          <SectionHeading
            eyebrow="HOW WE WORK"
            title="From Business Challenge"
            highlight="to Working Software"
            description="Our delivery approach brings business goals, engineering, and quality together at every stage of a project."
          />

          <div className="home-process-grid">
            {processSteps.map((step) => (
              <article className="home-process-card" key={step.number}>
                <div className="home-process-card-inner">
                  <div className="home-process-number">{step.number}</div>
                  <span className="home-process-icon">{step.icon}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="home-section home-technology" id="technology">
        <div className="home-container home-technology-layout">
          <div className="home-technology-intro">
            <span className="home-eyebrow">OUR TECHNOLOGY EXPERTISE</span>
            <h2>
              The Right Tools for the
              <span> Right Business Need</span>
            </h2>
            <p>
              We select technologies based on project requirements,
              integration needs, maintainability, and long-term business goals.
            </p>
            <Link to="/services" className="home-btn home-btn-primary">
              Explore Our Capabilities <FaArrowRight />
            </Link>
          </div>

          <div className="home-technology-grid">
            {technologies.map((technology) => (
              <article className="home-technology-card" key={technology.title}>
                <div className="home-technology-card-inner">
                  <span className="home-technology-icon">
                    {technology.icon}
                  </span>
                  <h3>{technology.title}</h3>
                  <p>{technology.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="home-section home-industries" id="industries">
        <div className="home-container">
          <SectionHeading
            eyebrow="INDUSTRY-FOCUSED SOLUTIONS"
            title="Technology Built Around"
            highlight="Your Industry"
            description="We align technology and talent solutions with the distinct workflows, operational requirements, and business goals of different industries."
          />

          <div className="home-industries-grid">
            {industries.map((industry) => (
              <article className="home-industry-card" key={industry.title}>
                {industry.image ? (
                  <img
                    src={industry.image}
                    alt={industry.alt}
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="home-industry-placeholder"
                    aria-hidden="true"
                  />
                )}
                <div className="home-industry-overlay" />
                <div className="home-industry-content">
                  <span className="home-industry-icon">{industry.icon}</span>
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                  <Link
                    to="/industries"
                    aria-label={`Explore ${industry.title}`}
                  >
                    <FaArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="home-centered-action">
            <Link to="/industries" className="home-btn home-btn-outline">
              Explore Industries <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY INTELA */}
      <section className="home-section home-why" id="why-intela">
        <div className="home-container home-why-layout">
          <div className="home-why-visual">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85"
              alt="Modern professional workspace for technology collaboration"
              loading="lazy"
            />
            <div className="home-why-image-label">
              <FaLightbulb />
              <span>Business-first technology</span>
            </div>
          </div>

          <div className="home-why-content">
            <SectionHeading
              eyebrow="WHY INTELA GROUP"
              title="A Technology Partner"
              highlight="Focused on Your Success"
              description="We bring a business-first mindset to technology delivery, helping organizations make informed decisions and build solutions that serve real operational needs."
            />

            <div className="home-benefits-list">
              {benefits.map((benefit) => (
                <div className="home-benefit" key={benefit.title}>
                  <span className="home-benefit-icon">{benefit.icon}</span>
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT HIGHLIGHTS */}
      <section className="home-section home-projects" id="projects">
        <div className="home-container">
          <SectionHeading
            eyebrow="POTENTIAL SOLUTIONS"
            title="Practical Solutions."
            highlight="Real Business Challenges."
            description="Explore the types of challenges that software engineering, integration, and automation can help address."
          />

          <div className="home-project-grid">
            {projectHighlights.map((project, index) => (
              <article className="home-project-card" key={project.title}>
                <div
                  className={`home-project-visual home-project-visual-${index + 1}`}
                >
                  <span>{project.icon}</span>
                  <div className="home-project-visual-lines">
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
                <div className="home-project-body">
                  <span className="home-project-category">
                    {project.category}
                  </span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link to="/contact" className="home-text-link">
                    Discuss a Similar Project <FaArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="home-project-disclaimer">
            These are example solution areas, not claims of completed client
            projects.
          </p>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="home-section home-engagement" id="engagement">
        <div className="home-container">
          <SectionHeading
            eyebrow="FLEXIBLE ENGAGEMENT"
            title="A Delivery Model That"
            highlight="Fits Your Business"
            description="Choose an engagement approach aligned with your project scope, team requirements, and ongoing support needs."
          />

          <div className="home-engagement-grid">
            {engagementModels.map((model) => (
              <article className="home-engagement-card" key={model.title}>
                <div className="home-engagement-card-inner">
                  <span className="home-engagement-icon">{model.icon}</span>
                  <h3>{model.title}</h3>
                  <p>{model.description}</p>
                  <Link to="/contact" className="home-text-link">
                    Let&apos;s Discuss <FaArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="home-section home-commitment" id="commitment">
        <div className="home-container">
          <SectionHeading
            eyebrow="OUR COMMITMENT"
            title="Building Partnerships"
            highlight="That Last"
            description="Successful technology delivery starts with clear communication, shared goals, thoughtful engineering, and continuous improvement."
          />

          <div className="home-commitment-grid">
            {commitments.map((item) => (
              <article className="home-commitment-card" key={item.title}>
                <div className="home-commitment-card-inner">
                  <span className="home-commitment-icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="home-final-cta">
        <div className="home-container home-final-cta-inner">
          <div className="home-final-cta-content">
            <span className="home-eyebrow home-eyebrow-light">
              LET&apos;S BUILD SOMETHING BETTER
            </span>
            <h2>
              Have a Software Project
              <span> in Mind?</span>
            </h2>
            <p>
              Tell us about your business challenge, product idea, or
              technology requirements. Let&apos;s explore a solution that fits your
              goals.
            </p>

            <div className="home-hero-actions">
              <Link to="/contact" className="home-btn home-btn-primary">
                Discuss Your Project <FaArrowRight />
              </Link>
              <Link to="/careers" className="home-btn home-btn-light-outline">
                Explore Careers
              </Link>
            </div>
          </div>

          <div className="home-final-cta-visual">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85"
              alt="Technology team collaborating on a project"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;