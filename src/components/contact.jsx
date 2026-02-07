function Contact() {
  return (
    <section id="contact" className="py-5 bg-black">
      <div className="container text-center text-white">

        {/* Heading */}
        <h2 className="fw-bold mb-2">
          Let’s Connect
        </h2>
        <p className="mb-4">
          Open to opportunities and collaborations
        </p>
    <p style={{fontSize:"12px"}}>Drop me an email</p>
    <p className="mb-4">
            📩 <strong>Email: </strong>
            <a
              href="mailto:msrilatha859@email.com"
              className="text-decoration-none"
            >
                  msrilatha859@email.com
            </a>
          </p>
       <hr/>
       
          <p className="mb-2 fs-6">
            <a href="tel:9963465321" class="text-decoration-none">📞 <strong>Phone:</strong>{" "}
            <span className="text-white">+91 9963465321</span></a>
          </p>

          
          <div className="d-flex flex-wrap justify-content-center gap-3">
    
            <a
              href="/resume.pdf"
              className="btn btn-primary px-4"
              target="_blank"
              rel="noreferrer"
            >
              Resume ⬇️
            </a>

            <a
              href="https://github.com/msrilatha859-python"
              className="btn btn-outline-success px-4"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/srilatha-miyyapuram/"
              className="btn btn-outline-primary px-4"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
    
          </div>
        </div>
      
    </section>
  );
}

export default Contact;