import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaBriefcase,
  FaClock,
  FaArrowRight,
  FaTimes,
  FaUpload,
  FaPaperPlane,
  FaCheckCircle,
  FaUsers,
  FaGraduationCap,
  FaHeart,
  FaLaptopCode,
  FaGlobe,
  FaChevronRight,
} from "react-icons/fa";
import "../css/Careers.css";

// Replace these values with your EmailJS credentials.
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const categories = [
  "All Departments",
  "Engineering",
  "Cloud & DevOps",
  "Data & AI",
  "Business & Consulting",
  "Sales & Marketing",
  "Staffing & HR",
];

const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    department: "Engineering",
    location: "United States",
    type: "Full-time",
    workplace: "Hybrid",
    description: "Build, maintain, and improve reliable software applications.",
    responsibilities: [
      "Develop and maintain software applications.",
      "Write clean, testable, maintainable code.",
      "Collaborate with engineering and product teams.",
      "Troubleshoot issues and improve performance.",
    ],
    skills: ["Java", "Python", "JavaScript", "REST APIs", "SQL"],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "United States",
    type: "Full-time",
    workplace: "Hybrid",
    description: "Build web applications across frontend, backend, and databases.",
    responsibilities: [
      "Develop responsive user interfaces.",
      "Create backend services and REST APIs.",
      "Design and optimize database queries.",
      "Participate in testing and code reviews.",
    ],
    skills: ["React", "Node.js", "Python", "SQL", "Git"],
  },
  {
    id: 3,
    title: "Frontend Developer",
    department: "Engineering",
    location: "United States",
    type: "Full-time",
    workplace: "Remote",
    description: "Create responsive, accessible, and user-friendly web experiences.",
    responsibilities: [
      "Build reusable UI components.",
      "Translate designs into responsive pages.",
      "Improve application performance.",
      "Work with backend developers and designers.",
    ],
    skills: ["React", "JavaScript", "HTML", "CSS", "REST APIs"],
  },
  {
    id: 4,
    title: "Backend Developer",
    department: "Engineering",
    location: "United States",
    type: "Full-time",
    workplace: "Hybrid",
    description: "Develop secure backend services and scalable APIs.",
    responsibilities: [
      "Design and implement backend services.",
      "Develop and document REST APIs.",
      "Optimize database performance.",
      "Write tests and troubleshoot issues.",
    ],
    skills: ["Python", "Java", "Node.js", "SQL", "REST APIs"],
  },
  {
    id: 5,
    title: "Cloud Engineer",
    department: "Cloud & DevOps",
    location: "United States",
    type: "Full-time",
    workplace: "Hybrid",
    description: "Manage cloud infrastructure, reliability, and security.",
    responsibilities: [
      "Configure and maintain cloud resources.",
      "Monitor infrastructure performance.",
      "Apply cloud security best practices.",
      "Automate infrastructure provisioning.",
    ],
    skills: ["AWS", "Azure", "Linux", "Terraform", "Networking"],
  },
  {
    id: 6,
    title: "DevOps Engineer",
    department: "Cloud & DevOps",
    location: "United States",
    type: "Full-time",
    workplace: "Hybrid",
    description: "Improve software delivery using automation and CI/CD.",
    responsibilities: [
      "Build and maintain CI/CD pipelines.",
      "Automate deployment workflows.",
      "Monitor systems and troubleshoot incidents.",
      "Collaborate with development teams.",
    ],
    skills: ["Docker", "Kubernetes", "Jenkins", "Git", "AWS"],
  },
  {
    id: 7,
    title: "Site Reliability Engineer",
    department: "Cloud & DevOps",
    location: "United States",
    type: "Full-time",
    workplace: "Remote",
    description: "Improve service availability, observability, and reliability.",
    responsibilities: [
      "Monitor service health and availability.",
      "Improve alerting and incident response.",
      "Automate operational tasks.",
      "Analyze reliability and performance trends.",
    ],
    skills: ["Linux", "Python", "Monitoring", "Cloud", "Networking"],
  },
  {
    id: 8,
    title: "Data Engineer",
    department: "Data & AI",
    location: "United States",
    type: "Full-time",
    workplace: "Hybrid",
    description: "Build dependable data pipelines for business intelligence.",
    responsibilities: [
      "Develop data ingestion pipelines.",
      "Maintain data quality.",
      "Optimize data processing.",
      "Work with analysts and data scientists.",
    ],
    skills: ["Python", "SQL", "ETL", "Data Warehousing", "Cloud"],
  },
  {
    id: 9,
    title: "Data Analyst",
    department: "Data & AI",
    location: "United States",
    type: "Full-time",
    workplace: "Hybrid",
    description: "Turn data into useful reports, dashboards, and insights.",
    responsibilities: [
      "Clean and analyze datasets.",
      "Create reports and dashboards.",
      "Identify trends and business metrics.",
      "Present findings to stakeholders.",
    ],
    skills: ["SQL", "Excel", "Power BI", "Analytics", "Python"],
  },
  {
    id: 10,
    title: "AI / Machine Learning Engineer",
    department: "Data & AI",
    location: "United States",
    type: "Full-time",
    workplace: "Hybrid",
    description: "Develop and evaluate machine learning solutions.",
    responsibilities: [
      "Prepare data and train models.",
      "Evaluate model performance.",
      "Build model deployment workflows.",
      "Collaborate with engineering teams.",
    ],
    skills: ["Python", "Machine Learning", "SQL", "APIs", "Data Science"],
  },
  {
    id: 11,
    title: "Business Analyst",
    department: "Business & Consulting",
    location: "United States",
    type: "Full-time",
    workplace: "Hybrid",
    description: "Translate business requirements into actionable solutions.",
    responsibilities: [
      "Gather and document requirements.",
      "Prepare process maps and specifications.",
      "Coordinate business and technical teams.",
      "Support testing and validation.",
    ],
    skills: ["Requirements Analysis", "Documentation", "Excel", "Communication"],
  },
  {
    id: 12,
    title: "IT Project Manager",
    department: "Business & Consulting",
    location: "United States",
    type: "Full-time",
    workplace: "Hybrid",
    description: "Coordinate project delivery, timelines, and stakeholders.",
    responsibilities: [
      "Plan project milestones and deliverables.",
      "Track risks, issues, and dependencies.",
      "Coordinate stakeholders and project teams.",
      "Maintain project status reports.",
    ],
    skills: ["Project Management", "Agile", "Communication", "Planning"],
  },
  {
    id: 13,
    title: "Technical Consultant",
    department: "Business & Consulting",
    location: "United States",
    type: "Full-time",
    workplace: "Hybrid",
    description: "Help clients identify and implement suitable technology solutions.",
    responsibilities: [
      "Understand client requirements.",
      "Assess technical solution options.",
      "Support implementation and troubleshooting.",
      "Document recommendations.",
    ],
    skills: ["Consulting", "Problem Solving", "Documentation", "Communication"],
  },
  {
    id: 14,
    title: "Sales Executive",
    department: "Sales & Marketing",
    location: "United States",
    type: "Full-time",
    workplace: "On-site",
    description: "Build customer relationships and identify business opportunities.",
    responsibilities: [
      "Identify potential customers.",
      "Maintain client relationships.",
      "Coordinate proposals and meetings.",
      "Track sales opportunities.",
    ],
    skills: ["Communication", "Negotiation", "CRM", "Relationship Management"],
  },
  {
    id: 15,
    title: "Digital Marketing Specialist",
    department: "Sales & Marketing",
    location: "United States",
    type: "Full-time",
    workplace: "Hybrid",
    description: "Support digital campaigns, SEO, and marketing analytics.",
    responsibilities: [
      "Plan and execute digital campaigns.",
      "Support SEO and content initiatives.",
      "Analyze campaign performance.",
      "Prepare marketing reports.",
    ],
    skills: ["SEO", "Digital Marketing", "Analytics", "Content Strategy"],
  },
  {
    id: 16,
    title: "Technical Recruiter",
    department: "Staffing & HR",
    location: "United States",
    type: "Full-time",
    workplace: "Hybrid",
    description: "Source technology professionals and coordinate recruitment.",
    responsibilities: [
      "Source candidates through relevant channels.",
      "Review resumes and conduct initial screenings.",
      "Coordinate interviews.",
      "Maintain candidate records.",
    ],
    skills: ["Technical Recruiting", "Sourcing", "Communication", "ATS"],
  },
  {
    id: 17,
    title: "US IT Recruiter",
    department: "Staffing & HR",
    location: "United States",
    type: "Full-time",
    workplace: "Remote",
    description: "Support technology recruitment for US-based opportunities.",
    responsibilities: [
      "Source candidates for technology roles.",
      "Screen resumes against requirements.",
      "Coordinate candidate submissions.",
      "Maintain recruitment pipeline records.",
    ],
    skills: ["US IT Staffing", "Sourcing", "Communication", "ATS"],
  },
  {
    id: 18,
    title: "HR Coordinator",
    department: "Staffing & HR",
    location: "United States",
    type: "Full-time",
    workplace: "On-site",
    description: "Support HR operations, onboarding, and employee documentation.",
    responsibilities: [
      "Maintain employee records.",
      "Coordinate onboarding activities.",
      "Assist with interview scheduling.",
      "Support HR reporting.",
    ],
    skills: ["HR Operations", "Organization", "Excel", "Communication"],
  },
  {
    id: 19,
    title: "Cybersecurity Analyst",
    department: "Engineering",
    location: "United States",
    type: "Full-time",
    workplace: "Hybrid",
    description: "Help identify security risks and protect IT systems.",
    responsibilities: [
      "Review security alerts.",
      "Support vulnerability assessments.",
      "Document risks and remediation.",
      "Help maintain security controls.",
    ],
    skills: ["Security Monitoring", "Networking", "Linux", "Risk Assessment"],
  },
  {
    id: 20,
    title: "IT Support Specialist",
    department: "Engineering",
    location: "United States",
    type: "Full-time",
    workplace: "On-site",
    description: "Troubleshoot workplace technology and assist users.",
    responsibilities: [
      "Resolve hardware and software issues.",
      "Assist users with accounts and access.",
      "Maintain support tickets.",
      "Escalate complex technical issues.",
    ],
    skills: ["Troubleshooting", "Windows", "Networking", "Customer Support"],
  },
];

const benefits = [
  {
    icon: <FaGraduationCap />,
    title: "Continuous Learning",
    description: "Build skills through learning and professional development.",
  },
  {
    icon: <FaUsers />,
    title: "Collaborative Culture",
    description: "Work with people who value teamwork and shared success.",
  },
  {
    icon: <FaHeart />,
    title: "People First",
    description: "Contribute in an environment that values different perspectives.",
  },
  {
    icon: <FaGlobe />,
    title: "Meaningful Work",
    description: "Help deliver business and technology solutions.",
  },
];

export default function Careers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Departments");
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationStatus, setApplicationStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeName, setResumeName] = useState("");

  const filteredJobs = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesCategory =
        selectedCategory === "All Departments" ||
        job.department === selectedCategory;

      const searchableText = [
        job.title,
        job.department,
        job.location,
        job.description,
        ...job.skills,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!term || searchableText.includes(term));
    });
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    if (!selectedJob) {
      document.body.style.overflow = "";
      return undefined;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape" && !isSubmitting) {
        setSelectedJob(null);
        setApplicationStatus("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedJob, isSubmitting]);

  const openApplication = (job) => {
    setSelectedJob(job);
    setApplicationStatus("");
    setResumeName("");
  };

  const closeApplication = () => {
    if (isSubmitting) return;
    setSelectedJob(null);
    setApplicationStatus("");
    setResumeName("");
  };

  const handleResumeChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      setResumeName("");
      return;
    }

    const validExtension = /\.(pdf|doc|docx)$/i.test(file.name);

    if (!validExtension) {
      event.target.value = "";
      setResumeName("");
      setApplicationStatus("Please upload a PDF, DOC, or DOCX resume.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      event.target.value = "";
      setResumeName("");
      setApplicationStatus("Your resume must be 5 MB or smaller.");
      return;
    }

    setResumeName(file.name);
    setApplicationStatus("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const resumeInput = form.elements.namedItem("resume");

    if (!resumeInput?.files?.length) {
      setApplicationStatus("Please attach your resume before submitting.");
      return;
    }

    if (
      EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" ||
      EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
      EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY"
    ) {
      setApplicationStatus(
        "Email delivery is not configured yet. Add your EmailJS service ID, template ID, and public key."
      );
      return;
    }

    setIsSubmitting(true);
    setApplicationStatus("");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setApplicationStatus(
        "Your application was submitted successfully. Thank you for your interest!"
      );
      form.reset();
      setResumeName("");
    } catch (error) {
      console.error("Application submission failed:", error);
      setApplicationStatus(
        "We couldn't submit your application. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="careers-page">
      <section className="careers-hero">
        <div className="careers-hero-orb careers-orb-one" />
        <div className="careers-hero-orb careers-orb-two" />

        <div className="careers-container careers-hero-content">
          <div className="careers-eyebrow">
            <span className="careers-eyebrow-line" />
            CAREERS AT INTELA
          </div>

          <h1>
            Build your future.
            <br />
            <span>Make an impact.</span>
          </h1>

          <p>
            Join Intela Group LLC and bring your ideas to life. Explore
            opportunities to grow your skills, collaborate with talented people,
            and help solve business challenges.
          </p>

          <div className="careers-hero-actions">
            <a href="#open-positions" className="careers-btn careers-btn-primary">
              Explore Opportunities <FaArrowRight />
            </a>
            <Link to="/about" className="careers-btn careers-btn-outline">
              Discover Intela
            </Link>
          </div>

          <div className="careers-hero-stats">
            <div>
              <strong>{jobs.length}+</strong>
              <span>Sample roles</span>
            </div>
            <div className="careers-stat-divider" />
            <div>
              <strong>{categories.length - 1}</strong>
              <span>Departments</span>
            </div>
            <div className="careers-stat-divider" />
            <div>
              <strong>1</strong>
              <span>Shared purpose</span>
            </div>
          </div>
        </div>

        <div className="careers-hero-decoration" aria-hidden="true">
          <div className="careers-decoration-card careers-decoration-card-main">
            <div className="careers-decoration-icon">
              <FaLaptopCode />
            </div>
            <div>
              <strong>Think. Build. Grow.</strong>
              <span>Make your next move count.</span>
            </div>
            <FaCheckCircle className="careers-decoration-check" />
          </div>
          <div className="careers-decoration-card careers-decoration-card-small">
            <FaUsers />
            <span>Better together</span>
          </div>
        </div>
      </section>

      <section className="careers-benefits-section">
        <div className="careers-container">
          <div className="careers-section-heading">
            <span className="careers-section-kicker">WHY INTELA</span>
            <h2>
              A place to do your <span>best work</span>
            </h2>
            <p>
              Bring your strengths, keep learning, and contribute to work that
              matters.
            </p>
          </div>

          <div className="careers-benefits-grid">
            {benefits.map((benefit) => (
              <article className="careers-benefit-card" key={benefit.title}>
                <div className="careers-benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="careers-jobs-section" id="open-positions">
        <div className="careers-container">
          <div className="careers-section-heading careers-jobs-heading">
            <span className="careers-section-kicker">FIND YOUR OPPORTUNITY</span>
            <h2>
              Explore open <span>positions</span>
            </h2>
            <p>
              Search by role, skill, or department to find an opportunity that
              matches your interests.
            </p>
          </div>

          <div className="careers-search-panel">
            <div className="careers-search-input-wrap">
              <FaSearch />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search by job title, skill, or keyword"
                aria-label="Search jobs"
              />
              {searchTerm && (
                <button
                  type="button"
                  className="careers-clear-search"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                >
                  <FaTimes />
                </button>
              )}
            </div>

            <div className="careers-search-count">
              <FaBriefcase />
              <span>
                <strong>{filteredJobs.length}</strong>{" "}
                {filteredJobs.length === 1 ? "role" : "roles"} found
              </span>
            </div>
          </div>

          <div className="careers-department-filters">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={
                  selectedCategory === category
                    ? "careers-filter-btn active"
                    : "careers-filter-btn"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredJobs.length > 0 ? (
            <div className="careers-job-grid">
              {filteredJobs.map((job) => (
                <article className="careers-job-card" key={job.id}>
                  <div className="careers-job-card-top">
                    <span className="careers-job-department">
                      {job.department}
                    </span>
                    <span className="careers-job-type">{job.type}</span>
                  </div>

                  <h3>{job.title}</h3>
                  <p className="careers-job-description">{job.description}</p>

                  <div className="careers-job-meta">
                    <span>
                      <FaMapMarkerAlt /> {job.location}
                    </span>
                    <span>
                      <FaClock /> {job.workplace}
                    </span>
                  </div>

                  <div className="careers-job-skills">
                    {job.skills.slice(0, 3).map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                    {job.skills.length > 3 && (
                      <span className="careers-more-skills">
                        +{job.skills.length - 3}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    className="careers-job-apply"
                    onClick={() => openApplication(job)}
                  >
                    View Details & Apply <FaArrowRight />
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="careers-empty-state">
              <div className="careers-empty-icon">
                <FaSearch />
              </div>
              <h3>No matching positions found</h3>
              <p>Try another keyword or choose a different department.</p>
              <button
                type="button"
                className="careers-btn careers-btn-primary"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All Departments");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="careers-talent-section">
        <div className="careers-container">
          <div className="careers-talent-card">
            <div className="careers-talent-content">
              <span className="careers-section-kicker">YOUR NEXT CHAPTER</span>
              <h2>Don't see the right role?</h2>
              <p>
                We welcome conversations with people passionate about
                technology, business, and solving problems. Contact our team
                about potential opportunities.
              </p>
              <Link to="/contact" className="careers-btn careers-btn-primary">
                Contact Our Team <FaArrowRight />
              </Link>
            </div>

            <div className="careers-talent-visual" aria-hidden="true">
              <div className="careers-talent-circle careers-talent-circle-one" />
              <div className="careers-talent-circle careers-talent-circle-two" />
              <div className="careers-talent-icon">
                <FaUsers />
              </div>
              <div className="careers-talent-tag">
                <FaCheckCircle /> Your potential matters
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedJob && (
        <div
          className="careers-modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeApplication();
          }}
        >
          <section
            className="careers-application-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="careers-modal-title"
          >
            <div className="careers-modal-header">
              <div>
                <span className="careers-section-kicker">JOIN OUR TEAM</span>
                <h2 id="careers-modal-title">{selectedJob.title}</h2>
                <p>
                  {selectedJob.department} · {selectedJob.location} ·{" "}
                  {selectedJob.workplace}
                </p>
              </div>
              <button
                type="button"
                className="careers-modal-close"
                onClick={closeApplication}
                disabled={isSubmitting}
                aria-label="Close application form"
              >
                <FaTimes />
              </button>
            </div>

            <div className="careers-modal-body">
              <div className="careers-role-details">
                <h3>About this role</h3>
                <p>{selectedJob.description}</p>

                <h3>Responsibilities</h3>
                <ul>
                  {selectedJob.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h3>Skills</h3>
                <div className="careers-job-skills careers-modal-skills">
                  {selectedJob.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>

              <div className="careers-application-form-wrap">
                <h3>Apply for this position</h3>
                <p className="careers-form-intro">
                  Complete the form to submit your application.
                </p>

                <form
                  className="careers-application-form"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="hidden"
                    name="job_title"
                    value={selectedJob.title}
                  />
                  <input
                    type="hidden"
                    name="job_department"
                    value={selectedJob.department}
                  />

                  <div className="careers-form-field">
                    <label htmlFor="careers-name">Full name *</label>
                    <input
                      id="careers-name"
                      type="text"
                      name="applicant_name"
                      placeholder="Enter your full name"
                      autoComplete="name"
                      maxLength={120}
                      required
                    />
                  </div>

                  <div className="careers-form-field">
                    <label htmlFor="careers-email">Email address *</label>
                    <input
                      id="careers-email"
                      type="email"
                      name="applicant_email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      maxLength={254}
                      required
                    />
                  </div>

                  <div className="careers-form-field">
                    <label htmlFor="careers-phone">Phone number *</label>
                    <input
                      id="careers-phone"
                      type="tel"
                      name="applicant_phone"
                      placeholder="Enter your phone number"
                      autoComplete="tel"
                      maxLength={30}
                      required
                    />
                  </div>

                  <div className="careers-form-field">
                    <label htmlFor="careers-linkedin">LinkedIn profile</label>
                    <input
                      id="careers-linkedin"
                      type="url"
                      name="linkedin_url"
                      placeholder="https://www.linkedin.com/in/..."
                    />
                  </div>

                  <div className="careers-form-field">
                    <label htmlFor="careers-resume">
                      Resume / CV * (PDF, DOC, DOCX; max 5 MB)
                    </label>

                    <label
                      className="careers-resume-upload"
                      htmlFor="careers-resume"
                    >
                      <FaUpload />
                      <span>
                        {resumeName || "Choose your resume"}
                        <small>
                          {resumeName ? "File selected" : "PDF or Word document"}
                        </small>
                      </span>
                      <FaChevronRight className="careers-upload-arrow" />
                    </label>

                    <input
                      id="careers-resume"
                      className="careers-file-input"
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleResumeChange}
                      required
                    />
                  </div>

                  <div className="careers-form-field">
                    <label htmlFor="careers-message">Short introduction</label>
                    <textarea
                      id="careers-message"
                      name="applicant_message"
                      rows={4}
                      maxLength={3000}
                      placeholder="Tell us about your experience and interest in this role."
                    />
                  </div>

                  {applicationStatus && (
                    <div
                      className={
                        applicationStatus.startsWith("Your application")
                          ? "careers-form-status success"
                          : "careers-form-status error"
                      }
                      role="status"
                    >
                      {applicationStatus.startsWith("Your application") && (
                        <FaCheckCircle />
                      )}
                      <span>{applicationStatus}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="careers-btn careers-btn-primary careers-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Application <FaPaperPlane />
                      </>
                    )}
                  </button>

                  <p className="careers-privacy-note">
                    By submitting, you agree that Intela Group LLC may use your
                    details to consider your application.
                  </p>
                </form>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}