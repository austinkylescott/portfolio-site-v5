import React from "react"
import Layout from "../components/Layout"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"

export default function Contact() {
  return (
    <Layout>
      <h1>Let's work together.</h1>
      <p>
        I am actively seeking new work. I would love to work with you on your
        next website or existing projects. Send me an email using the form
        below!
      </p>
      <ContactForm />
      <Footer />
    </Layout>
  )
}
