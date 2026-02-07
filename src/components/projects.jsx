import './experience.css';
import ProjectCard from './projectcard';

function Projects() {
  const projects = [
    {
      title: "Hospital Management Website",
      description:
        "Responsive healthcare website with doctor profiles, blogs, and secure admin management.",
      badges: [
        { label: "React", className: "bg-primary" },
        { label: "WordPress", className: "bg-secondary" },
        { label: "MySQL", className: "bg-info text-dark" },
      ],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "E-Commerce Website",
      description:
        "Online store built using Shopify and WordPress with Razorpay payment integration.",
      badges: [
        { label: "Shopify", className: "bg-success" },
        { label: "WooCommerce", className: "bg-primary" },
        { label: "Razorpay", className: "bg-warning text-dark" },
      ],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Digital Marketing Website",
      description:
        "SEO-friendly website with CRM integration and lead management features.",
      badges: [
        { label: "HTML", className: "bg-dark" },
        { label: "CSS", className: "bg-dark" },
        { label: "JavaScript", className: "bg-dark" },
        { label: "Zoho CRM", className: "bg-info text-dark" },
      ],
      liveLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section className="py-5 bg-light" id="projects">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 text-primary">
          Projects
        </h2>

        <div className="row g-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
