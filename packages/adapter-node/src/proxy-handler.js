import Proxy from 'http-proxy-middleware';

const proxyMiddleware = Proxy.createProxyMiddleware;
const baseUrl = process.env.VITE_PUBLIC_BASE_PATH || BASE_URL;

console.log('> Proxy Base URL: ' + baseUrl)

export const proxy = proxyMiddleware({
	changeOrigin: true,
	logLevel: 'debug',
	target: baseUrl,
	pathRewrite: { '^/api': '' }
})