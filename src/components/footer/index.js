import React from "react"
import styles from "./footer.module.css"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
const {
  buy_container,
  buy,
  button_group,
  secondary,
  contact_container,
} = styles
const Footer = () => (
  <React.Fragment>
    <div className={buy_container}>
      <h2 className={buy}>
        สั่งซื้อวันนี้ ส่งฟรีถึงบ้าน! 1 กล่องเพียง <strong> 690 บาท </strong>
        เท่านั้น
      </h2>
      <div className={button_group}>
        <button className="primary" style={{ marginTop: 0 }}>
          <span style={{ fontWeight: 160, fontSize: "1.2em" }}>โปรโมชั่น</span>
        </button>
        <button className={secondary}>
          <span style={{ fontWeight: 160, fontSize: "1.2em" }}>สั่งซื้อ</span>
        </button>
      </div>
    </div>
    <div className={contact_container}>
      <div className="main_container">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h4 style={{ marginTop: 0, marginBottom: 4 }}> ติดต่อเรา </h4>
            <p style={{ marginTop: 0, marginBottom: 4 }}> 081-234-5678 </p>
            <div
              style={{ marginTop: 0, marginBottom: 4, verticalAlign: "middle" }}
            >
              @lineid <Image />
            </div>
          </div>
          <div>
            <h4 style={{ marginTop: 0, marginBottom: 4 }}> Follow </h4>
            <p style={{ marginTop: 0, marginBottom: 4 }}> facebookusername</p>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
)

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        add_friend: file(relativePath: { eq: "add-friend.png" }) {
          ...fixed24
        }
      }
    `}
    render={data => (
      <Img
        fixed={data["add_friend"].childImageSharp.fixed}
        style={{ display: "inline-block", verticalAlign: "middle" }}
      />
    )}
  />
)
export default Footer
