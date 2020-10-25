import React from 'react'
import Header from '../examples/Header'
import Layout from '../components/layout'
import HeaderStatic from '../examples/HeaderStatic'
import {graphql} from 'gatsby'
const examples = (props) => {
    console.log(props);
    return (
      
    <Layout>
      <Header/>
      <HeaderStatic/>
            <h1>this is example page</h1>
    <h4>{props.data.site.info.author}</h4>
    </Layout>
      
        
    )
}
export const data = graphql`
query MyQuery {
  site {
    info:siteMetadata {
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
`
export default examples
