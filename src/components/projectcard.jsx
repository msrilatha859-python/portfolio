function ProjectCard({ image, title, description, badges, liveLink, githubLink }) {
  return (
    <div className="col-md-4">
      <div className="card h-100 shadow-lg border-0 rounded-4">
        
        <div className="card-body p-4 d-flex flex-column">
          <div className="p-1">
           <img src={image} className="img-fluid rounded mb-3"
      style={{ height: "200px", objectFit: "cover", width: "100%" }} />
           </div>
          <h5 className="card-title fw-semibold">{title}</h5>

          <p className="card-text flex-grow-1">
            {description}
          </p>

          <div className="mb-3">
            {badges.map((badge, index) => (
              <span
                key={index}
                className={`badge ${badge.className} me-1`}
              >
                {badge.label}
              </span>
            ))}
          </div>

          <div className="d-flex gap-2">
            <a href={liveLink} className="btn btn-outline-primary btn-sm">
              Live
            </a>
            <a href={githubLink} className="btn btn-outline-dark btn-sm">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;