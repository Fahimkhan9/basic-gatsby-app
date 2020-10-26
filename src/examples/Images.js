import React from 'react'
import {graphql,useStaticQuery} from 'gatsby'
import img from '../images/001-dental.png'
import Image from 'gatsby-image'

const Images = () => {
    const getimages = useStaticQuery(graphql`
      {
      fixed: file(relativePath: {eq: "dinner6.png"}) {
        childImageSharp {
          fixed(width: 300, height: 400,grayscale:true) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      fluid: file(relativePath: {eq: "001-dental.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    `)

    // console.log(getimages);
    return (
        
            <section>
<article>
    <h3>basic image</h3>
    <img src={img} alt="" />
</article>
<article>
    <h3>fixed imaeg</h3>
    <Image fixed={getimages.fixed.childImageSharp.fixed}/>
</article>
<article>
    <h3>fluid image</h3>
    <Image  fluid={getimages.fluid.childImageSharp.fluid} />
</article>
            </section>
          
    )
}

export default Images

