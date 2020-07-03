import React from "react"
import { Formik } from "formik"
import * as Yup from "yup"

export default function ContactForm() {
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(30, "Must be 30 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        message: Yup.string()
          .max(500, "Message is too long")
          .required("Required"),
      })}
      onSubmit={(values, actions) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact-form", ...values }),
        })
          .then(() => {
            alert("Success")
            actions.resetForm()
          })
          .catch(() => {
            alert("Error")
          })
          .finally(() => actions.setSubmitting(false))
      }}
    >
      {formik => (
        <form
          name="contact-form"
          data-netlify="true"
          className="contact-form"
          action="POST"
          onSubmit={formik.handleSubmit}
        >
          <label htmlFor="name">
            Name
            <input id="name" {...formik.getFieldProps("name")} />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </label>
          <label htmlFor="email">
            Email Address
            <input id="email" {...formik.getFieldProps("email")} />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </label>

          <label htmlFor="message">
            Message
            <textarea id="message" {...formik.getFieldProps("message")} />
            {formik.touched.message && formik.errors.message ? (
              <div className="error">{formik.errors.message}</div>
            ) : null}
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  )
}
