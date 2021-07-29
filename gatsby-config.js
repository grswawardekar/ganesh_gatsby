module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Ganesh Sawardekar",
  },
  plugins: ["gatsby-plugin-sass", 
  "gatsby-plugin-gatsby-cloud",
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
  {
    resolve: "gatsby-plugin-sitemap",
    options: {
      output: `/my-cool-sitemap.xml`,
    },
  },
],
};
