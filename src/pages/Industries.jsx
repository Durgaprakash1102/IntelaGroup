
import React, { useEffect, useMemo, useState } from "react";
import {
  FaIndustry,
  FaLandmark,
  FaBolt,
  FaHeartbeat,
  FaLaptopCode,
  FaNetworkWired,
  FaArrowRight,
  FaTimes,
  FaCheckCircle,
  FaSearch,
  FaCode,
  FaRobot,
  FaCloud,
  FaUsers,
} from "react-icons/fa";
import "../css/Industries.css";

const industries = [
  {
    id: "automotive",
    title: "Automotive",
    category: "Automotive",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=85",
    icon: <FaIndustry />,
    tagline: "Drive innovation across automotive operations.",
    description:
      "Automotive organizations work across vehicle manufacturing, supply chains, engineering, dealerships, and customer services. Digital systems can help connect operations and improve access to business information.",
    challenges: [
      "Connecting business and operational systems",
      "Managing supply-chain information",
      "Modernizing legacy applications",
      "Reducing manual reporting and administrative tasks",
    ],
    solutions: [
      "Custom software and application development",
      "Supply-chain workflow automation",
      "Data analytics and operational dashboards",
      "Cloud infrastructure and DevOps",
      "Enterprise API and system integration",
      "IT staffing and technical recruitment",
    ],
  },
  {
    id: "banking-financial",
    title: "Banking & Financial",
    category: "Banking & Financial",
    image:
      "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=1000&q=85",
    icon: <FaLandmark />,
    tagline: "Support efficient and connected financial operations.",
    description:
      "Banking and financial organizations rely on dependable applications, consistent reporting, secure information access, and streamlined business processes.",
    challenges: [
      "Integrating multiple business applications",
      "Streamlining document-heavy workflows",
      "Improving reporting and data visibility",
      "Maintaining application performance",
    ],
    solutions: [
      "Financial software and application development",
      "Workflow and document automation",
      "Business intelligence and reporting",
      "API development and integration",
      "Application maintenance and cloud support",
      "IT and finance staffing support",
    ],
  },
  {
    id: "energy",
    title: "Energy",
    category: "Energy",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=85",
    icon: <FaBolt />,
    tagline: "Connect energy operations through digital solutions.",
    description:
      "Energy organizations coordinate infrastructure, field operations, business applications, reporting, and service workflows. Connected technology can help make these processes easier to manage.",
    challenges: [
      "Managing information across operational systems",
      "Maintaining established applications",
      "Improving visibility into operational data",
      "Reducing repetitive administrative processes",
    ],
    solutions: [
      "Enterprise application development",
      "Operational dashboards and data analytics",
      "Workflow automation",
      "Cloud infrastructure and application support",
      "API and enterprise system integration",
      "IT staffing and project support",
    ],
  },
  {
    id: "government",
    title: "Government",
    category: "Government",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
    icon: <FaLandmark />,
    tagline: "Help modernize public-sector workflows and services.",
    description:
      "Government organizations manage public services, records, internal processes, and information systems. Appropriate digital solutions can help improve workflow consistency and information accessibility.",
    challenges: [
      "Modernizing legacy systems",
      "Managing document-intensive processes",
      "Improving information access and reporting",
      "Supporting accessibility and security requirements",
    ],
    solutions: [
      "Public-sector web applications and portals",
      "Digital workflow and approval automation",
      "Data reporting and dashboards",
      "System integration and application support",
      "Cloud migration planning",
      "Technology staffing and project support",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85",
    icon: <FaHeartbeat />,
    tagline: "Support connected healthcare technology and workflows.",
    description:
      "Healthcare providers and related organizations depend on reliable applications, coordinated administrative workflows, and appropriate management of sensitive information.",
    challenges: [
      "Connecting healthcare and administrative systems",
      "Reducing repetitive administrative tasks",
      "Maintaining application availability",
      "Protecting sensitive information",
    ],
    solutions: [
      "Healthcare application development",
      "Administrative workflow automation",
      "Reporting and business intelligence",
      "System integration and data exchange",
      "Application maintenance and support",
      "Healthcare technology staffing",
    ],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    category: "Manufacturing",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1000&q=85",
    icon: <FaIndustry />,
    tagline: "Improve visibility across manufacturing workflows.",
    description:
      "Manufacturing businesses coordinate production-related information, supply chains, employees, and enterprise systems. Digital solutions can help connect workflows and improve operational reporting.",
    challenges: [
      "Disconnected enterprise applications",
      "Manual data entry and approvals",
      "Limited visibility into operational metrics",
      "Supporting older software systems",
    ],
    solutions: [
      "Business software and application development",
      "Workflow automation and integrations",
      "Operational dashboards and analytics",
      "Cloud infrastructure support",
      "Application maintenance and modernization",
      "IT staffing and technical project support",
    ],
  },
  {
    id: "it",
    title: "IT",
    category: "IT",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85",
    icon: <FaLaptopCode />,
    tagline: "Build, maintain, and scale digital capabilities.",
    description:
      "IT organizations need adaptable software teams, dependable application environments, and technology practices that support changing product and business requirements.",
    challenges: [
      "Finding specialized technical talent",
      "Maintaining and modernizing applications",
      "Improving software delivery workflows",
      "Integrating cloud and enterprise platforms",
    ],
    solutions: [
      "Custom software and application development",
      "AI, generative AI, and intelligent automation",
      "Cloud engineering and DevOps",
      "API and enterprise software integration",
      "Application maintenance and support",
      "IT staffing and recruitment",
    ],
  },
  {
    id: "telecom",
    title: "Telecom",
    category: "Telecom",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
    icon: <FaNetworkWired />,
    tagline: "Support connected systems and telecom operations.",
    description:
      "Telecommunications organizations manage complex technology environments, customer-facing systems, service workflows, and large volumes of operational information.",
    challenges: [
      "Integrating business and service platforms",
      "Handling repetitive operational workflows",
      "Improving reporting and data visibility",
      "Maintaining dependable applications",
    ],
    solutions: [
      "Telecom business application development",
      "API and enterprise system integration",
      "Workflow automation",
      "Data analytics and operational reporting",
      "Cloud engineering and application support",
      "IT staffing and technical recruitment",
    ],
  },
];

const categories = [
  "All Industries",
  "Automotive",
  "Banking & Financial",
  "Energy",
  "Government",
  "Healthcare",
  "Manufacturing",
  "IT",
  "Telecom",
];

function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All Industries");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredIndustries = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return industries.filter((industry) => {
      const matchesCategory =
        activeCategory === "All Industries" ||
        industry.category === activeCategory;

      const searchableText = [
        industry.title,
        industry.category,
        industry.tagline,
        industry.description,
        ...industry.solutions,
        ...industry.challenges,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableText.includes(query);
    });
  }, [activeCategory, searchTerm]);

  useEffect(() => {
    if (!selectedIndustry) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedIndustry(null);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndustry]);

  const selectCategory = (category) => {
    setActiveCategory(category);
    document.getElementById("industry-directory")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="industries-page">
      <section className="industries-hero">
        <div className="industries-container industries-hero-grid">
          <div className="industries-hero-copy">
            <span className="industries-eyebrow">INDUSTRIES WE SERVE</span>
            <h1>
              Industry knowledge.
              <span> Technology that works.</span>
            </h1>
            <p>
              Explore industry-focused applications, AI and automation,
              cloud technologies, and workforce solutions designed around
              different business needs.
            </p>
            <a href="#industry-directory" className="industries-primary-btn">
              Explore Industries <FaArrowRight />
            </a>
          </div>

          <div className="industries-hero-art" aria-hidden="true">
            <div className="industries-art-ring ring-one" />
            <div className="industries-art-ring ring-two" />
            <div className="industries-art-center">
              <FaIndustry />
            </div>
            <div className="industries-art-icon art-icon-one">
              <FaLaptopCode />
            </div>
            <div className="industries-art-icon art-icon-two">
              <FaHeartbeat />
            </div>
            <div className="industries-art-icon art-icon-three">
              <FaCloud />
            </div>
            <div className="industries-art-icon art-icon-four">
              <FaUsers />
            </div>
            <div className="industries-art-label">
              <span>INDUSTRY FOCUS</span>
              <strong>Solutions shaped around your needs</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="industries-intro">
        <div className="industries-container industries-intro-grid">
          <div>
            <span className="industries-eyebrow">A PRACTICAL APPROACH</span>
            <h2>
              Different industries.
              <span> Different challenges.</span>
            </h2>
          </div>
          <p>
            Each industry has its own technology landscape, operational
            challenges, and workforce requirements. Explore the industries
            below to discover relevant challenges and potential solutions.
          </p>
        </div>
      </section>

      <section className="industries-directory" id="industry-directory">
        <div className="industries-container">
          <div className="industries-directory-heading">
            <div>
              <span className="industries-eyebrow">OUR INDUSTRY PORTFOLIO</span>
              <h2>Explore industries</h2>
              <p>
                Select an industry to view its challenges and potential
                technology and staffing solutions.
              </p>
            </div>

            <label className="industries-search">
              <FaSearch />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search industries..."
                aria-label="Search industries"
              />
            </label>
          </div>

          <div className="industries-filters" aria-label="Filter industries">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={activeCategory === category ? "active" : ""}
                onClick={() => selectCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="industries-count" aria-live="polite">
            Showing {filteredIndustries.length}{" "}
            {filteredIndustries.length === 1 ? "industry" : "industries"}
          </div>

          <div className="industries-grid">
            {filteredIndustries.map((industry, index) => (
              <button
                type="button"
                key={industry.id}
                className="industry-card"
                onClick={() => setSelectedIndustry(industry)}
              >
                <div className="industry-card-image">
                  <img
                    src={industry.image}
                    alt={`${industry.title} industry`}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                  <span className="industry-image-icon">
                    {industry.icon}
                  </span>
                  <span className="industry-image-overlay" />
                </div>

                <div className="industry-card-content">
                  <div className="industry-card-top">
                    <span className="industry-card-label">
                      {industry.category}
                    </span>
                    <span className="industry-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3>{industry.title}</h3>
                  <p>{industry.tagline}</p>

                  <span className="industry-card-link">
                    Explore industry <FaArrowRight />
                  </span>
                </div>
              </button>
            ))}
          </div>

          {filteredIndustries.length === 0 && (
            <div className="industries-empty">
              <FaSearch />
              <h3>No industries found</h3>
              <p>Try another keyword or clear the filters.</p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All Industries");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="industries-capabilities">
        <div className="industries-container">
          <div className="industries-capabilities-heading">
            <span className="industries-eyebrow">
              CROSS-INDUSTRY CAPABILITIES
            </span>
            <h2>Technology and talent for evolving needs.</h2>
            <p>
              Potential service areas can be adapted to project scope,
              organizational requirements, and industry context.
            </p>
          </div>

          <div className="industries-capabilities-grid">
            <article className="industry-capability">
              <span><FaCode /></span>
              <h3>Software & Applications</h3>
              <p>
                Develop, integrate, modernize, and maintain applications
                around business workflows.
              </p>
            </article>

            <article className="industry-capability">
              <span><FaRobot /></span>
              <h3>AI & Automation</h3>
              <p>
                Explore AI assistants, document processing, and workflow
                automation for suitable business tasks.
              </p>
            </article>

            <article className="industry-capability">
              <span><FaCloud /></span>
              <h3>Cloud & DevOps</h3>
              <p>
                Support cloud environments, deployment pipelines, and
                application operations.
              </p>
            </article>

            <article className="industry-capability">
              <span><FaUsers /></span>
              <h3>Staffing & Recruitment</h3>
              <p>
                Explore workforce and recruitment support for appropriate
                roles and hiring requirements.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="industries-cta">
        <div className="industries-container industries-cta-inner">
          <div>
            <span className="industries-eyebrow">LET'S DISCUSS YOUR NEEDS</span>
            <h2>Looking for solutions for your industry?</h2>
            <p>
              Tell us about your technology goals or workforce requirements.
            </p>
          </div>
          <a href="/contact" className="industries-primary-btn">
            Contact Us <FaArrowRight />
          </a>
        </div>
      </section>

      {selectedIndustry && (
        <div
          className="industry-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedIndustry(null);
            }
          }}
        >
          <section
            className="industry-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="industry-modal-title"
          >
            <div className="industry-modal-image">
              <img
                src={selectedIndustry.image}
                alt={`${selectedIndustry.title} industry`}
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <button
                type="button"
                className="industry-modal-close"
                aria-label="Close industry details"
                onClick={() => setSelectedIndustry(null)}
              >
                <FaTimes />
              </button>
            </div>

            <div className="industry-modal-body">
              <span className="industries-eyebrow">
                {selectedIndustry.category}
              </span>
              <h2 id="industry-modal-title">{selectedIndustry.title}</h2>
              <p className="industry-modal-description">
                {selectedIndustry.description}
              </p>

              <div className="industry-modal-section">
                <h3>Common industry challenges</h3>
                <ul>
                  {selectedIndustry.challenges.map((challenge) => (
                    <li key={challenge}>
                      <FaCheckCircle />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="industry-modal-section">
                <h3>Potential solutions</h3>
                <ul>
                  {selectedIndustry.solutions.map((solution) => (
                    <li key={solution}>
                      <FaCheckCircle />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="industry-modal-note">
                Final services and deliverables depend on the confirmed scope
                of work and the capabilities offered by Intela Group.
              </div>

              <div className="industry-modal-actions">
                <a href="/contact" className="industries-primary-btn">
                  Discuss Your Requirements <FaArrowRight />
                </a>
                <button
                  type="button"
                  className="industry-modal-secondary"
                  onClick={() => setSelectedIndustry(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

export default Industries;
