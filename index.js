const express = require('express')
const bp = require('body-parser')
const cors = require('cors')

const app = express();
app.use(bp.json())
app.use(cors())
const port = 3001

let users = require("./users.json")

//node persist to do storing and saving and getting

//get
app.get('/api/users', (req, res) => {
    res.json(users)
    console.log(users)
    console.log("sent successfully")
})
//post
//put
//delete

app.listen(port, () => console.log(`listenting on port ${port}`))