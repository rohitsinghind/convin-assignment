module.exports = function(app) {  app.use(    createProxyMiddleware(["/api", , "/otherApi"], { target: "https://reqres.in" })  );};