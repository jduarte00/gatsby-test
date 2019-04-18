import React from "react"

import { StaticQuery, graphql, Link } from "gatsby"

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark {
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

function Archive() {
  return (
    <div>
      <StaticQuery
        query={POST_ARCHIVE_QUERY}
        render={({ allMarkdownRemark }) => (
          <>
            <aside>
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
            </aside>
          </>
        )}
      />
    </div>
  )
}

export default Archive
