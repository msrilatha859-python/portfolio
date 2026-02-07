import './experience.css'
function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <h2 className="section-title text-primary">Experience</h2>

        <div className="experience-card">
          <div className="experience-header">
            <h4>Developer</h4>
            <span className="date">Jan 2025 – Present</span>
          </div>
          <h5>Virinchi Technologies <span>• Hyderabad</span></h5>
          <ul>
            <li>Maintained and updated websites, blogs, and doctor profiles.</li>
            <li>Performed malware removal and implemented Wordfence security.</li>
            <li>Managed deployments and servers on DigitalOcean.</li>
          </ul>
        </div>

        <div className="experience-card">
          <div className="experience-header">
            <h4>Web Developer</h4>
            <span className="date">May 2024 – Jan 2025</span>
          </div>
          <h5>Marcamor Digital Marketing Agency <span>• Hyderabad</span></h5>
          <ul>
            <li>Handled domain research, purchase, configuration, and DNS setup.</li>
            <li>Deployed websites and resolved hosting & performance issues.</li>
            <li>Built e-commerce websites using WordPress and Shopify.</li>
            <li>Integrated Razorpay payment gateway.</li>
          </ul>
        </div>

        <div className="experience-card">
          <div className="experience-header">
            <h4>Web Developer</h4>
            <span className="date">Oct 2022 – May 2024</span>
          </div>
          <h5>ShootOrder Digital Marketing Agency <span>• Hyderabad</span></h5>
          <ul>
            <li>Developed responsive websites using HTML, CSS, JavaScript, and WordPress.</li>
            <li>Created dynamic forms with SQL database integration.</li>
            <li>Integrated Zoho CRM and managed email marketing campaigns.</li>
            <li>Ensured SEO-friendly, user-focused web development.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;