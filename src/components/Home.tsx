const Home: React.FC = () => {
  return (
    <div>
      <div className="intro">
        <h1>Austin Orth</h1>
        <h2>DevSecOps & SRE Professional</h2>
        <p>
          Your DevSecOps and SRE Guy, Creator of Pittsburgh Tech Beat, M.B.A. w/
          IT Mgmt. Focus, B.S. Comput. Sci., DJ, Producer, Husband
        </p>

        <div className="connect-links">
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

      <div className="section">
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
      </div>
    </div>
  );
};

export default Home;
