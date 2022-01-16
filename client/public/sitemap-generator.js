module.exports = {
  siteUrl: "https://retificauniao.com.br",
  generateRobotsTxt: true,
  exclude: ["/pt-br*", "/disallowed"],
  alternateRefs: [
    {
      href: "https://retificauniao.com.br/pt-br",
      hreflang: "pt-br",
    },
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: "/disallowed",
      },
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
