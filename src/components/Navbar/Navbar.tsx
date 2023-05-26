import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <nav>
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact" className="contact">
          Contact
        </a>
      </nav>
    </header>
  );
}
