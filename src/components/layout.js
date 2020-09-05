import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/Header"
import "../scss/styles.scss"

export default function Layout(props) {
  return (
    <div className="container page-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Austin Scott, Web Developer</title>
      </Helmet>
      <Header />
      <div className="page-content">
        {props.children}
        {/* <Footer /> */}
      </div>
    </div>
  )
}
