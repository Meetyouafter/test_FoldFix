const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app: any) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://robox-test.herokuapp.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api',
      },
    }),
  );
};
