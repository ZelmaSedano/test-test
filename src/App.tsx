import './App.css'

function App() {


  return (
    <>
      <div className="resume" style={{backgroundColor: 'white'}}>
      {/* Header */}
      <div className="header">
        <h1>VAL SEDANO</h1>
        <h2>UI Engineer</h2>
        <div className="contact">
          <span>zvsedano@gmail.com</span> • 
          <span>224.482.8189</span> • 
          <span>Highland Park, IL</span> • 
          <span>github.com/zelmasedano</span>
        </div>
      </div>

      {/* Summary */}
      <div className="section">
        <h3>SUMMARY</h3>
        <p>Software Engineer with 4+ years building scalable applications.</p>
      </div>

      {/* Skills */}
      <div className="section">
        <h3>TECHNICAL SKILLS</h3>
        <div className="skills">
          <div><strong>Languages & Frameworks:</strong> JavaScript, Python, SQL, Ruby, React.js</div>
          <div><strong>Technologies:</strong> Jira, Jenkins CI/CD, Docker</div>
        </div>
      </div>

      {/* Experience */}
      <div className="section">
        <h3>EXPERIENCE</h3>
        
        <div className="job-1">
          <div className="job-header">
            <h4>Software Engineer II (Co-Founder)</h4>
            <span>WebCraft Labs</span>
            <span className="dates">2025-present</span>
          </div>
          <ul>
            <li>Designed & built the company's customer-facing website, establishing visual identity and technical foundation for all feature development.</li>
            <li>Established modern testing standards by integrating React Testing Library and Jest into the development workflow, ensuring component reliability across the application.</li>
            <li>Engineering scalable AI SEO architecture to automate content tagging and metadata generation for improved search ranking.</li>
          </ul>
        </div>

        <div className="job">
          <div className="job-header">
            <h4>Software Engineer</h4>
            <span>Startup Inc</span>
            <span className="dates">2019-2021</span>
          </div>
          <ul>
            <li>Developed full-stack web applications with React and Node.js</li>
            <li>Implemented CI/CD pipelines reducing deployment time by 70%</li>
            <li>Mentored 3 junior developers</li>
          </ul>
        </div>
      </div>

      {/* Projects - THE FUCKING IMPORTANT SECTION */}
      <div className="section">
        <h3>PROJECTS</h3>
        
        <div className="project">
          <div className="project-header">
            <h4>Cloud Task Manager</h4>
            <div className="links">
              <a href="#">Live Demo</a> | <a href="#">GitHub</a>
            </div>
          </div>
          <p className='project-description'>Full-stack task management app with real-time collaboration. React frontend, Node.js backend, WebSockets, MongoDB.</p>
          <div className="tech">React, Node.js, Socket.io, MongoDB, AWS</div>
        </div>

        <div className="project">
          <div className="project-header">
            <h4>E-commerce Analytics Dashboard</h4>
            <div className="links">
              <a href="#">GitHub</a>
            </div>
          </div>
          <p className='project-description'>Data visualization dashboard processing millions of sales records. Python backend with React frontend and D3.js charts.</p>
          <div className="tech">Python, Django, React, D3.js, PostgreSQL</div>
        </div>

        <div className="project">
          <div className="project-header">
            <h4>DevOps CLI Tool</h4>
            <div className="links">
              <a href="#">npm</a> | <a href="#">GitHub</a>
            </div>
          </div>
          <p className='project-description'>Command-line tool for automating deployment scripts. Used by 500+ developers, 5K+ npm downloads.</p>
          <div className="tech">Node.js, Commander.js, Docker API, Bash</div>
        </div>
      </div>

      {/* Education */}
      <div className="section">
        <h3>EDUCATION</h3>
        <div className="education">
          <h4>Stanford University</h4>
          <div>MS Computer Science, 2018</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
