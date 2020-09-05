import React from "react"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import "../scss/styles.scss"

const IndexPage = () => (
  <Layout>
    <React.Fragment>
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
    </React.Fragment>
  </Layout>
)

export default IndexPage
