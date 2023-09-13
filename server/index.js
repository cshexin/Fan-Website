const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json());
app.use(cors())
const db = require("./models")

//Routers
const albumRouter = require('./routes/albumsRoute');
const songRouter = require('./routes/songsRoute');
app.use("/Album", albumRouter);
app.use("/Albuminfo", albumRouter);
app.use("/songs", songRouter);


db.sequelize.sync().then(()=>{
    app.listen(3001, ()=>{
        console.log('howdy server')
    })
})