const express = require('express')

const app = express()

const port = process.env.PORT || 3000

app.get("/", (request,response) => {
    response.sendFile(__dirname+"/public/index.html")
})

app.listen(port, () => {
    console.log('Server is up in port 3000')
})