import React from "react"
import HTML5logo from "../icons/html5.svg"
import BootstrapLogo from "../icons/bootstrap.svg"

const iconTypes = { html5: HTML5logo, bootstrap: BootstrapLogo }

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name]
  return <Icon className="techIcon" {...props} />
}

export default IconComponent
