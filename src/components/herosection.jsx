import './herosection.css';

function Herosection() {
  return (
    <div className="container py-5">
      <div className="banner text-center text-md-start">
        <div className="about p-3">
          <h1 className="heading fw-bold mb-3">
            Hi, I’m <span className="name-highlight">Srilatha</span>
          </h1>

          <h2 className="role mb-4">
            Full Stack Developer
          </h2>

          <p className="tagline mb-3">
            Full Stack Python | React | Django | WordPress | Shopify
          </p>

          <p className="description mb-4">
            Web Developer with 3 years of experience building responsive
            websites and scalable e-commerce solutions using modern web
            technologies.
          </p>

          <div className="buttons d-flex justify-content-center justify-content-md-start gap-3">
            <a
              href="/resume.pdf"
              className="btn btn-primary px-4"
              target="_blank"
              rel="noreferrer"
            >
              Resume ⬇️
            </a>

            <a
              href="#contact"
              className="btn btn-outline-secondary px-4"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;