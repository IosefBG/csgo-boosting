// server.js
const https = require('http')
const { parse } = require('url')
const next = require('next')
const fs = require("fs")

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'kstuard.me'
const port = 3000
// when using middleware `hostname` and `port` must be provided below

const app = next({ dev, hostname, port })
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
// if (req.method == "OPTIONS") {
//   res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//   return res.status(200).json({});
// }

// next({ dev, hostname, port });
// });
const handle = app.getRequestHandler()

const options = {
  key: fs.readFileSync("./certificates/localhost.key"),
  cert: fs.readFileSync("./certificates/localhost.crt"),
  ca: [fs.readFileSync('./certificates/root.crt')]
};

// app.prepare().then(() => {
//   createServer((req, res) => {
//     // Be sure to pass `true` as the second argument to `url.parse`.
//     // This tells it to parse the query portion of the URL.
//     const parsedUrl = parse(req.url, true)
//     const { pathname, query } = parsedUrl

//     if (pathname === '/a') {
//       app.render(req, res, '/a', query)
//     } else if (pathname === '/b') {
//       app.render(req, res, '/b', query)
//     } else {
//       handle(req, res, parsedUrl)
//     }
//   }).listen(port, (err) => {
//     if (err) throw err
//     console.log(`> Ready on http://${hostname}:${port}`)
//   })
// })
app.prepare().then(() => {
  https.createServer(options, (req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    if (pathname === '/a') {
      app.render(req, res, '/a', query)
    } else if (pathname === '/b') {
      app.render(req, res, '/b', query)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})
