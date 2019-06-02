import { graphql } from "gatsby"

export const fullWidthImagePng2 = graphql`
  fragment fullWidthImagePng2 on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`


export const fixed250 = graphql`
  fragment fixed250 on File {
    childImageSharp {
      fixed(width: 250) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`
