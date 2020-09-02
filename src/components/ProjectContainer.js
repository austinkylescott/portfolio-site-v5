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
  return (
    <div className="project-container">
      {projectCards}

      {/* <div className="project-card">
          <h2>Library App</h2>
          <img
            alt="mockup of project"
            src="https://via.placeholder.com/300x200"
          />
          <p>
            A React app with a custom API and back end complete with mySQL
            database.
          </p>
          <h4>Technologies Used</h4>
          <div class="technologies">
            <Icon name="html5" />
            <Icon name="bootstrap" />
            <img
              src="https://via.placeholder.com/50x50"
              alt="technology icon"
            />
            <img
              src="https://via.placeholder.com/50x50"
              alt="technology icon"
            />
            <img
              src="https://via.placeholder.com/50x50"
              alt="technology icon"
            />
            <img
              src="https://via.placeholder.com/50x50"
              alt="technology icon"
            />
          </div>
        </div> */}
    </div>
  )
}
