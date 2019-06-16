import React, { useState } from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import LineIcon from "../../images/line_icon.png"
import PhoneIcon from "../../images/phone_icon.png"

const Modal = () => {
  const [isVisible, setIsVisible] = useState(true)
  const modalStyle = isVisible
    ? { display: "block", overflowY: "hidden" }
    : { display: "none" }
  return (
    <div
      className="modal"
      style={modalStyle}
      onClick={() => setIsVisible(false)}
    >
      <div
        className="modal_content"
        onClick={e => {
          e.stopPropagation()
        }}
      >
        <span className="close" onClick={() => setIsVisible(false)}>
          {" "}
          &times;
        </span>
        <h2 style={{ textAlign: "center", fontWeight: 450 }}>
          {" "}
          สมัครเป็นตัวแทนผู้จัดจำหน่าย{" "}
        </h2>
        <a href="http://line.me/ti/p/~@peorle">
          <Image />
        </a>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontSize: "1.12rem",
          }}
        >
          <p
            style={{
              marginTop: 8,
              marginBottom: 8,
              textAlign: "center",
            }}
          >
            <img src={LineIcon} alt="line" style={{ float: "left" }} />{" "}
            <a
              href="http://line.me/ti/p/~@peorle"
              style={{ marginLeft: 2, color: "black", paddingTop: 4 }}
            >
              {" "}
              @peorle{" "}
            </a>
          </p>
          <p style={{ marginTop: 8, marginBottom: 8, marginLeft: 12 }}>
            <img src={PhoneIcon} alt="phone" style={{ float: "left" }} />
            <a href="tel:0841962097" style={{ marginLeft: 2, color: "black" }}>
              {" "}
              084-196-2097{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        work_with_us: file(relativePath: { eq: "work_with_us.jpg" }) {
          ...fullWidthImage
        }
      }
    `}
    render={data => (
      <Img
        fluid={data["work_with_us"].childImageSharp.fluid}
        style={{ maxHeight: 670 }}
        // style={{ marginBottom: 20 }}
      />
    )}
  />
)

export default Modal
