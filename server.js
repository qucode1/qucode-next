const express = require('express')
const next = require('next')
const mongoose = require('mongoose')
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// require('dotenv').config({ path: 'variables.env' });
const dev = process.env.NODE_ENV !== 'production'
const variables = require('./variables.json')

const app = next({ dev })
const handle = app.getRequestHandler()
const database = variables.DATABASE
const port = variables.PORT

mongoose.connect(database, {
  useMongoClient: true
})
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});


app.prepare()
.then(() => {
  const server = express()

  server.use(session({
    secret: variables.SECRET,
    key: variables.KEY,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  }));

  server.get('/about', (req, res) => {
    const actualPage = '/about'
    app.render(req, res, actualPage, {})
  })

  server.get('/portfolio', (req, res) => {
    const actualPage = '/portfolio'
    app.render(req, res, actualPage, {})
  })

  server.get('/contact', (req, res) => {
    const actualPage = '/contact'
    app.render(req, res, actualPage, {})
  })

  server.get('/', (req, res) => {
    const actualPage = '/index'
    app.render(req, res, actualPage, {})
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on Port:${port}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
