import React from "react"
import Img from "gatsby-image"
import Container from "../components/container"
import { StaticQuery } from "gatsby"

const Review = () => (
  <Container>
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontWeight: 400 }}> รีวิวสินค้า </h1>
      <Image name="review_1" />
      <Image name="review_2" />
      <Image name="review_3" />
      <Image name="review_4" />
      <Image name="review_5" />
    </div>
  </Container>
)

const Image = ({ name }) => (
  <StaticQuery
    query={graphql`
      query {
        review_1: file(relativePath: { eq: "review_1.jpg" }) {
          ...fullWidthImage
        }
        review_2: file(relativePath: { eq: "review_2.jpg" }) {
          ...fullWidthImage
        }
        review_3: file(relativePath: { eq: "review_3.jpg" }) {
          ...fullWidthImage
        }
        review_4: file(relativePath: { eq: "review_4.jpg" }) {
          ...fullWidthImage
        }
        review_5: file(relativePath: { eq: "review_5.jpg" }) {
          ...fullWidthImage
        }
      }
    `}
    render={data => (
      <Img
        fluid={data[name].childImageSharp.fluid}
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 12,
          marginBottom: 12,
          width: "80%",
          maxWidth: 400,
        }}
      />
    )}
  />
)

export default Review
