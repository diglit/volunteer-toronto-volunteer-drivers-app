module.exports = {
  target: 'serverless',
  basePath: process.env.NODE_ENV === 'production' ? '/web-client' : ''
}