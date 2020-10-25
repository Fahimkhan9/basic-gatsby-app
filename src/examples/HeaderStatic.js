import React from "react"
import { StaticQuery, graphql } from "gatsby"

const HeaderStatic = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          info: siteMetadata {
            persn {
              age
              name
            }
            author
            data
            description
            title
          }
        }
      }
    `}
    render={data => <h2>{data.site.info.title}</h2> }
  ></StaticQuery>
)

export default HeaderStatic
