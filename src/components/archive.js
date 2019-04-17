import React from "react"

import { StaticQuery, graphql } from "gatsby"

function Archive() {
  return (
    <div>
      <StaticQuery
        query={graphql`
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
        `}
        render={({ allMarkdownRemark }) => (
          <>
            <aside>
              <h3>Archive</h3>
              <ul>
                {allMarkdownRemark.edges.map((edge, index) => (
                  <li key={index}>
                    {" "}
                    <a href={edge.node.frontmatter.slug}>
                      {" "}
                      {edge.node.frontmatter.title}
                    </a>
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
