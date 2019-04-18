import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

const ArchiveContainer = styled.aside`
  font-family: avenir;

  text-align: center;

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: darkgrey;
  }
`

function Archive() {
  return (
    <div>
      <StaticQuery
        query={POST_ARCHIVE_QUERY}
        render={({ allMarkdownRemark }) => (
          <>
            <ArchiveContainer>
              <h3>Archive</h3>
              <ul>
                {allMarkdownRemark.edges.map((edge, index) => (
                  <li key={index}>
                    {" "}
                    <Link to={`/posts${edge.node.frontmatter.slug}`}>
                      {" "}
                      {edge.node.frontmatter.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </ArchiveContainer>
          </>
        )}
      />
    </div>
  )
}

export default Archive
