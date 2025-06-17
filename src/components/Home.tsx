const Home: React.FC = () => {
  return (
    <div>
      <h1>Austin Orth</h1>
      <h2>DevSecOps & SRE Professional</h2>
      <p>
        Your DevSecOps and SRE Guy, Creator of Pittsburgh Tech Beat, M.B.A. w/
        IT Mgmt. Focus, B.S. Comput. Sci., DJ, Producer, Husband
      </p>

      <div style={{ marginTop: "2rem" }}>
        <h3>About</h3>
        <p>
          Hey there! You've found my personal website. It's pretty minimal, but
          have fun looking around!
        </p>

        <p>
          I'm a DevSecOps and Site Reliability Engineer with extensive
          experience in cloud infrastructure, Kubernetes, and building reliable
          systems at scale. I'm passionate about automation, monitoring, and
          helping teams deliver software safely and efficiently.
        </p>

        <div style={{ marginTop: "2rem" }}>
          <h4>Connect with me:</h4>
          <p>
            <a
              href="https://github.com/austinorth"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            {" | "}
            <a
              href="https://linkedin.com/in/austinorth"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
