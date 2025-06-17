const Home: React.FC = () => {
  return (
    <div>
      <div className="home-intro">
        <h1>Austin Orth</h1>
        <h2>DevSecOps & SRE Professional</h2>
        <p style={{ fontSize: "1.1rem", color: "var(--fg-light2)" }}>
          Your DevSecOps and SRE Guy, Creator of Pittsburgh Tech Beat, M.B.A. w/
          IT Mgmt. Focus, B.S. Comput. Sci., DJ, Producer, Husband
        </p>
      </div>

      <div className="content-card">
        <h3>About</h3>
        <p>Hey there! You've found my personal website.</p>

        <p>
          I'm a DevSecOps and Site Reliability Engineer with extensive
          experience in cloud infrastructure, Kubernetes, and building reliable
          systems at scale. I also have experience building an SRE program from
          the ground up and managing a team of SREs and Infrastructure
          Engineers. I live in Pittsburgh with my wife and two cats where I
          spend many days at the ballpark watching the Pirates lose.
        </p>

        <div className="connect-links">
          <h4>Connect with me:</h4>
          <div>
            <a
              href="https://github.com/austinorth"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/austinorth"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
