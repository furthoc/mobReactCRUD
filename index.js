const express = require('express')
const bp = require('body-parser')

const app = express();
app.use(bp.json())
const port = 3001

let users = require("./users.json")

//node persist to do storing and saving and getting

//get
app.get('/api/users', (request, response) => {
    response.json(users)
    console.log("sent successfully")
})
//post
//put
//delete

app.listen(port, () => console.log(`listenting on port ${port}`))