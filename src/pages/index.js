import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

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
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
