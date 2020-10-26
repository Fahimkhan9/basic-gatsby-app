/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata:{
title:"hello world",
description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex tempora, officiis rerum voluptatum beatae vero libero! Sint iure eum iusto!",
author:"Fahim Alif",
data:['itwm1',"item2"],
persn:{name:"alif",age:12},
  },
  /* Your site config here */
  plugins: [`gatsby-plugin-styled-components`,
  `gatsby-transformer-sharp`,
   `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },
],
}
