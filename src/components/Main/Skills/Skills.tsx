import "./Skills.css";
export default function Skills() {
  const skills = [
    { img: "html-logo.png", name: "HTML" },
    { img: "css-logo.png", name: "CSS" },
    { img: "JavaScript-logo.png", name: "JavaScript" },
    { img: "TypeScript-logo.png", name: "TypeScript" },
    { img: "React-icon.svg.png", name: "REACT" },
  ];

  const skillElements = skills.map((skill) => {
    return (
      <li key={skill.name}>
        <img className="skill-icon" src={`./src/assets/${skill.img}`} />
        {skill.name}
      </li>
    );
  });

  return (
    <section className="page" id="skills">
      <h1 className="skills-title">Skills</h1>
      <ul className="skills-list">{skillElements}</ul>
    </section>
  );
}