import React from "react"
import Header from "../header"
import Navbar from "../navbar"
import Footer from "../footer"

export default ({ children }) => (
  <React.Fragment>
    <Header />
    <Navbar />
    <div className="main_container">{children}</div>
    <Footer />
  </React.Fragment>
)
