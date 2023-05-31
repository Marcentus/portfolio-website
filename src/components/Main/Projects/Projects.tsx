import Carousel from "./Carousel/Carousel";
import { CardProps } from "./Carousel/ProjectCard/ProjectCard";
import "./Projects.css";

export default function Projects() {
  const showCaseProjects: CardProps[] = [
    {
      displayImage:
        "https://user-images.githubusercontent.com/56854034/240024939-f6534491-7c54-491c-9f2a-1f9c165b3200.png",
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
      displayImage:
        "https://user-images.githubusercontent.com/56854034/240024939-f6534491-7c54-491c-9f2a-1f9c165b3200.png",
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
      displayImage:
        "https://user-images.githubusercontent.com/56854034/240024939-f6534491-7c54-491c-9f2a-1f9c165b3200.png",
      projectLink: "https://github.com/Marcentus/weather-app",
      name: "Weather App",
      description: "Simple weather app using a weather api",
      skillsUsed: [
        { altText: "TypeScript", imgSrc: "TypeScript-logo.png" },
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
