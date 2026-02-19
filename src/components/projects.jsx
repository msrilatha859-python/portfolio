import './experience.css';
import ProjectCard from './projectcard.jsx';

function Projects() {
  const projects = [
    {
  title: "Movie Browser App (TMDB API)",
  description:
    "Responsive movie browsing web app built with React and the The Movie Database API, featuring dynamic categories and real-time data fetching.",
  image: "/logo-clone.png", 
  badges: [
    { label: "React", className: "bg-primary" },
    { label: "TMDB API", className: "bg-danger" },
    { label: "Vite", className: "bg-warning text-dark" },
  ],
  liveLink: "https://sri-entertainment-ui.netlify.app/", 
  githubLink: "https://github.com/msrilatha859-python/netflix-clone",
},  
  {
    title: "Food Recipe API App",
    description:
      "React app that fetches food data from a public REST API with search functionality.",
    image: "/api-food1.png",
    badges: [
      { label: "React", className: "bg-primary" },
      { label: "REST API", className: "bg-success" },
    ],
    liveLink: "https://sri-basic-api.netlify.app/",
    githubLink: "https://github.com/msrilatha859-python/basicapi",
  },
  {
    title: "Interactive React Event App",
    description:
      "Dynamic React application featuring randomized button positioning and conditional modal rendering.",
    image: "/fun-image1.png",
    badges: [
      { label: "React", className: "bg-primary" },
      { label: "Tailwind CSS", className: "bg-info text-dark" },
    ],
    liveLink: "https://funny-form.netlify.app/",
    githubLink: "https://github.com/msrilatha859-python/trending-form",
  },
  {
    title: "Python File Organizer Tool",
    description:
      "Python automation script that organizes files based on extensions.",
    image: "/file-org.png",
    badges: [
      { label: "Python", className: "bg-warning text-dark" },
      { label: "Automation", className: "bg-success" },
    ],
    githubLink: "https://github.com/msrilatha859-python/File-Organizer",
  },
];

  return (
    <section className="py-3 bg-light" id="projects">
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