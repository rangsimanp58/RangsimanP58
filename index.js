const express = require('express')
const path = require('path')
const app = express()
const port = 8000

//app.use(express.static('public'))

app.use(express.static(path.join(__dirname, 'public')))
app.get('/',(req, res) => res.sendFile(path.join(__dirname,'public', 'resume.html')))

app.listen(port, () => console.log('app listening on port'+port))


