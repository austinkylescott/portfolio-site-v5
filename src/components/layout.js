import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../scss/styles.scss"

export default function Layout(props) {
  return (
    <div className="container page-container">
      <Header />
      <div className="page-content">
        {props.children}
        {/* <Footer /> */}
      </div>
    </div>
  )
}
