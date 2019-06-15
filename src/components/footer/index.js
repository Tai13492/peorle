import React from "react"
import styles from "./footer.module.css"
import { graphql, StaticQuery, navigate } from "gatsby"
import Img from "gatsby-image"
import FacebookIcon from "../../images/facebook_icon.png"
import LineIcon from "../../images/line_icon.png"
import PhoneIcon from "../../images/phone_icon.png"

const {
  buy_container,
  buy,
  button_group,
  secondary,
  contact_container,
  mobile_contact_container,
} = styles
const Footer = () => (
  <React.Fragment>
    <div className={buy_container}>
      <h2 className={buy}>
        สั่งซื้อวันนี้ ส่งฟรีถึงบ้าน! 1 กล่องเพียง <strong> 690 บาท </strong>
        เท่านั้น
      </h2>
      <div className={button_group}>
        <button
          className="primary"
          style={{ marginTop: 0 }}
          onClick={() => navigate("/promotion")}
        >
          <span style={{ fontWeight: 160, fontSize: "1.2em" }}>โปรโมชั่น</span>
        </button>
        <button
          className={secondary}
          onClick={() => {
            window.location.href = "http://line.me/ti/p/~@peorle"
          }}
        >
          <span style={{ fontWeight: 160, fontSize: "1.2em" }}>สั่งซื้อ</span>
        </button>
      </div>
    </div>
    <div className={contact_container}>
      <div className="main_container">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h4 style={{ marginTop: 0, marginBottom: 4 }}> ติดต่อเรา </h4>
            <a
              style={{ marginTop: 0, marginBottom: 4, color: "black" }}
              href="tel:0841962097"
            >
              084-196-2097
            </a>
            <div
              style={{ marginTop: 0, marginBottom: 4, verticalAlign: "middle" }}
              onClick={() =>
                (window.location.href = "http://line.me/ti/p/~@peorle")
              }
            >
              <span
                style={{ textDecoration: "underline" }}
                className="hoverable"
              >
                {" "}
                @peorle
              </span>{" "}
              <Image />
            </div>
          </div>
          <div>
            <h4 style={{ marginTop: 0, marginBottom: 4 }}>
              Follow us on Facebook
            </h4>
            <a
              style={{
                marginTop: 0,
                marginBottom: 4,
                textDecoration: "underline",
                color: "black",
              }}
              className="hoverable"
              href="https://www.facebook.com/peorleshop/"
            >
              @peorleshop
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className={mobile_contact_container}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          fontSize: 12,
          textAlign: "center",
        }}
      >
        <p style={{ marginTop: 8, marginBottom: 8 }}>
          <img src={FacebookIcon} alt="facebook" style={{ float: "left" }} />
          <a
            href="https://www.facebook.com/peorleshop/"
            style={{ color: "white", marginLeft: 2 }}
          >
            @peorleshop
          </a>
        </p>
        <p style={{ marginTop: 8, marginBottom: 8 }}>
          <img src={LineIcon} alt="line" style={{ float: "left" }} />{" "}
          <a
            href="http://line.me/ti/p/~@peorle"
            style={{ color: "white", marginLeft: 2 }}
          >
            {" "}
            @peorle{" "}
          </a>
        </p>
        <p style={{ marginTop: 8, marginBottom: 8 }}>
          <img src={PhoneIcon} alt="phone" style={{ float: "left" }} />
          <a href="tel:0841962097" style={{ color: "white", marginLeft: 2 }}>
            {" "}
            084-196-2097{" "}
          </a>
        </p>
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
        className="hoverable"
      />
    )}
  />
)
export default Footer
