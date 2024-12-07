const express = require('express')
const app = express()
const cors = require('cors')

const path = require('path');

app.use(express.json());
app.use(cors())
const db = require("./models")
app.use('/covers/album', express.static(path.join(__dirname, '../client/src/covers/album')));


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