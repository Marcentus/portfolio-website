import ProjectCard, { CardProps } from "./ProjectCard/ProjectCard";
import "./Carousel.css";

export interface carouselProps {
  showCaseProjects: CardProps[];
}

export default function Carousel({ showCaseProjects }: carouselProps) {
  const showCaseProjectsElements = showCaseProjects.map((showCaseProject) => {
    return (
      <ProjectCard
        displayImage={showCaseProject.displayImage}
        projectLink={showCaseProject.projectLink}
        name={showCaseProject.name}
        description={showCaseProject.description}
        skillsUsed={showCaseProject.skillsUsed}
      />
    );
  });

  return <div className="carousel">{showCaseProjectsElements}</div>;
}
