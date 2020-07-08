import React from "react"
import HTML5logo from "../images/icons/html5.svg"
import BootstrapLogo from "../images/icons/bootstrap.svg"

const iconTypes = { html5: HTML5logo, bootstrap: BootstrapLogo }

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name]
  return <Icon class="techIcon" {...props} />
}

export default IconComponent
