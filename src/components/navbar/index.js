import React, { useState } from "react"
import styles from "./navbar.module.css"
import { graphql, StaticQuery, Link, navigate } from "gatsby"
import Img from "gatsby-image"
import Peorle from "../../images/peorle.svg"

const {
  // main_nav,
  logo,
  navbar,
  container,
  tab_container,
  logo_container,
  tab_item,
  logo_hidden,
  mobile_container,
  menu_mobile,

  // menu_mobile,
  // toggle_button,
  //   menu_mobile,
  //   mobile_item,
  //   nav_links,
  // navbar_toggle,
} = styles
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const toggleStyle = toggle ? { display: "block" } : { display: "none" }
  const navigateTo = path => {
    setToggle(false)
    navigate(path)
  }
  return (
    <React.Fragment>
      <nav className={navbar}>
        {/* <span className={toggle_button}>
          <p onClick={() => setToggle(!toggle)}> I </p>
        </span> */}
        <div className={container}>
          <div className={logo_container}>
            <Link className={logo_hidden} to="/">
              <Test name="logo" height={52} />
            </Link>
            <Link className={logo} style={{ marginLeft: "1.5rem" }} to="/">
              <img
                src={Peorle}
                alt="peorle"
                height={20}
                style={{ marginTop: 8 }}
              />
            </Link>
          </div>
          <div className={tab_container}>
            <p
              className={tab_item}
              style={{ marginLeft: "2rem" }}
              onClick={() => navigate("/")}
            >
              หน้าหลัก
            </p>
            <p
              className={tab_item}
              style={{ marginLeft: "2rem" }}
              onClick={() => navigate("/why-peorle")}
            >
              ทำไมต้องพีออร์เล่
            </p>
            <p
              className={tab_item}
              style={{ marginLeft: "2rem" }}
              onClick={() => navigate("/ingredients")}
            >
              ส่วนประกอบ
            </p>
            <p
              className={tab_item}
              style={{ marginLeft: "2rem" }}
              onClick={() => navigate("/promotion")}
            >
              โปรโมชั่น
            </p>
            <p
              className={tab_item}
              style={{ marginLeft: "2rem" }}
              onClick={() => navigate("/what_is_collagen")}
            >
              คอลลาเจนคืออะไร
            </p>
            <p
              className={tab_item}
              onClick={() => navigate("/review")}
              style={{ marginLeft: "2rem" }}
            >
              รีวิว
            </p>
            <p className={tab_item} style={{ marginLeft: "2rem" }}>
              ตัวแทนผู้จัดจำหน่าย
            </p>
          </div>
          <div className={mobile_container} onClick={() => setToggle(!toggle)}>
            <div
              style={{ width: 20, height: 4, borderTop: "2px solid black" }}
            />
            <div
              style={{ width: 20, height: 4, borderTop: "2px solid black" }}
            />
            <div
              style={{ width: 20, height: 4, borderTop: "2px solid black" }}
            />
          </div>
        </div>
      </nav>
      <ul className={menu_mobile} style={toggleStyle}>
        <li onClick={() => navigateTo("/")}> หน้าหลัก </li>
        <li onClick={() => navigateTo("/why-peorle")}> ทำไมต้องพีออร์เล่ </li>
        <li onClick={() => navigateTo("/ingredients")}> ส่วนประกอบ </li>
        <li onClick={() => navigateTo("/what_is_collagen")}>คอลลาเจนคืออะไร</li>
        <li onClick={() => navigateTo("/promotion")}> โปรโมชั่น </li>
        <li onClick={() => navigateTo("/review")}> รีวิว </li>
        <li onClick={() => navigateTo("/")}> ตัวแทนผู้จัดจำหน่าย </li>
      </ul>
    </React.Fragment>
  )
}
const Test = ({ name, height }) => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "logo.png" }) {
          ...fixed250
        }
      }
    `}
    render={data => (
      <Img
        fixed={data[name].childImageSharp.fixed}
        style={{ height: height, marginTop: 8 }}
        // className={className}
        // style={style}
      />
    )}
  />
)

export default Navbar
