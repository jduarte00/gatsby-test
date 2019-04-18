import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM, DD YYYY")
            slug
          }
        }
      }
    }
  }
`

const Post = styled.article`
  font-family: monserrat;
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  a h2 {
    color: black;
    text-decoration: none;
    font-size: 1.2rem;
  }
  a {
    text-decoration: none;
    color: coral;
  }
  p {
    font-size: 0.8rem;
  }
`

export default function Listing() {
  return (
    <StaticQuery
      query={LISTING_QUERY}
      render={({ allMarkdownRemark }) =>
        allMarkdownRemark.edges.map(edge => (
          <Post key={edge.node.frontmatter.slug}>
            <Link to={`/posts${edge.node.frontmatter.slug}`}>
              <h2>{edge.node.frontmatter.title}</h2>
            </Link>

            <p>{edge.node.frontmatter.date}</p>
            <p>{edge.node.excerpt}</p>
            <Link to={`/posts${edge.node.frontmatter.slug}`}>Read More </Link>
          </Post>
        ))
      }
    />
  )
}
