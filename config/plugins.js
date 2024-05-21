module.exports = () => ({
    graphql: {
        config: {
          endpoint: '/graphql',
          depthLimit: 100,
          amountLimit: 10000,
        },
    },
    "apollo-sandbox": {
        // enables the plugin only in development mode
        // if you also want to use it in production, set this to true
        // keep in mind that graphql playground has to be enabled
        enabled: process.env.NODE_ENV === "production" ? false : true,
        // endpoint: "https://tunneled-strapi.com/graphql", // OPTIONAL - endpoint has to be accessible from the browser
    },
});
