import React from "react"
import HTML5Logo from "../icons/html5.svg"
import CSSLogo from "../icons/css3.svg"
import BootstrapLogo from "../icons/bootstrap.svg"
import JavaScriptLogo from "../icons/javascript.svg"
import JqueryLogo from "../icons/jquery.svg"
import ReactLogo from "../icons/reactJS.svg"
import NodeLogo from "../icons/node-dot-js.svg"
import HerokuLogo from "../icons/heroku.svg"
import NetlifyLogo from "../icons/netlify.svg"
import GithubLogo from "../icons/github.svg"
import ExpressLogo from "../icons/expressjs.svg"
import SQLiteLogo from "../icons/sqlite.svg"

const iconTypes = {
  html: HTML5Logo,
  bootstrap: BootstrapLogo,
  css: CSSLogo,
  javascript: JavaScriptLogo,
  react: ReactLogo,
  node: NodeLogo,
  heroku: HerokuLogo,
  netlify: NetlifyLogo,
  github: GithubLogo,
  jquery: JqueryLogo,
  express: ExpressLogo,
  sqlite: SQLiteLogo,
}

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name]
  return <Icon className="techIcon" {...props} />
}

export default IconComponent
