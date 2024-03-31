const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World! lalala')
})
app.get('/about', (req, res) => {
    console.log({urlParams: req.query});
    res.send('tentang')
})

app.post('/login', (req, res) => {
    console.log({requestFromOutside: req.body});
    res.send('login berhasil')
})

app.put('/username', (req, res)=>{
    console.log({updateData: req.body});
    res.send('update berhasil')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})