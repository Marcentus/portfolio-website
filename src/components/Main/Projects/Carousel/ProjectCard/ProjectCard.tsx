import "./ProjectCard.css";
export interface CardProps {
  displayImage: string;
  projectLink: string;
  name: string;
  description: string;
  skillsUsed: { altText: string; imgSrc: string }[];
}

export default function ProjectCard({
  displayImage,
  projectLink,
  name,
  description,
  skillsUsed,
}: CardProps) {
  const skillsUsedElements = skillsUsed.map((skillUsed) => {
    return (
      <li>
        <img
          className="card-skill-icons"
          src={`./src/assets/${skillUsed.imgSrc}`}
          alt={skillUsed.altText}
        />
      </li>
    );
  });
  return (
    <div className="card">
      <a href={projectLink} target="_blank" className="project-preview">
        <img className="project-preview-image" src={displayImage} />
      </a>
      <div className="card-info">
        <h1 className="card-name">{name}</h1>
        <p className="card-description">{description}</p>
        <ul className="skills-list">{skillsUsedElements}</ul>
      </div>
    </div>
  );
}
