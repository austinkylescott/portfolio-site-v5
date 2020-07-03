import React from "react"
import Layout from "../components/Layout"
import Footer from "../components/Footer"

export default function about() {
  return (
    <Layout>
      <h1>Work</h1>
      <div className="project-container">
        <div className="project-card">
          <h2>Library App</h2>
          <img
            alt="mockup of project"
            src="https://via.placeholder.com/300x200"
          />
          <p>
            A React app with a custom API and back end complete with mySQL
            database.
          </p>
        </div>
        <div className="project-card">
          <h2>Library App</h2>
          <img
            alt="mockup of project"
            src="https://via.placeholder.com/300x200"
          />
          <p>
            A React app with a custom API and back end complete with mySQL
            database.
          </p>
        </div>
        <div className="project-card">
          <h2>Library App</h2>
          <img
            alt="mockup of project"
            src="https://via.placeholder.com/300x200"
          />
          <p>
            A React app with a custom API and back end complete with mySQL
            database.
          </p>
        </div>
        <div className="project-card">
          <h2>Library App</h2>
          <img
            alt="mockup of project"
            src="https://via.placeholder.com/300x200"
          />
          <p>
            A React app with a custom API and back end complete with mySQL
            database.
          </p>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}
