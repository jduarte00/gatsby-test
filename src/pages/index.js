import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Listing from "../components/listing"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <StaticQuery
      query={graphql`
        query theQuery {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  title
                  slug
                  date(formatString: "YY-MM-DD")
                }
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <p>{data.allMarkdownRemark.edges[0].node.frontmatter.date}</p>
        </>
      )}
    />
    <Listing />
  </Layout>
)

export default IndexPage
