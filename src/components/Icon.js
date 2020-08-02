import React from "react"
import HTML5Logo from "../icons/html5.svg"
import CSSLogo from "../icons/css3.svg"
import BootstrapLogo from "../icons/bootstrap.svg"
import JavaScriptLogo from "../icons/javascript.svg"

const iconTypes = {
  html: HTML5Logo,
  bootstrap: BootstrapLogo,
  css: CSSLogo,
  javascript: JavaScriptLogo,
}

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name]
  return <Icon className="techIcon" {...props} />
}

export default IconComponent
