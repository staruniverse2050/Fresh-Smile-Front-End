import  createProxyMiddleware from 'http-proxy-middleware';

module.exports = function(app) {
  app.use(
    '/FreshSmile',
    createProxyMiddleware({
      target: 'https://backfresh.azurewebsites.net',
      changeOrigin: true,
    })
  );
};
