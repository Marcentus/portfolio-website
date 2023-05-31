import "./Home.css";

export default function Home() {
  const skills = [
    { img: "React-icon.svg.png", name: "REACT" },
    { img: "TypeScript-logo.png", name: "TypeScript" },
    { img: "JavaScript-logo.png", name: "JavaScript" },
    { img: "html-logo.png", name: "HTML" },
    { img: "css-logo.png", name: "CSS" },
  ];

  const skillElements = skills.map((skill) => {
    return (
      <li key={skill.name}>
        <img className="skill-icon" src={`./assets/${skill.img}`} />
      </li>
    );
  });

  return (
    <section className="page" id="home">
      <h1 className="my-name">Thomas Bouldin</h1>
      <h2 className="job-title">Frontend Developer</h2>
      <ul className="home-skill-icons">{skillElements}</ul>
    </section>
  );
}
