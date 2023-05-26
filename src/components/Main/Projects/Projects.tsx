import ProjectCard from "./ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <section className="page" id="projects">
      <h1>Projects</h1>
      <div>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
