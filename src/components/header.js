import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Burger from "@animated-burgers/burger-arrow"
import "@animated-burgers/burger-arrow/dist/styles.css"

export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  const toggleNavDrawer = () => {
    setIsNavVisible(!isNavVisible)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)")
    mediaQuery.addListener(handleMediaQueryChange)
    handleMediaQueryChange(mediaQuery)

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange)
    }
  }, [])

  const handleMediaQueryChange = mediaQuery => {
    //mobile first, assume screen is small
    if (mediaQuery.matches) setIsSmallScreen(true)
    else setIsSmallScreen(false)
  }

  return (
    <header className="container Header">
      <Link className="logo" to="/">
        Austin Scott
      </Link>
      <Burger isOpen={isNavVisible} onClick={toggleNavDrawer} />
      <nav className={`navbar ${isSmallScreen && isNavVisible ? "open" : ""}`}>
        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}
