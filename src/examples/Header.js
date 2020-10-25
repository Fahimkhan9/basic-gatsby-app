import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  let {
    site: {
      info: {
        title,
        persn: { name },
      },
    },
  } = useStaticQuery(graphql`
   query Firstquery {
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
  `)
//   console.log(data)
  return (
    <div>
      {/* <h1>title:{data.site.siteMetadata.title}</h1>
          <h1>title:{data.site.siteMetadata.persn.name}</h1> */}
      <h2>title {title}</h2>
      <h2>name {name}</h2>
    </div>
  )
}

export default Header
