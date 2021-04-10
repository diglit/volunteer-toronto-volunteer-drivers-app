const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('temp-db.json')
const routes = require('./routes.json');
const middlewares = jsonServer.defaults()


// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use(jsonServer.rewriter(routes))
server.use(router)

// Add custom routes before JSON Server router
// server.get('/echo', (req, res) => {
//   res.jsonp(req.query)
// })

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server

// server.use((req, res, next) => {
//   if (req.method === 'POST') {
//     req.body.createdAt = Date.now()
//   }
//   // Continue to JSON Server router
//   next()
// })


server.listen(process.env.PORT || 4000, () => {
  console.log('JSON Server is running')
})