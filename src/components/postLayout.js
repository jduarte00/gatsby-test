import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import Layout from "./layout"

export default class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data
    return (
      <Layout>
        <div>
          <h1>{markdownRemark.frontmatter.title}</h1>
          <h2>{markdownRemark.frontmatter.date}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: markdownRemark.html,
            }}
          />
        </div>
        <Link to="/">Go Home</Link>
      </Layout>
    )
  }
}

/* This export is the page query. Thanks to this, the data is accesible
on the component via props.data*/

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
