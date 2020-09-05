import React from "react"
import { Helmet } from "react-helmet"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import "../scss/styles.scss"

const IndexPage = () => (
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
    <Layout>
      <h1>Hi, I'm Austin</h1>
      <p>
        I am a full-stack web developer and improvisational theater teacher
        based in Gainesville, FL with an interest in building good looking and
        effective websites.
      </p>
      <p>
        You can check out <Link to="../work">my projects here</Link> or{" "}
        <a href="https://www.github.com/austinkylescott">
          view my github profile here
        </a>
        .
      </p>
      <Footer />
    </Layout>
  </>
)

export default IndexPage
