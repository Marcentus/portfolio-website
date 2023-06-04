import Carousel from "./Carousel/Carousel";
import { CardProps } from "./Carousel/ProjectCard/ProjectCard";
import "./Projects.css";

export default function Projects() {
  const showCaseProjects: CardProps[] = [
    {
      displayImage:
        "https://user-images.githubusercontent.com/56854034/242626444-45dc7d0e-90f0-49ff-bc0c-641c26ac9206.png",
      projectLink: "https://github.com/Marcentus/portfolio-website",
      name: "My Website!",
      description: "My portfolio website that you're viewing right now!",
      skillsUsed: [
        { altText: "TypeScript", imgSrc: "TypeScript-logo.png" },
        { altText: "HTML", imgSrc: "html-logo.png" },
        { altText: "CSS", imgSrc: "css-logo.png" },
      ],
    },
    {
      displayImage:
        "https://user-images.githubusercontent.com/56854034/243207344-cb9b56a5-a23f-4464-be68-bc5aed476a2a.png",
      projectLink: "https://github.com/Marcentus/weather-app",
      name: "Weather App",
      description: "Simple weather app using a weather api",
      skillsUsed: [
        { altText: "TypeScript", imgSrc: "TypeScript-logo.png" },
        { altText: "HTML", imgSrc: "html-logo.png" },
        { altText: "CSS", imgSrc: "css-logo.png" },
      ],
    },
    {
      displayImage: "",
      projectLink: "https://github.com/Marcentus/Calculator-App",
      name: "Calculator App",
      description: "Simple calculator app",
      skillsUsed: [
        { altText: "JavaScript", imgSrc: "JavaScript-logo.png" },
        { altText: "HTML", imgSrc: "html-logo.png" },
        { altText: "CSS", imgSrc: "css-logo.png" },
      ],
    },
  ];
  return (
    <section className="page" id="projects">
      <h1 className="project-page-title">Projects</h1>
      <div>
        <Carousel showCaseProjects={showCaseProjects} />
      </div>
    </section>
  );
}
