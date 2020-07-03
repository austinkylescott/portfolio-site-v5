import React from "react"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import "../scss/styles.scss"

const IndexPage = () => (
  <Layout>
    <h1>Hi, I'm Austin</h1>
    <p>
      I am a full-stack web developer and improv comedian based in Gainesville,
      FL with an interest in building good looking and effective websites.
    </p>
    <p>
      You can view check out <Link to="../work">my projects</Link> here or{" "}
      <Link to="https://www.github.com/austinkylescott">
        view my github profile here
      </Link>
      .
    </p>
    <Footer />
  </Layout>
)

export default IndexPage
