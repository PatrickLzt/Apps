/*Main Application*/
/* The Application starts here */


const req = require('express/lib/request')// requirements
const res = require('express/lib/response')// responses

const express = require ('express')// Express framework init
const app = express() // Express framework access
const port = 3000

const USER = require('./models/user') //submodule users

app.use(express.json())// apply express to receive JSON format 

app.all(`/`, async (req, res) => {
    res.send(`Inital Page test`)
})

// register new user
app.get(`/register`, async (req, res)=>{
    console.log(req.body)

    await USER.create(req.body)
    .then(()=>{//sucess
        return res.json({
            msg: `User successfully registered`
        })
    }).catch(()=>{//error bad request
        return res.status(400).json({
            erro: true,
            msg: `ERROR: User not registered`
        })
    })
})

app.listen(3000, () =>{
    console.log(`Server initialized on port ${port}: http://localhost:3000`)
})