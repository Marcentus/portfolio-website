import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <nav>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a
          className="github-logo"
          href="https://github.com/Marcentus"
          target="_blank"
        >
          <img
            className="nav-icon-link"
            src="../assets/github-logo.svg"
            alt="github-link"
          />
        </a>
        <a
          className="linkedin-logo"
          href="https://www.linkedin.com/"
          target="_blank"
        >
          <img
            className="nav-icon-link"
            src="../assets/linkedin-logo.svg"
            alt="linkedin-link"
          />
        </a>
      </nav>
    </header>
  );
}
