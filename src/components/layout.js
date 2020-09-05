import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/Header"
import "../scss/styles.scss"

export default function Layout(props) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Austin Scott is a talented full stack web developer available for hire. This is his portfolio of HTML, CSS, Javascript, and React projects. Contact him to discuss a job or project. He wants to work with you."
        />
        <link rel="canonical" href="https://www.austinscott.dev" />
        <title>Austin Scott, Web Developer</title>
      </Helmet>
      <div className="container page-container">
        <Header />
        <div className="page-content">
          {props.children}
          {/* <Footer /> */}
        </div>
      </div>
    </>
  )
}
