import React from "react"
import data from "../data/data.json"
import ProjectCard from "../components/ProjectCard"

export default function ProjectContainer() {
  const projects = data.projects
  const projectCards = projects.map(project => {
    return (
      <ProjectCard
        key={project.id}
        name={project.project_name}
        desc={project.description}
        technologies={project.technologies}
        thumbnail={project.thumbnail}
        github={project.github_link}
        liveLink={project.live_link}
      />
    )
  })
  return <div className="project-container">{projectCards}</div>
}
