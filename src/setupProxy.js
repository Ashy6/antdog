const proxy = require('http-proxy-middleware')//引入http-proxy-middleware，react脚手架已经安装

module.exports = function (app) {
    app.use(
        proxy.createProxyMiddleware('/data', { //遇见/api1前缀的请求，就会触发该代理配置
            target: 'https://a.antdog.com', //请求转发给谁
            changeOrigin: true,//控制服务器收到的请求头中Host的值
            // pathRewrite: { '^/api': '' } //重写请求路径，下面有示例解释
        }),
    )
}