
import React, { useEffect, useMemo, useState } from "react";
import {
  FaCode, FaLaptopCode, FaTools, FaCloud, FaShareAlt, FaUsers,
  FaUserTie, FaMoneyBillWave, FaBriefcase, FaFileContract, FaUserFriends,
  FaBuilding, FaGlobe, FaArrowRight, FaTimes, FaCheckCircle,
  FaExternalLinkAlt, FaSearch, FaBrain, FaRobot, FaChartLine,
  FaServer, FaDatabase, FaShieldAlt, FaPlug, FaHandshake, FaMobileAlt
} from "react-icons/fa";
import "../css/Services.css";

const services = [
  {
    id: "application-development",
    title: "Application Development",
    category: "Software & Technology",
    icon: <FaCode />,
    short: "Custom applications designed around your business requirements and workflows.",
    description: "Application development focuses on creating software tailored to an organization's requirements, users, and business processes.",
    details: ["Business-focused application design", "Custom web application development", "User interface and workflow implementation", "Integration with existing systems", "Testing, deployment, and improvements"],
    source: "https://intelagroupllc.com/",
    sourceLabel: "Intela Group website"
  },
  {
    id: "software-development",
    title: "Software Development",
    category: "Software & Technology",
    icon: <FaLaptopCode />,
    short: "Software solutions focused on usability, flexibility, and business needs.",
    description: "Software development helps organizations create, improve, and maintain digital products and business systems.",
    details: ["Custom business software", "Web-based software solutions", "Feature development and enhancements", "Software testing and quality assurance", "Maintenance and technical support"],
    source: "https://intelagroupllc.com/",
    sourceLabel: "Intela Group website"
  },
  {
    id: "ai-solutions",
    title: "Artificial Intelligence Solutions",
    category: "AI & Automation",
    icon: <FaBrain />,
    short: "AI-powered solutions to streamline business operations and support decisions.",
    description: "AI solutions can help organizations analyze information, assist users, and improve selected business workflows.",
    details: ["AI use-case discovery and planning", "AI-enabled business applications", "Intelligent document processing", "Knowledge retrieval and summarization", "Integration with business systems", "AI evaluation and monitoring"],
  },
  {
    id: "generative-ai",
    title: "Generative AI & LLM Development",
    category: "AI & Automation",
    icon: <FaBrain />,
    short: "Generative AI applications using large language models and business data.",
    description: "Generative AI applications can summarize documents, draft content, search approved knowledge sources, and help users interact with business information.",
    details: ["LLM-powered application development", "Retrieval-augmented generation (RAG)", "Enterprise knowledge assistants", "Prompt design and model evaluation", "Document question-answering workflows", "Business application integration"],
  },
  {
    id: "ai-agents",
    title: "AI Agents & Copilots",
    category: "AI & Automation",
    icon: <FaRobot />,
    short: "AI assistants that support users with information and defined business tasks.",
    description: "AI agents and copilots can help users retrieve information, follow workflows, and interact with approved business tools under appropriate access controls and human oversight.",
    details: ["Business-specific AI assistants", "Microsoft Copilot Studio solutions", "Knowledge-source integration", "Tool and API connections", "Workflow assistance", "Access controls, testing, and monitoring"],
  },
  {
    id: "machine-learning",
    title: "Machine Learning & Predictive Analytics",
    category: "AI & Automation",
    icon: <FaChartLine />,
    short: "Data-driven models that identify patterns and help forecast outcomes.",
    description: "Machine learning uses data to identify patterns, generate predictions, and support business decision-making.",
    details: ["Predictive model development", "Classification and forecasting", "Data preparation and feature engineering", "Model evaluation and validation", "Model deployment and monitoring"],
  },
  {
    id: "intelligent-automation",
    title: "Intelligent Process Automation",
    category: "AI & Automation",
    icon: <FaRobot />,
    short: "Workflow automation combining business rules, APIs, and AI where appropriate.",
    description: "Intelligent automation combines workflow orchestration, rule-based automation, RPA, and selected AI capabilities to reduce repetitive manual work.",
    details: ["Microsoft Power Automate cloud flows", "Power Automate Desktop and RPA", "Document and invoice processing", "Approvals and notifications", "API-based automation", "Exception handling and audit trails"],
  },
  {
    id: "mobile-development",
    title: "Mobile Application Development",
    category: "Software & Technology",
    icon: <FaMobileAlt />,
    short: "Mobile experiences designed for customer and employee needs.",
    description: "Mobile application development focuses on building mobile experiences that support business services, customer interactions, and employee workflows.",
    details: ["Mobile app planning and design", "iOS and Android development", "API and backend integration", "Mobile testing and release support", "Ongoing updates and maintenance"],
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing & Engineering",
    category: "Cloud & DevOps",
    icon: <FaCloud />,
    short: "Cloud infrastructure and application environments designed around business needs.",
    description: "Cloud engineering supports the design, deployment, and operation of cloud environments for applications, data, and business workloads.",
    details: ["Cloud environment design", "AWS, Microsoft Azure, and Google Cloud solutions", "Cloud resource configuration", "Scalability and availability planning", "Monitoring and resource optimization"],
  },
  {
    id: "devops-cicd",
    title: "DevOps & CI/CD Engineering",
    category: "Cloud & DevOps",
    icon: <FaCode />,
    short: "Automated build, testing, release, and deployment pipelines.",
    description: "DevOps engineering helps teams automate software delivery, standardize environments, and improve deployment consistency.",
    details: ["CI/CD pipeline implementation", "GitHub Actions, Jenkins, and Azure DevOps", "Automated build and testing", "Release and deployment automation", "Environment configuration", "Pipeline monitoring and troubleshooting"],
  },
  {
    id: "infrastructure-as-code",
    title: "Infrastructure as Code",
    category: "Cloud & DevOps",
    icon: <FaServer />,
    short: "Repeatable infrastructure provisioning using version-controlled configuration.",
    description: "Infrastructure as Code manages infrastructure resources and configurations through reusable, version-controlled definitions.",
    details: ["Terraform configuration", "Infrastructure provisioning automation", "Reusable infrastructure modules", "Configuration management", "Environment consistency and change review"],
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration & Modernization",
    category: "Cloud & DevOps",
    icon: <FaCloud />,
    short: "Plan and modernize applications and workloads for cloud environments.",
    description: "Cloud migration involves assessing existing systems, planning transitions, moving suitable workloads, and improving their operation in the target environment.",
    details: ["Application and infrastructure assessment", "Cloud migration planning", "Workload migration support", "Application compatibility checks", "Post-migration validation", "Performance and cost optimization"],
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    category: "Data & Analytics",
    icon: <FaDatabase />,
    short: "Data pipelines and platforms that make information easier to use.",
    description: "Data engineering collects, transforms, validates, and organizes data so applications and analytics tools can use it reliably.",
    details: ["ETL and ELT pipeline development", "Data integration and transformation", "Data quality validation", "Database and warehouse integration", "Pipeline monitoring and maintenance"],
  },
  {
    id: "business-intelligence",
    title: "Business Intelligence & Reporting",
    category: "Data & Analytics",
    icon: <FaChartLine />,
    short: "Dashboards and reports that turn business data into actionable insights.",
    description: "Business intelligence organizes business information into reports and dashboards to help teams monitor performance and make informed decisions.",
    details: ["Power BI dashboards and reports", "Data modeling and transformation", "KPI and operational reporting", "Data source integration", "Report performance optimization"],
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    category: "Data & Analytics",
    icon: <FaChartLine />,
    short: "Analyze business data to identify trends, patterns, and opportunities.",
    description: "Data analytics helps organizations examine business data, understand performance, identify trends, and support evidence-based decisions.",
    details: ["Exploratory data analysis", "Data quality assessment", "Trend and performance analysis", "Analytical reporting", "Data-driven recommendations"],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Application Security",
    category: "Security & Integration",
    icon: <FaShieldAlt />,
    short: "Security practices that help protect applications, systems, and data.",
    description: "Cybersecurity services can help organizations assess risks, strengthen application security, and improve security controls across technology environments.",
    details: ["Application security assessments", "Identity and access management", "Secure development practices", "Cloud security configuration reviews", "Vulnerability remediation coordination", "Security monitoring integration"],
  },
  {
    id: "api-development",
    title: "API Development & Integration",
    category: "Security & Integration",
    icon: <FaPlug />,
    short: "Connect applications and services through reliable APIs.",
    description: "API development enables applications to exchange data and functionality through defined interfaces.",
    details: ["REST API development", "Third-party API integrations", "Authentication and authorization integration", "Data exchange and transformation", "API testing and documentation", "Error handling and monitoring"],
  },
  {
    id: "enterprise-integration",
    title: "Enterprise Software Integration",
    category: "Security & Integration",
    icon: <FaPlug />,
    short: "Connect business applications, databases, and enterprise platforms.",
    description: "Enterprise integration connects systems so business information can flow consistently between applications and teams.",
    details: ["CRM and ERP integrations", "Database and application connectivity", "Microsoft 365 and SharePoint integration", "Dataverse and Power Platform integration", "Data synchronization workflows", "Integration monitoring and support"],
  },
  {
    id: "application-maintenance",
    title: "Application Maintenance",
    category: "Software & Technology",
    icon: <FaTools />,
    short: "Application support, troubleshooting, upgrades, and performance improvements.",
    description: "Intela Group's Application Maintenance page discusses troubleshooting, system modifications, upgrades, environment support, performance tuning, and cloud-related support.",
    details: ["Application troubleshooting and support", "Application modifications and upgrades", "Performance tuning and validation", "Cloud infrastructure support", "Cloud security, migration, and monitoring", "AWS, Azure, and Google Cloud support"],
    source: "https://intelagroupllc.com/application-maintainence/",
    sourceLabel: "Application Maintenance page"
  },
  {
    id: "digital-media",
    title: "Digital Media",
    category: "Digital & Marketing",
    icon: <FaGlobe />,
    short: "Digital content and online communication support for your brand.",
    description: "Digital media services support how an organization presents its brand, shares information, and communicates with audiences across digital channels.",
    details: ["Digital content planning", "Online brand communication", "Digital campaign support", "Content coordination across digital channels"],
  },
  {
    id: "social-media",
    title: "Social Media",
    category: "Digital & Marketing",
    icon: <FaShareAlt />,
    short: "Social content and channel support to help businesses connect with audiences.",
    description: "Social media support focuses on consistent brand messaging, relevant content, and communication across social platforms.",
    details: ["Social media content planning", "Brand messaging and content coordination", "Social channel management support", "Campaign and engagement support"],
  },
  {
    id: "staffing-solutions",
    title: "Staffing Solutions",
    category: "Staffing & Workforce",
    icon: <FaUsers />,
    short: "Flexible workforce solutions, from temporary assignments to permanent hiring.",
    description: "Intela Group's Staffing Solutions page describes matching qualified candidates to client requirements and supporting temporary, temp-to-permanent, and permanent staffing needs.",
    details: ["Candidate sourcing and matching", "Temporary staffing", "Temp-to-permanent staffing", "Permanent staffing support", "Workforce solutions based on client requirements", "Support across IT, accounting and finance, legal, sales, and other roles"],
    source: "https://intelagroupllc.com/staffing-solutions/",
    sourceLabel: "Staffing Solutions page"
  },
  {
    id: "professional-services",
    title: "Professional Services",
    category: "Business Services",
    icon: <FaBriefcase />,
    short: "Professional support aligned with organizational needs.",
    description: "Professional services can provide consulting and specialist support aligned with business requirements. Confirm the precise scope before publication.",
    details: ["Professional consulting support", "Business requirement alignment", "Support for organizational objectives", "Services tailored to client needs"],
    source: "https://intelagroupllc.com/",
    sourceLabel: "Intela Group website"
  },
  {
    id: "financial-services",
    title: "Financial Services",
    category: "Business Services",
    icon: <FaMoneyBillWave />,
    short: "Financial and accounting talent support based on business requirements.",
    description: "Financial services may include staffing support for accounting and finance roles. Confirm the precise offering before publishing broader claims.",
    details: ["Accounting and finance staffing", "Finance-role candidate sourcing", "Workforce support aligned with client requirements", "Role-specific recruitment coordination"],
    source: "https://intelagroupllc.com/staffing-solutions/",
    sourceLabel: "Staffing Solutions page"
  },
  {
    id: "contracting",
    title: "Contracting",
    category: "Staffing & Workforce",
    icon: <FaFileContract />,
    short: "Contract-based talent for defined roles and time periods.",
    description: "Intela Group's Contracting page describes temporary, contract-based roles with a defined job, rate of pay, and duration.",
    details: ["Contract staffing for defined assignments", "Role-specific placement", "Agreed compensation and assignment duration", "Contract-to-permanent possibilities where applicable"],
    source: "https://intelagroupllc.com/contracting/",
    sourceLabel: "Contracting page"
  },
  {
    id: "direct-hire",
    title: "Direct Hire Strategy",
    category: "Staffing & Workforce",
    icon: <FaUserTie />,
    short: "Recruitment support for permanent positions and long-term team building.",
    description: "Direct hire supports organizations looking to recruit employees directly into permanent positions.",
    details: ["Permanent-position recruitment", "Candidate identification and matching", "Role and skill requirement alignment", "Support for long-term hiring needs"],
    source: "https://intelagroupllc.com/",
    sourceLabel: "Intela Group website"
  },
  {
    id: "onsite-recruitment",
    title: "Onsite Recruitment",
    category: "Staffing & Workforce",
    icon: <FaUserFriends />,
    short: "Recruitment support coordinated with a client's team.",
    description: "Onsite recruitment can provide dedicated recruitment coordination in collaboration with client hiring teams.",
    details: ["Recruitment coordination at the client site", "Dedicated recruitment support", "Coordination with hiring teams", "Support for ongoing hiring requirements"],
    source: "https://intelagroupllc.com/",
    sourceLabel: "Intela Group website"
  },
  {
    id: "offshore-outsourcing",
    title: "Offshore Outsourcing",
    category: "Staffing & Workforce",
    icon: <FaGlobe />,
    short: "An offshore delivery or staffing model based on agreed business requirements.",
    description: "Offshore outsourcing can help organizations coordinate work with an external team in another location. Confirm Intela's specific delivery models and engagement terms before publication.",
    details: ["Offshore resource planning", "Coordination around client requirements", "Defined responsibilities and expectations", "Communication and delivery coordination"],
  },
  {
    id: "payroll-hr",
    title: "Payroll – HR Services",
    category: "Staffing & Workforce",
    icon: <FaMoneyBillWave />,
    short: "Payroll and HR support for workforce administration.",
    description: "Intela Group lists Payroll – HR Services among its services. Confirm the specific payroll and HR services offered before publication.",
    details: ["Payroll administration support", "HR process support", "Employee and workforce coordination", "Services aligned with client requirements"],
    source: "https://intelagroupllc.com/",
    sourceLabel: "Intela Group website"
  },
  {
    id: "us-it-staffing",
    title: "US IT Staffing",
    category: "Staffing & Workforce",
    icon: <FaBuilding />,
    short: "IT talent sourcing for US-based roles and workforce requirements.",
    description: "US IT staffing focuses on matching IT professionals to the technical skills, role requirements, and engagement conditions specified by a hiring organization.",
    details: ["IT candidate sourcing", "Technical skill and role matching", "Contract and permanent hiring support", "Coordination with client hiring teams", "Work authorization requirements where applicable"],
    source: "https://intelagroupllc.com/staffing-solutions/",
    sourceLabel: "Staffing Solutions page"
  },
  {
    id: "rpo",
    title: "Recruitment Process Outsourcing (RPO)",
    category: "Staffing & Workforce",
    icon: <FaHandshake />,
    short: "Recruitment process support aligned with a company's hiring needs.",
    description: "Recruitment Process Outsourcing is a model in which an organization engages an external provider to manage or support some or all of its recruitment activities.",
    details: ["Recruitment planning and coordination", "Candidate sourcing and screening support", "Hiring pipeline coordination", "Recruiter and hiring-manager collaboration", "Recruitment reporting based on agreed requirements"],
  },
  {
    id: "recruitment-rfp",
    title: "Recruitment Request for Proposal (RFP)",
    category: "Staffing & Workforce",
    icon: <FaFileContract />,
    short: "A structured process for inviting recruitment agencies to submit proposals.",
    description: "A Recruitment Request for Proposal (RFP) is a formal document a company sends to recruitment or RPO agencies to invite competitive proposals for hiring services. It can help compare scope, timelines, delivery approaches, and pricing.",
    details: ["Define roles, hiring volumes, and recruitment scope", "Specify required skills, locations, and timelines", "Invite agencies or RPO providers to submit proposals", "Compare service models, delivery plans, and pricing", "Document selection criteria and expected outcomes"],
  }
];

const categories = [
  "All Services",
  "Software & Technology",
  "AI & Automation",
  "Cloud & DevOps",
  "Data & Analytics",
  "Security & Integration",
  "Digital & Marketing",
  "Staffing & Workforce",
  "Business Services"
];

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All Services");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesCategory =
        activeCategory === "All Services" ||
        service.category === activeCategory;
      const query = searchTerm.trim().toLowerCase();
      const searchableText =
        `${service.title} ${service.short} ${service.category} ${service.description}`.toLowerCase();

      return matchesCategory && searchableText.includes(query);
    });
  }, [activeCategory, searchTerm]);

  useEffect(() => {
    if (!selectedService) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedService(null);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedService]);

  const showCategory = (category) => {
    setActiveCategory(category);
    document.getElementById("service-directory")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="services-container services-hero-grid">
          <div className="services-hero-copy">
            <span className="services-eyebrow">WHAT WE DO</span>
            <h1>Technology and talent <span>working together.</span></h1>
            <p>
              Explore Intela Group's software, AI, digital, staffing, and
              workforce services. Select any service to learn more about its
              purpose and potential scope.
            </p>
            <a href="#service-directory" className="services-hero-button">
              Explore Our Services <FaArrowRight />
            </a>
          </div>

          <div className="services-hero-visual" aria-hidden="true">
            <div className="services-hero-orbit orbit-one" />
            <div className="services-hero-orbit orbit-two" />
            <div className="services-hero-symbol"><FaCode /></div>
            <div className="services-hero-mini mini-one"><FaBrain /></div>
            <div className="services-hero-mini mini-two"><FaCloud /></div>
            <div className="services-hero-mini mini-three"><FaUsers /></div>
            <div className="services-hero-caption">
              <span>INTELA GROUP LLC</span>
              <strong>Services built around business needs</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="services-category-strip">
        <div className="services-container services-category-inner">
          <span>Explore by category</span>
          <div className="services-category-links">
            {categories.slice(1).map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => showCategory(category)}
              >
                {category} <FaArrowRight />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="services-directory section-space" id="service-directory">
        <div className="services-container">
          <div className="services-directory-heading">
            <div>
              <span className="services-eyebrow">OUR SERVICE PORTFOLIO</span>
              <h2>Find the service you need.</h2>
              <p>Browse the directory or search by service name and category.</p>
            </div>

            <label className="services-search">
              <FaSearch />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search services..."
                aria-label="Search services"
              />
            </label>
          </div>

          <div className="services-filters" aria-label="Filter services">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={activeCategory === category ? "active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="services-results-count">
            Showing {filteredServices.length}{" "}
            {filteredServices.length === 1 ? "service" : "services"}
          </div>

          <div className="services-card-grid">
            {filteredServices.map((service, index) => (
              <button
                type="button"
                className="service-card"
                key={service.id}
                onClick={() => setSelectedService(service)}
              >
                <div className="service-card-top">
                  <span className="service-card-icon">{service.icon}</span>
                  <span className="service-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <span className="service-card-category">{service.category}</span>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
                <span className="service-card-link">
                  Explore service <FaArrowRight />
                </span>
              </button>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="services-empty">
              <FaSearch />
              <h3>No services found</h3>
              <p>Try another search term or choose a different category.</p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All Services");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="services-rfp-section">
        <div className="services-container services-rfp-grid">
          <div className="services-rfp-icon"><FaFileContract /></div>
          <div>
            <span className="services-eyebrow">FOR HIRING ORGANIZATIONS</span>
            <h2>Planning a recruitment engagement?</h2>
            <p>
              Explore Recruitment Process Outsourcing and Recruitment RFP
              support to organize hiring requirements, scope, timelines, and
              agency proposals.
            </p>
          </div>
          <button
            type="button"
            className="services-rfp-button"
            onClick={() =>
              setSelectedService(
                services.find((service) => service.id === "recruitment-rfp")
              )
            }
          >
            Explore Recruitment RFP <FaArrowRight />
          </button>
        </div>
      </section>

      <section className="services-cta">
        <div className="services-container services-cta-inner">
          <div>
            <span className="services-eyebrow">LET'S TALK</span>
            <h2>Looking for the right solution?</h2>
            <p>
              Contact Intela Group to discuss your technology or workforce
              requirements.
            </p>
          </div>
          <a href="/contact" className="services-cta-button">
            Contact Us <FaArrowRight />
          </a>
        </div>
      </section>

      {selectedService && (
        <div
          className="service-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedService(null);
            }
          }}
        >
          <section
            className="service-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            <div className="service-modal-header">
              <div className="service-modal-icon">{selectedService.icon}</div>
              <button
                type="button"
                className="service-modal-close"
                aria-label="Close service details"
                onClick={() => setSelectedService(null)}
              >
                <FaTimes />
              </button>
            </div>

            <span className="services-eyebrow">{selectedService.category}</span>
            <h2 id="service-modal-title">{selectedService.title}</h2>
            <p className="service-modal-description">
              {selectedService.description}
            </p>

            <div className="service-modal-includes">
              <h3>What this service may include</h3>
              <ul>
                {selectedService.details.map((detail) => (
                  <li key={detail}>
                    <FaCheckCircle />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="service-modal-note">
              The final scope, deliverables, and engagement terms should be
              confirmed with Intela Group.
            </div>

            <div className="service-modal-actions">
              <a href="/contact" className="services-hero-button">
                Enquire About This Service <FaArrowRight />
              </a>

              {selectedService.source && (
                <a
                  className="service-source-link"
                  href={selectedService.source}
                  target="_blank"
                  rel="noreferrer"
                >
                  {selectedService.sourceLabel} <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

export default Services;
