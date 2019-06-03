import React from "react"
import Container from "../components/container"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const Promotion = () => (
  <Container>
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontWeight: 400 }}> โปรโมชั่น </h1>
      <div style={{ width: "80vw", margin: "24px auto", maxWidth: 800 }}>
        <Image />
      </div>
    </div>
  </Container>
)

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        promotion: file(relativePath: { eq: "promotion-image.jpg" }) {
          ...fullWidthImage
        }
      }
    `}
    render={data => (
      <Img
        fluid={data["promotion"].childImageSharp.fluid}
        style={{ display: "block" }}
      />
    )}
  />
)

export default Promotion
