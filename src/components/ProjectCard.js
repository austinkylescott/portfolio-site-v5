import React from "react"
import IconComponent from "../components/Icon"

export default function ProjectCard(props) {
  // const techIcons = props.technologies.map((tech, index) => {
  //   return <Icon name={tech} key={index} />
  // })
  const techIcons = props.technologies.map((tech, index) => {
    console.log(tech)
    return <IconComponent name={tech} key={index} />
  })

  return (
    <div className="project-card">
      <h2>{props.name}</h2>
      {/* <img alt="thumbnail of project" src={props.thumbnail} /> */}
      <img alt="thumbnail of project" src={`${props.thumbnail}`} />
      {console.log(props.thumbnail)}
      <p>{props.desc}</p>
      <div className="project-links">
        <a className="button" href={props.github}>
          Github
        </a>
        <a className="button" href={props.liveLink}>
          Live Link
        </a>
      </div>

      <div className="technology">
        <h4>Technologies Used</h4>
        <div className="technologies">{techIcons}</div>
      </div>
    </div>
  )
}
