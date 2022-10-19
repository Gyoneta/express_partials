const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
const publicFolder = path.join(__dirname, 'public')
const expressPublic = express.static(publicFolder)
app.use(expressPublic)

// or app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index')

})

app.get('/about', (req,res) => {
    res.render('about')
})

console.log('olar')


 app.use((req,res) => {
    res.send('page not found')
 })


const port = process.env.port || 8080
app.listen(port, () => {
    console.log(`tá no ${port}`)
})