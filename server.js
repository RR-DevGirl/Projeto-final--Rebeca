const app = require('./app')
const port = process.env.PORT

app.listen(port, () => {
    console.log(`o app está rodando na porta ${port}`)
})

