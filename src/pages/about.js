import React from "react"
import Layout from "../components/Layout"
import Footer from "../components/Footer"

export default function about() {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>
        I'm a Rochester, NY native now living in Gainesville, FL. Despite just
        recently beginning my career in web development, coding has been a
        constant throughout my life. I originally learned Java in high school.
        Then, I attended Rochester Institute of technology and spent my first 3
        years of college studying Game Design & Development.
      </p>
      <p>
        Oddly, my interests took a wild shift. I switched majors entirely and
        went on to graduate with a degree in Advertising & Public Relations.
        Since graduating, I went on to work in all kinds of fields, including
        retail management, faculty recruitment, and human resources. One thing I
        realized was that in the Digital Age, every job involves working at a
        computer and{" "}
        <strong>
          <em>
            I enjoyed my time a lot more back when I was telling it what to do
          </em>
        </strong>{" "}
        instead of writing papers and reports.
      </p>
      <p>
        I decided to return to programming, which was my original passion and
        had much better long term career prospects. I signed up with{" "}
        <a href="https://www.teamtreehouse.com" target="__blank">
          Team Treehouse
        </a>{" "}
        and completed their Full Stack JavaScript Techdegree program.
      </p>
      <p>
        Outside of work, under normal circumstances, you might find me teaching
        an improvisational theater class or performing in comedy shows with my
        group,{" "}
        <a href="https://www.hitheater.com" target="__blank">
          House Improv
        </a>
        . Lately, I've just been home enjoying my puppy and playing lots of
        video games!
      </p>
      <p>
        I can't wait to talk to you about working as your next web developer.
      </p>

      <Footer />
    </Layout>
  )
}
