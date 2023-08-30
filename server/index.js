const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json());
app.use(cors())
const db = require("./models")

//Router
const albumRouter = require('./routes/albumsRoute')
app.use("/albums", albumRouter);

db.sequelize.sync().then(()=>{
    app.listen(3001, ()=>{
        console.log('howdy server')
    })
})

