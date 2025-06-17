const Resume: React.FC = () => {
  return (
    <div>
      <h1>Resume</h1>

      <div className="resume-section">
        <h2>Work Experience</h2>

        <div className="job">
          <h3>Machinify, Palo Alto, CA (Remote)</h3>
          <h4>Senior DevOps Engineer</h4>
          <div className="job-dates">March 2025 - Present</div>
          <ul>
            <li>
              Using Helm, ArgoCD, and Crossplane to operate and maintain 3 AWS
              EKS clusters in a multi-account configuration with hundreds of
              nodes ingesting and serving petabytes of data.
            </li>
            <li>
              Wielding Consul, Ansible, and Docker to refactor and migrate Java
              applications from VMs to Kubernetes.
            </li>
            <li>
              Writing Python tooling to deploy and update custom PyTorch AI/ML
              models automatically.
            </li>
            <li>
              Participating in the on-call rotation providing 24/7 production
              support leveraging Grafana, Loki, Alloy, Mimir, Prometheus, and
              Tempo for observability.
            </li>
            <li>
              Leveraging Zed and Claude 4 to accelerate personal engineering
              capabilities in all of the above areas.
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>MoveHQ, Columbus, OH (Remote)</h3>
          <h4>Senior DevOps Engineer II</h4>
          <div className="job-dates">June 2024 - March 2025</div>
          <ul>
            <li>
              Used Helm, FluxCD, Terraform (OpenTofu), and Spacelift to manage
              and develop 10+ Kubernetes clusters on AWS GovCloud with FedRAMP
              compliance.
            </li>
            <li>
              Wrote and maintained GitHub Actions to build and ship Docker
              images, AMIs, and Cloudflare Worker code bundles, as well as
              running tests across various codebases.
            </li>
            <li>
              Was part of the on-call rotation providing 24/7 production support
              using DataDog to setup logging, monitoring, and alerting
              capabilities.
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Niche.com, Pittsburgh, PA (Remote)</h3>
          <h4>Senior Manager, Reliability & Infrastructure Engineering</h4>
          <div className="job-dates">March 2024 – June 2024</div>
          <h4>Manager, Site Reliability Engineering</h4>
          <div className="job-dates">January 2021 – March 2024</div>
          <ul>
            <li>
              Created alignment across the company towards the adoption of
              GitOps, continuous delivery, observability tooling, and a
              reliability framework.
            </li>
            <li>
              Planned the project for and promoted adoption of FluxCD GitOps
              deployment tooling.
            </li>
            <li>
              Managed a team of four SREs and two Infrastructure Engineers,
              hired and onboarded each.
            </li>
            <li>Built out security and cost reporting for team operations.</li>
          </ul>

          <h4>Site Reliability Engineer</h4>
          <div className="job-dates">July 2019 – January 2021</div>
          <h4>Infrastructure Engineer</h4>
          <div className="job-dates">July 2018 – July 2019</div>
          <h4>Associate Infrastructure Engineer</h4>
          <div className="job-dates">August 2017 – July 2018</div>
          <ul>
            <li>
              Led the effort to migrate the company's build processes from
              Jenkins to GitHub Actions.
            </li>
            <li>
              Migrated Golang backend from EC2 managed with Terraform to
              Kubernetes with kOps and Helm.
            </li>
            <li>
              Participated in and set standards for 24/7 on-call rotation and
              incident response.
            </li>
            <li>
              Wrote several tools in Bash to make deployments easier for teams.
            </li>
            <li>
              Set up a bare metal Postgres instance and tuned from scratch, then
              automated surrounding data transport processes w/ Docker, Golang,
              Python, and AWS Lambda serverless functions.
            </li>
            <li>
              Coded and maintained Terraform-managed Production web application
              stack in AWS.
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>PPG Industries, Pittsburgh, PA</h3>
          <h4>IT Customer Support Analyst</h4>
          <div className="job-dates">January 2017 – August 2017</div>
        </div>

        <div className="job">
          <h3>University of Pittsburgh GSPIA IT Dept., Pittsburgh, PA</h3>
          <h4>Student Assistant</h4>
          <div className="job-dates">September 2016 – December 2016</div>
        </div>

        <div className="job">
          <h3>Waynesburg University ITS Helpdesk, Waynesburg, PA</h3>
          <h4>ITS Student Support Specialist</h4>
          <div className="job-dates">September 2012 – May 2016</div>
        </div>

        <div className="job">
          <h3>
            FBI Center (CJIS), Clarksburg, WV and Pittsburgh FBI Field Office
          </h3>
          <h4>Student Workforce Trainee</h4>
          <div className="job-dates">June 2015 – April 2016</div>
        </div>
      </div>

      <div className="resume-section">
        <h2>Education</h2>

        <div className="job">
          <h3>Master of Business Administration</h3>
          <h4>Southern New Hampshire University</h4>
          <ul>
            <li>Graduated September 2023</li>
            <li>Focus in IT Management</li>
            <li>Honor Roll; GPA 4.0</li>
          </ul>
        </div>

        <div className="job">
          <h3>9 Master's Level Computer Science Credits</h3>
          <h4>University of Pittsburgh</h4>
          <ul>
            <li>Awarded December 2016</li>
          </ul>
        </div>

        <div className="job">
          <h3>Bachelor of Science in Computer Science</h3>
          <h4>Waynesburg University</h4>
          <ul>
            <li>Graduated Summa Cum Laude with Honors in May of 2016</li>
            <li>Minor: Music</li>
            <li>Academic Dean's List; GPA 3.96</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h2>Skills</h2>

        <div style={{ marginBottom: "1.5rem" }}>
          <h3>Main Languages</h3>
          <div style={{ marginBottom: "1rem" }}>
            <h4>Proficient</h4>
            <ul>
              <li>Bash</li>
              <li>HCL</li>
              <li>Helm chart YAML</li>
              <li>Kubernetes YAML</li>
              <li>Python</li>
            </ul>
          </div>

          <div>
            <h4>Familiar</h4>
            <ul>
              <li>Golang</li>
              <li>JavaScript</li>
              <li>Ruby</li>
              <li>Rust</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h3>My Favorite Tools</h3>
          <ul>
            <li>Docker</li>
            <li>GitHub Actions</li>
            <li>Helm</li>
            <li>Kubernetes in AWS EKS</li>
            <li>Prometheus</li>
            <li>Terraform</li>
          </ul>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h3>Managerial</h3>
          <ul>
            <li>Agile ceremonies</li>
            <li>Cost tracking and reporting</li>
            <li>Change management</li>
            <li>Mentorship and coaching</li>
            <li>Project management</li>
          </ul>
        </div>

        <div>
          <h3>Software I've Used Regularly/Maintained</h3>
          <ul>
            <li>Apache Kafka in AWS MSK</li>
            <li>AWS EC2, Lambda, RDS, VPC</li>
            <li>Datadog</li>
            <li>kOps</li>
            <li>Grafana Cloud</li>
            <li>NGINX</li>
            <li>Postgres</li>
            <li>Sumo Logic</li>
            <li>Ubuntu 22.04</li>
            <li>Vim</li>
            <li>VSCode</li>
            <li>Wiz Cloud Security</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h2>Service Activities</h2>
        <ul>
          <li>
            Volunteer staff at Deer Valley YMCA Camp, occasionally on weekends,
            2010 – present
          </li>
          <li>
            Volunteer speaker at Waynesburg University Computer Science Club,
            2024 – present
          </li>
        </ul>
      </div>

      <div className="resume-section">
        <h2>Scholarships and Awards</h2>
        <ul>
          <li>NFFTY Audience Award for Younger Finland film, October, 2018</li>
          <li>Quality Champion at PPG Global IT Service Desk, May, 2017</li>
          <li>
            Waynesburg University Presidential Honor Scholarship, 2012 – 2016
          </li>
          <li>
            Waynesburg University Computer Science Departmental Scholarship,
            2012 – 2016
          </li>
          <li>
            Made a Difference; Deer Valley YMCA Family Camp Summer Staff Award,
            2014
          </li>
          <li>
            Academic Excellence Award from the Computer Science Department of
            Waynesburg University, 2014
          </li>
          <li>
            Rookie of the Year; Deer Valley YMCA Family Camp Summer Staff Award,
            2013
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
