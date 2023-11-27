const express = require('express')
const app = express();
const bp = require('body-parser')
app.use(bp.json())
const cors = require('cors')
app.use(cors())


const port = 3001

let users = require("./users.json")

//node persist to do storing and saving and getting

//get
app.get('/api/users', (req, res) => {
    res.json(users)
    console.log(users)
})
//put
app.put('/api/users', (req, res) => {
    let index = users.findIndex(user=>user.id == req.body.id)
    if (index < 0 ){
        res.status(400).send()
        return;
    }
    users[index] = req.body
    res.status(200).json(req.body)
})
//post
app.post('/api/users', (req, res) => {
    let newUser = {...req.body, id:users.length + 1}
    users.push(newUser)
    res.status(201).json(newUser)
})
//delete
app.delete('/api/users/:id', (req,res) => {
    let index = users.findIndex(user=>user.id == req.params.id)
    if(index < 0){
        res.status(400).send();
        return;
    }
    users = users.filter(user=>user.id != req.params.id)
    res.status(200).send()
})

app.listen(port, () => console.log(`listenting on port ${port}`))