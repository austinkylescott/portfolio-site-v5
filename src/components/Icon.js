import React from "react"
import HTML5Logo from "../icons/html5.svg"
import BootstrapLogo from "../icons/bootstrap.svg"
import CSS3Logo from "../icons/css3.svg"
import GatsbyLogo from "../icons/gatsby.svg"

const iconTypes = {
  html5: HTML5Logo,
  bootstrap: BootstrapLogo,
  css3: CSS3Logo,
  gatsby: GatsbyLogo,
}

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name]
  return <Icon className="techIcon" {...props} />
}

export default IconComponent
