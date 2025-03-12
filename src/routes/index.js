const UserRouter = require('./UserRouter')
const test = require('./test')

const routes = (app) => {
    app.use('/api/user', UserRouter)
    app.use('/', test)
}

module.exports = routes