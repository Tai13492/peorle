import React from "react"
import styles from "./navbar.module.css"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
// import { fullWidthImagePng2 } from "../gatsby-images/index"

const {
  main_nav,
  logo,
  navbar,
  //   menu_mobile,
  //   mobile_item,
  //   nav_links,
  navbar_toggle,
} = styles
const Navbar = ({ data }) => {
  console.log(data)
  return (
    <React.Fragment>
      <nav className={navbar}>
        <span className={navbar_toggle} />
        <a className={logo} />
        <ul className={main_nav}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </nav>
      <Test name="logo" />
    </React.Fragment>
  )
}
const Test = ({ name }) => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "logo.png" }) {
          ...fixed250
        }
      }
    `}
    render={data =>
      console.log(data) || (
        <Img
          fixed={data[name].childImageSharp.fixed}
          // className={className}
          // style={style}
        />
      )
    }
  />
)

export default Navbar
