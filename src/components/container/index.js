import React from "react"
import Header from "../header"
import Navbar from "../navbar"

export default ({ children }) => (
  <React.Fragment>
    <Header />
    <Navbar />
    {children}
  </React.Fragment>
)
