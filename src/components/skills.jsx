function Skills() {
  return (
    <div id="skills" className="container p-5 my-5 bg-black text-white rounded-4">
      <h3 className="mb-4">Technical Skills</h3>

      <div className="row">
        {/* Column 1 */}
        <div className="col-md-3 col-sm-6">
          <h6>Programming & Backend</h6>
          <ul>
            <li>Python</li>
            <li>Django</li>
            <li>REST APIs</li>
            <li>C, C++</li>
            <li>Core Java</li>
            <li>PHP</li>
            
          </ul>
        </div>

        {/* Column 2 */}
        <div className="col-md-3 col-sm-6">
          <h6>Frontend</h6>
          <ul>
            <li>React.js</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            
          </ul>
        </div>

        {/* Column 3 */}
        <div className="col-md-3 col-sm-6">
          <h6>Python Libraries & DB</h6>
          <ul>
            <li>NumPy</li>
            <li>Pandas</li>
            <li>Matplotlib</li>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="col-md-3 col-sm-6">
          <h6>CMS, Tools & Cloud</h6>
          <ul>
            <li>WordPress</li>            
            <li>WooCommerce</li>
            <li>Shopify</li>
            <li>Git & GitHub</li>
            <li>AWS (IAM, EC2 – Basics)</li>
            <li>SEO Basics</li>
            <li>Website Optimization</li>
            <li>Debugging & Deployment</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;