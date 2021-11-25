module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "blog-gatsby",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "blogdata",
        fieldName: "blogdata",
        url: "https://api-us-east-1.graphcms.com/v2/ckwdoglay09en01z67diu5n6t/master",
      },
    }
  ],
};
