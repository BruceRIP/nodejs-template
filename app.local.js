const app = require('./server')
const port = process.env.PORT
const environment = process.env.NODE_ENV;
app.listen(port, () => console.log(`App is listening on port ${port} in ${environment} mode`))