function About() {
  return (
    <section id="about">
      <div className="container my-5 py-3">
        <div className="row align-items-center">
          
          {/* Image */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <img 
              src="/dev.jpg" 
              alt="Developer"
              className="img-fluid rounded"
            />
          </div>

          {/* Content */}
          <div className="col-12 col-md-8 px-md-5">
            <h2 className="fw-bold mb-4 text-primary">About Me</h2>
            <p className="text-justify">
              I’m a Web Developer with 3 years of experience building responsive,
              user-friendly websites and web applications. I specialize in HTML,
              CSS, JavaScript, React, WordPress, Shopify, and Full-Stack Python
              development.
              <br /><br />
              I enjoy turning ideas into functional, high-performance solutions
              and continuously improving my skills to stay updated with modern
              web technologies. I’m passionate about writing clean code,
              optimizing performance, and delivering reliable digital
              experiences.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;